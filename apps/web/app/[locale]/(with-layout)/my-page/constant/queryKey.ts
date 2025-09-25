export const PROFILE_KEYS = {
  all: ['profile'] as const,
  profile: () => [...PROFILE_KEYS.all, 'profile'] as const,
  idCheck: (id: string) => [...PROFILE_KEYS.all, 'idCheck', id] as const,
  address: () => [...PROFILE_KEYS.all, 'address'] as const,
};

export const CAMPAIGN_REVIEW_KEYS = {
  all: ['campaignReview'] as const,
  campaignReview: () =>
    [...CAMPAIGN_REVIEW_KEYS.all, 'campaignReview'] as const,
};
