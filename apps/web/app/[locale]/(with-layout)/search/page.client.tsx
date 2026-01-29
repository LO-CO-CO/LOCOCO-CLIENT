'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { useTranslations } from 'next-intl';

import { SearchOption } from 'constants/option';
import { CategoryNameEng, CategoryOptionEng } from 'types/category';

import OptionSelector from './components/option-selector';
import SearchBreadCrumbSection from './components/search-bread-crumb-section';
import SearchProductsSection from './components/search-products-section';
import SearchReviewSection from './components/search-reviews-section';

export default function SearchPageClient({
  validatedParams,
}: {
  validatedParams: {
    middleCategory: CategoryNameEng;
    subCategory: CategoryOptionEng;
    searchType: SearchOption;
    keyword: string;
  };
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const t = useTranslations('legacy.search');
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
        middleCategory={validatedParams.middleCategory}
        subCategory={validatedParams.subCategory}
      />
      {validatedParams.keyword && (
        <div className="mx-auto w-[1366px] px-[11.9rem] py-[6rem]">
          <p className="head2 text-gray-800">
            {t('searchResultsFor', { keyword: validatedParams.keyword })}
          </p>
        </div>
      )}
      <OptionSelector
        selectedTab={validatedParams.searchType}
        handleClickTab={handleClickTab}
      />
      {validatedParams.searchType === 'PRODUCT' && (
        <SearchProductsSection
          keyword={validatedParams.keyword}
          middleCategory={validatedParams.middleCategory}
          subCategory={validatedParams.subCategory}
          page={PAGE_NUMBER}
          size={PAGE_SIZE}
        />
      )}
      {validatedParams.searchType === 'REVIEW' && (
        <SearchReviewSection
          keyword={validatedParams.keyword}
          middleCategory={validatedParams.middleCategory}
          subCategory={validatedParams.subCategory}
          page={PAGE_NUMBER}
          size={PAGE_SIZE}
        />
      )}
    </div>
  );
}
