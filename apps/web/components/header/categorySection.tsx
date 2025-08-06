'use client';

import { CATEGORY_OPTIONS, CATEGORY_NAME } from 'constants/category';
import { CategoryOptionEng, CategoryNameEng } from 'types/category';
import Link from 'next/link';
import { cn } from '@lococo/utils';
import { CategoryOptionBar } from './categoryOptionBar';
import { useHeaderAction } from './use-header-action';

export function CategorySection({ 
  handleCloseSearchBar, 
  isSearching 
}: { 
  handleCloseSearchBar: () => void;
  isSearching: boolean;
}) {
  const {
    selectedCategory,
    selectedOption,
    handleSelectCategory,
    handleSelectOption,
    handleMouseLeaveCategory,
  } = useHeaderAction();
  const categories = Object.entries(CATEGORY_NAME).map(([key, name]) => ({
    key: key as CategoryNameEng,
    name,
  }));
  const options = selectedCategory
    ? (Object.keys(CATEGORY_OPTIONS[selectedCategory]) as CategoryOptionEng[])
    : [];

  return (
    <div
      className="flex h-[6rem] items-center"
      onMouseEnter={() => {
        if (isSearching) {
          handleCloseSearchBar();
        }
      }}
      onMouseLeave={handleMouseLeaveCategory}
    >
      {categories.map(({ key, name }) => {
        const isActive = key === selectedCategory;
        return (
          <div key={key}>
            <Link
              href={`/search?middleCategory=${key}&searchType=PRODUCT`}
              key={key}
              className={cn(
                'jp-title2 flex h-[6rem] cursor-pointer items-center whitespace-nowrap px-[3.2rem] pb-[1rem] pt-[1rem] font-bold',
                isActive ? 'text-pink-500' : 'text-gray-800'
              )}
              onMouseEnter={() => handleSelectCategory(key)}
              onClick={() => handleSelectCategory(key)}
            >
              {name}
            </Link>
            {selectedCategory && (
              <CategoryOptionBar
                options={options}
                selectedOption={selectedOption}
                selectedCategoryKey={selectedCategory}
                handleSelectOption={handleSelectOption}
                handleMouseLeaveCategory={handleMouseLeaveCategory}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
