import { NextRequest, NextResponse } from 'next/server';

import { setCookie } from 'utils/action/cookie';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    const error = searchParams.get('error');
    const returnTo = searchParams.get('return_to');

    if (error) {
      const loadingUrl = new URL('/oauth/tiktok/loading', request.url);
      loadingUrl.searchParams.set('error', error);
      if (returnTo) {
        loadingUrl.searchParams.set('return_to', returnTo);
      }
      return NextResponse.redirect(loadingUrl);
    }

    if (!code) {
      const loadingUrl = new URL('/oauth/tiktok/loading', request.url);
      loadingUrl.searchParams.set('error', 'no_code');
      if (returnTo) {
        loadingUrl.searchParams.set('return_to', returnTo);
      }
      return NextResponse.redirect(loadingUrl);
    }

    const backendUrl = process.env.NEXT_PUBLIC_API_SERVER_URL;
    if (!backendUrl) {
      throw new Error('API 서버 URL이 설정되지 않았습니다.');
    }

    const callbackUrl = new URL(`${backendUrl}/api/auth/tiktok/callback`);
    callbackUrl.searchParams.set('code', code);
    if (state) callbackUrl.searchParams.set('state', state);
    if (returnTo) callbackUrl.searchParams.set('return_to', returnTo);

    const response = await fetch(callbackUrl.toString(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code,
        state,
        return_to: returnTo,
        frontend_callback_url: request.url,
      }),
    });

    if (!response.ok) {
      throw new Error(`백엔드 콜백 처리 실패: ${response.status}`);
    }

    const result = await response.json();

    if (result.data?.redirectUrl) {
      return NextResponse.redirect(result.data.redirectUrl);
    }

    if (result.success) {
      // 토큰 저장 (필요한 경우)
      if (result.data?.accessToken) {
        await setCookie('AccessToken', result.data.accessToken);
      }

      // 로딩 페이지로 리다이렉트 (원래 페이지 정보 포함)
      const loadingUrl = new URL('/oauth/tiktok/loading', request.url);
      loadingUrl.searchParams.set('success', 'true');
      if (returnTo) {
        loadingUrl.searchParams.set('return_to', returnTo);
      }

      return NextResponse.redirect(loadingUrl);
    } else {
      // 에러 시에도 로딩 페이지로 리다이렉트
      const loadingUrl = new URL('/oauth/tiktok/loading', request.url);
      loadingUrl.searchParams.set('error', result.message || 'callback_failed');
      if (returnTo) {
        loadingUrl.searchParams.set('return_to', returnTo);
      }

      return NextResponse.redirect(loadingUrl);
    }
  } catch {
    const returnTo = new URL(request.url).searchParams.get('return_to');

    // 에러 시에도 로딩 페이지로 리다이렉트
    const loadingUrl = new URL('/oauth/tiktok/loading', request.url);
    loadingUrl.searchParams.set('error', 'callback_failed');
    if (returnTo) {
      loadingUrl.searchParams.set('return_to', returnTo);
    }

    return NextResponse.redirect(loadingUrl);
  }
}
