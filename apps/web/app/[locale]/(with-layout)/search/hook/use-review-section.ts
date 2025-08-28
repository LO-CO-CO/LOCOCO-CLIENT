import { useQuery } from '@tanstack/react-query';
import { apiRequest } from 'app/api/apiRequest';
import { REVIEW_KEYS } from 'constants/query-key';
import { CategoryNameEng, CategoryOptionEng } from 'types/category';

import {
  ApiKeywordImageReviewListResponse,
  ApiKeywordVideoReviewListResponse,
} from '../types/search';

interface UseReviewSectionDataProps {
  keyword?: string;
  middleCategory?: CategoryNameEng | null;
  subCategory?: CategoryOptionEng | null;
  reviewType?: 'VIDEO' | 'IMAGE';
  page?: number;
  size?: number;
  enabled?: boolean;
}

// 검색바로 검색할 때 사용하는 쿼리
export const useReviewSearch = ({
  keyword = '',
  reviewType = 'VIDEO',
  page = 0,
  size = 8,
  enabled = true,
}: UseReviewSectionDataProps) => {
  const queryKey =
    reviewType === 'VIDEO'
      ? REVIEW_KEYS.VIDEO_LIST({ page, size })
      : REVIEW_KEYS.IMAGE_LIST({ page, size });

  return useQuery<
    ApiKeywordVideoReviewListResponse | ApiKeywordImageReviewListResponse
  >({
    queryKey: [...queryKey, 'search', keyword],
    queryFn: () =>
      apiRequest<
        ApiKeywordVideoReviewListResponse | ApiKeywordImageReviewListResponse
      >({
        endPoint: `/api/products/search`,
        method: 'GET',
        params: {
          keyword,
          searchType: 'REVIEW',
          mediaType: reviewType,
          page: page.toString(),
          size: size.toString(),
        },
      }),
    enabled: enabled && !!keyword.trim(),
  });
};

// 카테고리별 리뷰 검색
export const useCategoryReviewSearch = ({
  middleCategory,
  reviewType = 'VIDEO',
  subCategory,
  page = 0,
  size = 8,
  enabled = true,
}: UseReviewSectionDataProps) => {
  return useQuery<
    ApiKeywordVideoReviewListResponse | ApiKeywordImageReviewListResponse
  >({
    queryKey: [
      ...REVIEW_KEYS[reviewType === 'VIDEO' ? 'VIDEO_LIST' : 'IMAGE_LIST']({
        page,
        size,
      }),
      'category',
      middleCategory,
      subCategory,
      reviewType,
    ],
    queryFn: () =>
      apiRequest<
        ApiKeywordImageReviewListResponse | ApiKeywordVideoReviewListResponse
      >({
        endPoint: `/api/products/categories/search`,
        method: 'GET',
        params: {
          ...(middleCategory && { middleCategory }),
          searchType: 'REVIEW',
          mediaType: reviewType,
          page: page.toString(),
          size: size.toString(),
          ...(subCategory && subCategory !== 'ALL' && { subCategory }),
        },
      }),
    enabled: enabled && !!middleCategory,
  });
};

export default function useReviewSectionData({
  keyword = '',
  middleCategory,
  subCategory,
  reviewType,
  page = 0,
  size = 8,
}: UseReviewSectionDataProps) {
  const searchResult = useReviewSearch({
    keyword,
    reviewType,
    page,
    size,
    enabled: !!keyword,
  });

  const categoryResult = useCategoryReviewSearch({
    middleCategory: middleCategory,
    reviewType,
    subCategory: subCategory,
    page,
    size,
    enabled: !!middleCategory && !keyword,
  });

  if (keyword) {
    return {
      data: searchResult.data,
      isPending: searchResult.isPending,
    };
  } else {
    return {
      data: categoryResult.data,
      isPending: categoryResult.isPending,
    };
  }
}
