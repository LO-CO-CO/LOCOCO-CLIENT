'use client';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { REVIEW_TEXT, REVIEW_TEXT_ERROR_MESSAGE } from 'constants/review';
import { ReviewRequest } from 'swagger-codegen/data-contracts';
import { z } from 'zod';

import {
  getMediaPresignedUrl,
  getReceiptPresignedUrl,
  uploadFiles,
} from './presignedUrlApi';
import { usePostReview } from './reviewApi';
import {
  ALLOWED_IMAGE_TYPES,
  createFileTypeValidator,
  mediaFilesValidator,
} from './useFileUploader';

const textCommentSchema = z
  .string()
  .min(
    REVIEW_TEXT.MIN_LENGTH,
    REVIEW_TEXT_ERROR_MESSAGE.MIN(REVIEW_TEXT.MIN_LENGTH)
  )
  .max(
    REVIEW_TEXT.MAX_LENGTH,
    REVIEW_TEXT_ERROR_MESSAGE.MAX(REVIEW_TEXT.MAX_LENGTH)
  );
const reviewSchema = z.object({
  productOptionId: z.number().optional(),
  rating: z.number().min(1, 'rating is required').max(5),
  positiveComment: textCommentSchema,
  negativeComment: textCommentSchema,
  mediaFiles: mediaFilesValidator.optional(),
  receiptFile: createFileTypeValidator(ALLOWED_IMAGE_TYPES).optional(),
});

type ReviewFormData = z.infer<typeof reviewSchema>;

export const useReviewInput = (productId?: number, onSuccess?: () => void) => {
  const postReviewMutation = usePostReview(onSuccess);

  const {
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isValid },
    watch,
  } = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      productOptionId: undefined,
      rating: 0,
      positiveComment: '',
      negativeComment: '',
      mediaFiles: undefined,
      receiptFile: undefined,
    },
    mode: 'onChange',
  });

  const formData = watch();

  const updateProductOption = (optionId: number) => {
    setValue('productOptionId', optionId, { shouldValidate: true });
  };

  const updateRating = (rating: number) => {
    setValue('rating', rating, { shouldValidate: true });
  };

  const updatePositiveComment = (comment: string) => {
    setValue('positiveComment', comment, { shouldValidate: true });
  };

  const updateNegativeComment = (comment: string) => {
    setValue('negativeComment', comment, { shouldValidate: true });
  };

  const updateMediaFiles = (files: File[]) => {
    setValue('mediaFiles', files, { shouldValidate: true });
  };

  const updateReceiptFile = (file: File | undefined) => {
    if (!file) {
      setValue('receiptFile', undefined);
      return;
    }
    setValue('receiptFile', file, { shouldValidate: true });
  };

  const parsePresignedUrl = (rawPresignedUrl: string) => {
    return rawPresignedUrl.split('?')[0] || '';
  };

  const onSubmit = async (formData: ReviewFormData) => {
    try {
      // 1. 미디어 파일 presigned URL 요청
      let mediaUrls: string[] = [];
      if (formData.mediaFiles && formData.mediaFiles.length > 0) {
        const mediaTypes = formData.mediaFiles.map((file) => file.type);
        const mediaResponse = await getMediaPresignedUrl({
          mediaType: mediaTypes,
        });
        mediaUrls = mediaResponse.data?.mediaUrl || [];
      }

      // 2. 영수증 파일 presigned URL 요청
      let receiptUrls: string[] = [];
      if (formData.receiptFile) {
        const receiptResponse = await getReceiptPresignedUrl({
          mediaType: formData.receiptFile.type,
        });
        receiptUrls = receiptResponse.data?.receiptUrl || [];
      }

      // 3. Presigned URL로 파일 업로드
      if (mediaUrls.length > 0 && formData.mediaFiles) {
        await uploadFiles(mediaUrls, formData.mediaFiles, '미디어');
      }

      if (receiptUrls.length > 0 && formData.receiptFile) {
        await uploadFiles(receiptUrls, [formData.receiptFile], '영수증');
      }

      // 4. 리뷰 제출
      const reviewRequest: ReviewRequest = {
        productOptionId: formData.productOptionId,
        rating: formData.rating,
        positiveComment: formData.positiveComment,
        negativeComment: formData.negativeComment,
        mediaUrl: mediaUrls,
        //TODO: 영수증 파일 여러개 업로드 시 처리 필요
        receiptUrl: receiptUrls[0]
          ? [parsePresignedUrl(receiptUrls[0])]
          : undefined,
      };

      if (productId) {
        postReviewMutation.mutate({
          productId,
          review: reviewRequest,
        });
      }
    } catch (error) {
      console.error('리뷰 작성 실패:', error);
    }
  };

  const compatibleFormData = {
    productOptionId: formData.productOptionId,
    rating: formData.rating,
    positiveComment: formData.positiveComment,
    negativeComment: formData.negativeComment,
    mediaFiles: formData.mediaFiles || [],
    receiptFile: formData.receiptFile,
  };

  const compatibleErrors = {
    productOptionId: errors.productOptionId?.message,
    rating: errors.rating?.message,
    positiveComment: errors.positiveComment?.message,
    negativeComment: errors.negativeComment?.message,
    mediaFiles: errors.mediaFiles?.message,
    receiptFile: errors.receiptFile?.message,
  };

  return {
    formData: compatibleFormData,
    errors: compatibleErrors,
    reset,
    updateProductOption,
    updateRating,
    updatePositiveComment,
    updateNegativeComment,
    updateMediaFiles,
    updateReceiptFile,
    handleSubmit: () => handleSubmit(onSubmit)(),
    isFormValid: isValid,
  };
};
