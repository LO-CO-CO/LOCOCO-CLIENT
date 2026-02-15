import { keepPreviousData, queryOptions } from '@tanstack/react-query';
import { apiRequest } from 'app/api/apiRequest';
import { REVIEW_KEYS } from 'constants/query-key';
import { ApiResponseProductAndReviewCountResponse } from 'swagger-codegen/data-contracts';

interface GetProductAndReviewCountProps {
  brandName?: string;
}

export const getProductAndReviewCount = ({
  brandName,
}: GetProductAndReviewCountProps = {}) => {
  return queryOptions<ApiResponseProductAndReviewCountResponse>({
    queryKey: REVIEW_KEYS.BRAND_SUMMARY(brandName),
    queryFn: () =>
      apiRequest<ApiResponseProductAndReviewCountResponse>({
        endPoint: '/api/reviews/brands/summary',
        method: 'GET',
        params: brandName ? { brandName } : undefined,
      }),
    placeholderData: keepPreviousData,
  });
};
