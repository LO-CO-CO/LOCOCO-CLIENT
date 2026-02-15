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
  ApiResponseCustomerMyPageResponse,
  ApiResponseCustomerProfileImageResponse,
  ApiResponseCustomerSnsConnectedResponse,
  ApiResponseVoid,
  CustomerInfoRegisterRequest,
  CustomerMyPageRequest,
  CustomerProfileImageRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Customer<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags CUSTOMER
   * @name CreateProfileImagePresignedUrl
   * @summary Customer profile image presignedUrl 발급
   * @request POST:/api/customer/profile/image
   * @secure
   */
  createProfileImagePresignedUrl = (
    data: CustomerProfileImageRequest,
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseCustomerProfileImageResponse, any>({
      path: `/api/customer/profile/image`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags CUSTOMER
   * @name RegisterAdditionalInfo
   * @summary Customer 대상 추가 정보 입력을 진행하는 API 입니다.
   * @request POST:/api/customer/info
   * @secure
   */
  registerAdditionalInfo = (
    data: CustomerInfoRegisterRequest,
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseVoid, any>({
      path: `/api/customer/info`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags CUSTOMER
   * @name GetCustomerMyPageInfo
   * @summary Customer 마이페이지(프로필) 정보 조회
   * @request GET:/api/customer/profile
   * @secure
   */
  getCustomerMyPageInfo = (params: RequestParams = {}) =>
    this.request<ApiResponseCustomerMyPageResponse, any>({
      path: `/api/customer/profile`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags CUSTOMER
   * @name UpdateCustomerMyPageProfile
   * @summary Customer 마이페이지(프로필) 정보 수정
   * @request PATCH:/api/customer/profile
   * @secure
   */
  updateCustomerMyPageProfile = (
    data: CustomerMyPageRequest,
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseVoid, any>({
      path: `/api/customer/profile`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags CUSTOMER
   * @name GetCustomerSnsConnected
   * @summary Customer SNS 연동 여부를 체크하는 API입니다
   * @request GET:/api/customer/sns-status
   * @secure
   */
  getCustomerSnsConnected = (params: RequestParams = {}) =>
    this.request<ApiResponseCustomerSnsConnectedResponse, any>({
      path: `/api/customer/sns-status`,
      method: "GET",
      secure: true,
      ...params,
    });
}
