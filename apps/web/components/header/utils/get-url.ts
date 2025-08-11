import { SEARCH_OPTION } from 'constants/option';
import { CategoryNameEng, CategoryOptionEng } from 'types/category';

export const getUrl = (
  keyword: string | '',
  selectedCategoryKey: CategoryNameEng | '',
  selectedOption: CategoryOptionEng | '',
  searchType: keyof typeof SEARCH_OPTION = 'PRODUCT'
) => {
  if (keyword) {
    return `/search?keyword=${keyword}&searchType=${searchType}`;
  }

  return `/search?middleCategory=${selectedCategoryKey}${
    selectedOption !== 'ALL' ? `&subCategory=${selectedOption}` : ''
  }&searchType=${searchType}`;
};
