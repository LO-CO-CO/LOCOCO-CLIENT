export const PRODUCT_KEYS = {
  ALL: ['product'],
  PRODUCT_LISTS: () => [...PRODUCT_KEYS.ALL, 'list'],
  PRODUCT_LIST: ({ page, size }: { page?: number; size?: number }) => {
    return [...PRODUCT_KEYS.PRODUCT_LISTS(), 'list', page, size];
  },
  PRODUCT_DETAILS: (id: number) => [...PRODUCT_KEYS.ALL, 'detail', id],
  BRAND_LIST: ({
    productBrandName,
    page,
    size,
  }: {
    productBrandName?: string;
    page?: number;
    size?: number;
  }) => [...PRODUCT_KEYS.ALL, 'brand', productBrandName, page, size],
  BEST_PRODUCTS: () => [...PRODUCT_KEYS.ALL, 'best'],
  NEW_PRODUCTS: () => [...PRODUCT_KEYS.ALL, 'new'],
} as const;

export const REVIEW_KEYS = {
  ALL: ['review'],
  VIDEO: () => [...REVIEW_KEYS.ALL, 'video'],
  VIDEO_LISTS: () => [...REVIEW_KEYS.VIDEO(), 'list'],
  VIDEO_LIST: ({ page, size }: { page?: number; size?: number }) => [
    ...REVIEW_KEYS.VIDEO_LISTS(),
    page,
    size,
  ],
  VIDEO_DETAILS: () => [...REVIEW_KEYS.VIDEO(), 'detail'],
  VIDEO_DETAIL: (id: number) => [...REVIEW_KEYS.VIDEO_DETAILS(), id],

  IMAGE: () => [...REVIEW_KEYS.ALL, 'image'],
  IMAGE_LISTS: () => [...REVIEW_KEYS.IMAGE(), 'list'],
  IMAGE_LIST: ({ page, size }: { page?: number; size?: number }) => [
    ...REVIEW_KEYS.IMAGE_LISTS(),
    page,
    size,
  ],
  IMAGE_DETAILS: () => [...REVIEW_KEYS.IMAGE(), 'detail'],
  IMAGE_DETAIL: (id: number) => [...REVIEW_KEYS.IMAGE_DETAILS(), id],

  BRAND_VIDEO_LIST: ({
    brandName,
    page,
    size,
  }: {
    brandName?: string;
    page?: number;
    size?: number;
  }) => [...REVIEW_KEYS.VIDEO_LISTS(), 'brand', brandName, page, size],

  BRAND_IMAGE_LIST: ({
    brandName,
    page,
    size,
  }: {
    brandName?: string;
    page?: number;
    size?: number;
  }) => [...REVIEW_KEYS.IMAGE_LISTS(), 'brand', brandName, page, size],

  BRAND_SUMMARY: (brandName?: string) => [
    ...REVIEW_KEYS.ALL,
    'brand',
    'summary',
    brandName,
  ],
  BRAND_LISTS: () => [...REVIEW_KEYS.ALL, 'brand', 'list'],
  BRAND_LIST: (startsWith?: string) => [
    ...REVIEW_KEYS.BRAND_LISTS(),
    startsWith,
  ],
} as const;

export const CONNECT_SNS_KEYS = {
  ALL: ['connectSns'],
  CONNECT_SNS: () => [...CONNECT_SNS_KEYS.ALL, 'connectSns'],
};
