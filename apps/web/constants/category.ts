/**
 * 카테고리 정의
 *
 * - 스킨케어: 토너, 모이스처라이저, 에센스/세럼, 크림 등 기초 케어 제품
 * - 페이스: 파운데이션, 페이스 파우더, 프레스트 파우더, 컨실러, 치크 등 베이스 메이크업 제품
 * - 아이: 아이브로우, 아이섀도우, 아이라이너 등 아이 메이크업 제품
 * - 립: 립스틱, 립 틴트 등 립 메이크업 제품
 */

// Translation key mappings for categories
export const CATEGORY_TRANSLATION_KEYS = {
  FACIAL_CARE: {
    name: 'skincare.name',
    ALL: 'skincare.all',
    TONER: 'skincare.toner',
    MOISTURIZER: 'skincare.moisturizer',
    ESSENCE_SERUM: 'skincare.essenceSerum',
    CREAM: 'skincare.cream',
  },
  FACE_MAKEUP: {
    name: 'face.name',
    ALL: 'face.all',
    FOUNDATION: 'face.foundation',
    POWDER_COMPACT: 'face.powderCompact',
    CONCEALER: 'face.concealer',
    BLUSHER: 'face.blusher',
  },
  EYE_MAKEUP: {
    name: 'eye.name',
    ALL: 'eye.all',
    EYEBROW: 'eye.eyebrow',
    EYESHADOW: 'eye.eyeshadow',
    EYELINER: 'eye.eyeliner',
  },
  LIP_MAKEUP: {
    name: 'lip.name',
    ALL: 'lip.all',
    LIPSTICK: 'lip.lipstick',
    LIP_TINT: 'lip.lipTint',
  },
} as const;

// Legacy exports for backward compatibility (these will use translation keys in components)
export const FACIAL_CARE = {
  name: 'FACIAL_CARE',
  options: {
    ALL: 'ALL',
    TONER: 'TONER',
    MOISTURIZER: 'MOISTURIZER',
    ESSENCE_SERUM: 'ESSENCE_SERUM',
    CREAM: 'CREAM',
  },
} as const;

export const FACE_MAKEUP = {
  name: 'FACE_MAKEUP',
  options: {
    ALL: 'ALL',
    FOUNDATION: 'FOUNDATION',
    POWDER_COMPACT: 'POWDER_COMPACT',
    CONCEALER: 'CONCEALER',
    BLUSHER: 'BLUSHER',
  },
} as const;

export const EYE_MAKEUP = {
  name: 'EYE_MAKEUP',
  options: {
    ALL: 'ALL',
    EYEBROW: 'EYEBROW',
    EYESHADOW: 'EYESHADOW',
    EYELINER: 'EYELINER',
  },
} as const;

export const LIP_MAKEUP = {
  name: 'LIP_MAKEUP',
  options: {
    ALL: 'ALL',
    LIPSTICK: 'LIPSTICK',
    LIP_TINT: 'LIP_TINT',
  },
} as const;

export const CATEGORY_OPTIONS = {
  FACIAL_CARE: FACIAL_CARE.options,
  FACE_MAKEUP: FACE_MAKEUP.options,
  EYE_MAKEUP: EYE_MAKEUP.options,
  LIP_MAKEUP: LIP_MAKEUP.options,
} as const;

export const CATEGORY_NAME = {
  FACIAL_CARE: FACIAL_CARE.name,
  FACE_MAKEUP: FACE_MAKEUP.name,
  EYE_MAKEUP: EYE_MAKEUP.name,
  LIP_MAKEUP: LIP_MAKEUP.name,
} as const;

export const CATEGORY_NAME_NEW = {
  ALL: 'ALL',
  SKINCARE: 'Skincare',
  SUNCARE: 'Suncare',
  MAKEUP: 'Makeup',
} as const;
