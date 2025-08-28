export const LINE_LOGIN_QUERY_KEYS = {
  ALL: ['LINE_LOGIN'] as const,
  LINE_LOGIN: (code: string, state: string) =>
    [...LINE_LOGIN_QUERY_KEYS.ALL, code, state] as const,
};
