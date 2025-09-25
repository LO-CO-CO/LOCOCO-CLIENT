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

import { ApiResponseVoid } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class CreatorCampaign<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags CREATOR CAMPAIGN
   * @name Participate
   * @summary 캠페인 참여 신청하기
   * @request POST:/api/creator-campaign/{campaignId}/participate
   * @secure
   */
  participate = (campaignId: number, params: RequestParams = {}) =>
    this.request<ApiResponseVoid, any>({
      path: `/api/creator-campaign/${campaignId}/participate`,
      method: "POST",
      secure: true,
      ...params,
    });
}
