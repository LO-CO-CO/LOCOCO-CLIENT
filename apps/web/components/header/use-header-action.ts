'use client';

import { CategoryNameEng, CategoryOptionEng } from 'types/category';
import {  useState } from 'react';

export function useHeaderAction() {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryNameEng | null>(null);
  const [selectedOption, setSelectedOption] =
    useState<CategoryOptionEng | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSelectCategory = (category: CategoryNameEng) => {
    setSelectedCategory(category);
    setSelectedOption(null);
    setIsSearching(false);
  };

  const handleMouseLeaveCategory = () => {
    setSelectedCategory(null);
    setSelectedOption(null);
  };

  const handleSelectOption = (option: CategoryOptionEng) => {
    if (option === 'ALL') {
      setSelectedOption(null);
      return;
    }
    setSelectedOption(option);
  };

  const handleCloseSearchBar = () => {
    setIsSearching(false);
  };

  const handleOpenSearchBar = () => {
   setSelectedCategory(null);
   setSelectedOption(null);
   setIsSearching(true);
  };

  const handleChangeSearchValue = (text: string) => {
    setSearchValue(text);
  };

  const handleSearchIconClick = () => {
    if (searchValue.trim()) {
      setIsSearching(false);
    }
  };

  return {
    selectedCategory,
    selectedOption,
    isSearching,
    searchValue,
    handleSelectCategory,
    handleMouseLeaveCategory,
    handleSelectOption,
    handleOpenSearchBar,
    handleChangeSearchValue,
    handleSearchIconClick,
    handleCloseSearchBar,
  };
}
