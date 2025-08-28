import { ApiResponse } from 'app/api/api-response';

export type LineLoginResponse = ApiResponse<LineLoginData>;

export interface LineLoginData {
  loginStatus: 'LOGIN' | 'REGISTER';
}
