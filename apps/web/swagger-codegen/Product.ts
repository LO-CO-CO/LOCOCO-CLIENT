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
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Product<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
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
      method: "GET",
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
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags PRODUCT
   * @name SearchPopularProductsByCategory
   * @summary 인기상품 카테고리별 조회
   * @request GET:/api/products/categories/popular
   * @secure
   */
  searchPopularProductsByCategory = (
    query?: {
      productCategory?:
        | "ESSENCE_TONER"
        | "SERUM_AMPOULE"
        | "CREAM_LOTION"
        | "CLEANSER"
        | "SUNCARE"
        | "ETC";
    },
    params: RequestParams = {},
  ) =>
    this.request<ApiResponsePopularProductsByCategoryResponse, any>({
      path: `/api/products/categories/popular`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags PRODUCT
   * @name SearchNewProductsByCategory
   * @summary 신상품 카테고리별 조회
   * @request GET:/api/products/categories/new
   * @secure
   */
  searchNewProductsByCategory = (
    query?: {
      productCategory?:
        | "ESSENCE_TONER"
        | "SERUM_AMPOULE"
        | "CREAM_LOTION"
        | "CLEANSER"
        | "SUNCARE"
        | "ETC";
    },
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseNewProductsByCategoryResponse, any>({
      path: `/api/products/categories/new`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
}
