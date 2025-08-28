import {
  ImageReviewResponse,
  VideoReviewResponse,
} from 'app/api/review-response';

import { useReviewDataTransformer } from './useReviewDataTransformer';
import { useReviewDetailData } from './useReviewDetailData';
import { useReviewListData } from './useReviewListData';
import { useReviewModalParams } from './useReviewModalParams';

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
  const {
    currentReviewId,
    currentProductId,
    keyword,
    validMiddleCategory,
    validSubCategory,
  } = useReviewModalParams({ productId });

  const {
    reviews,
    isImageListLoading,
    isVideoListLoading,
    imageListError,
    videoListError,
  } = useReviewListData({
    source,
    type,
    currentProductId,
    keyword,
    validMiddleCategory,
    validSubCategory,
  });

  const { detailQueries } = useReviewDetailData({
    type,
    reviews: reviews as ImageReviewResponse[] | VideoReviewResponse[],
  });

  const { findCurrentIndex, createDetailMap, transformToAllReviews } =
    useReviewDataTransformer({
      type,
      reviews,
      detailQueries,
    });

  const currentIndex = findCurrentIndex(currentReviewId);

  const detailMap = createDetailMap();

  const allReviews = transformToAllReviews(detailMap);

  const isListLoading =
    type === 'image' ? isImageListLoading : isVideoListLoading;
  const listError = type === 'image' ? imageListError : videoListError;

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
