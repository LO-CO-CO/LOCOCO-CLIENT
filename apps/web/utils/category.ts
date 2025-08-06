import { CATEGORY_NAME, CATEGORY_OPTIONS } from 'constants/category';
import type {
  CategoryName,
  CategoryNameEng,
  CategoryOption,
  CategoryOptionEng,
} from 'types/category';

/** CategoryNameEng 타입인지 확인하는 타입 가드 */
function isCategoryKey(key: string): key is CategoryNameEng {
  return key in CATEGORY_OPTIONS;
}

/** CategoryOptionEng 타입인지 확인하는 타입 가드 */
function isCategoryOptionKey(
  key: string,
  category: CategoryNameEng
): key is CategoryOptionEng {
  return key in CATEGORY_OPTIONS[category];
}

/**
 * URL 파라미터가 유효한 CategoryNameEng인지 확인하는 타입 가드
 * @param value - 검증할 문자열 값
 * @returns 유효한 CategoryNameEng이면 true, 아니면 false
 */
export function isValidCategoryKey(value: string): value is CategoryNameEng {
  return value !== '' && isCategoryKey(value);
}

/**
 * URL 파라미터가 유효한 CategoryOptionEng인지 확인하는 타입 가드
 * @param value - 검증할 문자열 값
 * @param categoryKey - 해당 카테고리 키
 * @returns 유효한 CategoryOptionEng이면 true, 아니면 false
 */
export function isValidCategoryOption(
  value: string,
  categoryKey: CategoryNameEng
): value is CategoryOptionEng {
  return value !== '' && isCategoryOptionKey(value, categoryKey);
}

/**
 * 카테고리 옵션의 일본어 라벨을 반환하는 유틸
 * @param categoryKey - 카테고리 키 (예: 'FACIAL_CARE')
 * @param optionKey - 옵션 키 (예: 'TONER')
 * @returns 해당 옵션의 일본어 라벨 (예: 'トナー')
 */
export function getOptionLabel(
  categoryKey: CategoryNameEng,
  optionKey: CategoryOptionEng
): CategoryOption {
  const options = CATEGORY_OPTIONS[categoryKey] as Record<
    CategoryOptionEng,
    CategoryOption
  >;

  return options[optionKey];
}


