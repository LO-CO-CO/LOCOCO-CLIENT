import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'es', 'ko'],
  // Used when no locale matches
  defaultLocale: 'en',

  localePrefix: 'always',
  // Accept-Language 헤더 기반 locale 감지
  localeDetection: true,
});
