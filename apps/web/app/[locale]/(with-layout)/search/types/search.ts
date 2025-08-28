import {
  KeywordImageReviewListResponse,
  KeywordVideoReviewListResponse,
  SearchProductsResponse,
} from '@typescript-swagger/data-contracts';

export interface ApiResponse<T> {
  success: boolean;
  status: number;
  data: T;
  message?: string;
}

export type ApiResponseSearchProductsResponse =
  ApiResponse<SearchProductsResponse>;
export type ApiKeywordVideoReviewListResponse =
  ApiResponse<KeywordVideoReviewListResponse>;
export type ApiKeywordImageReviewListResponse =
  ApiResponse<KeywordImageReviewListResponse>;
