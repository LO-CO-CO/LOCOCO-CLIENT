import { queryOptions } from '@tanstack/react-query';
import { ApiResponseProductBrandNameListResponse } from '@typescript-swagger/data-contracts';
import { apiRequest } from 'app/api/apiRequest';
import { REVIEW_KEYS } from 'constants/query-key';

export const getProductBrand = (startsWith?: string) => {
  const params = startsWith ? { startsWith } : undefined;
  return queryOptions<ApiResponseProductBrandNameListResponse>({
    queryKey: REVIEW_KEYS.BRAND_LIST(startsWith),
    queryFn: () =>
      apiRequest<ApiResponseProductBrandNameListResponse>({
        endPoint: '/api/product-brand',
        method: 'GET',
        params,
      }),
  });
};
