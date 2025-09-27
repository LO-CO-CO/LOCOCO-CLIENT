import { apiRequest } from '../../../../../api/apiRequest';
import {
  type BrandRegisterRequest,
  type BrandRegisterResponse,
} from '../types/brand-form';

export const registerBrandInfo = async (
  data: BrandRegisterRequest
): Promise<BrandRegisterResponse> => {
  return apiRequest<BrandRegisterResponse>({
    endPoint: '/api/brands/register/info',
    method: 'PATCH',
    data,
  });
};
