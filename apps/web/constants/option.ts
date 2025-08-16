export const SEARCH_OPTION = {
  PRODUCT: '商品',
  REVIEW: 'レビュー',
} as const;

export type SearchOption = keyof typeof SEARCH_OPTION;
export type SearchOptionValue = (typeof SEARCH_OPTION)[SearchOption];
