import { useQueryClient } from '@tanstack/react-query';
import { ApiResponse } from 'app/api/api-response';
import {
  ApiReviewItem,
  ApiReviewSearchResponse,
  ImageReviewResponse,
  VideoReviewResponse,
} from 'app/api/review-response';
import { REVIEW_KEYS } from 'constants/query-key';
import { CategoryNameEng, CategoryOptionEng } from 'types/category';

import { useImageReviews, useVideoReviews } from './review-api';

interface UseReviewListDataProps {
  source: 'home' | 'detail' | 'search';
  type: 'image' | 'video';
  currentProductId: number;
  keyword: string | null;
  validMiddleCategory: CategoryNameEng | '';
  validSubCategory: CategoryOptionEng | '';
}

export function useReviewListData({
  source,
  type,
  currentProductId,
  keyword,
  validMiddleCategory,
  validSubCategory,
}: UseReviewListDataProps) {
  const queryClient = useQueryClient();

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

  return {
    reviews,
    isImageListLoading,
    isVideoListLoading,
    imageListError,
    videoListError,
  };
}
