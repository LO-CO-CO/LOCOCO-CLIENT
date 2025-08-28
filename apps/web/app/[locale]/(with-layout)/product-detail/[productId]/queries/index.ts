export const PRODUCT_DETAIL_QUERY_KEYS = {
  ALL: ['PRODUCT_DETAIL'] as const,
  REVIEW_LIST: (productId: number) => ['REVIEW_LIST', productId] as const,
  REVIEW: (reviewId: number, productId: number) =>
    [...PRODUCT_DETAIL_QUERY_KEYS.REVIEW_LIST(productId), reviewId] as const,
  USER_VIDEO_REVIEW_LIST: (productId: number) =>
    ['USER_VIDEO_REVIEW_LIST', productId] as const,
};
