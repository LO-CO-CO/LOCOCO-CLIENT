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

export interface CampaignDraftRequest {
  campaignTitle?: string;
  language?: 'EN' | 'ES';
  campaignType?: 'GIVEAWAY' | 'CONTENTS' | 'EXCLUSIVE';
  campaignProductType?: 'SKINCARE' | 'SUNCARE' | 'MAKEUP';
  /**
   * @maxItems 5
   * @minItems 0
   */
  topImages?: CampaignImageRequest[];
  /**
   * @maxItems 15
   * @minItems 0
   */
  bottomImages?: CampaignImageRequest[];
  /** @format date-time */
  applyStartDate?: string;
  /** @format date-time */
  applyDeadline?: string;
  /** @format date-time */
  creatorAnnouncementDate?: string;
  /** @format date-time */
  reviewSubmissionDeadline?: string;
  /** @format int32 */
  recruitmentNumber?: number;
  participationRewards?: string[];
  deliverableRequirements?: string[];
  eligibilityRequirements?: string[];
  firstContentType?: 'INSTA_REELS' | 'TIKTOK_VIDEO' | 'INSTA_POST';
  secondContentType?: 'INSTA_REELS' | 'TIKTOK_VIDEO' | 'INSTA_POST';
}

export interface CampaignImageRequest {
  /** @minLength 1 */
  url: string;
  /**
   * @format int32
   * @min 0
   */
  displayOrder?: number;
  imageType: 'TOP' | 'BOTTOM';
}

export interface ApiResponseCampaignBasicResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: CampaignBasicResponse;
}

export interface CampaignBasicResponse {
  /**
   * 캠페인 id
   * @format int64
   * @example 1
   */
  campaignId: number;
  /**
   * 캠페인 제목
   * @example "나는야 캠페인"
   */
  campaignTitle: string;
  /**
   * 캠페인 진행 언어
   * @example "ENG"
   */
  language: 'EN' | 'ES';
  /**
   * 캠페인 종류
   * @example "GIVEAWAY"
   */
  campaignType: 'GIVEAWAY' | 'CONTENTS' | 'EXCLUSIVE';
  /**
   * 캠페인 상품 카테고리
   * @example "SKINCARE"
   */
  campaignProductType: 'SKINCARE' | 'SUNCARE' | 'MAKEUP';
  /** 상단 이미지 리스트 */
  topImages: CampaignImageResponse[];
  /** 하단 이미지 리스트 */
  bottomImages: CampaignImageResponse[];
  /**
   * 크리에이터 지원 시작 일시
   * @format date-time
   * @example "2025-09-17T시7:32:08.995Z"
   */
  applyStartDate: string;
  /**
   * 크리에이터 지원 마감 일
   * @format date-time
   * @example "2025-09-17T시7:32:08.995Z"
   */
  applyDeadline: string;
  /**
   * 크리에이터 발표 일시
   * @format date-time
   * @example "2025-09-17T07:32:08.995Z"
   */
  creatorAnnouncementDate: string;
  /**
   * 리뷰 제출 마감일
   * @format date-time
   * @example "2025-09-17T07:32:08.995Z"
   */
  reviewSubmissionDeadline: string;
  /**
   * 모집 인원 수
   * @format int32
   * @example 20
   */
  recruitmentNumber: number;
  /** 캠페인 참여 보상 리스트 */
  participationRewards: string[];
  /** 컨텐츠 제출 요구사항 리스트 */
  deliverableRequirements: string[];
  /** 크리에이터 자격 요건 리스트 */
  eligibilityRequirements: string[];
  /**
   * 첫 번째 제출 컨텐츠
   * @example "INSTA_REELS"
   */
  firstContentType: 'INSTA_REELS' | 'TIKTOK_VIDEO' | 'INSTA_POST';
  /**
   * 두 번째 제출 컨텐츠
   * @example "TIKTOK_VIDEO"
   */
  secondContentType: 'INSTA_REELS' | 'TIKTOK_VIDEO' | 'INSTA_POST';
}

export interface CampaignImageResponse {
  /**
   * 이미지 id
   * @format int64
   * @example 1
   */
  id: number;
  /** 이미지 url */
  url: string;
  /**
   * 이미지 표시 순서
   * @format int32
   * @example 1
   */
  displayOrder: number;
}

export interface ReviewRequest {
  /** @format int64 */
  productOptionId?: number;
  /** @format int32 */
  rating: number;
  /**
   * @minLength 15
   * @maxLength 1500
   */
  positiveComment: string;
  /**
   * @minLength 15
   * @maxLength 1500
   */
  negativeComment: string;
  mediaUrl?: string[];
  receiptUrl?: string[];
}

export interface ApiResponseReviewResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: ReviewResponse;
}

export interface ReviewResponse {
  /** @format int64 */
  reviewId: number;
}

export interface ReviewReceiptRequest {
  mediaType: string;
}

export interface ApiResponseReviewReceiptResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: ReviewReceiptResponse;
}

export interface ReviewReceiptResponse {
  receiptUrl: string[];
}

export interface ReviewMediaRequest {
  mediaType: string[];
}

export interface ApiResponseReviewMediaResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: ReviewMediaResponse;
}

export interface ReviewMediaResponse {
  mediaUrl: string[];
}

export interface ApiResponseString {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: string;
}

export interface ApiResponseVoid {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: any;
}

export interface ApiResponseReviewLikeResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: ReviewLikeResponse;
}

export interface ReviewLikeResponse {
  /** @format int64 */
  likeCount: number;
}

export interface ApiResponseToggleLikeResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: ToggleLikeResponse;
}

export interface ToggleLikeResponse {
  isLiked: boolean;
}

export interface CustomerProfileImageRequest {
  mediaType: string;
}

export interface ApiResponseCustomerProfileImageResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: CustomerProfileImageResponse;
}

export interface CustomerProfileImageResponse {
  profileImageUrl: string;
}

export interface ApiResponseCreatorRegisterCompleteResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: CreatorRegisterCompleteResponse;
}

export interface CreatorRegisterCompleteResponse {
  /**
   * 로그인 상태
   * @example "LOGIN"
   */
  loginStatus: 'LOGIN' | 'INFO_REQUIRED' | 'SNS_REQUIRED' | 'REGISTER';
}

export interface CampaignMediaRequest {
  mediaType: string[];
}

export interface ApiResponseCampaignMediaResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: CampaignMediaResponse;
}

export interface CampaignMediaResponse {
  mediaUrl: string[];
}

export interface SecondReviewUploadRequest {
  /**
   * 콘텐츠 포맷
   * @example "INSTA_REELS"
   */
  contentType: 'INSTA_REELS' | 'TIKTOK_VIDEO' | 'INSTA_POST';
  /**
   * 캠페인 리뷰 이미지 URL 리스트
   * @maxItems 2147483647
   * @minItems 1
   * @example ["https://s3.example.com/review/img1.jpg","https://s3.example.com/review/img2.jpg"]
   */
  imageUrls: string[];
  /**
   * 캡션+해시태그 (최대 2200자)
   * @minLength 0
   * @maxLength 2200
   * @example "Hydrating mask review 💧 #hydration #mask #skincare"
   */
  captionWithHashtags: string;
  /**
   * 게시물 URL
   * @minLength 0
   * @maxLength 1024
   * @example "https://www.instagram.com/p/XXXXXXXX/"
   */
  postUrl: string;
}

export interface ApiResponseReviewUploadResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: ReviewUploadResponse;
}

export interface ReviewUploadResponse {
  /**
   * 생성된 리뷰 ID
   * @format int64
   * @example 1
   */
  reviewId: number;
}

export interface FirstReviewUploadRequest {
  /**
   * 콘텐츠 포맷
   * @example "INSTA_REELS"
   */
  contentType: 'INSTA_REELS' | 'TIKTOK_VIDEO' | 'INSTA_POST';
  /**
   * 캠페인 리뷰 이미지 URL 리스트 (최소 1장)
   * @maxItems 2147483647
   * @minItems 1
   * @example ["https://s3.example.com/review/img1.jpg","https://s3.example.com/review/img2.jpg"]
   */
  imageUrls: string[];
  /**
   * 캡션 + 해시태그 (최대 2200자)
   * @minLength 0
   * @maxLength 2200
   * @example "Hydrating mask review 💧 #hydration #mask #skincare"
   */
  captionWithHashtags: string;
}

export interface BrandProfileImageRequest {
  mediaType: string;
}

export interface ApiResponseBrandProfileImageResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: BrandProfileImageResponse;
}

export interface BrandProfileImageResponse {
  profileImageUrl: string;
}

export interface BrandNoteRevisionRequest {
  /** @minLength 1 */
  brandNote: string;
}

export interface ApiResponseBrandNoteRevisionResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: BrandNoteRevisionResponse;
}

export interface BrandNoteRevisionResponse {
  /** @example "태그를 더 추가하세요." */
  brandNote: string;
  /** @example "DRAFT" */
  status: 'DRAFT' | 'PUBLISHED';
  /**
   * @format date-time
   * @example "2025-09-18T10:30:00Z"
   */
  revisionRequestedAt: string;
}

export interface CampaignPublishRequest {
  /** @minLength 1 */
  campaignTitle: string;
  language: 'EN' | 'ES';
  campaignType: 'GIVEAWAY' | 'CONTENTS' | 'EXCLUSIVE';
  campaignProductType: 'SKINCARE' | 'SUNCARE' | 'MAKEUP';
  /**
   * @maxItems 5
   * @minItems 0
   */
  topImages: CampaignImageRequest[];
  /**
   * @maxItems 15
   * @minItems 0
   */
  bottomImages?: CampaignImageRequest[];
  /** @format date-time */
  applyStartDate: string;
  /** @format date-time */
  applyDeadline: string;
  /** @format date-time */
  creatorAnnouncementDate: string;
  /** @format date-time */
  reviewSubmissionDeadline: string;
  /**
   * @format int32
   * @min 1
   */
  recruitmentNumber: number;
  /** @minItems 1 */
  participationRewards: string[];
  /** @minItems 1 */
  deliverableRequirements: string[];
  eligibilityRequirements?: string[];
  firstContentType: 'INSTA_REELS' | 'TIKTOK_VIDEO' | 'INSTA_POST';
  secondContentType: 'INSTA_REELS' | 'TIKTOK_VIDEO' | 'INSTA_POST';
}

export interface RoleUpdateRequest {
  role: 'PENDING' | 'CUSTOMER' | 'CREATOR' | 'BRAND' | 'ADMIN';
}

export interface ApiResponseRoleUpdateResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: RoleUpdateResponse;
}

export interface RoleUpdateResponse {
  accessToken?: string;
  refreshToken?: string;
  role?: 'PENDING' | 'CUSTOMER' | 'CREATOR' | 'BRAND' | 'ADMIN';
  /** @format int64 */
  userId?: number;
  loginStatus?: 'LOGIN' | 'INFO_REQUIRED' | 'SNS_REQUIRED' | 'REGISTER';
}

export interface TestLoginRequest {
  /** @format int64 */
  userId: number;
}

export interface ApiResponseJwtLoginResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: JwtLoginResponse;
}

export interface JwtLoginResponse {
  accessToken?: string;
  refreshToken?: string;
}

export interface CustomerMyPageRequest {
  /**
   * Customer 프로필 이미지 url
   * @example "https://s3.example.com/profile/us-user-1001.jpg"
   */
  profileImageUrl?: string;
  /**
   * @minLength 1
   * @maxLength 15
   * @pattern ^[a-z0-9._]+$
   */
  customerName?: string;
  /**
   * 생년월일
   * @format date
   * @example "2002-08-21"
   */
  birthDate?: string;
  /**
   * 성별
   * @example "MALE"
   */
  gender?: 'MALE' | 'FEMALE' | 'NON_BINARY' | 'PREFER_NOT_TO_SAY';
  /**
   * 이름
   * @minLength 1
   * @example "Jessica"
   */
  firstName: string;
  /**
   * 성
   * @minLength 1
   * @example "Anderson"
   */
  lastName: string;
  /**
   * 국가번호 (선택, 최대 5자)
   * @minLength 0
   * @maxLength 5
   * @example "+1"
   */
  countryCode?: string;
  /**
   * 전화번호 (선택, 최대 20자)
   * @minLength 0
   * @maxLength 20
   * @example "01012345678"
   */
  phoneNumber?: string;
  /**
   * 콘텐츠 언어
   * @example "ENGLISH"
   */
  contentLanguage?: 'ENGLISH' | 'SPANISH' | 'ENGLISH_AND_SPANISH';
  /**
   * 구글 로그인시 받은 email
   * @example "lococo@example.com"
   */
  email?: string;
  /**
   * 국가
   * @example "US"
   */
  country?: string;
  /**
   * State (텍스트 최대 20자)
   * @minLength 0
   * @maxLength 20
   * @example "CA"
   */
  stateOrProvince?: string;
  /**
   * City/Town (텍스트, 최대 20자)
   * @minLength 0
   * @maxLength 20
   * @example "San Francisco"
   */
  cityOrTown?: string;
  /**
   * Address Line 1 (최대 30자)
   * @minLength 0
   * @maxLength 30
   * @example 1234
   */
  addressLine1?: string;
  /**
   * Address Line 2 (최대 30자)
   * @minLength 0
   * @maxLength 30
   * @example "Apt 5B"
   */
  addressLine2?: string;
  /**
   * ZIP Code (최대 10자)
   * @minLength 0
   * @maxLength 10
   * @example 94103
   */
  postalCode?: string;
  /**
   * 피부 타입 (드롭다운 6개)
   * @example "COMBINATION"
   */
  skinType?: 'NORMAL' | 'DRY' | 'OILY' | 'COMBINATION' | 'SENSITIVE' | 'OTHER';
  /**
   * 피부 톤 (드롭다운 20개)
   * @example "SHADE_12"
   */
  skinTone?:
    | 'SHADE_1'
    | 'SHADE_2'
    | 'SHADE_3'
    | 'SHADE_4'
    | 'SHADE_5'
    | 'SHADE_6'
    | 'SHADE_7'
    | 'SHADE_8'
    | 'SHADE_9'
    | 'SHADE_10'
    | 'SHADE_11'
    | 'SHADE_12'
    | 'SHADE_13'
    | 'SHADE_14'
    | 'SHADE_15'
    | 'SHADE_16'
    | 'SHADE_17'
    | 'SHADE_18'
    | 'SHADE_19'
    | 'SHADE_20';
}

export interface CreatorInfoUpdateRequest {
  /**
   * @minLength 1
   * @maxLength 15
   * @pattern ^[a-z0-9._]+$
   */
  creatorName: string;
  /**
   * 생년월일
   * @minLength 1
   * @example "2002-08-21"
   */
  birthDate: string;
  /**
   * 성별
   * @example "MALE"
   */
  gender: 'MALE' | 'FEMALE' | 'NON_BINARY' | 'PREFER_NOT_TO_SAY';
  /**
   * 이름
   * @minLength 1
   * @example "Jessica"
   */
  firstName: string;
  /**
   * 성
   * @minLength 1
   * @example "Anderson"
   */
  lastName: string;
  /**
   * 국가번호 (선택, 최대 5자)
   * @minLength 0
   * @maxLength 5
   * @example "+1"
   */
  countryCode: string;
  /**
   * 전화번호 (선택, 최대 20자)
   * @minLength 0
   * @maxLength 20
   * @example "01012345678"
   */
  phoneNumber: string;
  /**
   * 콘텐츠 언어
   * @example "ENGLISH"
   */
  contentLanguage: 'ENGLISH' | 'SPANISH' | 'ENGLISH_AND_SPANISH';
  /**
   * 국가
   * @minLength 1
   * @example "US"
   */
  country: string;
  /**
   * State (텍스트 최대 20자)
   * @minLength 0
   * @maxLength 20
   * @example "CA"
   */
  stateOrProvince: string;
  /**
   * City/Town (텍스트, 최대 20자)
   * @minLength 0
   * @maxLength 20
   * @example "San Francisco"
   */
  cityOrTown: string;
  /**
   * Address Line 1 (최대 30자)
   * @minLength 0
   * @maxLength 30
   * @example 1234
   */
  addressLine1: string;
  /**
   * Address Line 2 (최대 30자)
   * @minLength 0
   * @maxLength 30
   * @example "Apt 5B"
   */
  addressLine2?: string;
  /**
   * ZIP Code (최대 10자)
   * @minLength 0
   * @maxLength 10
   * @example 94103
   */
  postalCode?: string;
  /**
   * 피부 타입 (드롭다운 6개)
   * @example "COMBINATION"
   */
  skinType: 'NORMAL' | 'DRY' | 'OILY' | 'COMBINATION' | 'SENSITIVE' | 'OTHER';
  /**
   * 피부 톤 (드롭다운 20개)
   * @example "SHADE_12"
   */
  skinTone:
    | 'SHADE_1'
    | 'SHADE_2'
    | 'SHADE_3'
    | 'SHADE_4'
    | 'SHADE_5'
    | 'SHADE_6'
    | 'SHADE_7'
    | 'SHADE_8'
    | 'SHADE_9'
    | 'SHADE_10'
    | 'SHADE_11'
    | 'SHADE_12'
    | 'SHADE_13'
    | 'SHADE_14'
    | 'SHADE_15'
    | 'SHADE_16'
    | 'SHADE_17'
    | 'SHADE_18'
    | 'SHADE_19'
    | 'SHADE_20';
}

export interface CreatorMyPageUpdateRequest {
  /**
   * 크리에이터 이름 (최대 30자, 영문/숫자/마침표/언더바만)
   * @minLength 0
   * @maxLength 15
   * @pattern ^[a-z0-9._]+$
   * @example "hun_cozyboy.01"
   */
  creatorName?: string;
  /**
   * 이름
   * @example "Jessica"
   */
  firstName?: string;
  /**
   * 성
   * @example "Anderson"
   */
  lastName?: string;
  /**
   * 국가번호 (선택, 최대 5자)
   * @minLength 0
   * @maxLength 5
   * @example "+1"
   */
  countryCode?: string;
  /**
   * 전화번호 (선택, 최대 20자)
   * @minLength 0
   * @maxLength 20
   * @example "01012345678"
   */
  phoneNumber?: string;
  /**
   * 국가
   * @example "US"
   */
  country?: string;
  /**
   * State (텍스트 최대 20자)
   * @minLength 0
   * @maxLength 20
   * @example "CA"
   */
  stateOrProvince?: string;
  /**
   * City/Town (텍스트, 최대 20자)
   * @minLength 0
   * @maxLength 20
   * @example "San Francisco"
   */
  cityOrTown?: string;
  /**
   * Address Line 1 (최대 30자)
   * @minLength 0
   * @maxLength 30
   * @example 1234
   */
  addressLine1?: string;
  /**
   * Address Line 2 (최대 30자)
   * @minLength 0
   * @maxLength 30
   * @example "Apt 5B"
   */
  addressLine2?: string;
  /**
   * ZIP Code (최대 10자)
   * @minLength 0
   * @maxLength 10
   * @example 94103
   */
  postalCode?: string;
  /**
   * 피부 타입 (드롭다운 6개)
   * @example "COMBINATION"
   */
  skinType?: 'NORMAL' | 'DRY' | 'OILY' | 'COMBINATION' | 'SENSITIVE' | 'OTHER';
  /**
   * 피부 톤 (드롭다운 20개)
   * @example "SHADE_12"
   */
  skinTone?:
    | 'SHADE_1'
    | 'SHADE_2'
    | 'SHADE_3'
    | 'SHADE_4'
    | 'SHADE_5'
    | 'SHADE_6'
    | 'SHADE_7'
    | 'SHADE_8'
    | 'SHADE_9'
    | 'SHADE_10'
    | 'SHADE_11'
    | 'SHADE_12'
    | 'SHADE_13'
    | 'SHADE_14'
    | 'SHADE_15'
    | 'SHADE_16'
    | 'SHADE_17'
    | 'SHADE_18'
    | 'SHADE_19'
    | 'SHADE_20';
  /**
   * 콘텐츠 언어
   * @example "ENGLISH"
   */
  contentLanguage?: 'ENGLISH' | 'SPANISH' | 'ENGLISH_AND_SPANISH';
}

export interface ApiResponseCreatorMyPageResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: CreatorMyPageResponse;
}

export interface CreatorAddressInfo {
  /**
   * 국가(드롭다운 선택)
   * @example "US"
   */
  country: string;
  /**
   * 주/도/광역시 (최대 20자)
   * @example "CA"
   */
  stateOrProvince: string;
  /**
   * City / Town (최대 20자)
   * @example "San Francisco"
   */
  cityOrTown: string;
  /**
   * Address Line 1 (텍스트, 최대 30자)
   * @example 1234
   */
  addressLine1: string;
  /**
   * Address Line 2 (텍스트, 최대 30자)
   * @example "Apt 5B"
   */
  addressLine2?: string;
  /**
   * ZIP Code (최대 10자, 미국은 필수)
   * @example 94103
   */
  postalCode?: string;
}

export interface CreatorBasicInfo {
  /**
   * 프로필 이미지 URL
   * @example "https://s3.example.com/profile/us-user-1001.jpg"
   */
  profileImageUrl: string;
  /**
   * 크리에이터 이름
   * @example "huncozyboy"
   */
  creatorName: string;
  /**
   * 이름
   * @example "Jessica"
   */
  firstName: string;
  /**
   * 성
   * @example "Anderson"
   */
  lastName: string;
  /**
   * 생년월일
   * @format date
   * @example "2002-08-21"
   */
  birthDate: string;
  /**
   * 성별
   * @example "MALE"
   */
  gender: 'MALE' | 'FEMALE' | 'NON_BINARY' | 'PREFER_NOT_TO_SAY';
}

export interface CreatorContactInfo {
  /**
   * Email
   * @example "huncozyboy@example.com"
   */
  email: string;
  /**
   * 국가번호
   * @example "+82"
   */
  countryCode: string;
  /**
   * 전화번호 (최대 15자)
   * @example "010123456789"
   */
  phoneNumber: string;
}

export interface CreatorFaceInfo {
  /**
   * 피부 타입 (드롭다운 6개)
   * @example "COMBINATION"
   */
  skinType: 'NORMAL' | 'DRY' | 'OILY' | 'COMBINATION' | 'SENSITIVE' | 'OTHER';
  /**
   * 피부톤 (드롭다운 20개)
   * @example "SHADE_1"
   */
  skinTone:
    | 'SHADE_1'
    | 'SHADE_2'
    | 'SHADE_3'
    | 'SHADE_4'
    | 'SHADE_5'
    | 'SHADE_6'
    | 'SHADE_7'
    | 'SHADE_8'
    | 'SHADE_9'
    | 'SHADE_10'
    | 'SHADE_11'
    | 'SHADE_12'
    | 'SHADE_13'
    | 'SHADE_14'
    | 'SHADE_15'
    | 'SHADE_16'
    | 'SHADE_17'
    | 'SHADE_18'
    | 'SHADE_19'
    | 'SHADE_20';
}

export interface CreatorMyPageResponse {
  /**
   * 크리에이터 ID
   * @format int64
   * @example 3
   */
  creatorId: number;
  /** 기본 정보 */
  creatorBasicInfo: CreatorBasicInfo;
  /** 연락처 정보 */
  creatorContactInfo: CreatorContactInfo;
  /** 주소 정보 */
  creatorAddressInfo: CreatorAddressInfo;
  /** 피부 정보 */
  creatorFaceInfo: CreatorFaceInfo;
  /**
   * 크리에이터 타입
   * @example "VIP"
   */
  creatorType: 'NORMAL' | 'PRO';
  /**
   * 크리에이터 승인 상태
   * @example "NOT_APPROVED"
   */
  creatorStatus: 'NOT_APPROVED' | 'APPROVED';
  /**
   * 콘텐츠 언어
   * @example "ENGLISH"
   */
  contentLanguage: 'ENGLISH' | 'SPANISH' | 'ENGLISH_AND_SPANISH';
}

export interface BrandInfoUpdateRequest {
  /**
   * @minLength 0
   * @maxLength 15
   */
  brandName: string;
  /**
   * @minLength 0
   * @maxLength 10
   */
  managerName: string;
  /**
   * @minLength 0
   * @maxLength 10
   */
  managerPosition: string;
  /**
   * @minLength 0
   * @maxLength 10
   * @pattern ^[0-9]+$
   */
  phoneNumber: string;
  /**
   * @minLength 0
   * @maxLength 30
   */
  roadAddress: string;
  /**
   * @minLength 0
   * @maxLength 30
   */
  addressDetail: string;
}

export interface BrandMyPageUpdateRequest {
  /** 프로필 이미지 URL */
  profileImageUrl?: string;
  /**
   * @minLength 0
   * @maxLength 15
   */
  brandName?: string;
  /**
   * @minLength 0
   * @maxLength 10
   */
  managerName?: string;
  /**
   * @minLength 0
   * @maxLength 10
   * @pattern ^[0-9]+$
   */
  phoneNumber?: string;
  /**
   * @minLength 0
   * @maxLength 30
   */
  roadAddress?: string;
  /**
   * @minLength 0
   * @maxLength 30
   */
  addressDetail?: string;
}

export interface CreatorApproveRequest {
  creatorCampaignIds?: number[];
}

export interface ApiResponseCreatorApprovedResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: CreatorApprovedResponse;
}

export interface CreatorApprovedResponse {
  /**
   * 현재 승인된 크리에이터 수
   * @format int32
   * @example 1
   */
  currentApprovedNumber: number;
  /**
   * 총 모집 인원
   * @format int32
   * @example 10
   */
  recruitmentNumber: number;
}

export interface ApiResponseListTrendsYoutubeResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: TrendsYoutubeResponse[];
}

export interface TrendsYoutubeResponse {
  /** @format int64 */
  id: number;
  topic: string;
  title: string;
  url: string;
  /** @format int32 */
  popularity: number;
  /** @format int64 */
  viewCount: number;
  /** @format date-time */
  uploadedAt: string;
}

export interface UserIdCheckRequest {
  /**
   * @minLength 1
   * @maxLength 15
   * @pattern ^[a-z0-9._]+$
   */
  userId: string;
}

export interface ApiResponseMainVideoReviewResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: MainVideoReviewResponse;
}

export interface MainVideoReview {
  /** @format int64 */
  reviewId: number;
  /** @format int64 */
  productId: number;
  brandName: string;
  productName: string;
  /** @format int32 */
  likeCount: number;
  /** @format int32 */
  rank: number;
  reviewVideo: string;
}

export interface MainVideoReviewResponse {
  videoReviews: MainVideoReview[];
}

export interface ApiResponseMainImageReviewResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: MainImageReviewResponse;
}

export interface MainImageReview {
  /** @format int64 */
  reviewId: number;
  /** @format int64 */
  productId: number;
  brandName: string;
  productName: string;
  /** @format int32 */
  likeCount: number;
  /** @format int32 */
  rank: number;
  reviewImage: string;
}

export interface MainImageReviewResponse {
  imageReviews: MainImageReview[];
}

export interface ApiResponseVideoReviewDetailResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: VideoReviewDetailResponse;
}

export interface VideoReviewDetailResponse {
  /** @format int64 */
  reviewId: number;
  brandName: string;
  productName: string;
  positiveContent: string;
  negativeContent: string;
  /** @format int64 */
  likeCount: number;
  videoUrls: string[];
  profileImageUrl?: string;
  authorName: string;
  /** @format double */
  rating: number;
  option?: string;
  /** @format date-time */
  uploadAt: string;
  productImageUrl: string;
  receiptImageUrl?: string;
  receiptUploaded: boolean;
  isLiked: boolean;
  /** @format int64 */
  productId: number;
}

export interface ApiResponseImageReviewDetailResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: ImageReviewDetailResponse;
}

export interface ImageReviewDetailResponse {
  /** @format int64 */
  reviewId: number;
  /** @format date-time */
  writtenTime: string;
  receiptUploaded: boolean;
  positiveComment: string;
  negativeComment: string;
  authorName: string;
  profileImageUrl?: string;
  /** @format double */
  rating: number;
  option?: string;
  /** @format int64 */
  likeCount: number;
  images: string[];
  brandName: string;
  productName: string;
  productImageUrl: string;
  receiptImageUrl?: string;
  isLiked: boolean;
  /** @format int64 */
  productId: number;
}

export interface ApiResponseVideoReviewProductDetailResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: VideoReviewProductDetailResponse;
}

export interface VideoReviewProductDetail {
  /** @format int64 */
  reviewId: number;
  brandName: string;
  productName: string;
  /** @format int32 */
  likeCount: number;
  videoUrl: string;
}

export interface VideoReviewProductDetailResponse {
  videoReviews: VideoReviewProductDetail[];
}

export interface ApiResponseImageReviewsProductDetailResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: ImageReviewsProductDetailResponse;
}

export interface ImageReviewProductDetailResponse {
  /** @format int64 */
  reviewId: number;
  /** @format date-time */
  writtenTime: string;
  receiptUploaded: boolean;
  positiveComment: string;
  negativeComment: string;
  profileImageUrl: string;
  authorName: string;
  /** @format int64 */
  authorId: number;
  /** @format double */
  rating: number;
  option: string;
  /** @format int32 */
  likeCount: number;
  images: string[];
  isLiked: boolean;
  isMine: boolean;
}

export interface ImageReviewsProductDetailResponse {
  isAdmin: boolean;
  imageReviews: ImageReviewProductDetailResponse[];
  pageInfo: PageableResponse;
}

export interface PageableResponse {
  /** @format int32 */
  pageNumber: number;
  /** @format int32 */
  pageSize: number;
  /** @format int32 */
  numberOfElements: number;
  isLast: boolean;
}

export interface ProductListItemResponse {
  /** @format int64 */
  productId: number;
  url: string;
  productName: string;
  brandName: string;
  unit: string;
  /** @format int64 */
  reviewCount: number;
  /** @format double */
  rating: number;
  isLiked: boolean;
}

export interface SearchProductsResponse {
  searchQuery: string;
  products: ProductListItemResponse[];
  pageInfo: PageableResponse;
}

export interface KeywordVideoReviewListResponse {
  searchQuery: string;
  reviews: VideoReviewResponse[];
  pageInfo: PageableResponse;
}

export interface VideoReviewResponse {
  /** @format int64 */
  reviewId: number;
  brandName: string;
  productName: string;
  /** @format int32 */
  likeCount: number;
  url: string;
}

export interface ImageReviewResponse {
  /** @format int64 */
  reviewId: number;
  brandName: string;
  productName: string;
  /** @format int32 */
  likeCount: number;
  url: string;
}

export interface KeywordImageReviewListResponse {
  searchQuery: string;
  reviews: ImageReviewResponse[];
  pageInfo: PageableResponse;
}

export interface ApiResponseProductDetailResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: ProductDetailResponse;
}

export interface ProductDetailResponse {
  /** @format int64 */
  productId: number;
  imageUrls: string[];
  productOptions: ProductOptionResponse[];
  productName: string;
  brandName: string;
  unit: string;
  /** @format int64 */
  reviewCount: number;
  /** @format double */
  rating: number;
  starPercent: RatingPercentResponse[];
  isLiked: boolean;
  /** @format int64 */
  normalPrice: number;
  productDetail: string;
  ingredients: string;
  oliveYoungUrl: string;
  q10Url: string;
  middleCategory: 'FACIAL_CARE' | 'FACE_MAKEUP' | 'EYE_MAKEUP' | 'LIP_MAKEUP';
  subCategory:
    | 'TONER'
    | 'MOISTURIZER'
    | 'ESSENCE_SERUM'
    | 'CREAM'
    | 'FOUNDATION'
    | 'POWDER_COMPACT'
    | 'CONCEALER'
    | 'BLUSHER'
    | 'EYEBROW'
    | 'EYESHADOW'
    | 'EYELINER'
    | 'LIPSTICK'
    | 'LIP_TINT';
}

export interface ProductOptionResponse {
  /** @format int64 */
  id: number;
  optionName: string;
}

export interface RatingPercentResponse {
  /** @format int32 */
  score: number;
  /** @format double */
  percent: number;
}

export interface ApiResponseProductYoutubeResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: ProductYoutubeResponse;
}

export interface ProductYoutubeResponse {
  youtubeUrls: string[];
}

export interface ProductsByCategoryResponse {
  searchQuery: string;
  parentCategoryName: string;
  products: ProductListItemResponse[];
  pageInfo: PageableResponse;
}

export interface VideoReviewListResponse {
  searchQuery: string;
  parentCategoryName: string;
  reviews: VideoReviewResponse[];
  pageInfo: PageableResponse;
}

export interface ImageReviewListResponse {
  searchQuery: string;
  parentCategoryName: string;
  reviews: ImageReviewResponse[];
  pageInfo: PageableResponse;
}

export interface ApiResponsePopularProductsByCategoryResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: PopularProductsByCategoryResponse;
}

export interface PopularProductsByCategoryResponse {
  searchQuery: string;
  products: ProductBasicResponse[];
  pageInfo: PageableResponse;
}

export interface ProductBasicResponse {
  /** @format int64 */
  productId: number;
  imageUrls: string[];
  productName: string;
  brandName: string;
  unit: string;
  /** @format int64 */
  reviewCount: number;
  /** @format double */
  rating: number;
  isLiked: boolean;
}

export interface ApiResponseNewProductsByCategoryResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: NewProductsByCategoryResponse;
}

export interface NewProductsByCategoryResponse {
  searchQuery: string;
  products: ProductBasicResponse[];
  pageInfo: PageableResponse;
}

export interface ApiResponseCustomerSnsConnectedResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: CustomerSnsConnectedResponse;
}

export interface CustomerSnsConnectedResponse {
  isInstaConnected: boolean;
  isTiktokConnected: boolean;
}

export interface ApiResponseCustomerMyPageResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: CustomerMyPageResponse;
}

export interface CustomerMyPageResponse {
  /**
   * Customer 프로필 이미지 url
   * @example "https://s3.example.com/profile/us-user-1001.jpg"
   */
  profileImageUrl?: string;
  /**
   * 구글 로그인시 받은 email
   * @example "lococo@example.com"
   */
  email: string;
  /**
   * 이름
   * @example "Jessica"
   */
  firstName: string;
  /**
   * 성
   * @example "Anderson"
   */
  lastName: string;
  /**
   * customer id
   * @example "hyoeun"
   */
  userName?: string;
  /**
   * 생년월일
   * @format date
   * @example "2002-08-21"
   */
  birthDate?: string;
  /**
   * 성별
   * @example "MALE"
   */
  gender?: 'MALE' | 'FEMALE' | 'NON_BINARY' | 'PREFER_NOT_TO_SAY';
  /**
   * 국가번호 (선택, 최대 5자)
   * @example "+1"
   */
  countryCode?: string;
  /**
   * 전화번호 (선택, 최대 20자)
   * @example "01012345678"
   */
  phoneNumber?: string;
  /**
   * 콘텐츠 언어
   * @example "ENGLISH"
   */
  contentLanguage?: 'ENGLISH' | 'SPANISH' | 'ENGLISH_AND_SPANISH';
  /**
   * 국가
   * @example "US"
   */
  country?: string;
  /**
   * State (텍스트 최대 20자)
   * @example "CA"
   */
  stateOrProvince?: string;
  /**
   * City/Town (텍스트, 최대 20자)
   * @example "San Francisco"
   */
  cityOrTown?: string;
  /**
   * Address Line 1 (최대 30자)
   * @example 1234
   */
  addressLine1?: string;
  /**
   * Address Line 2 (최대 30자)
   * @example "Apt 5B"
   */
  addressLine2?: string;
  /**
   * ZIP Code (최대 10자)
   * @example 94103
   */
  postalCode?: string;
  /**
   * 피부 타입 (드롭다운 6개)
   * @example "COMBINATION"
   */
  skinType?: 'NORMAL' | 'DRY' | 'OILY' | 'COMBINATION' | 'SENSITIVE' | 'OTHER';
  /**
   * 피부 톤 (드롭다운 20개)
   * @example "SHADE_12"
   */
  skinTone?:
    | 'SHADE_1'
    | 'SHADE_2'
    | 'SHADE_3'
    | 'SHADE_4'
    | 'SHADE_5'
    | 'SHADE_6'
    | 'SHADE_7'
    | 'SHADE_8'
    | 'SHADE_9'
    | 'SHADE_10'
    | 'SHADE_11'
    | 'SHADE_12'
    | 'SHADE_13'
    | 'SHADE_14'
    | 'SHADE_15'
    | 'SHADE_16'
    | 'SHADE_17'
    | 'SHADE_18'
    | 'SHADE_19'
    | 'SHADE_20';
}

export interface ApiResponseCreatorSnsConnectedResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: CreatorSnsConnectedResponse;
}

export interface CreatorSnsConnectedResponse {
  isInstaConnected: boolean;
  isTiktokConnected: boolean;
}

export interface ApiResponseCreatorInfoResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: CreatorInfoResponse;
}

export interface CreatorInfoResponse {
  /**
   * 크리에이터 이름
   * @example "huncozyboy"
   */
  creatorName: string;
  /**
   * 생년월일
   * @example "1995-03-15"
   */
  birthDate?: string;
  /**
   * 성별
   * @example "FEMALE"
   */
  gender?: 'MALE' | 'FEMALE' | 'NON_BINARY' | 'PREFER_NOT_TO_SAY';
  /**
   * 이름
   * @example "Jessica"
   */
  firstName: string;
  /**
   * 성
   * @example "Anderson"
   */
  lastName: string;
  /**
   * 국가번호
   * @example "+82"
   */
  countryCode: string;
  /**
   * 전화번호 (최대 15자)
   * @example "010123456789"
   */
  phoneNumber: string;
  /**
   * 콘텐츠 언어
   * @example "ENGLISH"
   */
  contentLanguage: 'ENGLISH' | 'SPANISH' | 'ENGLISH_AND_SPANISH';
  /**
   * 국가(드롭다운 선택)
   * @example "US"
   */
  country: string;
  /**
   * 주/도/광역시 (최대 20자)
   * @example "CA"
   */
  stateOrProvince: string;
  /**
   * City / Town (최대 20자)
   * @example "San Francisco"
   */
  cityOrTown: string;
  /**
   * Address Line 1 (텍스트, 최대 30자)
   * @example 1234
   */
  addressLine1: string;
  /**
   * Address Line 2 (텍스트, 최대 30자)
   * @example "Apt 5B"
   */
  addressLine2: string;
  /**
   * ZIP Code (최대 10자, 미국은 필수)
   * @example 94103
   */
  postalCode: string;
  /**
   * 피부 타입 (드롭다운 6개)
   * @example "COMBINATION"
   */
  skinType: 'NORMAL' | 'DRY' | 'OILY' | 'COMBINATION' | 'SENSITIVE' | 'OTHER';
  /**
   * 피부톤 (드롭다운 20개)
   * @example "SHADE_1"
   */
  skinTone:
    | 'SHADE_1'
    | 'SHADE_2'
    | 'SHADE_3'
    | 'SHADE_4'
    | 'SHADE_5'
    | 'SHADE_6'
    | 'SHADE_7'
    | 'SHADE_8'
    | 'SHADE_9'
    | 'SHADE_10'
    | 'SHADE_11'
    | 'SHADE_12'
    | 'SHADE_13'
    | 'SHADE_14'
    | 'SHADE_15'
    | 'SHADE_16'
    | 'SHADE_17'
    | 'SHADE_18'
    | 'SHADE_19'
    | 'SHADE_20';
}

export interface ApiResponseCreatorMyCampaignListResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: CreatorMyCampaignListResponse;
}

export interface CreatorMyCampaignListResponse {
  campaigns: CreatorMyCampaignResponse[];
  pageInfo: PageableResponse;
}

export interface CreatorMyCampaignResponse {
  /** 크리에이터 기본 정보 */
  basicInfo: CreatorBasicInfo;
  /**
   * 캠페인 ID
   * @format int64
   */
  campaignId?: number;
  /** 캠페인 이름 */
  title?: string;
  /**
   * 리뷰 제출 데드라인
   * @format date-time
   */
  reviewSubmissionDeadline?: string;
  /**
   * 소셜 클립 콘텐츠 종류
   * @example "INSTA_REELS"
   */
  contentType?: 'INSTA_REELS' | 'TIKTOK_VIDEO' | 'INSTA_POST';
  /**
   * 참여 상태
   * @example "APPROVED_ADDRESS_CONFIRMED"
   */
  participationStatus?:
    | 'PENDING'
    | 'APPROVED'
    | 'REJECTED'
    | 'APPROVED_ADDRESS_CONFIRMED'
    | 'APPROVED_FIRST_REVIEW_DONE'
    | 'APPROVED_REVISION_REQUESTED'
    | 'APPROVED_REVISION_CONFIRMED'
    | 'APPROVED_SECOND_REVIEW_DONE'
    | 'APPROVED_ADDRESS_NOT_CONFIRMED'
    | 'APPROVED_REVIEW_NOT_CONFIRMED';
}

export interface ApiResponseCreatorAddressInfo {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: CreatorAddressInfo;
}

export interface ApiResponseMainPageCampaignListResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: MainPageCampaignListResponse;
}

export interface MainPageCampaignListResponse {
  /** 메인 페이지 캠페인 목록 */
  campaigns: MainPageCampaignResponse[];
  /** 페이지 정보 */
  pageInfo: PageableResponse;
}

export interface MainPageCampaignResponse {
  /**
   * 캠페인 ID
   * @format int64
   * @example 1
   */
  campaignId: number;
  /**
   * 캠페인 타입
   * @example "GIVEAWAY"
   */
  campaignType: 'GIVEAWAY' | 'CONTENTS' | 'EXCLUSIVE';
  /**
   * 캠페인 언어
   * @example "ENG"
   */
  language: 'EN' | 'ES';
  /**
   * 브랜드명
   * @example "Anua"
   */
  brandName: string;
  /**
   * 캠페인 이미지 URL
   * @example "https://example.com/image.jpg"
   */
  campaignImageUrl: string;
  /**
   * 캠페인명
   * @example "Anua campaign"
   */
  campaignName: string;
  /**
   * 지원자 수
   * @format int32
   * @example 10
   */
  applicantNumber: number;
  /**
   * 모집 인원
   * @format int32
   * @example 10
   */
  recruitmentNumber: number;
  /**
   * 모집 마감 시간
   * @format date-time
   * @example "2024-12-31T23:59:59Z"
   */
  endTime: string;
  /**
   * 칩 상태
   * @example "default / disabled"
   */
  chipStatus: string;
}

export interface ApiResponseCampaignDetailResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: CampaignDetailResponse;
}

export interface CampaignDetailResponse {
  /** @format int64 */
  campaignId?: number;
  campaignType?: 'GIVEAWAY' | 'CONTENTS' | 'EXCLUSIVE';
  title?: string;
  brandImageUrl?: string;
  brandName?: string;
  language?: 'EN' | 'ES';
  /** @format date-time */
  applyStartDate?: string;
  /** @format date-time */
  applyDeadline?: string;
  /** @format date-time */
  creatorAnnouncementDate?: string;
  /** @format date-time */
  reviewSubmissionDeadline?: string;
  deliverableRequirements?: string[];
  participationRewards?: string[];
  eligibilityRequirements?: string[];
  topImages?: CampaignImageResponse[];
  bottomImages?: CampaignImageResponse[];
  campaignStatusCode?: string;
}

export interface ApiResponseMainPageUpcomingCampaignListResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: MainPageUpcomingCampaignListResponse;
}

export interface MainPageUpcomingCampaignListResponse {
  /** 메인 페이지 오픈 예정 캠페인 목록 */
  campaigns: MainPageUpcomingCampaignResponse[];
}

export interface MainPageUpcomingCampaignResponse {
  /**
   * 캠페인 ID
   * @format int64
   * @example 1
   */
  campaignId: number;
  /**
   * 캠페인 타입
   * @example "GIVEAWAY"
   */
  campaignType: 'GIVEAWAY' | 'CONTENTS' | 'EXCLUSIVE';
  /**
   * 캠페인 언어
   * @example "ENG"
   */
  language: 'EN' | 'ES';
  /**
   * 브랜드명
   * @example "Anua"
   */
  brandName: string;
  /**
   * 캠페인 이미지 URL
   * @example "https://example.com/image.jpg"
   */
  campaignImageUrl: string;
  /**
   * 캠페인명
   * @example "Anua campaign"
   */
  campaignName: string;
  /**
   * 지원자 수
   * @format int32
   * @example 10
   */
  applicantNumber: number;
  /**
   * 모집 인원
   * @format int32
   * @example 10
   */
  recruitmentNumber: number;
  /**
   * 시작 시간
   * @format date-time
   * @example "2024-12-31T10:00:00Z"
   */
  startTime: string;
  /**
   * 칩 상태
   * @example "disabled"
   */
  chipStatus: string;
}

export interface ApiResponseListCampaignParticipatedResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: CampaignParticipatedResponse[];
}

export interface CampaignParticipatedResponse {
  /**
   * 참여한 캠페인 ID
   * @format int64
   * @example 11
   */
  campaignId?: number;
  /**
   * 참여한 캠페인 제목
   * @example "Summer Hydration Campaign"
   */
  title: string;
}

export interface ApiResponseBrandMyPageResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: BrandMyPageResponse;
}

export interface BrandMyPageResponse {
  /** 프로필 이미지 URL */
  profileImageUrl?: string;
  /** 담당자 이름 */
  managerName: string;
  /** 브랜드 이메일 (구글 로그인 이메일) */
  email: string;
  /** 전화번호 */
  phoneNumber: string;
  /** 도로명 주소 */
  roadAddress: string;
  /** 상세 주소 */
  addressDetail: string;
}

export interface ApiResponseBrandProfileAndStatisticsResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: BrandProfileAndStatisticsResponse;
}

export interface BrandProfileAndStatisticsResponse {
  /**
   * 브랜드 id
   * @format int64
   * @example 1
   */
  brandId: number;
  /**
   * 브랜드 이름
   * @example "I WANT REST"
   */
  brandName: string;
  /**
   * 브랜드 이메일
   * @example "hello@gamil.com"
   */
  email: string;
  /** 브랜드 프로필 이미지 url */
  profileImageUrl: string;
  /** 브랜드가 개설한 캠페인의 통계 정보 */
  statistics: Statistics;
}

export interface Statistics {
  /**
   * 진행 중인 캠페인 수
   * @format int32
   * @example 1
   */
  ongoingCampaigns: number;
  /**
   * 종료 된 캠페인 수
   * @format int32
   * @example 1
   */
  completedCampaigns: number;
}

export interface ApiResponseBrandMyCampaignListResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: BrandMyCampaignListResponse;
}

export interface BrandMyCampaignListResponse {
  /** 브랜드 마이페이지 캠페인 리스트 */
  campaigns: BrandMyCampaignResponse[];
  /** 페이징 정보 */
  pageInfo: PageableResponse;
}

export interface BrandMyCampaignResponse {
  /**
   * 캠페인 id
   * @format int64
   * @example 1
   */
  id: number;
  /** 캠페인 대표 이미지 url */
  campaignImageUrl: string;
  /**
   * 캠페인 제목
   * @example 1
   */
  title: string;
  /**
   * 캠페인 마감기간
   * @format date-time
   * @example "2025-09-17T07:32:08.995Z"
   */
  applyDeadline: string;
  /**
   * 캠페인 지원자 수
   * @format int32
   * @example 1
   */
  applicantNumber: number;
  /**
   * 캠페인 모집인원 수
   * @format int32
   * @example 10
   */
  recruitmentNumber: number;
  /**
   * 캠페인 상태
   * @example "DRAFT"
   */
  campaignStatus: string;
}

export interface ApiResponseCampaignApplicantListResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: CampaignApplicantListResponse;
}

export interface CampaignApplicantListResponse {
  /** 캠페인에 지원한 크리에이터 목록 */
  applicants: CampaignApplicantResponse[];
  /** 페이징 정보 */
  pageInfo: PageableResponse;
}

export interface CampaignApplicantResponse {
  /**
   * 크리에이터 참여 정보 id
   * @format int64
   * @example 1
   */
  creatorCampaignId: number;
  /**
   * 크리에이터 id
   * @format int64
   * @example 1
   */
  creatorId: number;
  /** 크리에이터 프로필 이미지 */
  creatorProfileImageUrl: string;
  /**
   * 크리에이터 풀네임
   * @example "PARK JAMES"
   */
  creatorFullName: string;
  /**
   * 크리에이터 닉네임
   * @example "@rookie21"
   */
  creatorNickName: string;
  /**
   * 인스타그램 팔로워 수
   * @format int32
   * @example 111111111
   */
  instagramFollower: number;
  /**
   * 틱톡 팔로워 수
   * @format int32
   * @example 2222222
   */
  tiktokFollower: number;
  /**
   * 크리에이터가 참여한 총 캠페인 수
   * @format int32
   * @example 5
   */
  participationCount: number;
  /**
   * 크리에이터가 캠페인에 지원한 날짜
   * @format date-time
   * @example "2025-09-16T00:21:04Z"
   */
  appliedDate: string;
  /**
   * 승인 상태
   * @example "PENDING/APPROVED/REJECTED"
   */
  approveStatus: string;
}

export interface ApiResponseBrandMyCampaignInfoListResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: BrandMyCampaignInfoListResponse;
}

export interface BrandMyCampaignInfoListResponse {
  /** 캠페인 정보 리스트 */
  campaignInfos: BrandMyCampaignInfoResponse[];
}

export interface BrandMyCampaignInfoResponse {
  /**
   * 캠페인 id
   * @format int64
   * @example 1
   */
  campaignId: number;
  /**
   * 캠페인 제목
   * @example "나는야 멋진 캠페인"
   */
  campaignTitle: string;
  /**
   * 캠페인 시작일
   * @format date-time
   * @example "2025-09-16T00:21:04Z"
   */
  startDate: string;
  /**
   * 캠페인 종료일
   * @format date-time
   * @example "2025-09-16T00:21:04Z"
   */
  endDate: string;
}

export interface ApiResponseTikTokConnectionResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: TikTokConnectionResponse;
}

export interface TikTokConnectionResponse {
  connected?: boolean;
  tikTokUserId?: string;
}

export interface AfterLoginUserNameResponse {
  /** 로그인 후 표시되는 이름 */
  displayName: string;
}

export interface ApiResponseAfterLoginUserNameResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: AfterLoginUserNameResponse;
}

export interface ApiResponseLineLoginResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: LineLoginResponse;
}

export interface LineLoginResponse {
  accessToken: string;
  refreshToken: string;
  loginStatus: 'LOGIN' | 'INFO_REQUIRED' | 'SNS_REQUIRED' | 'REGISTER';
}

export interface ApiResponseGoogleLoginResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: GoogleLoginResponse;
}

export interface GoogleLoginResponse {
  accessToken: string;
  refreshToken: string;
  loginStatus: 'LOGIN' | 'INFO_REQUIRED' | 'SNS_REQUIRED' | 'REGISTER';
  role: 'PENDING' | 'CUSTOMER' | 'CREATOR' | 'BRAND' | 'ADMIN';
}
