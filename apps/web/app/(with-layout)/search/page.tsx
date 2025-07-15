'use client';

import { ApiResponse } from 'app/api/api-response';
import { ProductSearchResponse } from 'app/api/product-response';
import {
  ApiReviewSearchResponse,
  VideoReviewResponse,
  ImageReviewResponse,
} from 'app/api/review-response';
import { SEARCH_OPTION } from 'constants/option';
import { CategoryNameEng, CategoryOptionEng } from 'types/category';
import { SearchOption } from 'types/option';
import { isValidCategoryKey, isValidCategoryOption } from 'utils/category';
import { Suspense, useMemo, useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import {
  useReviewSearch,
  useProductSearch,
  useCategoryProductSearch,
  useCategoryReviewVideoSearch,
  useCategoryReviewImageSearch,
} from '../../../hooks/use-headers-api';
import OptionSelector from './components/option-selector';
import SearchBreadCrumbSection from './components/search-bread-crumb-section';
import SearchProductsSection from './components/search-products-section';
import SearchReviewSection from './components/search-reviews-section';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
}

function PageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const PAGE_SIZE = 8;
  const PAGE_NUMBER = 0;

  useEffect(() => {
    setIsClient(true);
  }, []);

  const rawMiddle = searchParams.get('middleCategory') || '';
  const rawSub = searchParams.get('subCategory') || '';
  const rawSearchType = searchParams.get('searchType') || '';

  const middleCategory: CategoryNameEng | '' = isValidCategoryKey(rawMiddle)
    ? rawMiddle
    : '';
  const subCategory: CategoryOptionEng | '' =
    middleCategory && isValidCategoryOption(rawSub, middleCategory)
      ? rawSub
      : '';

  const keyword = searchParams.get('keyword') || '';
  const selectedTab: SearchOption = useMemo(() => {
    if (rawSearchType === 'REVIEW') return SEARCH_OPTION.REVIEW;
    return SEARCH_OPTION.PRODUCT;
  }, [rawSearchType]);

  // 검색바로 검색한 경우
  const {
    data: productSearchData,
    isLoading: isProductSearchLoading,
    isError: isProductSearchError,
  } = useProductSearch(
    keyword,
    PAGE_NUMBER,
    PAGE_SIZE,
    !!keyword && selectedTab === SEARCH_OPTION.PRODUCT
  );

  const {
    data: reviewVideoSearchData,
    isLoading: isReviewVideoSearchLoading,
    isError: isReviewVideoSearchError,
  } = useReviewSearch(
    keyword,
    'VIDEO',
    PAGE_NUMBER,
    PAGE_SIZE,
    !!keyword && selectedTab === SEARCH_OPTION.REVIEW
  );

  const {
    data: reviewImageSearchData,
    isLoading: isReviewImageSearchLoading,
    isError: isReviewImageSearchError,
  } = useReviewSearch(
    keyword,
    'IMAGE',
    PAGE_NUMBER,
    PAGE_SIZE,
    !!keyword && selectedTab === SEARCH_OPTION.REVIEW
  );

  // 카테고리로 검색한 경우
  const {
    data: categoryProductData,
    isLoading: isCategoryProductLoading,
    isError: isCategoryProductError,
  } = useCategoryProductSearch(
    middleCategory,
    subCategory,
    PAGE_NUMBER,
    PAGE_SIZE,
    !!middleCategory && selectedTab === SEARCH_OPTION.PRODUCT
  );

  const {
    data: categoryReviewVideoData,
    isLoading: isCategoryReviewVideoLoading,
    isError: isCategoryReviewVideoError,
  } = useCategoryReviewVideoSearch(
    middleCategory,
    subCategory,
    PAGE_NUMBER,
    PAGE_SIZE,
    !!middleCategory && selectedTab === SEARCH_OPTION.REVIEW
  );

  const {
    data: categoryReviewImageData,
    isLoading: isCategoryReviewImageLoading,
    isError: isCategoryReviewImageError,
  } = useCategoryReviewImageSearch(
    middleCategory,
    subCategory,
    PAGE_NUMBER,
    PAGE_SIZE,
    !!middleCategory && selectedTab === SEARCH_OPTION.REVIEW
  );
  const productData = keyword
    ? (productSearchData as ApiResponse<ProductSearchResponse>)?.data
        ?.products || []
    : (categoryProductData as ApiResponse<ProductSearchResponse>)?.data
        ?.products || [];
  const reviewVideoData = keyword
    ? (reviewVideoSearchData as ApiResponse<ApiReviewSearchResponse>)?.data
        ?.reviews || []
    : (categoryReviewVideoData as ApiResponse<ApiReviewSearchResponse>)?.data
        ?.reviews || [];
  const reviewImageData = keyword
    ? (reviewImageSearchData as ApiResponse<ApiReviewSearchResponse>)?.data
        ?.reviews || []
    : (categoryReviewImageData as ApiResponse<ApiReviewSearchResponse>)?.data
        ?.reviews || [];

  // ApiReviewItem을 VideoReviewResponse로 변환
  const videoReviews: VideoReviewResponse[] = reviewVideoData.map((review) => ({
    reviewId: review.reviewId,
    brandName: review.brandName,
    productName: review.productName,
    likeCount: review.likeCount,
    url: review.url || '',
  }));

  // ApiReviewItem을 ImageReviewResponse로 변환
  const imageReviews: ImageReviewResponse[] = reviewImageData.map((review) => ({
    reviewId: review.reviewId,
    brandName: review.brandName,
    productName: review.productName,
    likeCount: review.likeCount,
    url: review.url || (review.images && review.images[0]) || '',
  }));

  const isLoading =
    (keyword &&
      (isProductSearchLoading ||
        isReviewVideoSearchLoading ||
        isReviewImageSearchLoading)) ||
    (!keyword &&
      (isCategoryProductLoading ||
        isCategoryReviewVideoLoading ||
        isCategoryReviewImageLoading));

  const hasError =
    (keyword &&
      (isProductSearchError ||
        isReviewVideoSearchError ||
        isReviewImageSearchError)) ||
    (!keyword &&
      (isCategoryProductError ||
        isCategoryReviewVideoError ||
        isCategoryReviewImageError));

  const handleClickTab = (option: SearchOption) => {
    const params = new URLSearchParams(searchParams.toString());

    if (option === SEARCH_OPTION.REVIEW) {
      params.set('searchType', 'REVIEW');
    } else {
      params.set('searchType', 'PRODUCT');
    }

    router.push(`/search?${params.toString()}`);
  };

  const tabRender = {
    [SEARCH_OPTION.PRODUCT]: <SearchProductsSection products={productData} />,
    [SEARCH_OPTION.REVIEW]: (
      <SearchReviewSection
        reviewsVideo={videoReviews}
        reviewsImage={imageReviews}
      />
    ),
  }[selectedTab];

  if (!isClient) {
    return <div>Loading...</div>;
  }

  if (isLoading) {
    return <div>데이터를 불러오는 중...</div>;
  }

  if (hasError) {
    return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }
  return (
    <div className="flex w-full flex-col items-start">
      <div className="flex flex-col items-start self-stretch"></div>
      <SearchBreadCrumbSection
        middleCategory={middleCategory}
        subCategory={subCategory}
      />
      <OptionSelector
        selectedTab={selectedTab}
        handleClickTab={handleClickTab}
      />
      {tabRender}
    </div>
  );
}
