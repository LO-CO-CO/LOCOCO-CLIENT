import { type BrandRegisterRequest } from '../types/brand-form';
import { type BrandSignupForm } from './signup';

export const transformFormToApi = (
  formData: BrandSignupForm
): BrandRegisterRequest => {
  return {
    brandName: formData.brandName,
    managerName: formData.contactName,
    managerPosition: formData.contactPosition,
    phoneNumber: formData.contactPhone,
    roadAddress: formData.street,
    addressDetail: formData.detail,
  };
};
