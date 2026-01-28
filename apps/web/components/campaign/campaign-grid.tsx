import { Campaign } from 'app/[locale]/(with-layout)/(home)/components/home-section-campaign';
import CardMain from 'components/card/card-main';
import CampaignListEmpty from 'components/empty/campgin-list-empty';

interface CampaignGridProps {
  campaigns?: Campaign[];
  isLoading?: boolean;
  kindOfCard?: 'KBeauty' | 'openingSoon';
}

export default function CampaignGrid({
  campaigns,
  isLoading,
  kindOfCard,
}: CampaignGridProps) {
  if (isLoading) {
    return <CampaignListEmpty emptyMessage="Loading..." />;
  }

  if (!campaigns || campaigns.length === 0) {
    return <CampaignListEmpty emptyMessage="No campaigns available" />;
  }

  return (
    <div className="grid min-h-[33.1rem] grid-cols-3 gap-x-[2.4rem] gap-y-[3.2rem]">
      {campaigns.map((campaign, index) => (
        <CardMain
          priority={index < 3}
          key={campaign.campaignId}
          campaignId={campaign.campaignId}
          campaignImageUrl={campaign.campaignImageUrl}
          endTime={kindOfCard === 'openingSoon' ? undefined : campaign.endTime}
          startTime={
            kindOfCard === 'openingSoon' ? campaign.startTime : undefined
          }
          chipStatus={campaign.chipStatus}
          brandName={campaign.brandName}
          campaignName={campaign.campaignName}
          campaignType={campaign.campaignType}
          applicantNumber={campaign.applicantNumber}
          recruitmentNumber={campaign.recruitmentNumber}
        />
      ))}
    </div>
  );
}
