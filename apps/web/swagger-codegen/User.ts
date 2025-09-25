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

import { ApiResponseVoid, UserIdCheckRequest } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class User<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags USER
   * @name CheckUserId
   * @summary 사용자 ID 중복 체크 (Customer/Creator 공통)
   * @request GET:/api/user/check-id
   * @secure
   */
  checkUserId = (
    query: {
      request: UserIdCheckRequest;
    },
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseVoid, any>({
      path: `/api/user/check-id`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
}
