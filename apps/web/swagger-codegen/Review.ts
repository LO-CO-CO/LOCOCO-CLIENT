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
  ApiResponseImageReviewDetailResponse,
  ApiResponseImageReviewsProductDetailResponse,
  ApiResponseMainImageReviewResponse,
  ApiResponseMainVideoReviewResponse,
  ApiResponseReviewMediaResponse,
  ApiResponseReviewReceiptResponse,
  ApiResponseReviewResponse,
  ApiResponseVideoReviewDetailResponse,
  ApiResponseVideoReviewProductDetailResponse,
  ApiResponseVoid,
  ReviewMediaRequest,
  ReviewReceiptRequest,
  ReviewRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Review<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags REVIEW
   * @name CreateReview
   * @summary 리뷰 작성
   * @request POST:/api/reviews/{productId}
   * @secure
   */
  createReview = (
    productId: number,
    data: ReviewRequest,
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseReviewResponse, any>({
      path: `/api/reviews/${productId}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags REVIEW
   * @name CreateReceiptPresignedUrl
   * @summary 영수증 presignedUrl 발급
   * @request POST:/api/reviews/receipt
   * @secure
   */
  createReceiptPresignedUrl = (
    data: ReviewReceiptRequest,
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseReviewReceiptResponse, any>({
      path: `/api/reviews/receipt`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags REVIEW
   * @name CreateMediaPresignedUrl
   * @summary 사진 또는 영상 presignedUrl 발급
   * @request POST:/api/reviews/media
   * @secure
   */
  createMediaPresignedUrl = (
    data: ReviewMediaRequest,
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseReviewMediaResponse, any>({
      path: `/api/reviews/media`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags REVIEW
   * @name GetMainVideoReviews
   * @summary 메인페이지에서 영상 리뷰 조회
   * @request GET:/api/reviews/video
   * @secure
   */
  getMainVideoReviews = (params: RequestParams = {}) =>
    this.request<ApiResponseMainVideoReviewResponse, any>({
      path: `/api/reviews/video`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags REVIEW
   * @name GetMainImageReviews
   * @summary 메인페이지에서 이미지 리뷰 조회
   * @request GET:/api/reviews/image
   * @secure
   */
  getMainImageReviews = (params: RequestParams = {}) =>
    this.request<ApiResponseMainImageReviewResponse, any>({
      path: `/api/reviews/image`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags REVIEW
   * @name GetVideoReviewDetails
   * @summary 영상 리뷰 상세 조회 (가장 마지막 뎁스)
   * @request GET:/api/reviews/details/{reviewId}/video
   * @secure
   */
  getVideoReviewDetails = (reviewId: number, params: RequestParams = {}) =>
    this.request<ApiResponseVideoReviewDetailResponse, any>({
      path: `/api/reviews/details/${reviewId}/video`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags REVIEW
   * @name GetImageReviewDetails
   * @summary 사진 리뷰 상세 조회 (가장 마지막 뎁스
   * @request GET:/api/reviews/details/{reviewId}/image
   * @secure
   */
  getImageReviewDetails = (reviewId: number, params: RequestParams = {}) =>
    this.request<ApiResponseImageReviewDetailResponse, any>({
      path: `/api/reviews/details/${reviewId}/image`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags REVIEW
   * @name GetVideoReviewsInProductDetail
   * @summary 제품 상세 페이지에서 영상 리뷰 조회
   * @request GET:/api/reviews/details/video
   * @secure
   */
  getVideoReviewsInProductDetail = (
    query: {
      /** @format int64 */
      productId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseVideoReviewProductDetailResponse, any>({
      path: `/api/reviews/details/video`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags REVIEW
   * @name GetImageReviewsInProductDetail
   * @summary 제품 상세 페이지에서 사진 리뷰 조회
   * @request GET:/api/reviews/details/image
   * @secure
   */
  getImageReviewsInProductDetail = (
    query: {
      /** @format int64 */
      productId: number;
      /**
       * @format int32
       * @default 0
       */
      page?: number;
      /**
       * @format int32
       * @default 5
       */
      size?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseImageReviewsProductDetailResponse, any>({
      path: `/api/reviews/details/image`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags REVIEW
   * @name DeleteReview
   * @summary 리뷰 삭제 (일반 유저 및 어드민 모두 가능
   * @request DELETE:/api/reviews/{reviewId}
   * @secure
   */
  deleteReview = (reviewId: number, params: RequestParams = {}) =>
    this.request<ApiResponseVoid, any>({
      path: `/api/reviews/${reviewId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
