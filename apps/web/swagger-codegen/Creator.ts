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
  ApiResponseCreatorAddressInfo,
  ApiResponseCreatorInfoResponse,
  ApiResponseCreatorMyCampaignListResponse,
  ApiResponseCreatorMyPageResponse,
  ApiResponseCreatorRegisterCompleteResponse,
  ApiResponseCreatorSnsConnectedResponse,
  ApiResponseVoid,
  CreatorInfoUpdateRequest,
  CreatorMyPageUpdateRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Creator<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags CREATOR
   * @name CompleteCreatorSignup
   * @summary 크리에이터 최종 가입 완료
   * @request POST:/api/creator/register/complete
   * @secure
   */
  completeCreatorSignup = (params: RequestParams = {}) =>
    this.request<ApiResponseCreatorRegisterCompleteResponse, any>({
      path: `/api/creator/register/complete`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags CREATOR
   * @name ConfirmAddress
   * @summary 크리에이터 배송지 확정(배송받기)
   * @request POST:/api/creator/profile/{campaignId}/address
   * @secure
   */
  confirmAddress = (campaignId: number, params: RequestParams = {}) =>
    this.request<ApiResponseVoid, any>({
      path: `/api/creator/profile/${campaignId}/address`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags CREATOR
   * @name GetRegisterInfo
   * @summary 회원가입시 입력했던 추가 정보를 확인하는 API입니다
   * @request GET:/api/creator/register/info
   * @secure
   */
  getRegisterInfo = (params: RequestParams = {}) =>
    this.request<ApiResponseCreatorInfoResponse, any>({
      path: `/api/creator/register/info`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags CREATOR
   * @name UpdateCreatorRegisterInfo
   * @summary 회원가입시 크리에이터의 추가 정보를 입력/수정하는 API입니다
   * @request PATCH:/api/creator/register/info
   * @secure
   */
  updateCreatorRegisterInfo = (
    data: CreatorInfoUpdateRequest,
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseVoid, any>({
      path: `/api/creator/register/info`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags CREATOR
   * @name GetProfile
   * @summary 크리에이터 마이페이지 조회
   * @request GET:/api/creator/profile
   * @secure
   */
  getProfile = (params: RequestParams = {}) =>
    this.request<ApiResponseCreatorMyPageResponse, any>({
      path: `/api/creator/profile`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags CREATOR
   * @name UpdateProfile
   * @summary 크리에이터 마이페이지 수정
   * @request PATCH:/api/creator/profile
   * @secure
   */
  updateProfile = (
    data: CreatorMyPageUpdateRequest,
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseCreatorMyPageResponse, any>({
      path: `/api/creator/profile`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags CREATOR
   * @name GetCreatorSnsConnected
   * @summary 크리에이터 SNS 연동 여부를 체크하는 API입니다
   * @request GET:/api/creator/register/sns-status
   * @secure
   */
  getCreatorSnsConnected = (params: RequestParams = {}) =>
    this.request<ApiResponseCreatorSnsConnectedResponse, any>({
      path: `/api/creator/register/sns-status`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags CREATOR
   * @name GetMyCampaigns
   * @summary 크리에이터 마이페이지 내가 참여중/참여한 캠페인 목록 조회 [무한 스크롤]
   * @request GET:/api/creator/profile/campaigns
   * @secure
   */
  getMyCampaigns = (
    query?: {
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
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseCreatorMyCampaignListResponse, any>({
      path: `/api/creator/profile/campaigns`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags CREATOR
   * @name GetCreatorAddress
   * @summary 크리에이터 주소 정보 조회
   * @request GET:/api/creator/profile/address
   * @secure
   */
  getCreatorAddress = (params: RequestParams = {}) =>
    this.request<ApiResponseCreatorAddressInfo, any>({
      path: `/api/creator/profile/address`,
      method: "GET",
      secure: true,
      ...params,
    });
}
