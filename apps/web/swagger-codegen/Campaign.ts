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
  ApiResponseCampaignDetailResponse,
  ApiResponseCampaignMediaResponse,
  ApiResponseMainPageCampaignListResponse,
  ApiResponseMainPageUpcomingCampaignListResponse,
  CampaignMediaRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Campaign<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags CAMPAIGN
   * @name CreateMediaPresignedUrl1
   * @summary 사진 presignedUrl 발급
   * @request POST:/api/campaigns/media
   * @secure
   */
  createMediaPresignedUrl1 = (
    data: CampaignMediaRequest,
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseCampaignMediaResponse, any>({
      path: `/api/campaigns/media`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags CAMPAIGN
   * @name GetCampaignsInMainPage
   * @summary 메인페이지에서 캠페인 리스트 조회
   * @request GET:/api/campaigns
   * @secure
   */
  getCampaignsInMainPage = (
    query: {
      lang: "EN" | "ES" | "ALL";
      category: "ALL" | "SKINCARE" | "SUNCARE" | "MAKEUP";
      /**
       * @format int32
       * @default 0
       */
      page?: number;
      /**
       * @format int32
       * @default 6
       */
      size?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseMainPageCampaignListResponse, any>({
      path: `/api/campaigns`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags CAMPAIGN
   * @name GetCampaignDetail
   * @summary 캠페인 상세 조회
   * @request GET:/api/campaigns/{campaignId}
   * @secure
   */
  getCampaignDetail = (campaignId: number, params: RequestParams = {}) =>
    this.request<ApiResponseCampaignDetailResponse, any>({
      path: `/api/campaigns/${campaignId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags CAMPAIGN
   * @name GetUpcomingCampaignsInMainPage
   * @summary 메인페이지 Opening Soon 캠페인 리스트 조회
   * @request GET:/api/campaigns/upcoming
   * @secure
   */
  getUpcomingCampaignsInMainPage = (
    query: {
      lang: "EN" | "ES" | "ALL";
      category: "ALL" | "SKINCARE" | "SUNCARE" | "MAKEUP";
    },
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseMainPageUpcomingCampaignListResponse, any>({
      path: `/api/campaigns/upcoming`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
}
