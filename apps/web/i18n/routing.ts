import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['ko', 'en', 'es', 'ja'],
  // Used when no locale matches
  defaultLocale: 'ko',

  localePrefix: 'always',
  // 브라우저 언어 감지 비활성화 - 항상 한국어로 시작하고 사용자가 직접 언어 변경
  localeDetection: false,
});
