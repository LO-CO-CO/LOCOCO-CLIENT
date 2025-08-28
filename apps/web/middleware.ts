import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

import { routing } from './i18n/routing';

// next-intl 미들웨어 생성
const intlMiddleware = createMiddleware(routing);

export default function middleware(req: NextRequest) {
  const { nextUrl, cookies } = req;
  const { origin, pathname } = nextUrl;

  // next-intl 미들웨어 실행하여 locale 처리
  const response = intlMiddleware(req);

  const accessTokenCookie = cookies.get('AccessToken');
  const isLoggedIn = accessTokenCookie !== undefined;

  // TODO: 추후 routing을 관리하는 파일로 분리
  // 로그인이 필요한 페이지 (인증이 필요한 페이지)
  const AUTH_REQUIRED_PAGES = ['/product-detail/:productId/write-review'];
  // 로그인 후 접근 불가능한 페이지
  const LOGIN_RESTRICTED_PAGES = ['/login', '/api/auth/line/login'];

  // 인증이 필요한 페이지 체크
  if (AUTH_REQUIRED_PAGES.includes(pathname)) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL('/login', origin));
    } else {
      return NextResponse.next();
    }
  }

  // 로그인한 상태에서 접근할 수 없는 페이지 체크
  if (LOGIN_RESTRICTED_PAGES.includes(pathname)) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL('/', origin));
    } else {
      return NextResponse.next();
    }
  }

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
