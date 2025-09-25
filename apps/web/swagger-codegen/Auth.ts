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
  ApiResponseAfterLoginUserNameResponse,
  ApiResponseGoogleLoginResponse,
  ApiResponseJwtLoginResponse,
  ApiResponseLineLoginResponse,
  ApiResponseRoleUpdateResponse,
  ApiResponseVoid,
  RoleUpdateRequest,
  TestLoginRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Auth<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags AUTH
   * @name UpdateUserRole
   * @summary 사용자 역할 설정
   * @request POST:/api/auth/role
   * @secure
   */
  updateUserRole = (data: RoleUpdateRequest, params: RequestParams = {}) =>
    this.request<ApiResponseRoleUpdateResponse, any>({
      path: `/api/auth/role`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags AUTH
   * @name ReissueRefreshToken
   * @summary RefreshToken 재발급
   * @request POST:/api/auth/refresh
   * @secure
   */
  reissueRefreshToken = (params: RequestParams = {}) =>
    this.request<ApiResponseVoid, any>({
      path: `/api/auth/refresh`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags AUTH
   * @name Logout
   * @summary 로그아웃
   * @request POST:/api/auth/logout
   * @secure
   */
  logout = (params: RequestParams = {}) =>
    this.request<ApiResponseVoid, any>({
      path: `/api/auth/logout`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags AUTH
   * @name Login
   * @summary 테스트용 JWT 토큰 발급
   * @request POST:/api/auth/login
   * @secure
   */
  login = (data: TestLoginRequest, params: RequestParams = {}) =>
    this.request<ApiResponseJwtLoginResponse, any>({
      path: `/api/auth/login`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags AUTH
   * @name GetUserDisplayName
   * @summary 로그인한 사용자의 이름을 표시하는 API입니다.
   * @request GET:/api/auth/name
   * @secure
   */
  getUserDisplayName = (params: RequestParams = {}) =>
    this.request<ApiResponseAfterLoginUserNameResponse, any>({
      path: `/api/auth/name`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags AUTH
   * @name RedirectToLineAuth
   * @summary 라인 소셜 로그인, 리다이렉션
   * @request GET:/api/auth/line/redirect
   * @secure
   */
  redirectToLineAuth = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/auth/line/redirect`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags AUTH
   * @name LineLogin
   * @summary 라인 소셜 로그인, JWT 토큰 발급 후 저장
   * @request GET:/api/auth/line/login
   * @secure
   */
  lineLogin = (
    query: {
      code: string;
      state: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseLineLoginResponse, any>({
      path: `/api/auth/line/login`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags AUTH
   * @name RedirectToGoogleAuth
   * @summary 구글 소셜 로그인, 리다이렉션
   * @request GET:/api/auth/google/redirect
   * @secure
   */
  redirectToGoogleAuth = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/auth/google/redirect`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags AUTH
   * @name GoogleLogin
   * @summary 구글 소셜 로그인, JWT 토큰 발급 후 저장
   * @request GET:/api/auth/google/login
   * @secure
   */
  googleLogin = (
    query: {
      code: string;
      state: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseGoogleLoginResponse, any>({
      path: `/api/auth/google/login`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
}
