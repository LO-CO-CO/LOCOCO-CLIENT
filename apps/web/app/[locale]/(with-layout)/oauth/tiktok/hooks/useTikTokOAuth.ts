import { useEffect } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { useQueryClient } from '@tanstack/react-query';
import { CONNECT_SNS_KEYS } from 'constants/query-key';

interface UseTikTokOAuthOptions {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export const useTikTokOAuth = ({
  onSuccess,
  onError,
}: UseTikTokOAuthOptions) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();

  useEffect(() => {
    const success = searchParams.get('success');
    const error = searchParams.get('error');
    const returnTo = searchParams.get('return_to');

    const returnPath = returnTo || '/my-page/connect-sns';

    const timer = setTimeout(() => {
      if (success) {
        queryClient.invalidateQueries({
          queryKey: CONNECT_SNS_KEYS.CONNECT_SNS(),
        });

        onSuccess?.();
        router.replace(`${returnPath}?success=true`);
      } else if (error) {
        onError?.(error);
        router.replace(`${returnPath}?error=${error}`);
      } else {
        router.replace(returnPath);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [searchParams, router, queryClient, onSuccess, onError]);
};
