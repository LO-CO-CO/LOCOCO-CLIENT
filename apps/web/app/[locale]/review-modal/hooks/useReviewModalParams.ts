import { notFound, useParams, useSearchParams } from 'next/navigation';

import { CategoryNameEng, CategoryOptionEng } from 'types/category';
import { isValidCategoryKey, isValidCategoryOption } from 'utils/category';

interface UseReviewModalParamsProps {
  productId?: number;
}

export function useReviewModalParams({ productId }: UseReviewModalParamsProps) {
  const searchParams = useSearchParams();
  const params = useParams();

  if (!params?.reviewId || typeof params.reviewId !== 'string') {
    notFound();
  }

  const reviewIdParam = params.reviewId;
  const currentReviewId = Number(reviewIdParam);
  const currentProductId =
    productId || Number(searchParams.get('productId')) || 0;
  const keyword = searchParams.get('keyword');
  const middleCategory = searchParams.get('middleCategory');
  const subCategory = searchParams.get('subCategory');

  const validMiddleCategory: CategoryNameEng | '' = isValidCategoryKey(
    middleCategory || ''
  )
    ? (middleCategory as CategoryNameEng)
    : '';

  const validSubCategory: CategoryOptionEng | '' =
    validMiddleCategory &&
    isValidCategoryOption(subCategory || '', validMiddleCategory)
      ? (subCategory as CategoryOptionEng)
      : '';

  return {
    currentReviewId,
    currentProductId,
    keyword,
    validMiddleCategory,
    validSubCategory,
  };
}
