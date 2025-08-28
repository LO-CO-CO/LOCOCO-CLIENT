import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from 'app/api/apiRequest';
import {
  ApiResponseReviewResponse,
  ReviewRequest,
} from 'swagger-codegen/data-contracts';

import { PRODUCT_DETAIL_QUERY_KEYS } from '../../../queries';

export const usePostReview = (onSuccess?: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      productId,
      review,
    }: {
      productId: number;
      review: ReviewRequest;
    }) => {
      return apiRequest<ApiResponseReviewResponse>({
        endPoint: `/api/reviews/${productId}`,
        method: 'POST',
        data: review,
      });
    },

    onSuccess: (_, variables) => {
      if (onSuccess) onSuccess();
      queryClient.invalidateQueries({
        queryKey: PRODUCT_DETAIL_QUERY_KEYS.REVIEW_LIST(variables.productId),
      });

      queryClient.invalidateQueries({
        queryKey: PRODUCT_DETAIL_QUERY_KEYS.USER_VIDEO_REVIEW_LIST(
          variables.productId
        ),
      });
    },

    onError: (error) => {
      console.error('리뷰 작성 실패:', error);
    },
  });
};
