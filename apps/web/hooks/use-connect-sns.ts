import { useEffect } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from 'app/api/apiRequest';
import { CONNECT_SNS_KEYS } from 'constants/query-key';
import {
  type ApiResponseCreatorSnsConnectedResponse,
  ApiResponseVoid,
} from 'swagger-codegen/data-contracts';

import { useAuth } from './use-auth';

// 클라이언트에서 액세스 토큰 가져오는 유틸리티 함수
const getClientAccessToken = (): string | null => {
  if (typeof window === 'undefined') return null;

  const cookies = document.cookie.split('; ');
  const tokenCookie = cookies.find((row) => row.startsWith('AccessToken='));
  return tokenCookie?.split('=')[1] || null;
};

const fetchConnectSns =
  async (): Promise<ApiResponseCreatorSnsConnectedResponse> => {
    // 클라이언트에서 액세스 토큰 가져오기
    const accessToken = getClientAccessToken();

    const response = await apiRequest<ApiResponseCreatorSnsConnectedResponse>({
      endPoint: '/api/creator/register/sns-status',
      headers: accessToken
        ? {
            Authorization: `Bearer ${accessToken}`,
          }
        : {},
    });

    if (!response.success) {
      throw new Error('SNS 연결 상태를 불러오는데 실패했습니다.');
    }

    return response;
  };

export const useConnectSns = () => {
  const { isLoggedIn } = useAuth();

  return useQuery({
    queryKey: CONNECT_SNS_KEYS.CONNECT_SNS(),
    queryFn: fetchConnectSns,
    enabled: isLoggedIn === true, // 로그인된 사용자에게만 API 호출
  });
};

const connectTiktokApi = async (): Promise<ApiResponseVoid> => {
  const currentPath = window.location.pathname;
  sessionStorage.setItem('oauth_return_path', currentPath);

  const connectUrl = new URL(
    `${window.location.protocol}//${window.location.host}/api/auth/sns/tiktok/connect`
  );
  connectUrl.searchParams.set('return_to', currentPath);

  window.location.href = connectUrl.toString();

  return new Promise(() => {});
};

export const useConnectTiktok = () => {
  return useMutation({
    mutationFn: connectTiktokApi,
  });
};

const connectInstagramApi = async (): Promise<ApiResponseVoid> => {
  const currentPath = window.location.pathname;
  sessionStorage.setItem('oauth_return_path', currentPath);

  const connectUrl = `${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/auth/sns/instagram/connect`;
  window.location.href = connectUrl;

  return new Promise(() => {});
};

export const useConnectInstagram = () => {
  return useMutation({
    mutationFn: connectInstagramApi,
  });
};

export const useOAuthCallback = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();

  useEffect(() => {
    const success = searchParams.get('success');
    const error = searchParams.get('error');

    // 저장된 원래 페이지 경로 가져오기
    const returnPath = sessionStorage.getItem('oauth_return_path');

    if (success) {
      queryClient.invalidateQueries({
        queryKey: CONNECT_SNS_KEYS.CONNECT_SNS(),
      });

      // 성공 후 URL 파라미터 정리
      const url = new URL(window.location.href);
      url.searchParams.delete('success');
      window.history.replaceState({}, '', url.toString());
      return;
    }

    if (error) {
      // 에러 시에는 원래 페이지로 돌아가되 에러 파라미터 추가
      const errorPath = returnPath || '/sign-up/creator/sns-links';
      router.replace(
        `${errorPath}${errorPath.includes('?') ? '&' : '?'}error=oauth_failed`
      );
      return;
    }

    // URL 파라미터 정리 및 원래 페이지로 리다이렉트
    // returnPath가 있으면 해당 경로로, 없으면 현재 경로 유지
    const finalPath = returnPath || window.location.pathname;

    // 세션 스토리지에서 원래 페이지 정보 제거
    sessionStorage.removeItem('oauth_return_path');

    // 현재 페이지와 다른 경우에만 리다이렉트
    if (finalPath !== window.location.pathname) {
      router.replace(finalPath);
    }
  }, [searchParams, router, queryClient]);

  return {
    isProcessingCallback:
      searchParams.has('success') || searchParams.has('error'),
  };
};
