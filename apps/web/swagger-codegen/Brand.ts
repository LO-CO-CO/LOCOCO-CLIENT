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
  ApiResponseBrandMyCampaignInfoListResponse,
  ApiResponseBrandMyCampaignListResponse,
  ApiResponseBrandMyPageResponse,
  ApiResponseBrandNoteRevisionResponse,
  ApiResponseBrandProfileAndStatisticsResponse,
  ApiResponseBrandProfileImageResponse,
  ApiResponseCampaignApplicantListResponse,
  ApiResponseCampaignBasicResponse,
  ApiResponseCreatorApprovedResponse,
  ApiResponseVoid,
  BrandInfoUpdateRequest,
  BrandMyPageUpdateRequest,
  BrandNoteRevisionRequest,
  BrandProfileImageRequest,
  CampaignDraftRequest,
  CampaignPublishRequest,
  CreatorApproveRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Brand<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description 브랜드 마이페이지에서 브랜드가 기존에 존재하는 캠페인에 대한 임시저장을 수행하는 API 입니다.
   *
   * @tags BRAND
   * @name UpdateCampaignDraft
   * @summary 캠페인 수정 - 임시저장
   * @request PUT:/api/brands/my/campaigns/{campaignId}/draft
   * @secure
   */
  updateCampaignDraft = (
    campaignId: number,
    data: CampaignDraftRequest,
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseCampaignBasicResponse, any>({
      path: `/api/brands/my/campaigns/${campaignId}/draft`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags BRAND
   * @name CreateBrandImagePresignedUrl
   * @summary 브랜드 profile image presignedUrl 발급
   * @request POST:/api/brands/profile/image
   * @secure
   */
  createBrandImagePresignedUrl = (
    data: BrandProfileImageRequest,
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseBrandProfileImageResponse, any>({
      path: `/api/brands/profile/image`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 브랜드 마이페이지에서 브랜드가 크리에이터가 올린 1차 리뷰에 대해 수정사항을 남기는 API 입니다.
   *
   * @tags BRAND
   * @name RequestReviewRevision
   * @summary 브랜드 수정사항 임시저장 / 전달
   * @request POST:/api/brands/my/reviews/{campaignReviewId}/revision-request
   * @secure
   */
  requestReviewRevision = (
    campaignReviewId: number,
    query: {
      action: "SAVE_DRAFT" | "SUBMIT";
    },
    data: BrandNoteRevisionRequest,
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseBrandNoteRevisionResponse, any>({
      path: `/api/brands/my/reviews/${campaignReviewId}/revision-request`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 브랜드 마이페이지에서 브랜드가 캠페인을 발행 상태로 생성하는 API 입니다.
   *
   * @tags BRAND
   * @name CreateAndPublishCampaign
   * @summary 캠페인 생성 - 발행
   * @request POST:/api/brands/my/campaigns/publish
   * @secure
   */
  createAndPublishCampaign = (
    data: CampaignPublishRequest,
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseCampaignBasicResponse, any>({
      path: `/api/brands/my/campaigns/publish`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 브랜드 마이페이지에서 브랜드가 캠패인을 임시저장 상태로 생성하는 API 입니다.
   *
   * @tags BRAND
   * @name CreateDraftCampaign
   * @summary 캠페인 생성 - 임시저장
   * @request POST:/api/brands/my/campaigns/drafts
   * @secure
   */
  createDraftCampaign = (
    data: CampaignDraftRequest,
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseCampaignBasicResponse, any>({
      path: `/api/brands/my/campaigns/drafts`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags BRAND
   * @name UpdateBrandInfo
   * @summary 회원가입시 브랜드 추가 정보를 입력하는 API 입니다.
   * @request PATCH:/api/brands/register/info
   * @secure
   */
  updateBrandInfo = (
    data: BrandInfoUpdateRequest,
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseVoid, any>({
      path: `/api/brands/register/info`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags BRAND
   * @name GetBrandMyPageInfo
   * @summary 브랜드 마이페이지(프로필) 정보 조회
   * @request GET:/api/brands/profile
   * @secure
   */
  getBrandMyPageInfo = (params: RequestParams = {}) =>
    this.request<ApiResponseBrandMyPageResponse, any>({
      path: `/api/brands/profile`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags BRAND
   * @name UpdateBrandMyPageProfile
   * @summary 브랜드 마이페이지(프로필) 정보 수정
   * @request PATCH:/api/brands/profile
   * @secure
   */
  updateBrandMyPageProfile = (
    data: BrandMyPageUpdateRequest,
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseVoid, any>({
      path: `/api/brands/profile`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 브랜드 마이페이지에서 브랜드가 기존에 존재하는 캠페인에 대한 발행을 수행하는 API 입니다.
   *
   * @tags BRAND
   * @name PublishCampaign
   * @summary 캠페인 수정 - 발행
   * @request PATCH:/api/brands/my/campaigns/{campaignId}/publish
   * @secure
   */
  publishCampaign = (
    campaignId: number,
    data: CampaignPublishRequest,
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseCampaignBasicResponse, any>({
      path: `/api/brands/my/campaigns/${campaignId}/publish`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags BRAND
   * @name ApproveCreatorApplicants
   * @summary 캠페인 지원자 확인 뷰 - 특정 캠페인에 조회한 크리에이터 승인
   * @request PATCH:/api/brands/my/campaigns/{campaignId}/applicants/approve
   * @secure
   */
  approveCreatorApplicants = (
    campaignId: number,
    data: CreatorApproveRequest,
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseCreatorApprovedResponse, any>({
      path: `/api/brands/my/campaigns/${campaignId}/applicants/approve`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags BRAND
   * @name GetBrandProfileAndStatistics
   * @summary 브랜드 마이페이지에서 프로필(브랜드 이미지, 이름, 이메일) 및 통계 정보(진행 중인 캠페인, 종료 캠페인)조회
   * @request GET:/api/brands/my/profile/stats
   * @secure
   */
  getBrandProfileAndStatistics = (params: RequestParams = {}) =>
    this.request<ApiResponseBrandProfileAndStatisticsResponse, any>({
      path: `/api/brands/my/profile/stats`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags BRAND
   * @name GetBrandMyCampaigns
   * @summary 브랜드 마이페이지에서 캠페인 리스트 조회.
   * @request GET:/api/brands/my/campaigns
   * @secure
   */
  getBrandMyCampaigns = (
    query: {
      status:
        | "ALL"
        | "DRAFT"
        | "WAITING_APPROVAL"
        | "OPEN_RESERVED"
        | "ACTIVE"
        | "COMPLETED";
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
    this.request<ApiResponseBrandMyCampaignListResponse, any>({
      path: `/api/brands/my/campaigns`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags BRAND
   * @name GetCampaignApplicants
   * @summary 캠페인 지원자 확인 뷰 - 캠페인 지원자 리스트 조회
   * @request GET:/api/brands/my/campaigns/{campaignId}/applicants
   * @secure
   */
  getCampaignApplicants = (
    campaignId: number,
    query?: {
      /**
       * @format int32
       * @default 0
       */
      page?: number;
      /**
       * @format int32
       * @default 10
       */
      size?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseCampaignApplicantListResponse, any>({
      path: `/api/brands/my/campaigns/${campaignId}/applicants`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags BRAND
   * @name GetSimpleCampaignInfos
   * @summary 캠페인 지원자 확인 뷰 - 브랜드 캠페인 목록 간단 조회
   * @request GET:/api/brands/my/campaigns/infos
   * @secure
   */
  getSimpleCampaignInfos = (params: RequestParams = {}) =>
    this.request<ApiResponseBrandMyCampaignInfoListResponse, any>({
      path: `/api/brands/my/campaigns/infos`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags BRAND
   * @name GetDraftCampaign
   * @summary 브랜드 마이페이지에서 임시저장한 캠페인 조회
   * @request GET:/api/brands/my/campaigns/drafts/{campaignId}
   * @secure
   */
  getDraftCampaign = (campaignId: number, params: RequestParams = {}) =>
    this.request<ApiResponseCampaignBasicResponse, any>({
      path: `/api/brands/my/campaigns/drafts/${campaignId}`,
      method: "GET",
      secure: true,
      ...params,
    });
}
