import { apiRequest } from 'app/api/apiRequest';
import {
  ApiResponseMainImageReviewResponse,
  ApiResponseMainVideoReviewResponse,
  MainImageReviewResponse,
} from 'swagger-codegen/data-contracts';

export const getVideoReviews = async () => {
  try {
    const reviewVideoResponse =
      await apiRequest<ApiResponseMainVideoReviewResponse>({
        endPoint: '/api/reviews/video',
      });
    return reviewVideoResponse;
  } catch {
    return null;
  }
};
export const getImageReviews = async () => {
  try {
    const reviewImageResponse =
      await apiRequest<ApiResponseMainImageReviewResponse>({
        endPoint: '/api/reviews/image',
      });
    return reviewImageResponse;
  } catch {
    return null;
  }
};

export const emptyReviewData: MainImageReviewResponse = {
  imageReviews: Array.from({ length: 4 }, (_, index) => ({
    reviewId: -(index + 1), // 음수로 구분
    brandName: '데이터 준비중',
    productName: '리뷰 정보를 불러오는 중입니다',
    likeCount: 0,
    productId: 0,
    rank: 0, // 랭킹 없음
    reviewImage: '', // 빈 이미지
  })),
};
