const LINE_OAUTH_CONFIG = {
  CLIENT_ID: process.env.NEXT_PUBLIC_LINE_CLIENT_ID || '',
  REDIRECT_URI:
    process.env.NEXT_PUBLIC_LINE_LOGIN_REDIRECT_URL ||
    'http://localhost:3000/api/auth/line/login',
  SCOPE: 'profile openid',
  AUTH_URL: 'https://access.line.me/oauth2/v2.1/authorize',
  LOCALE: 'ja',
} as const;

export const generateLineLoginUrl = (state: string): string => {
  const params = new URLSearchParams({
    response_type: 'code',
    client_id: LINE_OAUTH_CONFIG.CLIENT_ID,
    redirect_uri: LINE_OAUTH_CONFIG.REDIRECT_URI,
    state,
    scope: LINE_OAUTH_CONFIG.SCOPE,
    ui_locales: LINE_OAUTH_CONFIG.LOCALE,
  });

  return `${LINE_OAUTH_CONFIG.AUTH_URL}?${params.toString()}`;
};
