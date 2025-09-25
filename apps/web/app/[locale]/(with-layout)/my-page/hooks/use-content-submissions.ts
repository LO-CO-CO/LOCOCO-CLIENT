'use client';

import { useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

import { useTranslations } from 'next-intl';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  ApiResponseReviewMediaResponse,
  ApiResponseReviewReceiptResponse,
} from '@typescript-swagger/data-contracts';
import { apiRequest } from 'app/api/apiRequest';
import { z } from 'zod';

import {
  FILE_ERROR_MESSAGE_KEYS,
  createMultipleMediaValidator,
} from '../../../../../hooks/useFileUploader';
import { CONTENT_SUBMISSION_TEXT_ERROR_MESSAGE } from '../constant/content-submission';
import { useFetchCampaignReview } from './use-campaign-review';

export type ContentSubmissionsFormData = {
  campaign: string;
  campaignId?: number;
  contentType: string;
  campaignProductMedia: File[];
  captionAndHashtags: string;
};

export type ContentSubmissionsForm = {
  submissions: ContentSubmissionsFormData[];
};

export const useContentSubmissions = (onSuccess?: () => void) => {
  const t = useTranslations('fileUploader');
  const { data: campaignList, isPending, isError } = useFetchCampaignReview();

  const campaignCount = campaignList?.data?.length || 0;

  const contentSubmissionsSchema = z.object({
    submissions: z.array(
      z.object({
        campaign: z
          .string()
          .min(1, CONTENT_SUBMISSION_TEXT_ERROR_MESSAGE.CAMPAIGN),
        campaignId: z.number().optional(),
        contentType: z
          .string()
          .min(1, CONTENT_SUBMISSION_TEXT_ERROR_MESSAGE.CONTENT_TYPE),
        campaignProductMedia: createMultipleMediaValidator(
          t(FILE_ERROR_MESSAGE_KEYS.NOT_ALLOWED_FILE_TYPE),
          t(FILE_ERROR_MESSAGE_KEYS.EMPTY_FILE)
        ),
        captionAndHashtags: z
          .string()
          .min(1, CONTENT_SUBMISSION_TEXT_ERROR_MESSAGE.CAPTION_AND_HASHTAGS),
      })
    ),
  });

  const {
    control,
    setValue,
    reset,
    formState: { errors, isValid },
    watch,
    trigger,
    handleSubmit,
  } = useForm<ContentSubmissionsForm>({
    resolver: zodResolver(contentSubmissionsSchema),
    defaultValues: {
      submissions:
        campaignCount > 0
          ? Array.from({ length: campaignCount }, (_, index) => {
              const campaignData = campaignList?.data?.[index];
              return {
                campaign: campaignData?.title || '',
                campaignId: campaignData?.campaignId || undefined,
                contentType: '',
                campaignProductMedia: [],
                captionAndHashtags: '',
              };
            })
          : [],
    },
    mode: 'onChange',
  });

  const { fields } = useFieldArray({
    control,
    name: 'submissions',
  });

  const formData = watch();

  useEffect(() => {
    if (campaignList?.data && campaignList.data.length > 0) {
      const newSubmissions = campaignList.data.map((campaignData) => ({
        campaign: campaignData.title || '',
        campaignId: campaignData.campaignId || undefined,
        contentType: '',
        campaignProductMedia: [],
        captionAndHashtags: '',
      }));

      reset({
        submissions: newSubmissions,
      });
    }
  }, [campaignList, reset]);

  const updateCampaign = (campaignId: number, campaign: string) => {
    const index = formData.submissions.findIndex(
      (sub) => sub.campaignId === campaignId
    );
    if (index !== -1) {
      setValue(`submissions.${index}.campaign`, campaign, {
        shouldValidate: true,
      });
    }
  };

  const updateContentType = (campaignId: number, contentType: string) => {
    const index = formData.submissions.findIndex(
      (sub) => sub.campaignId === campaignId
    );
    if (index !== -1) {
      setValue(`submissions.${index}.contentType`, contentType, {
        shouldValidate: true,
      });
    }
  };

  const updateCampaignProductMedia = (
    campaignId: number,
    campaignProductMedia: File[]
  ) => {
    const index = formData.submissions.findIndex(
      (sub) => sub.campaignId === campaignId
    );
    if (index !== -1) {
      setValue(
        `submissions.${index}.campaignProductMedia`,
        campaignProductMedia,
        {
          shouldValidate: true,
        }
      );
    }
  };

  const updateCaptionAndHashtags = (
    campaignId: number,
    captionAndHashtags: string
  ) => {
    const index = formData.submissions.findIndex(
      (sub) => sub.campaignId === campaignId
    );
    if (index !== -1) {
      setValue(`submissions.${index}.captionAndHashtags`, captionAndHashtags, {
        shouldValidate: true,
      });
    }
  };

  const getFormData = (campaignId: number) => {
    const index = formData.submissions.findIndex(
      (sub) => sub.campaignId === campaignId
    );
    if (index === -1) return null;

    return {
      campaign: formData.submissions[index]?.campaign || '',
      campaignId: formData.submissions[index]?.campaignId,
      contentType: formData.submissions[index]?.contentType || '',
      campaignProductMedia:
        formData.submissions[index]?.campaignProductMedia || [],
      captionAndHashtags: formData.submissions[index]?.captionAndHashtags || '',
    };
  };

  const getErrors = (campaignId: number) => {
    const index = formData.submissions.findIndex(
      (sub) => sub.campaignId === campaignId
    );
    if (index === -1) return {};

    return {
      campaign: errors.submissions?.[index]?.campaign?.message,
      contentType: errors.submissions?.[index]?.contentType?.message,
      campaignProductMedia:
        errors.submissions?.[index]?.campaignProductMedia?.message,
      captionAndHashtags:
        errors.submissions?.[index]?.captionAndHashtags?.message,
    };
  };

  const onSubmit = async (data: ContentSubmissionsForm) => {
    try {
      await Promise.all(
        data.submissions.map(async (submission) => {
          if (!submission.campaignId) {
            throw new Error('캠페인 ID가 없습니다.');
          }

          let mediaUrls: string[] = [];

          if (submission.campaignProductMedia.length > 0) {
            const presignedUrls = await getMediaPresignedUrls(
              submission.campaignProductMedia
            );

            mediaUrls = await Promise.all(
              submission.campaignProductMedia.map(async (file, index) => {
                return await uploadMediaToPresignedUrl(
                  file,
                  presignedUrls[index] || ''
                );
              })
            );
          }

          const reviewData = {
            contentType: submission.contentType,
            mediaUrls: mediaUrls,
            captionWithHashtags: submission.captionAndHashtags,
          };

          await submitReviewApi(submission.campaignId, reviewData);
        })
      );

      onSuccess?.();
    } catch (error) {
      console.error('콘텐츠 제출 실패:', error);
      throw error;
    }
  };

  const handleSubmitAll = handleSubmit(onSubmit);

  const validateAllForms = async () => {
    return await trigger();
  };

  const isAllFormsValid = isValid;

  return {
    fields,
    isPending,
    isError,
    getFormData,
    getErrors,
    reset,
    handleSubmitAll,
    validateAllForms,
    isAllFormsValid,
    updateCampaign,
    updateContentType,
    updateCampaignProductMedia,
    updateCaptionAndHashtags,
    trigger,
  };
};

const getMediaPresignedUrls = async (file: File[]): Promise<string[]> => {
  const response = await apiRequest<ApiResponseReviewMediaResponse>({
    endPoint: '/api/reviews/media',
    method: 'POST',
    data: {
      mediaType: file.map((file) => file.type),
    },
  });

  if (!response.data?.mediaUrl) {
    throw new Error('Presigned URL 발급에 실패했습니다.');
  }

  return response.data?.mediaUrl;
};

const uploadMediaToPresignedUrl = async (
  file: File,
  presignedUrl: string
): Promise<string> => {
  const response = await fetch(presignedUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': file.type,
    },
    body: file,
  });

  if (!response.ok) {
    throw new Error('미디어 업로드에 실패했습니다.');
  }
  return response.url;
};

interface ReviewData {
  contentType: string;
  mediaUrls: string[];
  captionWithHashtags: string;
}

const submitReviewApi = async (campaignId: number, data: ReviewData) => {
  const response = await apiRequest<ApiResponseReviewReceiptResponse>({
    endPoint: `/api/campaignReviews/${campaignId}/first`,
    method: 'POST',
    data: data,
  });

  if (!response.success) {
    throw new Error('리뷰 제출에 실패했습니다.');
  }

  return response.data;
};
