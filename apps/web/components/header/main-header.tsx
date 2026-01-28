'use client';

import Link from 'next/link';

import { useTranslations } from 'next-intl';

import { SvgClose, SvgLogo, SvgSearch } from '@lococo/icons';

import { CategorySection } from './category-section';
import { useHeaderAction } from './hooks/use-header-action';
import { SearchBar } from './search-bar';

export function MainHeader() {
  const t = useTranslations('legacy.header');
  const {
    isSearching,
    handleOpenSearchBar,
    searchValue,
    handleChangeSearchValue,
    handleSearchIconClick,
    handleCloseSearchBar,
    selectedCategory,
    selectedOption,
    handleSelectCategory,
    handleSelectOption,
    handleMouseLeaveCategory,
  } = useHeaderAction();

  return (
    <header className="sticky top-0 z-50 mx-auto w-full min-w-[1366px] border-b-[1px] border-gray-200 bg-white">
      <div className="mx-auto flex h-[6.4rem] w-[1366px] items-center gap-[2rem] bg-white px-[11.9rem]">
        <div className="flex flex-grow items-center gap-[2rem]">
          <Link href="/" aria-label={t('accessHome')}>
            <SvgLogo className="h-[2.7rem] w-[16rem] shrink-0" />
          </Link>
          <CategorySection
            handleCloseSearchBar={handleCloseSearchBar}
            isSearching={isSearching}
            selectedCategory={selectedCategory}
            selectedOption={selectedOption}
            handleSelectCategory={handleSelectCategory}
            handleSelectOption={handleSelectOption}
            handleMouseLeaveCategory={handleMouseLeaveCategory}
          />
        </div>

        <div
          className="flex h-[6.4rem] w-[6.4rem] shrink-0 cursor-pointer items-center justify-center p-[1.4rem]"
          onClick={isSearching ? handleCloseSearchBar : handleOpenSearchBar}
        >
          {isSearching ? <SvgClose /> : <SvgSearch />}
        </div>
      </div>
      {isSearching && (
        <SearchBar
          searchValue={searchValue}
          handleChangeSearchValue={handleChangeSearchValue}
          handleSearchIconClick={handleSearchIconClick}
        />
      )}
    </header>
  );
}
