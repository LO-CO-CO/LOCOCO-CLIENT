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

import { ApiResponseTikTokConnectionResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class SnsConnection<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Creator가 TikTok 계정 연결 / TikTok OAuth 인증 페이지로 리다이렉트
   *
   * @tags SNS_CONNECTION
   * @name ConnectTikTok
   * @summary TikTok 계정 연결
   * @request GET:/api/auth/sns/tiktok/connect
   * @secure
   */
  connectTikTok = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/auth/sns/tiktok/connect`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description TikTok OAuth 인증 후 콜백을 처리 및 계정 연결 완료
   *
   * @tags SNS_CONNECTION
   * @name HandleTikTokCallback
   * @summary TikTok OAuth 콜백
   * @request GET:/api/auth/sns/tiktok/callback
   * @secure
   */
  handleTikTokCallback = (
    query: {
      code: string;
      state: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseTikTokConnectionResponse, any>({
      path: `/api/auth/sns/tiktok/callback`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
}
