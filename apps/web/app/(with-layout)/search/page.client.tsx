'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { isValidCategoryKey, isValidCategoryOption } from 'utils/category';
import { isValidSearchType } from 'utils/option';

import { SearchOption } from '../../../constants/option';
import OptionSelector from './components/option-selector';
import SearchBreadCrumbSection from './components/search-bread-crumb-section';
import SearchProductsSection from './components/search-products-section';
import SearchReviewSection from './components/search-reviews-section';

export default function SearchPageClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const middleCategoryParam = searchParams.get('middleCategory') || '';
  const middleCategory = isValidCategoryKey(middleCategoryParam)
    ? middleCategoryParam
    : null;

  const subCategoryParam = searchParams.get('subCategory') || '';
  const subCategory = isValidCategoryOption(subCategoryParam, middleCategory)
    ? subCategoryParam
    : null;

  const searchTypeParam = searchParams.get('searchType') || '';
  const searchType = isValidSearchType(searchTypeParam)
    ? searchTypeParam
    : 'PRODUCT';

  const keyword = searchParams.get('keyword') || '';

  const PAGE_SIZE = 8;
  const PAGE_NUMBER = 0;

  const handleClickTab = (option: SearchOption) => {
    const params = new URLSearchParams(searchParams.toString());
    if (option === 'REVIEW') {
      params.set('searchType', 'REVIEW');
    } else {
      params.set('searchType', 'PRODUCT');
    }
    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-start">
      <div className="flex flex-col items-start self-stretch"></div>
      <SearchBreadCrumbSection
        middleCategory={middleCategory}
        subCategory={subCategory}
      />
      {keyword && (
        <div className="mx-auto w-[1366px] px-[11.9rem] py-[6rem]">
          <p className="jp-head2 text-gray-800">
            「
            <span className="inline-block max-w-[80rem] truncate align-bottom">
              {keyword}
            </span>
            」 に関する検索結果
          </p>
        </div>
      )}
      <OptionSelector
        selectedTab={searchType}
        handleClickTab={handleClickTab}
      />
      {searchType === 'PRODUCT' && (
        <SearchProductsSection
          keyword={keyword}
          middleCategory={middleCategory}
          subCategory={subCategory}
          page={PAGE_NUMBER}
          size={PAGE_SIZE}
        />
      )}
      {searchType === 'REVIEW' && (
        <SearchReviewSection
          keyword={keyword}
          middleCategory={middleCategory}
          subCategory={subCategory}
          page={PAGE_NUMBER}
          size={PAGE_SIZE}
        />
      )}
    </div>
  );
}
