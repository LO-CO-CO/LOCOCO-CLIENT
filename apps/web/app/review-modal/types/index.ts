export interface ReviewDetailBase {
  reviewId: number;
  writtenTime: string;
  receiptUploaded: boolean;
  positiveComment: string;
  negativeComment: string;
  authorName: string;
  profileImageUrl: string | null;
  rating: 'ONE' | 'TWO' | 'THREE' | 'FOUR' | 'FIVE';
  option: string;
  likeCount: number;
  brandName: string;
  productName: string;
  productImageUrl: string;
}

export interface VideoReviewDetail {
  success: boolean;
  status: number;
  message: string;
  data: ReviewDetailBase & {
    videoUrl: string;
  };
}

export interface ImageReviewDetail {
  success: boolean;
  status: number;
  message: string;
  data: ReviewDetailBase & {
    images: string[];
  };
}

export type MediaType = 'video' | 'image';

export interface MediaItem {
  id: number;
  type: MediaType;
  url: string;
}

export interface ReviewDetail extends ReviewDetailBase {
  mediaList: MediaItem[];
}
