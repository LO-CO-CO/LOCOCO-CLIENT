import {
  useQuery,
  useMutation,
  useQueryClient,
  useQueries,
} from '@tanstack/react-query';
import { apiRequest } from 'app/api/apiRequest';
import {
  ApiResponseImageReviewDetailResponse,
  ApiResponseMainImageReviewResponse,
  ApiResponseMainVideoReviewResponse,
  ApiResponseVideoReviewDetailResponse,
} from '../../../api/data-contracts';
import { REVIEW_KEYS } from '../../../constants/query-key';

export const useImageReviews = (productId?: number) => {
  return useQuery({
    queryKey: productId
      ? REVIEW_KEYS.IMAGE_DETAIL(productId)
      : REVIEW_KEYS.IMAGE_LISTS(),
    queryFn: async (): Promise<ApiResponseMainImageReviewResponse> => {
      if (productId) {
        return apiRequest({
          endPoint: `/api/reviews/details/image`,
          method: 'GET',
          params: {
            productId: productId.toString(),
          },
        });
      }
      return apiRequest({
        endPoint: '/api/reviews/image',
        method: 'GET',
      });
    },
  });
};

export const useAllImageReviewDetails = (
  reviews: { reviewId: number }[] | undefined
) => {
  return useQueries({
    queries: (reviews || []).map((review) => ({
      queryKey: REVIEW_KEYS.IMAGE_DETAIL(review.reviewId),
      queryFn: async (): Promise<ApiResponseImageReviewDetailResponse> => {
        return apiRequest({
          endPoint: `/api/reviews/details/${review.reviewId}/image`,
          method: 'GET',
        });
      },
      enabled: !!reviews && reviews.length > 0,
    })),
  });
};

export const useVideoReviews = (productId?: number) => {
  return useQuery({
    queryKey: productId
      ? REVIEW_KEYS.VIDEO_DETAIL(productId)
      : REVIEW_KEYS.VIDEO_LISTS(),
    queryFn: async (): Promise<ApiResponseMainVideoReviewResponse> => {
      if (productId) {
        return apiRequest({
          endPoint: `/api/reviews/details/video`,
          method: 'GET',
          params: {
            productId: productId.toString(),
          },
        });
      }
      return apiRequest({
        endPoint: '/api/reviews/video',
        method: 'GET',
      });
    },
  });
};

export const useAllVideoReviewDetails = (
  reviews: { reviewId: number }[] | undefined
) => {
  return useQueries({
    queries: (reviews || []).map((review) => ({
      queryKey: REVIEW_KEYS.VIDEO_DETAIL(review.reviewId),
      queryFn: async (): Promise<ApiResponseVideoReviewDetailResponse> => {
        return apiRequest({
          endPoint: `/api/reviews/details/${review.reviewId}/video`,
          method: 'GET',
        });
      },
      enabled: !!reviews && reviews.length > 0,
    })),
  });
};

export const useReviewLikeToggle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (reviewId: number) => {
      return apiRequest({
        endPoint: `/api/likes/reviews/${reviewId}`,
        method: 'POST',
      });
    },
    onSuccess: (_, reviewId) => {
      if (typeof reviewId === 'number') {
        queryClient.invalidateQueries({
          queryKey: REVIEW_KEYS.IMAGE_DETAIL(reviewId),
        });
        queryClient.invalidateQueries({
          queryKey: REVIEW_KEYS.VIDEO_DETAIL(reviewId),
        });
      }
    },
  });
};
