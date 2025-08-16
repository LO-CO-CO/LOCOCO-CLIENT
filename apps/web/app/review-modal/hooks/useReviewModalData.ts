import { useParams, useSearchParams } from 'next/navigation';

import { useQueryClient } from '@tanstack/react-query';
import { ApiResponse } from 'app/api/api-response';
import {
  ApiReviewItem,
  ApiReviewSearchResponse,
  ImageReviewResponse,
  VideoReviewResponse,
} from 'app/api/review-response';
import { REVIEW_KEYS } from 'constants/query-key';
import dayjs from 'dayjs';
import {
  ApiResponseImageReviewDetailResponse,
  ApiResponseVideoReviewDetailResponse,
  ImageReviewDetailResponse,
  VideoReviewDetailResponse,
} from 'swagger-codegen/data-contracts';
import { CategoryNameEng, CategoryOptionEng } from 'types/category';
import { isValidCategoryKey, isValidCategoryOption } from 'utils/category';

import { ReviewDetail } from '../types';
import {
  useAllImageReviewDetails,
  useAllVideoReviewDetails,
  useImageReviews,
  useVideoReviews,
} from './review-api';

interface UseReviewModalDataProps {
  source: 'home' | 'detail' | 'search';
  type: 'image' | 'video';
  productId?: number;
}

export function useReviewModalData({
  source,
  type,
  productId,
}: UseReviewModalDataProps) {
  const { reviewId: reviewIdParam } = useParams() as { reviewId: string };
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();

  const currentReviewId = Number(reviewIdParam);
  const currentProductId =
    productId || Number(searchParams.get('productId')) || 0;
  const keyword = searchParams.get('keyword');
  const middleCategory = searchParams.get('middleCategory');
  const subCategory = searchParams.get('subCategory');

  const validMiddleCategory: CategoryNameEng | '' = isValidCategoryKey(
    middleCategory || ''
  )
    ? (middleCategory as CategoryNameEng)
    : '';
  const validSubCategory: CategoryOptionEng | '' =
    validMiddleCategory &&
    isValidCategoryOption(subCategory || '', validMiddleCategory)
      ? (subCategory as CategoryOptionEng)
      : '';

  const {
    data: imageReviewsListResponse,
    isLoading: isImageListLoading,
    error: imageListError,
  } = useImageReviews(
    type === 'image' ? currentProductId || undefined : undefined
  );

  const {
    data: videoReviewsListResponse,
    isLoading: isVideoListLoading,
    error: videoListError,
  } = useVideoReviews(
    type === 'video' ? currentProductId || undefined : undefined
  );

  let searchReviewData:
    | ImageReviewResponse[]
    | VideoReviewResponse[]
    | ApiReviewItem[] = [];

  if (source === 'search') {
    if (keyword) {
      const searchCacheData = queryClient.getQueryData<
        ApiResponse<ApiReviewSearchResponse>
      >([
        ...REVIEW_KEYS[type === 'image' ? 'IMAGE_LIST' : 'VIDEO_LIST']({
          page: 0,
          size: 8,
        }),
        'search',
        keyword,
      ]);
      searchReviewData = searchCacheData?.data?.reviews || [];
    } else if (validMiddleCategory) {
      const categoryCacheData = queryClient.getQueryData<
        ApiResponse<ApiReviewSearchResponse>
      >([
        ...REVIEW_KEYS[type === 'image' ? 'IMAGE_LIST' : 'VIDEO_LIST']({
          page: 0,
          size: 8,
        }),
        'category',
        validMiddleCategory,
        validSubCategory,
        type === 'image' ? 'IMAGE' : 'VIDEO',
      ]);
      searchReviewData = categoryCacheData?.data?.reviews || [];
    }
  }

  let reviews: ImageReviewResponse[] | VideoReviewResponse[] | ApiReviewItem[] =
    [];

  if (source === 'home') {
    reviews =
      type === 'image'
        ? imageReviewsListResponse?.data?.imageReviews || []
        : videoReviewsListResponse?.data?.videoReviews || [];
  } else if (source === 'search') {
    reviews = searchReviewData;
  } else {
    reviews =
      type === 'image'
        ? imageReviewsListResponse?.data?.imageReviews || []
        : videoReviewsListResponse?.data?.videoReviews || [];
  }

  // 모든 상세 정보 가져오기
  const imageDetailQueries = useAllImageReviewDetails(
    type === 'image' ? (reviews as ImageReviewResponse[]) : []
  );
  const videoDetailQueries = useAllVideoReviewDetails(
    type === 'video' ? (reviews as VideoReviewResponse[]) : []
  );

  const detailQueries =
    type === 'image' ? imageDetailQueries : videoDetailQueries;
  const isListLoading =
    type === 'image' ? isImageListLoading : isVideoListLoading;
  const listError = type === 'image' ? imageListError : videoListError;

  // 현재 리뷰의 인덱스 찾기
  const currentIndex = reviews.findIndex(
    (review) => review.reviewId === currentReviewId
  );

  // 상세 정보를 ID로 매핑
  const detailMap = new Map<
    number,
    ImageReviewDetailResponse | VideoReviewDetailResponse
  >();
  reviews.forEach((review, index) => {
    const dq = detailQueries[index];
    if (dq?.isSuccess && dq.data) {
      const response =
        type === 'image'
          ? (dq.data as ApiResponseImageReviewDetailResponse)
          : (dq.data as ApiResponseVideoReviewDetailResponse);
      if (response.data) {
        detailMap.set(review.reviewId, response.data);
      }
    }
  });

  // 슬라이더에 넘길 리뷰 데이터 구성
  const allReviews: ReviewDetail[] = reviews
    .filter((review) => {
      const detail = detailMap.get(review.reviewId);
      if (type === 'image') {
        return (
          !!detail && (detail as ImageReviewDetailResponse).images.length > 0
        );
      } else {
        return (
          !!detail && (detail as VideoReviewDetailResponse).videoUrls.length > 0
        );
      }
    })
    .map((review) => {
      const detail = detailMap.get(review.reviewId)!;

      if (type === 'image') {
        const imageDetail = detail as ImageReviewDetailResponse;
        return {
          reviewId: imageDetail.reviewId,
          productId: imageDetail.productId,
          writtenTime: dayjs(imageDetail.writtenTime).format('YYYY年MM月DD日'),
          receiptUploaded: imageDetail.receiptUploaded,
          positiveComment: imageDetail.positiveComment,
          negativeComment: imageDetail.negativeComment,
          authorName: imageDetail.authorName,
          profileImageUrl: imageDetail.profileImageUrl ?? null,
          rating: imageDetail.rating,
          option: imageDetail.option || '',
          likeCount: imageDetail.likeCount,
          isLiked: imageDetail.isLiked,
          brandName: imageDetail.brandName,
          productName: imageDetail.productName,
          productImageUrl: imageDetail.productImageUrl,
          mediaList: imageDetail.images.map((url, index) => ({
            id: index,
            type: 'image' as const,
            url,
          })),
        };
      } else {
        const videoDetail = detail as VideoReviewDetailResponse;
        return {
          reviewId: videoDetail.reviewId,
          productId: videoDetail.productId,
          writtenTime: dayjs(videoDetail.uploadAt).format('YYYY年MM月DD日'),
          receiptUploaded: !!videoDetail.receiptImageUrl,
          positiveComment: videoDetail.positiveContent,
          negativeComment: videoDetail.negativeContent,
          authorName: videoDetail.authorName,
          profileImageUrl: videoDetail.profileImageUrl ?? null,
          rating: videoDetail.rating,
          option: videoDetail.option || '',
          likeCount: videoDetail.likeCount,
          isLiked: videoDetail.isLiked,
          brandName: videoDetail.brandName,
          productName: videoDetail.productName,
          productImageUrl: videoDetail.productImageUrl,
          mediaList: videoDetail.videoUrls.map((url, index) => ({
            id: index,
            type: 'video' as const,
            url,
          })),
        };
      }
    });

  return {
    currentReviewId,
    currentIndex,
    allReviews,
    isListLoading,
    listError,
    detailQueries,
    reviews,
  };
}
