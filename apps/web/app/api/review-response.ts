//TODO: 해당 파일 지우기
// 기존 인터페이스 (컴포넌트에서 사용)
export interface VideoReviewResponse {
  reviewId: number;
  brandName: string;
  productName: string;
  likeCount: number;
  isLiked?: boolean;
  url: string;
}

export interface ImageReviewResponse {
  reviewId: number;
  brandName: string;
  productName: string;
  likeCount: number;
  isLiked?: boolean;
  url: string;
}

// API 응답 인터페이스
export interface ApiReviewSearchResponse {
  reviews: ApiReviewItem[];
  pageInfo?: {
    pageNumber: number;
    pageSize: number;
    numberOfElements: number;
    isLast: boolean;
  };
}

export interface ApiReviewItem {
  reviewId: number;
  brandName: string;
  productName: string;
  likeCount: number;
  isLiked?: boolean;
  url?: string;
  videoUrl?: string;
  images?: string[];
}
