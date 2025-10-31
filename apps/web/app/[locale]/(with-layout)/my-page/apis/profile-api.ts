'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from 'app/api/apiRequest';

import { type ApiResponseCreatorMyPageResponse } from '../../../../../swagger-codegen/data-contracts';
import { type CreatorSignupForm } from '../../sign-up/creator/utils/signup';
import { PROFILE_KEYS } from '../constant/queryKey';

export const useProfile = () => {
  const fetchProfile = async (): Promise<ApiResponseCreatorMyPageResponse> => {
    const response = await apiRequest<ApiResponseCreatorMyPageResponse>({
      endPoint: '/api/creator/profile',
    });

    if (!response.success) {
      throw new Error('프로필 데이터를 불러오는데 실패했습니다.');
    }
    return response;
  };
  return useQuery({
    queryKey: PROFILE_KEYS.profile(),
    queryFn: fetchProfile,
  });
};

// 프로필 업데이트
export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  const updateProfileApi = async (
    formData: CreatorSignupForm,
    profileImageUrl?: string | null
  ): Promise<ApiResponseCreatorMyPageResponse> => {
    const response = await apiRequest<ApiResponseCreatorMyPageResponse>({
      endPoint: '/api/creator/profile',
      method: 'PATCH',
      data: {
        ...formData,
        profileImageUrl,
      },
    });

    if (!response.success) {
      throw new Error('프로필 업데이트에 실패했습니다.');
    }
    return response;
  };

  return useMutation({
    mutationFn: ({
      formData,
      profileImageUrl,
    }: {
      formData: CreatorSignupForm;
      profileImageUrl?: string | null;
    }) => updateProfileApi(formData, profileImageUrl),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PROFILE_KEYS.profile() });
    },
  });
};

export const usePresignedUrl = ({ file }: { file: File }) => {
  const putPresignedUrlApi = async ({
    presignedUrl,
  }: {
    presignedUrl: string;
  }): Promise<string> => {
    const response = await fetch(presignedUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': file.type,
      },
      body: file,
    });

    if (!response.ok) {
      throw new Error('이미지 업로드에 실패했습니다.');
    }
    const url = new URL(presignedUrl);
    return `${url.protocol}//${url.host}${url.pathname}`;
  };
  type ApiResponseCreatorProfileImageResponse = {
    data: {
      profileImageUrl: string;
    };
  };

  const presignedUrlApi = async (): Promise<string> => {
    const response = await apiRequest<ApiResponseCreatorProfileImageResponse>({
      endPoint: '/api/creator/profile/image',
      method: 'POST',
      data: {
        mediaType: file.type,
      },
    });
    if (response && response.data?.profileImageUrl) {
      const url = await putPresignedUrlApi({
        presignedUrl: response.data.profileImageUrl,
      });
      return url;
    }
    throw new Error('Presigned URL 발급에 실패했습니다.');
  };
  return useMutation({
    mutationFn: presignedUrlApi,
  });
};
