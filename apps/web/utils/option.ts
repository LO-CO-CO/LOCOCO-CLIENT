import { SearchOption } from 'constants/option';

export const isValidSearchType = (value: string): value is SearchOption => {
  return value === 'PRODUCT' || value === 'REVIEW';
};
