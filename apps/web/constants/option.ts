// Translation keys for search options (use with useTranslations('legacy.search'))
export const SEARCH_OPTION_TRANSLATION_KEYS = {
  PRODUCT: 'product',
  REVIEW: 'review',
} as const;

// Legacy export for backward compatibility - values are keys to use with translations
export const SEARCH_OPTION = {
  PRODUCT: 'PRODUCT',
  REVIEW: 'REVIEW',
} as const;

export type SearchOption = keyof typeof SEARCH_OPTION;
export type SearchOptionValue = (typeof SEARCH_OPTION)[SearchOption];
