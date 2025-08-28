import { redirect } from 'next/navigation';

import { SearchOption } from 'constants/option';
import { CategoryNameEng, CategoryOptionEng } from 'types/category';
import { isValidCategoryKey, isValidCategoryOption } from 'utils/category';

import SearchPageClient from './page.client';

interface SearchParams {
  middleCategory?: string;
  subCategory?: string;
  searchType?: string;
  keyword?: string;
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const middleCategoryParam = params.middleCategory || '';
  const subCategoryParam = params.subCategory || '';
  const searchTypeParam = params.searchType || 'PRODUCT';
  const keyword = params.keyword || '';

  if (!isValidCategoryKey(middleCategoryParam) && !keyword) {
    redirect('/404');
  }

  if (
    middleCategoryParam &&
    !isValidCategoryOption(
      subCategoryParam,
      middleCategoryParam as CategoryNameEng
    ) &&
    subCategoryParam !== ''
  ) {
    redirect('/404');
  }

  if (searchTypeParam !== 'PRODUCT' && searchTypeParam !== 'REVIEW') {
    redirect('/404');
  }

  return (
    <SearchPageClient
      validatedParams={{
        middleCategory: middleCategoryParam as CategoryNameEng,
        subCategory: subCategoryParam as CategoryOptionEng,
        searchType: searchTypeParam as SearchOption,
        keyword,
      }}
    />
  );
}
