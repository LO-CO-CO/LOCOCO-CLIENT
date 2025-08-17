import { NextRequest, NextResponse } from 'next/server';

export default function middleware(req: NextRequest) {
  const { nextUrl, cookies } = req;
  const { origin, pathname } = nextUrl;

  const accessTokenCookie = cookies.get('AccessToken');

  const isLoggedIn = accessTokenCookie !== undefined;

  // 로그인이 필요한 페이지 (인증이 필요한 페이지)
  // TODO: 추후 constants 로 관리
  const AUTH_REQUIRED_PAGES = ['/product-detail/:productId/write-review'];

  // 로그인 후 접근 불가능한 페이지
  const LOGIN_RESTRICTED_PAGES = ['/login', '/api/auth/line/login'];

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

  return NextResponse.next();
}

export const config = {
  matcher: ['/product-detail/(.*)', '/login', '/api/auth/(.*)'],
};
