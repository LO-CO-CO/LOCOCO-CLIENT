// Translation keys for review placeholders (use with useTranslations('legacy.review'))
export const REVIEW_TEXT_PLACEHOLDER_KEYS = {
  POSITIVE: 'positivePlaceholder',
  NEGATIVE: 'negativePlaceholder',
} as const;

// Legacy exports for backward compatibility - these are now keys for translation
export const REVIEW_TEXT_PLACEHOLDER = {
  POSITIVE: 'POSITIVE',
  NEGATIVE: 'NEGATIVE',
} as const;

export const REVIEW_TEXT = {
  MAX_LENGTH: 1500,
  MIN_LENGTH: 15,
} as const;

// Translation keys for review error messages
export const REVIEW_TEXT_ERROR_MESSAGE_KEYS = {
  MIN: 'minLengthError',
  MAX: 'maxLengthError',
} as const;

// Legacy export for backward compatibility - now uses translation-aware functions
export const REVIEW_TEXT_ERROR_MESSAGE = {
  MIN: (min: number) => `${min}`,
  MAX: (max: number) => `${max}`,
} as const;

export const REVIEW_MEDIA_MAX_COUNT = {
  IMAGE: 5,
  VIDEO: 1,
  RECEIPT: 1,
} as const;

export const REVIEW_MEDIA_ERROR_MESSAGE = {
  NOT_ALLOWED_FILE_TYPE: 'not allowed file type',
  CANNOT_UPLOAD_FILE: 'cannot upload file',
} as const;

export const REVIEW_MEDIA_TYPE = {
  IMAGE: 'image',
  VIDEO: 'video',
} as const;
