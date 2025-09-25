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
  ApiResponseListCampaignParticipatedResponse,
  ApiResponseReviewUploadResponse,
  FirstReviewUploadRequest,
  SecondReviewUploadRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class CampaignReview<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags CAMPAIGN REVIEW
   * @name UploadSecond
   * @summary 2차 리뷰 업로드
   * @request POST:/api/campaignReviews/{campaignId}/second
   * @secure
   */
  uploadSecond = (
    campaignId: number,
    data: SecondReviewUploadRequest,
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseReviewUploadResponse, any>({
      path: `/api/campaignReviews/${campaignId}/second`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags CAMPAIGN REVIEW
   * @name UploadFirst
   * @summary 1차 리뷰 업로드
   * @request POST:/api/campaignReviews/{campaignId}/first
   * @secure
   */
  uploadFirst = (
    campaignId: number,
    data: FirstReviewUploadRequest,
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseReviewUploadResponse, any>({
      path: `/api/campaignReviews/${campaignId}/first`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags CAMPAIGN REVIEW
   * @name GetMyReviewables
   * @summary 리뷰 업로드 가능한 캠페인 목록 조회 (리뷰 업로드 드롭다운)
   * @request GET:/api/campaignReviews/my/participation
   * @secure
   */
  getMyReviewables = (params: RequestParams = {}) =>
    this.request<ApiResponseListCampaignParticipatedResponse, any>({
      path: `/api/campaignReviews/my/participation`,
      method: "GET",
      secure: true,
      ...params,
    });
}
