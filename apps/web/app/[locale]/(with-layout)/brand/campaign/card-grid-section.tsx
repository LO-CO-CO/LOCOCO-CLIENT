'use client';

import React from 'react';

import { useTranslations } from 'next-intl';

import CardMyPage from 'components/card/card-my-page';
import { CAMPAIGN_STATUS_CONFIG } from 'components/card/utils/getBrandCampaignConfig';
import CampaignListEmpty from 'components/empty/campgin-list-empty';

import { useBrandCampaigns } from '../hooks/useBrandCampaign';

export default function CardGridSection() {
  const { campaigns, isLoading, isError } = useBrandCampaigns();
  const t = useTranslations('card');

  if (isLoading) {
    return (
      <div className="flex h-[50rem] w-full items-center justify-center">
        <CampaignListEmpty emptyMessage="캠페인을 불러오는 중입니다." />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex h-[50rem] w-full items-center justify-center">
        <CampaignListEmpty emptyMessage="캠페인을 불러오는데 실패했습니다." />
      </div>
    );
  }

  if (!campaigns || campaigns.length === 0) {
    return (
      <div className="flex h-[50rem] w-full items-center justify-center">
        <CampaignListEmpty emptyMessage="등록된 캠페인이 없습니다." />
      </div>
    );
  }

  return (
    <section className="grid grid-cols-3 gap-x-[4rem] gap-y-[3.2rem]">
      {campaigns.map((campaign) => {
        const config = campaign.campaignStatus
          ? CAMPAIGN_STATUS_CONFIG[campaign.campaignStatus]
          : null;

        return (
          <CardMyPage
            key={campaign.id}
            endTime={campaign.applyDeadline}
            campaignId={campaign.id}
            campaignName={campaign.title}
            campaignImageUrl={campaign.campaignImageUrl}
            chipContent={config?.chipContent}
            chipVariant={campaign.campaignStatus}
            buttonLabel={config?.buttonLabelKey ? t(config.buttonLabelKey) : ''}
            buttonHref={config?.routePath(campaign.id) || '#'}
            recruitmentNumber={campaign.recruitmentNumber}
            applicantNumber={campaign.applicantNumber}
          />
        );
      })}
    </section>
  );
}
