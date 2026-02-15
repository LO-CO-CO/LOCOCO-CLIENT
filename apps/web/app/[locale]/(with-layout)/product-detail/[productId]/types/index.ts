export interface APIResponse<T> {
  data: T;
  message: string;
  status: number;
  success: boolean;
}

export type ProductDetailResponse = APIResponse<ProductDetailData>;
export interface ProductDetailData {
  /** @format int64 */
  productId: number;
  imageUrls: string[];
  productOptions: ProductOptionData[];
  productName: string;
  brandName: string;
  unit: string;
  /** @format int64 */
  reviewCount: number;
  /** @format double */
  rating: number;
  starPercent: ScorePercentData[];
  isLiked: boolean;
  /** @format int64 */
  normalPrice: number;
  productDetail: string;
  ingredients: string;
  oliveYoungUrl: string;
  q10Url: string;
  middleCategory: 'FACIAL_CARE' | 'FACE_MAKEUP' | 'EYE_MAKEUP' | 'LIP_MAKEUP';
  subCategory:
    | 'TONER'
    | 'MOISTURIZER'
    | 'ESSENCE_SERUM'
    | 'CREAM'
    | 'FOUNDATION'
    | 'POWDER_COMPACT'
    | 'CONCEALER'
    | 'BLUSHER'
    | 'EYEBROW'
    | 'EYESHADOW'
    | 'EYELINER'
    | 'LIPSTICK'
    | 'LIP_TINT';
}

export interface ProductOptionData {
  /** @format int64 */
  id: number;
  optionName: string;
}

export interface ScorePercentData {
  /** @format int32 */
  score: number;
  /** @format double */
  percent: number;
}

export type YoutubeListResponse = APIResponse<YoutubeListData>;

export interface YoutubeListData {
  youtubeUrls: string[];
}

export type ImageReviewListResponse = APIResponse<ImageReviewDetailDataList>;
export interface ImageReviewDetailDataList {
  /** @format int64 */
  imageReviews: ImageReviewDetailData[];
  isAdmin: boolean;
}

export interface ImageReviewDetailData {
  reviewId: number;
  /** @format date-time */
  writtenTime: string;
  receiptUploaded: boolean;
  positiveComment: string;
  negativeComment: string;
  authorName: string;
  profileImageUrl: string;
  rating: string;
  option: string;
  /** @format int64 */
  likeCount: number;
  images?: string[];
  brandName: string;
  productName: string;
  isMine: boolean;
  isLiked: boolean;
  country?: string | null;
  authorId: number;
  isAdmin: boolean;
}

export type ReviewLikeResponse = APIResponse<ReviewLikeData>;
export interface ReviewLikeData {
  likeCount: number;
}

export type ReviewDeleteResponse = APIResponse<ReviewDeleteData>;

export interface ReviewDeleteData {
  reviewId: number;
}

export type UserUploadedVideoListResponse =
  APIResponse<UserUploadedVideoListData>;

export interface UserUploadedVideoListData {
  videoReviews: UserUploadedVideoData[];
}
export interface UserUploadedVideoData {
  reviewId: number;
  brandName: string;
  productName: string;
  likeCount: number;
  videoUrl: string;
}
