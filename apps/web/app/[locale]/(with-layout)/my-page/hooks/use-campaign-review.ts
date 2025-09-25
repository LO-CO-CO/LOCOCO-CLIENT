import { useQuery } from '@tanstack/react-query';
import { ApiResponseListCampaignParticipatedResponse } from '@typescript-swagger/data-contracts';

import { CAMPAIGN_REVIEW_KEYS } from '../constant/queryKey';

const fetchCampaignReview =
  async (): Promise<ApiResponseListCampaignParticipatedResponse> => {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/campaignReviews/my/participation`,
      {
        headers,
      }
    );

    if (!response.ok) {
      throw new Error('프로필 데이터를 불러오는데 실패했습니다.');
    }

    return response.json();
  };

export const useFetchCampaignReview = () => {
  return useQuery({
    queryKey: CAMPAIGN_REVIEW_KEYS.campaignReview(),
    queryFn: fetchCampaignReview,
  });
};
