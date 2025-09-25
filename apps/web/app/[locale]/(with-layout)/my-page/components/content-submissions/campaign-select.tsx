import { useTranslations } from 'next-intl';

import { Select } from '@lococo/design-system/select';

import { ContentSubmissionsFormData } from '../../hooks/use-content-submissions';

interface CampaignSelectProps {
  formData: ContentSubmissionsFormData;
  errors: string | undefined;
  updateCampaign: (campaignId: number, campaign: string) => void;
}

export default function CampaignSelect({
  formData,
  errors,
  updateCampaign,
}: CampaignSelectProps) {
  const t = useTranslations('myPage.contentSubmissions.campaignSelect');
  return (
    <section className="flex w-full flex-col gap-[1.6rem]">
      <p className="title2 text-gray-800">{t('title')}</p>
      <Select
        options={[
          {
            label: formData.campaign,
          },
        ]}
        onValueChange={(value) =>
          formData.campaignId && updateCampaign(formData.campaignId, value)
        }
        placeholder={t('selectCampaign')}
        value={formData.campaign}
        isError={!!errors}
        errorText={errors}
      />
    </section>
  );
}
