import { NextRequest, NextResponse } from 'next/server';

import { getServerCookie } from 'utils/action/cookie';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const returnTo = searchParams.get('return_to');

    // 사용자 인증 확인
    const accessToken = await getServerCookie('AccessToken');
    if (!accessToken) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // 백엔드 API 서버로 fetch 요청 (인증 헤더 포함)
    const backendUrl = process.env.NEXT_PUBLIC_API_SERVER_URL;
    if (!backendUrl) {
      throw new Error('API 서버 URL이 설정되지 않았습니다.');
    }

    const connectUrl = new URL(`${backendUrl}/api/auth/sns/tiktok/connect`);
    if (returnTo) {
      connectUrl.searchParams.set('return_to', returnTo);
    }

    // 백엔드로 fetch 요청 (Authorization 헤더 포함)
    const response = await fetch(connectUrl.toString(), {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      redirect: 'manual', // 수동 리다이렉트 처리
    });

    if (response.status === 302 || response.status === 307) {
      // 리다이렉트 응답인 경우 Location 헤더에서 URL 추출
      const location = response.headers.get('location');
      if (location) {
        return NextResponse.redirect(location);
      }
    }

    // 다른 응답인 경우 에러 처리
    throw new Error(`백엔드 요청 실패: ${response.status}`);
  } catch {
    return NextResponse.json(
      { error: 'TikTok 연결 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
