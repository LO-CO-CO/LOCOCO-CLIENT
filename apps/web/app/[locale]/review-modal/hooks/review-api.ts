import { useState } from 'react';

import {
  useMutation,
  useQueries,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { apiRequest } from 'app/api/apiRequest';
import { REVIEW_KEYS } from 'constants/query-key';
import {
  ApiResponseImageReviewDetailResponse,
  ApiResponseMainImageReviewResponse,
  ApiResponseMainVideoReviewResponse,
  ApiResponseVideoReviewDetailResponse,
} from 'swagger-codegen/data-contracts';

export const useImageReviews = (productId?: number) => {
  return useQuery({
    queryKey: productId
      ? [...REVIEW_KEYS.IMAGE_LISTS(), 'product-detail', productId]
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
      ? [...REVIEW_KEYS.VIDEO_LISTS(), 'product-detail', productId]
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

export const useReviewLikeToggle = (
  initialIsLiked: boolean,
  initialLikeCount: number
) => {
  const [isLiked, setIsLiked] = useState<boolean>(initialIsLiked);
  const [likeCount, setLikeCount] = useState<number>(initialLikeCount);
  const queryClient = useQueryClient();

  const likeMutation = useMutation({
    mutationFn: async (reviewId: number) => {
      return apiRequest({
        endPoint: `/api/likes/reviews/${reviewId}`,
        method: 'POST',
      });
    },

    onMutate: async () => {
      const previousState = {
        isLiked,
        likeCount,
      };

      setIsLiked(!previousState.isLiked);
      setLikeCount(
        previousState.isLiked
          ? previousState.likeCount - 1
          : previousState.likeCount + 1
      );

      return previousState;
    },

    onError: (_error, _variables, context) => {
      if (!context) return;

      setIsLiked(context.isLiked);
      setLikeCount(context.likeCount);
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: REVIEW_KEYS.ALL,
      });
    },
  });
  return { likeMutation, isLiked, likeCount };
};
