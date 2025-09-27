export interface BrandRegisterRequest {
  brandName: string;
  managerName: string;
  managerPosition: string;
  phoneNumber: string;
  roadAddress: string;
  addressDetail: string;
}

export interface BrandRegisterResponse {
  success: boolean;
  status: number;
  message: string;
  data: null;
}
