import { useEffect, useState } from 'react';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PRODUCT_QUERIES } from 'app/[locale]/(with-layout)/(home)/components/home-section-product';
import { apiRequest } from 'app/api/apiRequest';
import { useAuth } from 'hooks/use-auth';
import { useRouter } from 'i18n/navigation';

interface UseProductLikeProps {
  initialIsLiked: boolean;
}

export function useProductLike({ initialIsLiked }: UseProductLikeProps) {
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const queryClient = useQueryClient();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    setIsLiked(initialIsLiked);
  }, [initialIsLiked]);

  const likeMutation = useMutation({
    mutationFn: (productId: number) => {
      return apiRequest({
        endPoint: `/api/likes/products/${productId}`,
        method: 'POST',
      });
    },

    onMutate: async () => {
      const isPreviousLiked = isLiked;
      setIsLiked((prev) => !prev);
      return { isPreviousLiked };
    },

    onError: (error, _variables, context) => {
      setIsLiked(context?.isPreviousLiked || false);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: PRODUCT_QUERIES.ALL });
    },
  });

  const handleLikeClick = async (productId: number, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    if (isLoggedIn) {
      likeMutation.mutate(productId);
    } else {
      goToLogin();
    }
  };

  const goToLogin = () => {
    router.push('/login');
  };

  return {
    likeMutation,
    isLiked,
    handleLikeClick,
    goToLogin,
  };
}
