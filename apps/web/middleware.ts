import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

import { routing } from './i18n/routing';

// next-intl 미들웨어 생성
const intlMiddleware = createMiddleware(routing);

export default function middleware(req: NextRequest) {
  const { nextUrl, cookies } = req;
  const { origin, pathname } = nextUrl;

  // 지원하지 않는 locale 접근시 default locale로 리다이렉트
  const unsupportedLocale = ['fr', 'ru', 'zh'];
  const firstSegment = pathname.split('/')[1]; // 현재 locale
  const pathWithoutLocale = pathname.replace(`/${firstSegment}`, '') || '/';

  if (firstSegment && unsupportedLocale.includes(firstSegment)) {
    const redirectPath = `/${routing.defaultLocale}${pathWithoutLocale}`;
    const redirectUrl = new URL(redirectPath, origin);
    return NextResponse.redirect(redirectUrl);
  }

  const accessTokenCookie = cookies.get('AccessToken');
  const isLoggedIn = accessTokenCookie !== undefined;

  // TODO: 추후 routing을 관리하는 파일로 분리
  // 로그인이 필요한 페이지 (인증이 필요한 페이지) - locale 제외한 경로
  const AUTH_REQUIRED_PATH = [
    '/product-detail/:productId/write-review',
    '/brand',
    '/my-page',
  ];
  // 로그인 후 접근 불가능한 페이지 - locale 제외한 경로
  const LOGIN_RESTRICTED_PATH = ['/login', '/api/auth/line/login'];

  // 인증이 필요한 페이지 체크
  const isAuthRequired = AUTH_REQUIRED_PATH.some((path) => {
    // 동적 파라미터 처리
    const regex = new RegExp(path.replace(':productId', '[^/]+'));
    // 정확히 일치하거나 해당 경로로 시작하는 경우 (하위 경로 포함)
    return regex.test(pathWithoutLocale) || pathWithoutLocale.startsWith(path);
  });

  const currentLocale =
    firstSegment && !unsupportedLocale.includes(firstSegment)
      ? firstSegment
      : routing.defaultLocale;

  if (isAuthRequired && !isLoggedIn) {
    const loginPath = `/${currentLocale}/login-google`;
    return NextResponse.redirect(new URL(loginPath, origin));
  }

  // 로그인한 상태에서 접근할 수 없는 페이지 체크
  const isLoginRestricted = LOGIN_RESTRICTED_PATH.some((pattern) => {
    return pathWithoutLocale === pattern;
  });

  if (isLoginRestricted && isLoggedIn) {
    const homePath = `/${currentLocale}`;
    return NextResponse.redirect(new URL(homePath, origin));
  }

  // next-intl 미들웨어 실행하여 locale 처리
  const response = intlMiddleware(req);
  // next-intl 미들웨어 응답 반환
  return response;
}

// 미들웨어가 실행될 경로 설정
export const config = {
  matcher: [
    // 모든 경로에서 실행하되 정적 파일은 제외
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
