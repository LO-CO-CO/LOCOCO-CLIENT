import {
  KeywordImageReviewListResponse,
  KeywordVideoReviewListResponse,
  SearchProductsResponse,
} from '@typescript-swagger/data-contracts';

export interface ApiResponseSearchProductsResponse {
  success: boolean;
  status: number;
  data: SearchProductsResponse;
  message?: string;
}

export interface ApiKeywordVideoReviewListResponse {
  success: boolean;
  status: number;
  data: KeywordVideoReviewListResponse;
  message?: string;
}

export interface ApiKeywordImageReviewListResponse {
  success: boolean;
  status: number;
  data: KeywordImageReviewListResponse;
  message?: string;
}
