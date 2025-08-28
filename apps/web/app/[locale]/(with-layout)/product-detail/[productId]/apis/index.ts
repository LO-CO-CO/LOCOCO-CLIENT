import { cache } from 'react';

import { apiRequest } from 'app/api/apiRequest';

import {
  ImageReviewDetailDataList,
  ImageReviewListResponse,
  ProductDetailData,
  ProductDetailResponse,
  ReviewDeleteData,
  ReviewDeleteResponse,
  ReviewLikeData,
  ReviewLikeResponse,
  UserUploadedVideoListData,
  UserUploadedVideoListResponse,
  YoutubeListData,
  YoutubeListResponse,
} from '../types';

/**
 * 상품 상세 정보를 가져오는 API 함수
 * @param productId 상품 ID
 * @returns Promise<ProductDetailResponse>
 */
export const getProductDetail = cache(
  async (productId: number): Promise<ProductDetailData> => {
    const response = await apiRequest<ProductDetailResponse>({
      endPoint: `/api/products/details/${productId}`,
      method: 'GET',
    });

    if (!response.data) {
      throw new Error('상품 정보를 가져올 수 없습니다.');
    }

    return response.data;
  }
);

export const getYoutubeList = async (
  productId: number
): Promise<YoutubeListData> => {
  const response = await apiRequest<YoutubeListResponse>({
    endPoint: `/api/products/details/${productId}/youtube`,
    method: 'GET',
  });

  if (!response.data) {
    throw new Error('유튜브 정보를 가져올 수 없습니다.');
  }

  return response.data;
};

export const getReviewList = async (
  productId: number
): Promise<ImageReviewDetailDataList> => {
  const response = await apiRequest<ImageReviewListResponse>({
    endPoint: `/api/reviews/details/image?productId=${productId}&page=0&size=100`,
    method: 'GET',
  });

  if (!response.data) {
    throw new Error('상품 상세 정보를 가져올 수 없습니다.');
  }

  return response.data;
};

export const postReviewLike = async (
  reviewId: number
): Promise<ReviewLikeData> => {
  const response = await apiRequest<ReviewLikeResponse>({
    endPoint: `/api/likes/reviews/${reviewId}`,
    method: 'POST',
  });

  if (!response.data) {
    throw new Error('좋아요 실패');
  }

  return response.data;
};

export const deleteReview = async (
  reviewId: number
): Promise<ReviewDeleteData> => {
  const response = await apiRequest<ReviewDeleteResponse>({
    endPoint: `/api/reviews/${reviewId}`,
    method: 'DELETE',
  });

  if (!response.success) {
    throw new Error('상품 삭제 실패');
  }
  return response.data;
};

export const getUserUploadedVideoList = async (
  productId: number
): Promise<UserUploadedVideoListData> => {
  const response = await apiRequest<UserUploadedVideoListResponse>({
    endPoint: `/api/reviews/details/video?productId=${productId}`,
    method: 'GET',
  });

  if (!response.data) {
    throw new Error('유저 업로드 비디오 목록을 가져올 수 없습니다.');
  }

  return response.data;
};
