import {
  ImageReviewResponse,
  VideoReviewResponse,
} from 'app/api/review-response';

import {
  useAllImageReviewDetails,
  useAllVideoReviewDetails,
} from './review-api';

interface UseReviewDetailDataProps {
  type: 'image' | 'video';
  reviews: ImageReviewResponse[] | VideoReviewResponse[];
}

export function useReviewDetailData({
  type,
  reviews,
}: UseReviewDetailDataProps) {
  const imageDetailQueries = useAllImageReviewDetails(
    type === 'image' ? (reviews as ImageReviewResponse[]) : []
  );

  const videoDetailQueries = useAllVideoReviewDetails(
    type === 'video' ? (reviews as VideoReviewResponse[]) : []
  );

  const detailQueries =
    type === 'image' ? imageDetailQueries : videoDetailQueries;

  return {
    detailQueries,
  };
}
