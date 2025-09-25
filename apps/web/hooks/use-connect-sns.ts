import { useEffect } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from 'app/api/apiRequest';
import { CONNECT_SNS_KEYS } from 'constants/query-key';
import {
  type ApiResponseCreatorSnsConnectedResponse,
  ApiResponseVoid,
} from 'swagger-codegen/data-contracts';

const fetchConnectSns =
  async (): Promise<ApiResponseCreatorSnsConnectedResponse> => {
    const response = await apiRequest<ApiResponseCreatorSnsConnectedResponse>({
      endPoint: '/api/creator/register/sns-status',
    });

    if (!response.success) {
      throw new Error('SNS 연결 상태를 불러오는데 실패했습니다.');
    }

    return response;
  };

export const useConnectSns = () => {
  return useQuery({
    queryKey: CONNECT_SNS_KEYS.CONNECT_SNS(),
    queryFn: fetchConnectSns,
  });
};

const connectTiktokApi = async (): Promise<ApiResponseVoid> => {
  const response = await apiRequest<ApiResponseVoid>({
    endPoint: '/api/auth/sns/tiktok/connect',
  });
  window.open(response.data, '_blank');
  if (!response.success) {
    throw new Error('TikTok 연결에 실패했습니다.');
  }

  return response;
};

export const useConnectTiktok = () => {
  return useMutation({
    mutationFn: connectTiktokApi,
  });
};

// OAuth 콜백 처리 훅
export const useOAuthCallback = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();

  useEffect(() => {
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    const error = searchParams.get('error');
    const errorDescription = searchParams.get('error_description');

    // 에러가 있는 경우
    if (error) {
      console.error('OAuth 에러:', error, errorDescription);
      // 에러 페이지로 리다이렉트하거나 에러 메시지 표시
      router.replace('/my-page?tab=connect-sns&error=oauth_failed');
      return;
    }

    // code와 state가 있는 경우 (성공적인 OAuth 콜백)
    if (code && state) {
      handleOAuthCallback(code, state);
    }
  }, [searchParams, router, queryClient]);

  const handleOAuthCallback = async (code: string, state: string) => {
    try {
      // URL에서 어떤 SNS인지 확인 (state 파라미터나 다른 방법으로)
      const snsType = getSnsTypeFromState(state);

      if (snsType === 'tiktok') {
        await handleTiktokCallback(code, state);
      } else if (snsType === 'instagram') {
        await handleInstagramCallback(code, state);
      }

      // 성공 후 SNS 연결 상태 새로고침
      queryClient.invalidateQueries({
        queryKey: CONNECT_SNS_KEYS.CONNECT_SNS(),
      });

      // URL에서 OAuth 파라미터 제거하고 원래 페이지로 리다이렉트
      router.replace('/my-page?tab=connect-sns&success=true');
    } catch (error) {
      console.error('OAuth 콜백 처리 실패:', error);
      router.replace('/my-page?tab=connect-sns&error=callback_failed');
    }
  };

  const getSnsTypeFromState = (state: string): string => {
    // state 파라미터에서 SNS 타입을 추출하는 로직
    // 예: state가 "tiktok_xxx" 형태라면 "tiktok" 반환
    if (state.includes('tiktok')) return 'tiktok';
    if (state.includes('instagram')) return 'instagram';
    return 'unknown';
  };

  const handleTiktokCallback = async (code: string, state: string) => {
    const response = await apiRequest<ApiResponseVoid>({
      endPoint: '/api/auth/sns/tiktok/callback',

      params: { code, state },
    });

    if (!response.success) {
      throw new Error('TikTok 연결에 실패했습니다.');
    }

    return response;
  };

  const handleInstagramCallback = async (code: string, state: string) => {
    const response = await apiRequest<ApiResponseVoid>({
      endPoint: '/api/auth/sns/instagram/callback',

      params: { code, state },
    });

    if (!response.success) {
      throw new Error('Instagram 연결에 실패했습니다.');
    }

    return response;
  };

  return {
    isProcessingCallback: searchParams.has('code') && searchParams.has('state'),
  };
};
