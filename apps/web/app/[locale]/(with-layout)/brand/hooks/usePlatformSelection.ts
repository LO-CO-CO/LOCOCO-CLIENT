import { UseFormReturn } from 'react-hook-form';

import { CampaignFormData } from 'schema/create-campaign-schema';

import { SocialPlatform } from '../component/create-campaign/social-chip';

export const usePlatformSelection = (
  methods: UseFormReturn<CampaignFormData>,
  fieldName: 'firstContents' | 'secondContents'
) => {
  const { watch, setValue } = methods;
  const contents = watch(fieldName);

  const toggleChip = (platform: SocialPlatform) => {
    const selectedCount = Object.values(contents).filter(Boolean).length;
    const isCurrentSelected = contents[platform];

    if (isCurrentSelected || selectedCount < 2) {
      setValue(`${fieldName}.${platform}`, !isCurrentSelected);
    }
  };

  const isDisabled = (platform: SocialPlatform) => {
    const selectedCount = Object.values(contents).filter(Boolean).length;
    return !contents[platform] && selectedCount >= 2;
  };
  return {
    selectStatus: contents,
    toggleChip,
    isDisabled,
    selectedCount: Object.values(contents).filter(Boolean).length,
  };
};
