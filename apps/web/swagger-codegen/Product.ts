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
import {
  ApiResponseNewProductsByCategoryResponse,
  ApiResponsePopularProductsByCategoryResponse,
  ApiResponseProductDetailResponse,
  ApiResponseProductYoutubeResponse,
  ApiResponseString,
  ImageReviewListResponse,
  KeywordImageReviewListResponse,
  KeywordVideoReviewListResponse,
  ProductsByCategoryResponse,
  SearchProductsResponse,
  VideoReviewListResponse,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Product<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description 서버 전용 API 입니다. PRODUCT 테이블의 search_token 필드를 업데이트 하는 기능
   *
   * @tags PRODUCT
   * @name UpdateSearchFields
   * @summary 상품 엔티티의 search_token 필드 갱신
   * @request POST:/api/products/search-fields/migrate
   * @secure
   */
  updateSearchFields = (params: RequestParams = {}) =>
    this.request<ApiResponseString, any>({
      path: `/api/products/search-fields/migrate`,
      method: 'POST',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags PRODUCT
   * @name Search
   * @summary 상품명 또는 브랜드명 상품 및 리뷰 검색
   * @request GET:/api/products/search
   * @secure
   */
  search = (
    query: {
      keyword: string;
      /** @default "false" */
      searchType?: 'PRODUCT' | 'REVIEW';
      mediaType?: 'IMAGE' | 'VIDEO';
      /**
       * @format int32
       * @default 0
       */
      page?: number;
      /**
       * @format int32
       * @default 20
       */
      size?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      | SearchProductsResponse
      | KeywordVideoReviewListResponse
      | KeywordImageReviewListResponse,
      any
    >({
      path: `/api/products/search`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags PRODUCT
   * @name GetProductDetail
   * @summary 상세조회 제품(별점 포함) 조회 (상세 조회)
   * @request GET:/api/products/details/{productId}
   * @secure
   */
  getProductDetail = (productId: number, params: RequestParams = {}) =>
    this.request<ApiResponseProductDetailResponse, any>({
      path: `/api/products/details/${productId}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags PRODUCT
   * @name GetProductDetailYoutube
   * @summary 상세조회 유튜브 리뷰 조회 (상세 조회)
   * @request GET:/api/products/details/{productId}/youtube
   * @secure
   */
  getProductDetailYoutube = (productId: number, params: RequestParams = {}) =>
    this.request<ApiResponseProductYoutubeResponse, any>({
      path: `/api/products/details/${productId}/youtube`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags PRODUCT
   * @name SearchProductsByCategory
   * @summary 카테고리 별 상품 및 리뷰 검색
   * @request GET:/api/products/categories/search
   * @secure
   */
  searchProductsByCategory = (
    query: {
      middleCategory:
        | 'FACIAL_CARE'
        | 'FACE_MAKEUP'
        | 'EYE_MAKEUP'
        | 'LIP_MAKEUP';
      subCategory?:
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
      /** @default "false" */
      searchType?: 'PRODUCT' | 'REVIEW';
      mediaType?: 'IMAGE' | 'VIDEO';
      /**
       * @format int32
       * @default 0
       */
      page?: number;
      /**
       * @format int32
       * @default 20
       */
      size?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      | ProductsByCategoryResponse
      | VideoReviewListResponse
      | ImageReviewListResponse,
      any
    >({
      path: `/api/products/categories/search`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags PRODUCT
   * @name SearchPopularProductsByCategory
   * @summary 인기상품 카테고리별 조회 (메인 페이지)
   * @request GET:/api/products/categories/popular
   * @secure
   */
  searchPopularProductsByCategory = (
    query: {
      middleCategory:
        | 'FACIAL_CARE'
        | 'FACE_MAKEUP'
        | 'EYE_MAKEUP'
        | 'LIP_MAKEUP';
      /**
       * @format int32
       * @default 0
       */
      page?: number;
      /**
       * @format int32
       * @default 20
       */
      size?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<ApiResponsePopularProductsByCategoryResponse, any>({
      path: `/api/products/categories/popular`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags PRODUCT
   * @name SearchNewProductsByCategory
   * @summary 신상품 카테고리별 조회 (메인 페이지)
   * @request GET:/api/products/categories/new
   * @secure
   */
  searchNewProductsByCategory = (
    query: {
      middleCategory:
        | 'FACIAL_CARE'
        | 'FACE_MAKEUP'
        | 'EYE_MAKEUP'
        | 'LIP_MAKEUP';
      /**
       * @format int32
       * @default 0
       */
      page?: number;
      /**
       * @format int32
       * @default 20
       */
      size?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<ApiResponseNewProductsByCategoryResponse, any>({
      path: `/api/products/categories/new`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
}
