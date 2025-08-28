import { apiRequest } from 'app/api/apiRequest';

import { LineLoginData, LineLoginResponse } from '../types';

export const lineLogin = async ({
  code,
  state,
}: {
  code: string;
  state: string;
}): Promise<LineLoginData> => {
  const response = await apiRequest<LineLoginResponse>({
    endPoint: `/api/auth/line/login?code=${code}&state=${state}`,
    method: 'GET',
  });

  if (!response.data) {
    throw new Error('로그인 정보를 가져올 수 없습니다.');
  }

  return response.data;
};
