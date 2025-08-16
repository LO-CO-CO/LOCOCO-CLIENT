'use client';

import Link from 'next/link';

import { CATEGORY_NAME, CATEGORY_OPTIONS } from 'constants/category';
import { CategoryNameEng, CategoryOptionEng } from 'types/category';

import { cn } from '@lococo/utils';

import { CategoryOptionBar } from './category-option-bar';
import { getUrl } from './utils/get-url';

interface CategorySectionProps {
  handleCloseSearchBar: () => void;
  isSearching: boolean;
  selectedCategory: CategoryNameEng | null;
  selectedOption: CategoryOptionEng | null;
  handleSelectCategory: (category: CategoryNameEng) => void;
  handleSelectOption: (option: CategoryOptionEng) => void;
  handleMouseLeaveCategory: () => void;
}

export function CategorySection({
  handleCloseSearchBar,
  isSearching,
  selectedCategory,
  selectedOption,
  handleSelectCategory,
  handleSelectOption,
  handleMouseLeaveCategory,
}: CategorySectionProps) {
  const categories = Object.entries(CATEGORY_NAME).map(([key, name]) => ({
    key: key as CategoryNameEng,
    name,
  }));
  const options = selectedCategory
    ? (Object.keys(CATEGORY_OPTIONS[selectedCategory]) as CategoryOptionEng[])
    : [];

  return (
    <div
      className="flex h-[6em] items-center"
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
              href={getUrl('', key, 'ALL', 'PRODUCT')}
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
            {selectedCategory && isActive && (
              <CategoryOptionBar
                options={options}
                selectedOption={selectedOption}
                selectedCategoryKey={selectedCategory}
                handleSelectOption={handleSelectOption}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
