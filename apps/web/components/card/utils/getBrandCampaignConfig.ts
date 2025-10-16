export type CampaignStatus =
  | 'DRAFT'
  | 'WAITING_APPROVAL'
  | 'OPEN_RESERVED'
  | 'RECRUITING'
  | 'RECRUITMENT_CLOSED'
  | 'IN_REVIEW'
  | 'COMPLETED';

export const CAMPAIGN_STATUS_CONFIG = {
  DRAFT: {
    chipContent: 'Draft',
    buttonLabelKey: 'editDraft',
    routePath: (id: number) => `/brand/create-campaign/${id}`,
  },
  COMPLETED: {
    chipContent: 'Closed',
    buttonLabelKey: 'viewContent',
    routePath: (id: number) => `/campaign-detail/${id}`,
  },
  IN_REVIEW: {
    chipContent: 'Active',
    buttonLabelKey: 'viewContent',
    routePath: (id: number) => `/campaign-detail/${id}`,
  },
  OPEN_RESERVED: {
    chipContent: 'Upcoming',
    buttonLabelKey: 'goToCampaign',
    routePath: (id: number) => `/campaign-detail/${id}`,
  },
  RECRUITING: {
    chipContent: 'Active',
    buttonLabelKey: 'viewApplicants',
    routePath: (id: number) => `/brand/applicants/${id}`,
  },
  RECRUITMENT_CLOSED: {
    chipContent: 'Active',
    buttonLabelKey: 'viewApplicants',
    routePath: (id: number) => `/brand/applicants/${id}`,
  },
  WAITING_APPROVAL: {
    chipContent: 'Pending',
    buttonLabelKey: 'waitingApproval',
    routePath: (id: number) =>
      `/brand/campaign-detail-readonly?campaignId=${id}`,
  },
} as const;
