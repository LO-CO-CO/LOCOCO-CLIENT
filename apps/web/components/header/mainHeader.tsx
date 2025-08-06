'use client';

import Link from 'next/link';
import { SvgClose, SvgLogo, SvgSearch } from '@lococo/icons';
import { CategorySection } from './categorySection';
import { SearchBar } from './searchBar';
import { useHeaderAction } from './use-header-action';
import { cn } from '@lococo/utils';

export function MainHeader() {
  const {
    isSearching,
    handleOpenSearchBar,
    searchValue,
    handleChangeSearchValue,
    handleSearchIconClick,
    handleCloseSearchBar,
  } = useHeaderAction();
  
  return (
    <header className="relative mx-auto w-full">
      <div className={cn("mx-auto flex h-[6.4rem] w-[1366px] items-center gap-[2rem] px-[11.9rem] border-b-[1px]",isSearching ? "border-dashed border-pink-500" : "border-solid border-gray-500")}>
        <div className="flex flex-grow items-center gap-[2rem]">
          <Link href="/" aria-label="ロココホームにアクセス">
            <SvgLogo className="h-[2.7rem] w-[16rem] shrink-0" />
          </Link>
          <CategorySection 
            handleCloseSearchBar={handleCloseSearchBar} 
            isSearching={isSearching}
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
