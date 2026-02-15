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
  language?: "EN" | "ES";
  campaignType?: "GIVEAWAY" | "CONTENTS" | "EXCLUSIVE";
  campaignProductType?: "SKINCARE" | "SUNCARE" | "MAKEUP";
  /**
   * @maxItems 5
   * @minItems 0
   */
  thumbnailImages?: CampaignImageRequest[];
  /**
   * @maxItems 15
   * @minItems 0
   */
  detailImages?: CampaignImageRequest[];
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
  firstContentType?: "INSTA_REELS" | "TIKTOK_VIDEO" | "INSTA_POST";
  secondContentType?: "INSTA_REELS" | "TIKTOK_VIDEO" | "INSTA_POST";
}

export interface CampaignImageRequest {
  /** @minLength 1 */
  url: string;
  /**
   * @format int32
   * @min 0
   */
  displayOrder?: number;
  imageType: "THUMBNAIL" | "DETAIL";
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
  language: "EN" | "ES";
  /**
   * 캠페인 종류
   * @example "GIVEAWAY"
   */
  campaignType: "GIVEAWAY" | "CONTENTS" | "EXCLUSIVE";
  /**
   * 캠페인 상품 카테고리
   * @example "SKINCARE"
   */
  campaignProductType: "SKINCARE" | "SUNCARE" | "MAKEUP";
  /** 상단 이미지 리스트 */
  thumbnailImages: CampaignImageResponse[];
  /** 하단 이미지 리스트 */
  detailImages: CampaignImageResponse[];
  /**
   * 크리에이터 지원 시작 일시
   * @format date-time
   * @example "2024-12-15T23:59:59Z"
   */
  applyStartDate: string;
  /**
   * 크리에이터 지원 마감 일
   * @format date-time
   * @example "2024-12-15T23:59:59Z"
   */
  applyDeadline: string;
  /**
   * 크리에이터 발표 일시
   * @format date-time
   * @example "2024-12-15T23:59:59Z"
   */
  creatorAnnouncementDate: string;
  /**
   * 리뷰 제출 마감일
   * @format date-time
   * @example "2024-12-15T23:59:59Z"
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
  firstContentType: "INSTA_REELS" | "TIKTOK_VIDEO" | "INSTA_POST";
  /**
   * 두 번째 제출 컨텐츠
   * @example "TIKTOK_VIDEO"
   */
  secondContentType: "INSTA_REELS" | "TIKTOK_VIDEO" | "INSTA_POST";
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

export interface MediaPresignedUrlRequest {
  /** @minItems 1 */
  mediaType: string[];
}

export interface ApiResponseMediaPresignedUrlResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: MediaPresignedUrlResponse;
}

export interface MediaPresignedUrlResponse {
  /**
   * presignedUrl 리스트
   * @example ["https://s3.ap-northeast-2.amazonaws.com/...","https://s3.ap-northeast-2.amazonaws.com/..."]
   */
  mediaUrl: string[];
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

export interface CustomerInfoRegisterRequest {
  /**
   * @minLength 1
   * @maxLength 15
   * @pattern ^[a-z0-9._]+$
   */
  communityName: string;
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
  gender: "MALE" | "FEMALE" | "NON_BINARY" | "PREFER_NOT_TO_SAY";
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
   * 국가
   * @example "US"
   */
  country?: string;
  /**
   * 국가번호 (최대 5자)
   * @minLength 0
   * @maxLength 5
   * @example "+1"
   */
  countryCode: string;
  /**
   * 전화번호 (최대 20자)
   * @minLength 0
   * @maxLength 20
   * @example "01012345678"
   */
  phoneNumber: string;
  /**
   * 피부 타입 (드롭다운 6개)
   * @example "COMBINATION"
   */
  skinType: "NORMAL" | "DRY" | "OILY" | "COMBINATION" | "SENSITIVE" | "OTHER";
  /**
   * 피부 톤 (드롭다운 20개)
   * @example "SHADE_12"
   */
  skinTone:
    | "SHADE_1"
    | "SHADE_2"
    | "SHADE_3"
    | "SHADE_4"
    | "SHADE_5"
    | "SHADE_6"
    | "SHADE_7"
    | "SHADE_8"
    | "SHADE_9"
    | "SHADE_10"
    | "SHADE_11"
    | "SHADE_12"
    | "SHADE_13"
    | "SHADE_14"
    | "SHADE_15"
    | "SHADE_16"
    | "SHADE_17"
    | "SHADE_18"
    | "SHADE_19"
    | "SHADE_20";
}

export interface ApiResponseVoid {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: any;
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
  loginStatus: "LOGIN" | "INFO_REQUIRED" | "SNS_REQUIRED" | "REGISTER";
}

export interface CreatorProfileImageRequest {
  mediaType: string;
}

export interface ApiResponseCreatorProfileImageResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: CreatorProfileImageResponse;
}

export interface CreatorProfileImageResponse {
  /** 크리에이터 프로필 이미지 URL */
  profileImageUrl: string;
}

export interface SecondReviewUploadRequest {
  /**
   * 첫번째 2차 미디어 URL 리스트
   * @minItems 1
   */
  firstMediaUrls: string[];
  /**
   * 첫번째 2차 캡션+해시태그 (최대 2200자)
   * @minLength 0
   * @maxLength 2200
   * @example "Hydrating mask review 💧 #hydration #mask #skincare"
   */
  firstCaptionWithHashtags: string;
  /**
   * 첫번째 2차 게시물 URL
   * @minLength 0
   * @maxLength 1024
   * @example "https://www.instagram.com/p/XXXXXXXX/"
   */
  firstPostUrl: string;
  /** 두번째 2차 미디어 URL 리스트(옵션) */
  secondMediaUrls?: string[];
  /**
   * 두번째 2차 캡션+해시태그(옵션)
   * @minLength 0
   * @maxLength 2200
   */
  secondCaptionWithHashtags?: string;
  /**
   * 두번째 2차 게시물 URL(옵션)
   * @minLength 0
   * @maxLength 1024
   */
  secondPostUrl?: string;
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
   * 첫번째 1차 미디어 URL 리스트(이미지 또는 영상)
   * @example ["https://s3.example.com/review/2025/09/.../img1.jpg"]
   */
  firstMediaUrls?: string[];
  /**
   * 첫번째 캡션 + 해시태그 (최대 2200자)
   * @example "Hydrating mask review 💧 #hydration #mask #skincare"
   */
  firstCaptionWithHashtags?: string;
  /**
   * 두번째 1차 미디어 URL 리스트(선택)
   * @example ["https://s3.example.com/review/2025/09/.../img1.jpg"]
   */
  secondMediaUrls?: string[];
  /**
   * 두번째 1차 캡션+해시태그(선택)
   * @example "Hydrating mask review 💧 #hydration #mask #skincare"
   */
  secondCaptionWithHashtags?: string;
  /**
   * 첫번째 포스트 URL (베타 기능, 선택)
   * @example "https://www.instagram.com/p/ABC123/"
   */
  firstPostUrl?: string;
  /**
   * 두번째 포스트 URL (베타 기능, 선택)
   * @example "https://www.tiktok.com/@user/video/123456"
   */
  secondPostUrl?: string;
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
  status: "DRAFT" | "PUBLISHED";
  /**
   * @format date-time
   * @example "2025-09-18T10:30:00Z"
   */
  revisionRequestedAt: string;
}

export interface CampaignPublishRequest {
  /**
   * 캠페인 제목
   * @minLength 1
   * @example "로코코 신제품"
   */
  campaignTitle: string;
  /**
   * 캠페인 언어 설정
   * @example "EN 또는 ES"
   */
  language: "EN" | "ES";
  /**
   * 캠페인 타입
   * @example "GIVEAWAY 또는 CONTENTS 또는 EXCLUSIVE"
   */
  campaignType: "GIVEAWAY" | "CONTENTS" | "EXCLUSIVE";
  /**
   * 캠페인 상품 타입
   * @example "SKINCARE 또는 SUNCARE 또는 MAKEUP"
   */
  campaignProductType: "SKINCARE" | "SUNCARE" | "MAKEUP";
  /**
   * 썸네일 이미지 목록 (최소 1개, 최대 5개)
   * @maxItems 5
   * @minItems 0
   */
  thumbnailImages: CampaignImageRequest[];
  /**
   * 상세 이미지 목록 (최대 15개)
   * @maxItems 15
   * @minItems 0
   */
  detailImages?: CampaignImageRequest[];
  /**
   * 신청 시작일
   * @format date-time
   * @example "2024-12-01T00:00:00Z"
   */
  applyStartDate: string;
  /**
   * 신청 마감일
   * @format date-time
   * @example "2024-12-15T23:59:59Z"
   */
  applyDeadline: string;
  /**
   * 크리에이터 발표일
   * @format date-time
   * @example "2024-12-20T00:00:00Z"
   */
  creatorAnnouncementDate: string;
  /**
   * 리뷰 제출 마감일
   * @format date-time
   * @example "2025-01-15T23:59:59Z"
   */
  reviewSubmissionDeadline: string;
  /**
   * 모집 인원 수
   * @format int32
   * @min 1
   * @example 10
   */
  recruitmentNumber: number;
  /**
   * 참여 혜택 목록
   * @minItems 1
   * @example ["신제품 무료 제공","배송비 무료"]
   */
  participationRewards: string[];
  /**
   * 컨텐츠 요구사항 목록
   * @minItems 1
   * @example ["인스타그램 피드 포스팅","스토리 업로드"]
   */
  deliverableRequirements: string[];
  /**
   * 참여 자격 요건 목록
   * @example ["팔로워 1000명 이상","뷰티 관심분야"]
   */
  eligibilityRequirements?: string[];
  /**
   * 첫 번째 컨텐츠 플랫폼
   * @example "INSTAGRAM_REELS 또는 INSTAGRAM_POST 또는 TIKTOK_VIDEO"
   */
  firstContentType: "INSTA_REELS" | "TIKTOK_VIDEO" | "INSTA_POST";
  /**
   * 두 번째 컨텐츠 플랫폼
   * @example "INSTAGRAM_REELS 또는 INSTAGRAM_POST 또는 TIKTOK_VIDEO"
   */
  secondContentType?: "INSTA_REELS" | "TIKTOK_VIDEO" | "INSTA_POST";
}

export interface RoleUpdateRequest {
  role: "PENDING" | "CUSTOMER" | "CREATOR" | "BRAND" | "ADMIN";
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
  role?: "PENDING" | "CUSTOMER" | "CREATOR" | "BRAND" | "ADMIN";
  /** @format int64 */
  userId?: number;
  loginStatus?: "LOGIN" | "INFO_REQUIRED" | "SNS_REQUIRED" | "REGISTER";
}

export interface ProductImagePresignedUrlRequest {
  /**
   * @maxItems 5
   * @minItems 1
   */
  mediaType: string[];
}

export interface ApiResponseProductImageResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: ProductImageResponse;
}

export interface ProductImageResponse {
  /**
   * presignedUrl 리스트
   * @example "https://s3.ap-northeast-2.amazonaws.com/..."
   */
  mediaUrl: string[];
}

export interface AdminProductCreateRequest {
  /**
   * 상품명 (최대 30자)
   * @minLength 0
   * @maxLength 200
   * @example "비타C 브라이트닝 세럼"
   */
  productName: string;
  /**
   * 상품 브랜드 id
   * @format int64
   * @example 1
   */
  productBrandId: number;
  /**
   * 가격
   * @example 19900
   */
  normalPrice: number;
  /**
   * 용량 (최대 20자)
   * @minLength 0
   * @maxLength 20
   * @example "30ml"
   */
  unit?: string;
  /**
   * 카테고리
   * @example "SERUM_AMPOULE"
   */
  category:
    | "ESSENCE_TONER"
    | "SERUM_AMPOULE"
    | "CREAM_LOTION"
    | "CLEANSER"
    | "SUNCARE"
    | "ETC";
  /**
   * 제품 제조 날짜
   * @format date-time
   */
  manufacturedAt: string;
  /**
   * 상품 상세 설명 (최대 5000자)
   * @minLength 0
   * @maxLength 5000
   */
  productDetail?: string;
  /**
   * 상품 성분 (최대 5000자)
   * @minLength 0
   * @maxLength 5000
   */
  ingredients?: string;
  /**
   * 상품 이미지 목록 (최소 1개, 최대 5개)
   * @maxItems 5
   * @minItems 0
   */
  images: ProductImageRequest[];
}

export interface ProductImageRequest {
  /** @minLength 1 */
  url: string;
  /**
   * @format int32
   * @min 0
   */
  displayOrder?: number;
}

export interface AdminProductCreateResponse {
  /**
   * 생성된 상품 id
   * @format int64
   */
  productId: number;
}

export interface ApiResponseAdminProductCreateResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: AdminProductCreateResponse;
}

export interface AdminLoginRequest {
  /** @minLength 1 */
  loginId: string;
  /** @minLength 1 */
  password: string;
}

export interface AdminLoginResponse {
  accessToken: string;
  refreshToken: string;
  /** @format int64 */
  userId: number;
  role: string;
}

export interface ApiResponseAdminLoginResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: AdminLoginResponse;
}

export interface ApproveCreatorsRequest {
  /** @minItems 1 */
  creatorIds: number[];
}

export interface AdminCampaignCreateRequest {
  brandName?: string;
  campaignTitle?: string;
  language?: "EN" | "ES";
  campaignType?: "GIVEAWAY" | "CONTENTS" | "EXCLUSIVE";
  campaignProductType?: "SKINCARE" | "SUNCARE" | "MAKEUP";
  /**
   * @maxItems 5
   * @minItems 0
   */
  thumbnailImages?: CampaignImageRequest[];
  /**
   * @maxItems 15
   * @minItems 0
   */
  detailImages?: CampaignImageRequest[];
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
  firstContentType?: "INSTA_REELS" | "TIKTOK_VIDEO" | "INSTA_POST";
  secondContentType?: "INSTA_REELS" | "TIKTOK_VIDEO" | "INSTA_POST";
}

export interface ApproveCampaignIdsRequest {
  /** @minItems 1 */
  campaignIds: number[];
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
   * @example "2002-08-21"
   */
  birthDate?: string;
  /**
   * 성별
   * @example "MALE"
   */
  gender?: "MALE" | "FEMALE" | "NON_BINARY" | "PREFER_NOT_TO_SAY";
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
  contentLanguage?: "ENGLISH" | "SPANISH" | "ENGLISH_AND_SPANISH";
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
   * Address Line 1 (최대 100자)
   * @minLength 0
   * @maxLength 100
   * @example 1234
   */
  addressLine1?: string;
  /**
   * Address Line 2 (최대 100자)
   * @minLength 0
   * @maxLength 100
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
  skinType?: "NORMAL" | "DRY" | "OILY" | "COMBINATION" | "SENSITIVE" | "OTHER";
  /**
   * 피부 톤 (드롭다운 20개)
   * @example "SHADE_12"
   */
  skinTone?:
    | "SHADE_1"
    | "SHADE_2"
    | "SHADE_3"
    | "SHADE_4"
    | "SHADE_5"
    | "SHADE_6"
    | "SHADE_7"
    | "SHADE_8"
    | "SHADE_9"
    | "SHADE_10"
    | "SHADE_11"
    | "SHADE_12"
    | "SHADE_13"
    | "SHADE_14"
    | "SHADE_15"
    | "SHADE_16"
    | "SHADE_17"
    | "SHADE_18"
    | "SHADE_19"
    | "SHADE_20";
}

export interface CreatorSnsLinkRequest {
  instaLink?: string;
  tiktokLink?: string;
}

export interface ApiResponseCreatorSnsLinkResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: CreatorSnsLinkResponse;
}

export interface CreatorSnsLinkResponse {
  instaLink: string;
  tiktokLink: string;
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
  gender: "MALE" | "FEMALE" | "NON_BINARY" | "PREFER_NOT_TO_SAY";
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
  contentLanguage: "ENGLISH" | "SPANISH" | "ENGLISH_AND_SPANISH";
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
   * Address Line 1 (최대 100자)
   * @minLength 0
   * @maxLength 100
   * @example 1234
   */
  addressLine1: string;
  /**
   * Address Line 2 (최대 100자)
   * @minLength 0
   * @maxLength 100
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
  skinType: "NORMAL" | "DRY" | "OILY" | "COMBINATION" | "SENSITIVE" | "OTHER";
  /**
   * 피부 톤 (드롭다운 20개)
   * @example "SHADE_12"
   */
  skinTone:
    | "SHADE_1"
    | "SHADE_2"
    | "SHADE_3"
    | "SHADE_4"
    | "SHADE_5"
    | "SHADE_6"
    | "SHADE_7"
    | "SHADE_8"
    | "SHADE_9"
    | "SHADE_10"
    | "SHADE_11"
    | "SHADE_12"
    | "SHADE_13"
    | "SHADE_14"
    | "SHADE_15"
    | "SHADE_16"
    | "SHADE_17"
    | "SHADE_18"
    | "SHADE_19"
    | "SHADE_20";
}

export interface CreatorMyPageUpdateRequest {
  /**
   * 크리에이터 프로필 이미지(발급받은 프리사인 URL)
   * @example "https://s3.amazonaws.com/bucket/..."
   */
  profileImageUrl?: string;
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
   * 생년월일(YYYY-MM-DD)
   * @pattern ^\d{4}-\d{2}-\d{2}$
   * @example "2001-10-19"
   */
  birthDate?: string;
  /**
   * 성별
   * @example "FEMALE"
   */
  gender?: "MALE" | "FEMALE" | "NON_BINARY" | "PREFER_NOT_TO_SAY";
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
   * Address Line 1 (최대 100자)
   * @minLength 0
   * @maxLength 100
   * @example 1234
   */
  addressLine1?: string;
  /**
   * Address Line 2 (최대 100자)
   * @minLength 0
   * @maxLength 100
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
  skinType?: "NORMAL" | "DRY" | "OILY" | "COMBINATION" | "SENSITIVE" | "OTHER";
  /**
   * 피부 톤 (드롭다운 20개)
   * @example "SHADE_12"
   */
  skinTone?:
    | "SHADE_1"
    | "SHADE_2"
    | "SHADE_3"
    | "SHADE_4"
    | "SHADE_5"
    | "SHADE_6"
    | "SHADE_7"
    | "SHADE_8"
    | "SHADE_9"
    | "SHADE_10"
    | "SHADE_11"
    | "SHADE_12"
    | "SHADE_13"
    | "SHADE_14"
    | "SHADE_15"
    | "SHADE_16"
    | "SHADE_17"
    | "SHADE_18"
    | "SHADE_19"
    | "SHADE_20";
  /**
   * 콘텐츠 언어
   * @example "ENGLISH"
   */
  contentLanguage?: "ENGLISH" | "SPANISH" | "ENGLISH_AND_SPANISH";
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
   * Address Line 1 (텍스트, 최대 100자)
   * @example 1234
   */
  addressLine1: string;
  /**
   * Address Line 2 (텍스트, 최대 100자)
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
   * 크리에이터 ID
   * @format int64
   * @example 123
   */
  creatorId: number;
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
   * 성별
   * @example "FEMALE"
   */
  gender: "MALE" | "FEMALE" | "NON_BINARY" | "PREFER_NOT_TO_SAY";
  /**
   * 생년월일(YYYY-MM-DD)
   * @example "1999-10-19"
   */
  birthDate: string;
  /**
   * 이메일
   * @example "chanel@gmail.com"
   */
  email: string;
  /**
   * 크리에이터 레벨
   * @example "PRO / NORMAL"
   */
  creatorLevel: string;
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
  skinType: "NORMAL" | "DRY" | "OILY" | "COMBINATION" | "SENSITIVE" | "OTHER";
  /**
   * 피부톤 (드롭다운 20개)
   * @example "SHADE_1"
   */
  skinTone:
    | "SHADE_1"
    | "SHADE_2"
    | "SHADE_3"
    | "SHADE_4"
    | "SHADE_5"
    | "SHADE_6"
    | "SHADE_7"
    | "SHADE_8"
    | "SHADE_9"
    | "SHADE_10"
    | "SHADE_11"
    | "SHADE_12"
    | "SHADE_13"
    | "SHADE_14"
    | "SHADE_15"
    | "SHADE_16"
    | "SHADE_17"
    | "SHADE_18"
    | "SHADE_19"
    | "SHADE_20";
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
  creatorType: "NORMAL" | "PRO";
  /**
   * 크리에이터 승인 상태
   * @example "NOT_APPROVED"
   */
  creatorStatus: "NOT_APPROVED" | "APPROVED";
  /**
   * 콘텐츠 언어
   * @example "ENGLISH"
   */
  contentLanguage: "ENGLISH" | "SPANISH" | "ENGLISH_AND_SPANISH";
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
   * @maxLength 11
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
   * @maxLength 11
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

export interface CampaignModifyRequest {
  brandName?: string;
  campaignTitle?: string;
  language?: "EN" | "ES";
  campaignType?: "GIVEAWAY" | "CONTENTS" | "EXCLUSIVE";
  campaignProductType?: "SKINCARE" | "SUNCARE" | "MAKEUP";
  /**
   * @maxItems 5
   * @minItems 0
   */
  thumbnailImages?: CampaignImageRequest[];
  /**
   * @maxItems 15
   * @minItems 0
   */
  detailImages?: CampaignImageRequest[];
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
  firstContentType?: "INSTA_REELS" | "TIKTOK_VIDEO" | "INSTA_POST";
  secondContentType?: "INSTA_REELS" | "TIKTOK_VIDEO" | "INSTA_POST";
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

export interface AfterLoginUserNameResponse {
  /** 로그인 후 표시되는 이름 */
  displayName: string;
  /**
   * 해당 사용자 역할
   * @example "BRAND"
   */
  role: "PENDING" | "CUSTOMER" | "CREATOR" | "BRAND" | "ADMIN";
}

export interface ApiResponseAfterLoginUserNameResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: AfterLoginUserNameResponse;
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
  /** @format int64 */
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
  /** @format int64 */
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
  /** @format date-time */
  uploadAt: string;
  productImageUrl: string;
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
  positiveComment: string;
  negativeComment: string;
  authorName: string;
  profileImageUrl?: string;
  /** @format double */
  rating: number;
  /** @format int64 */
  likeCount: number;
  images: string[];
  brandName: string;
  productName: string;
  productImageUrl: string;
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
  positiveComment: string;
  negativeComment: string;
  profileImageUrl: string;
  authorName: string;
  /** @format int64 */
  authorId: number;
  /** @format double */
  rating: number;
  /** @format int32 */
  likeCount: number;
  images: string[];
  isLiked: boolean;
  isMine: boolean;
  country?: string;
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
  /**
   * 전체 페이지 개수
   * @format int32
   */
  totalPages?: number;
}

export interface ApiResponseBrandVideoReviewListResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: BrandVideoReviewListResponse;
}

export interface BrandVideoReviewListResponse {
  brandName: string;
  reviews: VideoReviewResponse[];
  pageInfo: PageableResponse;
}

export interface VideoReviewResponse {
  /** @format int64 */
  reviewId: number;
  brandName: string;
  productName: string;
  /** @format int64 */
  likeCount: number;
  url: string;
}

export interface ApiResponseProductAndReviewCountResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: ProductAndReviewCountResponse;
}

export interface ProductAndReviewCountResponse {
  /** 브랜드명 (null이면 전체 조회) */
  brandName?: string;
  /**
   * 해당 브랜드의 상품 수
   * @format int32
   */
  productCount: number;
  /**
   * 해당 브랜드의 전체 리뷰 수
   * @format int32
   */
  reviewCount: number;
}

export interface ApiResponseBrandImageReviewListResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: BrandImageReviewListResponse;
}

export interface BrandImageReviewListResponse {
  brandName: string;
  reviews: ImageReviewResponse[];
  pageInfo: PageableResponse;
}

export interface ImageReviewResponse {
  /** @format int64 */
  reviewId: number;
  brandName: string;
  productName: string;
  /** @format int64 */
  likeCount: number;
  url: string;
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
  productName: string;
  brandName: string;
  unit: string;
  /** @format int64 */
  reviewCount: number;
  /** @format double */
  rating: number;
  starPercent: RatingPercentResponse[];
  normalPrice: number;
  productDetail: string;
  ingredients: string;
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

export interface ApiResponsePopularProductsByCategoryResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: PopularProductsByCategoryResponse;
}

export interface PopularProductsByCategoryResponse {
  products: SimpleProductResponse[];
}

export interface SimpleProductResponse {
  /** @format int64 */
  productId: number;
  imageUrl: string;
  productName: string;
  brandName: string;
  unit: string;
  /** @format int64 */
  reviewCount: number;
  /** @format double */
  avgRating: number;
}

export interface ApiResponseNewProductsByCategoryResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: NewProductsByCategoryResponse;
}

export interface NewProductsByCategoryResponse {
  products: SimpleProductResponse[];
}

export interface ApiResponseProductBrandNameListResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: ProductBrandNameListResponse;
}

export interface ProductBrandName {
  /**
   * 상품 브랜드 id
   * @format int64
   */
  productBrandId: number;
  /** 상품 브랜드명 */
  productBrandName: string;
}

export interface ProductBrandNameListResponse {
  /** 상품 브랜드 이름 리스트 */
  brandNames: ProductBrandName[];
}

export interface ApiResponseProductBrandInfoListResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: ProductBrandInfoListResponse;
}

export interface ProductBrandInfoListResponse {
  /** 상품 목록 */
  products: ProductBrandInfoResponse[];
  /** 페이지 정보 */
  pageInfo: PageableResponse;
}

export interface ProductBrandInfoResponse {
  /**
   * 상품 id
   * @format int64
   */
  productId: number;
  /** 상품 브랜드명 */
  productBrandName: string;
  /** 상품명 */
  productName: string;
  /** 용량 */
  unit: string;
  /**
   * 평균 별점
   * @format double
   */
  rating: number;
  /** 대표 이미지 URL */
  imageUrl: string;
  /**
   * 리뷰 수
   * @format int64
   */
  reviewCount: number;
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
   * @example "2002-08-21"
   */
  birthDate?: string;
  /**
   * 성별
   * @example "MALE"
   */
  gender?: "MALE" | "FEMALE" | "NON_BINARY" | "PREFER_NOT_TO_SAY";
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
  contentLanguage?: "ENGLISH" | "SPANISH" | "ENGLISH_AND_SPANISH";
  /**
   * 국가
   * @example "US"
   */
  country?: string;
  /**
   * 피부 타입 (드롭다운 6개)
   * @example "COMBINATION"
   */
  skinType?: "NORMAL" | "DRY" | "OILY" | "COMBINATION" | "SENSITIVE" | "OTHER";
  /**
   * 피부 톤 (드롭다운 20개)
   * @example "SHADE_12"
   */
  skinTone?:
    | "SHADE_1"
    | "SHADE_2"
    | "SHADE_3"
    | "SHADE_4"
    | "SHADE_5"
    | "SHADE_6"
    | "SHADE_7"
    | "SHADE_8"
    | "SHADE_9"
    | "SHADE_10"
    | "SHADE_11"
    | "SHADE_12"
    | "SHADE_13"
    | "SHADE_14"
    | "SHADE_15"
    | "SHADE_16"
    | "SHADE_17"
    | "SHADE_18"
    | "SHADE_19"
    | "SHADE_20";
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
  gender?: "MALE" | "FEMALE" | "NON_BINARY" | "PREFER_NOT_TO_SAY";
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
  contentLanguage: "ENGLISH" | "SPANISH" | "ENGLISH_AND_SPANISH";
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
   * Address Line 1 (텍스트, 최대 100자)
   * @example 1234
   */
  addressLine1: string;
  /**
   * Address Line 2 (텍스트, 최대 100자)
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
  skinType: "NORMAL" | "DRY" | "OILY" | "COMBINATION" | "SENSITIVE" | "OTHER";
  /**
   * 피부톤 (드롭다운 20개)
   * @example "SHADE_1"
   */
  skinTone:
    | "SHADE_1"
    | "SHADE_2"
    | "SHADE_3"
    | "SHADE_4"
    | "SHADE_5"
    | "SHADE_6"
    | "SHADE_7"
    | "SHADE_8"
    | "SHADE_9"
    | "SHADE_10"
    | "SHADE_11"
    | "SHADE_12"
    | "SHADE_13"
    | "SHADE_14"
    | "SHADE_15"
    | "SHADE_16"
    | "SHADE_17"
    | "SHADE_18"
    | "SHADE_19"
    | "SHADE_20";
}

export interface ApiResponseCreatorMyCampaignListResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: CreatorMyCampaignListResponse;
}

export interface CreatorMyCampaignListResponse {
  /** 크리에이터 기본 정보 */
  basicInfo: CreatorBasicInfo;
  campaigns: CreatorMyCampaignResponse[];
  pageInfo: PageableResponse;
}

export interface CreatorMyCampaignResponse {
  /**
   * 캠페인 ID
   * @format int64
   */
  campaignId?: number;
  /** 캠페인 이름 */
  title?: string;
  /**
   * 캠페인 대표 이미지 URL
   * @example "https://example.com/campaign-image.jpg"
   */
  campaignImageUrl?: string;
  /**
   * 리뷰 제출 데드라인
   * @format date-time
   */
  reviewSubmissionDeadline?: string;
  /**
   * 다음 액션
   * @example "UPLOAD_FIRST_REVIEW"
   */
  nextAction?:
    | "VIEW_DETAILS"
    | "CONFIRM_ADDRESS"
    | "UPLOAD_FIRST_REVIEW"
    | "REVISION_REQUESTED"
    | "VIEW_NOTES"
    | "UPLOAD_SECOND_REVIEW"
    | "VIEW_RESULTS"
    | "BRAND_APPROVAL_WAITING";
  /**
   * 참여 상태 (내부용)
   * @deprecated
   * @example "APPROVED_ADDRESS_CONFIRMED"
   */
  participationStatus?:
    | "PENDING"
    | "APPROVED"
    | "ACTIVE"
    | "COMPLETED"
    | "EXPIRED"
    | "REJECTED";
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
  campaignType: "GIVEAWAY" | "CONTENTS" | "EXCLUSIVE";
  /**
   * 캠페인 언어
   * @example "ENG"
   */
  language: "EN" | "ES";
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
  /**
   * 캠페인 id
   * @format int64
   * @example 1
   */
  campaignId: number;
  /**
   * 캠페인 종류
   * @example "GIVEAWAY"
   */
  campaignType: "GIVEAWAY" | "CONTENTS" | "EXCLUSIVE";
  /**
   * 캠페인 제목
   * @example "캠페인aa"
   */
  title: string;
  /**
   * 브랜드 이름
   * @example "브랜드A"
   */
  brandName: string;
  /**
   * 캠페인 언어
   * @example "EN / ES"
   */
  language: "EN" | "ES";
  /**
   * 캠페인 지원 시작 날짜
   * @format date-time
   * @example "2025-09-16T07:32:08.995Z"
   */
  applyStartDate: string;
  /**
   * 캠페인 지원 마감 날짜
   * @format date-time
   * @example "2025-09-16T07:32:08.995Z"
   */
  applyDeadline: string;
  /**
   * 크리에이터 발표 날짜
   * @format date-time
   * @example "2025-09-16T07:32:08.995Z"
   */
  creatorAnnouncementDate: string;
  /**
   * 2차 리뷰 제출 마감일
   * @format date-time
   * @example "2025-09-16T07:32:08.995Z"
   */
  reviewSubmissionDeadline: string;
  /** 크리에이터 컨텐츠 제출 요구사항 리스트 */
  deliverableRequirements: string[];
  /** 크리에이터 참요 조건 리스트 */
  participationRewards: string[];
  /** 크리에이터 자격 요건 리스트 */
  eligibilityRequirements: string[];
  /** 상단 이미지 목록 리스트 */
  thumbnailImages: CampaignImageResponse[];
  /** 하단 이미지 목록 리스트 */
  detailImages: CampaignImageResponse[];
  /** 사용자가 보는 현재 캠페인 상태 */
  userSpecificCampaignStatus: string;
  /**
   * 캠페인이 PRO 크리에이터 대상 캠페인인지 여부
   * @example true
   */
  isProCampaign: boolean;
  /**
   * 현재 상세페이지를 조회하고 있는 사용자의 권한 정보
   * @example "CUSTOMER , BRAND, CREATOR, ADMIN, null(비로그인 사용자"
   */
  currentUserRole: string;
  /**
   * 현재 사용자가 크리에이터라면, 크리에이터의 등급 정보
   * @example "NOT_APPROVED, PRO, NORMAL"
   */
  creatorRoleInfo: string;
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
  campaignType: "GIVEAWAY" | "CONTENTS" | "EXCLUSIVE";
  /**
   * 캠페인 언어
   * @example "ENG"
   */
  language: "EN" | "ES";
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

export interface ApiResponseCompletedReviewResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: CompletedReviewResponse;
}

export interface CompletedReviewContent {
  /**
   * 컨텐츠 타입
   * @example "INSTA_REELS"
   */
  contentType?: "INSTA_REELS" | "TIKTOK_VIDEO" | "INSTA_POST";
  /**
   * 최종 제출한 캡션과 해시태그
   * @example "수정해서 제출합니다 ㅎ"
   */
  captionWithHashtags?: string;
  /** 최종 제출한 미디어 URL 목록 */
  mediaUrls?: string[];
}

export interface CompletedReviewResponse {
  /**
   * 참여한 캠페인 ID
   * @format int64
   * @example 61
   */
  campaignId?: number;
  /**
   * 캠페인 이름
   * @example "신상품 홍보 캠페인"
   */
  campaignName?: string;
  /** 완료된 리뷰 컨텐츠 목록 */
  reviewContents?: CompletedReviewContent[];
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
  /** 컨텐츠 타입별 리뷰 상태 목록 */
  reviewContents?: ReviewContentStatus[];
}

export interface ReviewContentStatus {
  /**
   * 컨텐츠 타입
   * @example "INSTA_REELS"
   */
  contentType?: "INSTA_REELS" | "TIKTOK_VIDEO" | "INSTA_POST";
  /**
   * 현재 업로드해야 할 리뷰 라운드
   * @example "FIRST"
   */
  nowReviewRound?: "FIRST" | "SECOND";
  /**
   * 브랜드 노트(있다면 반환)
   * @example "Please focus on the product's hydrating effects."
   */
  brandNote?: string;
  /**
   * 브랜드 노트 작성 시간(있다면 반환)
   * @format date-time
   * @example "2023-10-05T14:48:00Z"
   */
  revisionRequestedAt?: string;
  /**
   * 기존 리뷰의 캡션과 해시태그(있다면 반환)
   * @example "Great product! #sponsored #beauty"
   */
  captionWithHashtags?: string;
  /** 기존 리뷰의 미디어 URL 목록(있다면 반환) */
  mediaUrls?: string[];
}

export interface ApiResponseCampaignParticipatedResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: CampaignParticipatedResponse;
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
  /** 브랜드명 */
  brandName: string;
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

export interface ApiResponseCreatorPerformanceResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  /** 캠페인별 크리에이터 성과 응답 */
  data?: CreatorPerformanceResponse;
}

/** 콘텐츠 성과 지표 */
export interface ContentMetrics {
  /**
   * 콘텐츠 타입
   * @example "INSTA_REELS"
   */
  contentType: "INSTA_REELS" | "TIKTOK_VIDEO" | "INSTA_POST";
  /**
   * 조회수
   * @format int64
   * @example 234
   */
  viewCount?: number;
  /**
   * 좋아요 수
   * @format int64
   * @example 2342
   */
  likeCount?: number;
  /**
   * 댓글 수
   * @format int64
   * @example 23423
   */
  commentCount?: number;
  /**
   * 공유 수
   * @format int64
   * @example 2342
   */
  shareCount?: number;
}

/** 크리에이터 정보 */
export interface CreatorInfo {
  /**
   * 크리에이터 ID
   * @format int64
   * @example 10
   */
  creatorId: number;
  /**
   * 크리에이터 풀 네임
   * @example "김지수"
   */
  creatorFullName: string;
  /**
   * 크리에이터 닉네임
   * @example "jisoo_creator"
   */
  creatorNickname: string;
  /**
   * 프로필 이미지 URL
   * @example "https://s3.example.com/profile/creator-10.jpg"
   */
  profileImageUrl: string;
  /**
   * 인스타그램 계정 링크
   * @example "https://www.instagram.com/_hyon.8x21?igsh=MWU4cTI5aw=="
   */
  instaLink?: string;
  /**
   * 틱톡 계정 링크
   * @example "https://www.tiktok.com/@hyoeun"
   */
  tiktokLink?: string;
}

/** 캠페인별 크리에이터 성과 응답 */
export interface CreatorPerformanceResponse {
  /**
   * 캠페인 ID
   * @format int64
   * @example 1
   */
  campaignId: number;
  /**
   * 캠페인 제목
   * @example "여름 신상 홍보 캠페인"
   */
  campaignTitle: string;
  /**
   * 1차 콘텐츠 플랫폼
   * @example "INSTA_REELS"
   */
  firstContentPlatform: "INSTA_REELS" | "TIKTOK_VIDEO" | "INSTA_POST";
  /**
   * 2차 콘텐츠 플랫폼
   * @example "TIKTOK_VIDEO"
   */
  secondContentPlatform?: "INSTA_REELS" | "TIKTOK_VIDEO" | "INSTA_POST";
  /** 크리에이터별 리뷰 성과 목록 */
  creators: CreatorReviewPerformance[];
  /** 페이지네이션 정보 */
  pageableResponse: PageableResponse;
}

/** 크리에이터별 리뷰 성과 */
export interface CreatorReviewPerformance {
  /** 크리에이터 정보 */
  creator: CreatorInfo;
  /** 리뷰 성과 목록 */
  reviews: ReviewPerformance[];
}

/** 리뷰 성과 정보 */
export interface ReviewPerformance {
  /**
   * 캠페인 리뷰 ID
   * @format int64
   * @example 100
   */
  campaignReviewId?: number;
  /**
   * 리뷰 라운드
   * @example "SECOND"
   */
  reviewRound: "FIRST" | "SECOND";
  /**
   * 리뷰 상태
   * @example "FINAL_UPLOADED"
   */
  reviewStatus:
    | "NOT_SUBMITTED"
    | "IN_PROGRESS"
    | "PENDING_REVISION"
    | "REVISING"
    | "FINAL_UPLOADED"
    | "UNKNOWN";
  /**
   * 게시물 URL
   * @example "https://www.instagram.com/p/ABC123/"
   */
  postUrl?: string;
  /** 콘텐츠 정보 */
  contents?: ContentMetrics;
  /**
   * 업로드 시간
   * @format date-time
   * @example "2024-01-15T10:30:00Z"
   */
  uploadedAt?: string;
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
   * @example 3845
   */
  creatorId: number;
  /** 크리에이터 기본 정보 */
  creator: CreatorInfo;
  /** 팔로워 수 정보 */
  followerCount: FollowerCount;
  /**
   * 크리에이터가 참여한 총 캠페인 수
   * @format int32
   * @example 10
   */
  participationCount: number;
  /**
   * 크리에이터가 캠페인에 지원한 날짜
   * @format date-time
   * @example "2025-09-27T12:45:01.455391"
   */
  appliedDate: string;
  /**
   * 승인 상태
   * @example "PENDING"
   */
  approveStatus: string;
}

export interface FollowerCount {
  /**
   * 인스타그램 팔로워 수
   * @format int32
   * @example 3859
   */
  instagramFollower: number;
  /**
   * 틱톡 팔로워 수
   * @format int32
   * @example 110089
   */
  tiktokFollower: number;
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

export interface ApiResponseListBrandIssuedCampaignResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: BrandIssuedCampaignResponse[];
}

export interface BrandIssuedCampaignResponse {
  /**
   * 생성한 캠페인 ID
   * @format int64
   * @example 11
   */
  campaignId: number;
  /**
   * 생성한 캠페인 제목
   * @example "Summer Hydration Campaign"
   */
  title: string;
  /**
   * 브랜드가 지정한 1번째 리뷰 컨텐츠 타입(캠페인 설정)
   * @example "INSTA_REELS"
   */
  firstContentPlatform: "INSTA_REELS" | "TIKTOK_VIDEO" | "INSTA_POST";
  /**
   * 브랜드가 지정한 2번째 리뷰 컨텐츠 타입(없을 수 있음)
   * @example "TIKTOK_VIDEO"
   */
  secondContentPlatform?: "INSTA_REELS" | "TIKTOK_VIDEO" | "INSTA_POST";
  /** 브랜드 노트(본인이 작성한 내용이 있다면 반환, 리스트에서는 보통 null) */
  brandNote?: string;
  /**
   * 브랜드 노트 작성 시간(본인이 작성한 내용이 있다면 반환, 리스트에서는 보통 null)
   * @format date-time
   * @example "2023-10-05T14:48:00Z"
   */
  revisionRequestedAt?: string;
}

export interface ApiResponseCampaignReviewDetailListResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: CampaignReviewDetailListResponse;
}

export interface CampaignReviewDetailListResponse {
  /**
   * 캠페인 리뷰 ID
   * @format int64
   * @example 11
   */
  campaignReviewId: number;
  /**
   * 캠페인 제목
   * @example "Summer Hydration Campaign"
   */
  title: string;
  /**
   * 조회한 리뷰 라운드 (몇차 리뷰인지)
   * @example "FIRST"
   */
  reviewRound: "FIRST" | "SECOND";
  /**
   * 콘텐츠 플랫폼
   * @example "INSTA_REELS"
   */
  contentType: "INSTA_REELS" | "TIKTOK_VIDEO" | "INSTA_POST";
  /** 크리에이터가 업로드한 리뷰 이미지 URL 리스트 */
  reviewImages: string[];
  /** 크리에이터가 작성한 캡션 및 해시태그 */
  captionWithHashtags: string;
  /** 브랜드 노트 내용 */
  brandNote?: string;
  /**
   * 브랜드 노트 검수 마감일
   * @format date-time
   */
  brandNoteDeadline: string;
  /** 2차 리뷰 완료 시 실제 게시물 URL */
  postUrl?: string;
  /** 크리에이터 정보 */
  creator: CreatorInfo;
  /**
   * 검토 요청 시간 (브랜드가 수정 요청한 시간)
   * @format date-time
   */
  reviewRequestedAt?: string;
}

export interface ApiResponseBrandDashboardCampaignListResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: BrandDashboardCampaignListResponse;
}

export interface BrandDashboardCampaignListResponse {
  /** 브랜드 대시보드 캠페인 리스트 */
  campaigns: BrandDashboardCampaignResponse[];
  /** 페이징 정보 */
  pageInfo: PageableResponse;
}

export interface BrandDashboardCampaignResponse {
  /**
   * 캠페인 ID
   * @format int64
   * @example 1
   */
  campaignId: number;
  /** 캠페인 썸네일 이미지 URL */
  thumbnailUrl: string;
  /**
   * 캠페인 제목
   * @example "Glow Serum Launch"
   */
  title: string;
  /**
   * 캠페인 시작일
   * @format date-time
   * @example "2026-12-28T00:00:00Z"
   */
  startDate: string;
  /**
   * 캠페인 종료일
   * @format date-time
   * @example "2026-12-28T23:59:59Z"
   */
  endDate: string;
  /**
   * 캠페인 상태
   * @example "RECRUITING"
   */
  status:
    | "DRAFT"
    | "WAITING_APPROVAL"
    | "OPEN_RESERVED"
    | "RECRUITING"
    | "RECRUITMENT_CLOSED"
    | "IN_REVIEW"
    | "COMPLETED";
  /**
   * 참여 크리에이터 수
   * @format int32
   * @example 100
   */
  participantCreatorCount: number;
  /**
   * 인스타그램 포스트 수
   * @format int64
   * @example 22
   */
  instaPostCount: number;
  /**
   * 인스타그램 릴스 수
   * @format int64
   * @example 22
   */
  instaReelsCount: number;
  /**
   * 틱톡 비디오 수
   * @format int64
   * @example 22
   */
  tiktokVideoCount: number;
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
  loginStatus: "LOGIN" | "INFO_REQUIRED" | "SNS_REQUIRED" | "REGISTER";
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
  loginStatus: "LOGIN" | "INFO_REQUIRED" | "SNS_REQUIRED" | "REGISTER";
  role: "PENDING" | "CUSTOMER" | "CREATOR" | "BRAND" | "ADMIN";
}

export interface AdminCreator {
  /** 크리에이터 기본 정보 */
  creator: CreatorInfo;
  /** 팔로워 수 정보 */
  followerCount: FollowerCount;
  /**
   * 크리에이터가 참여한 총 캠페인 수
   * @format int32
   * @example 10
   */
  participationCount: number;
  /**
   * 크리에이터가 가입 완료한 시간
   * @format date-time
   * @example "2025-09-27T12:45:01.455391"
   */
  signupCompletedDate: string;
  /**
   * 승인 상태
   * @example "PENDING"
   */
  approveStatus: string;
}

export interface AdminCreatorListResponse {
  /** 전체 크리에이터 목록 */
  creators: AdminCreator[];
  /**
   * 총 크리에이터 수
   * @format int64
   */
  totalCreatorCount: number;
  /** 페이징 정보 */
  pageInfo: PageableResponse;
}

export interface ApiResponseAdminCreatorListResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: AdminCreatorListResponse;
}

export interface AdminCampaignInfoResponse {
  /**
   * 캠페인 ID
   * @format int64
   * @example 1
   */
  campaignId: number;
  /**
   * 브랜드명
   * @example "로코코"
   */
  brandName: string;
  /**
   * 캠페인명
   * @example "신제품 체험단"
   */
  campaignName: string;
  /** 모집 현황 */
  recruitmentStatus: RecruitmentStatus;
  /**
   * 신청 시작일
   * @format date-time
   * @example "2024-12-01T00:00:00Z"
   */
  applyStartDate: string;
  /**
   * 신청 마감일
   * @format date-time
   * @example "2024-12-15T23:59:59Z"
   */
  applyDeadline: string;
  /**
   * 승인 상태
   * @example "PENDING 또는 APPROVED"
   */
  approvedStatus: string;
}

export interface AdminCampaignListResponse {
  /** 캠페인 목록 */
  campaigns: AdminCampaignInfoResponse[];
  /**
   * 총 캠페인 개수
   * @format int64
   */
  totalCampaignCount: number;
  /** 페이징 정보 */
  pageInfo: PageableResponse;
}

export interface ApiResponseAdminCampaignListResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: AdminCampaignListResponse;
}

export interface RecruitmentStatus {
  /**
   * 모집 인원
   * @format int32
   * @example 10
   */
  recruitmentNumber: number;
  /**
   * 신청자 수
   * @format int32
   * @example 5
   */
  applicantNumber: number;
}

export interface AdminCampaignBasicResponse {
  /**
   * 브랜드 이름
   * @example "LOCOCO"
   */
  brandName: string;
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
  language: "EN" | "ES";
  /**
   * 캠페인 종류
   * @example "GIVEAWAY"
   */
  campaignType: "GIVEAWAY" | "CONTENTS" | "EXCLUSIVE";
  /**
   * 캠페인 상품 카테고리
   * @example "SKINCARE"
   */
  campaignProductType: "SKINCARE" | "SUNCARE" | "MAKEUP";
  /** 상단 이미지 리스트 */
  thumbnailImages: CampaignImageResponse[];
  /** 하단 이미지 리스트 */
  detailImages: CampaignImageResponse[];
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
  firstContentType: "INSTA_REELS" | "TIKTOK_VIDEO" | "INSTA_POST";
  /**
   * 두 번째 제출 컨텐츠
   * @example "TIKTOK_VIDEO"
   */
  secondContentType: "INSTA_REELS" | "TIKTOK_VIDEO" | "INSTA_POST";
}

export interface ApiResponseAdminCampaignBasicResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: AdminCampaignBasicResponse;
}

export interface DeleteCreatorsRequest {
  /** @minItems 1 */
  creatorIds: number[];
}

export interface DeleteCampaignIdsRequest {
  /** @minItems 1 */
  campaignIds: number[];
}
