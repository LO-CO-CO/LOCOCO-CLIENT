/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ReviewRequest {
  /** @format int64 */
  productOptionId?: number;
  /** @format int32 */
  rating: number;
  /**
   * @minLength 15
   * @maxLength 1500
   */
  positiveComment: string;
  /**
   * @minLength 15
   * @maxLength 1500
   */
  negativeComment: string;
  mediaUrl?: string[];
  receiptUrl?: string[];
}

export interface ApiResponseReviewResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: ReviewResponse;
}

export interface ReviewResponse {
  /** @format int64 */
  reviewId: number;
}

export interface ReviewReceiptRequest {
  mediaType: string;
}

export interface ApiResponseReviewReceiptResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: ReviewReceiptResponse;
}

export interface ReviewReceiptResponse {
  receiptUrl: string[];
}

export interface ReviewMediaRequest {
  mediaType: string[];
}

export interface ApiResponseReviewMediaResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: ReviewMediaResponse;
}

export interface ReviewMediaResponse {
  mediaUrl: string[];
}

export interface ApiResponseString {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: string;
}

export interface ApiResponseReviewLikeResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: ReviewLikeResponse;
}

export interface ReviewLikeResponse {
  /** @format int64 */
  likeCount: number;
}

export interface ApiResponseToggleLikeResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: ToggleLikeResponse;
}

export interface ToggleLikeResponse {
  isLiked: boolean;
}

export interface ApiResponseVoid {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: any;
}

export interface TestLoginRequest {
  /** @format int64 */
  userId: number;
}

export interface ApiResponseJwtLoginResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: JwtLoginResponse;
}

export interface JwtLoginResponse {
  accessToken?: string;
  refreshToken?: string;
}

export interface ApiResponseListTrendsYoutubeResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: TrendsYoutubeResponse[];
}

export interface TrendsYoutubeResponse {
  /** @format int64 */
  id: number;
  topic: string;
  title: string;
  url: string;
  /** @format int32 */
  popularity: number;
  /** @format int64 */
  viewCount: number;
  /** @format date-time */
  uploadedAt: string;
}

export interface ApiResponseMainVideoReviewResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: MainVideoReviewResponse;
}

export interface MainVideoReview {
  /** @format int64 */
  reviewId: number;
  /** @format int64 */
  productId: number;
  brandName: string;
  productName: string;
  /** @format int32 */
  likeCount: number;
  /** @format int32 */
  rank: number;
  reviewVideo: string;
}

export interface MainVideoReviewResponse {
  videoReviews: MainVideoReview[];
}

export interface ApiResponseMainImageReviewResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: MainImageReviewResponse;
}

export interface MainImageReview {
  /** @format int64 */
  reviewId: number;
  /** @format int64 */
  productId: number;
  brandName: string;
  productName: string;
  /** @format int32 */
  likeCount: number;
  /** @format int32 */
  rank: number;
  reviewImage: string;
}

export interface MainImageReviewResponse {
  imageReviews: MainImageReview[];
}

export interface ApiResponseVideoReviewDetailResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: VideoReviewDetailResponse;
}

export interface VideoReviewDetailResponse {
  /** @format int64 */
  reviewId: number;
  brandName: string;
  productName: string;
  positiveContent: string;
  negativeContent: string;
  /** @format int64 */
  likeCount: number;
  videoUrls: string[];
  profileImageUrl?: string;
  authorName: string;
  /** @format double */
  rating: number;
  option?: string;
  /** @format date-time */
  uploadAt: string;
  productImageUrl: string;
  receiptImageUrl?: string;
  receiptUploaded: boolean;
  isLiked: boolean;
  /** @format int64 */
  productId: number;
}

export interface ApiResponseImageReviewDetailResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: ImageReviewDetailResponse;
}

export interface ImageReviewDetailResponse {
  /** @format int64 */
  reviewId: number;
  /** @format date-time */
  writtenTime: string;
  receiptUploaded: boolean;
  positiveComment: string;
  negativeComment: string;
  authorName: string;
  profileImageUrl?: string;
  /** @format double */
  rating: number;
  option?: string;
  /** @format int64 */
  likeCount: number;
  images: string[];
  brandName: string;
  productName: string;
  productImageUrl: string;
  receiptImageUrl?: string;
  isLiked: boolean;
  /** @format int64 */
  productId: number;
}

export interface ApiResponseVideoReviewProductDetailResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: VideoReviewProductDetailResponse;
}

export interface VideoReviewProductDetail {
  /** @format int64 */
  reviewId: number;
  brandName: string;
  productName: string;
  /** @format int32 */
  likeCount: number;
  videoUrl: string;
}

export interface VideoReviewProductDetailResponse {
  videoReviews: VideoReviewProductDetail[];
}

export interface ApiResponseImageReviewsProductDetailResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: ImageReviewsProductDetailResponse;
}

export interface ImageReviewProductDetailResponse {
  /** @format int64 */
  reviewId: number;
  /** @format date-time */
  writtenTime: string;
  receiptUploaded: boolean;
  positiveComment: string;
  negativeComment: string;
  profileImageUrl: string;
  authorName: string;
  /** @format int64 */
  authorId: number;
  /** @format double */
  rating: number;
  option: string;
  /** @format int32 */
  likeCount: number;
  images: string[];
  isLiked: boolean;
  isMine: boolean;
}

export interface ImageReviewsProductDetailResponse {
  isAdmin: boolean;
  imageReviews: ImageReviewProductDetailResponse[];
  pageInfo: PageableResponse;
}

export interface PageableResponse {
  /** @format int32 */
  pageNumber: number;
  /** @format int32 */
  pageSize: number;
  /** @format int32 */
  numberOfElements: number;
  isLast: boolean;
}

export interface ProductListItemResponse {
  /** @format int64 */
  productId: number;
  url: string;
  productName: string;
  brandName: string;
  unit: string;
  /** @format int64 */
  reviewCount: number;
  /** @format double */
  rating: number;
  isLiked: boolean;
}

export interface SearchProductsResponse {
  searchQuery: string;
  products: ProductListItemResponse[];
  pageInfo: PageableResponse;
}

export interface KeywordVideoReviewListResponse {
  searchQuery: string;
  reviews: VideoReviewResponse[];
  pageInfo: PageableResponse;
}

export interface VideoReviewResponse {
  /** @format int64 */
  reviewId: number;
  brandName: string;
  productName: string;
  /** @format int32 */
  likeCount: number;
  url: string;
}

export interface ImageReviewResponse {
  /** @format int64 */
  reviewId: number;
  brandName: string;
  productName: string;
  /** @format int32 */
  likeCount: number;
  url: string;
}

export interface KeywordImageReviewListResponse {
  searchQuery: string;
  reviews: ImageReviewResponse[];
  pageInfo: PageableResponse;
}

export interface ApiResponseProductDetailResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: ProductDetailResponse;
}

export interface ProductDetailResponse {
  /** @format int64 */
  productId: number;
  imageUrls: string[];
  productOptions: ProductOptionResponse[];
  productName: string;
  brandName: string;
  unit: string;
  /** @format int64 */
  reviewCount: number;
  /** @format double */
  rating: number;
  starPercent: RatingPercentResponse[];
  isLiked: boolean;
  /** @format int64 */
  normalPrice: number;
  productDetail: string;
  ingredients: string;
  oliveYoungUrl: string;
  q10Url: string;
  middleCategory: "FACIAL_CARE" | "FACE_MAKEUP" | "EYE_MAKEUP" | "LIP_MAKEUP";
  subCategory:
    | "TONER"
    | "MOISTURIZER"
    | "ESSENCE_SERUM"
    | "CREAM"
    | "FOUNDATION"
    | "POWDER_COMPACT"
    | "CONCEALER"
    | "BLUSHER"
    | "EYEBROW"
    | "EYESHADOW"
    | "EYELINER"
    | "LIPSTICK"
    | "LIP_TINT";
}

export interface ProductOptionResponse {
  /** @format int64 */
  id: number;
  optionName: string;
}

export interface RatingPercentResponse {
  /** @format int32 */
  score: number;
  /** @format double */
  percent: number;
}

export interface ApiResponseProductYoutubeResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: ProductYoutubeResponse;
}

export interface ProductYoutubeResponse {
  youtubeUrls: string[];
}

export interface ProductsByCategoryResponse {
  searchQuery: string;
  parentCategoryName: string;
  products: ProductListItemResponse[];
  pageInfo: PageableResponse;
}

export interface VideoReviewListResponse {
  searchQuery: string;
  parentCategoryName: string;
  reviews: VideoReviewResponse[];
  pageInfo: PageableResponse;
}

export interface ImageReviewListResponse {
  searchQuery: string;
  parentCategoryName: string;
  reviews: ImageReviewResponse[];
  pageInfo: PageableResponse;
}

export interface ApiResponsePopularProductsByCategoryResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: PopularProductsByCategoryResponse;
}

export interface PopularProductsByCategoryResponse {
  searchQuery: string;
  products: ProductBasicResponse[];
  pageInfo: PageableResponse;
}

export interface ProductBasicResponse {
  /** @format int64 */
  productId: number;
  imageUrls: string[];
  productName: string;
  brandName: string;
  unit: string;
  /** @format int64 */
  reviewCount: number;
  /** @format double */
  rating: number;
  isLiked: boolean;
}

export interface ApiResponseNewProductsByCategoryResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: NewProductsByCategoryResponse;
}

export interface NewProductsByCategoryResponse {
  searchQuery: string;
  products: ProductBasicResponse[];
  pageInfo: PageableResponse;
}

export interface ApiResponseLineLoginResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: LineLoginResponse;
}

export interface LineLoginResponse {
  accessToken: string;
  refreshToken: string;
  loginStatus: "LOGIN" | "REGISTER";
}
