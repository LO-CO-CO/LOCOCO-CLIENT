'use client';

import React, { useState } from 'react';

import LoadingSvg from 'components/loading/loading-svg';

import { Button } from '@lococo/design-system/button';

import { SaveSubmitModal } from '../@modal/(.)save-submit-modal/SaveSubmitModal';
import CampaignProductMediaInput from '../components/content-submissions/campaign-product-media-input';
import CampaignSelect from '../components/content-submissions/campaign-select';
import ContentTypeSelect from '../components/content-submissions/content-type-select';
import HashtagsInput from '../components/content-submissions/hashtags-input';
import Empty from '../components/empty/Empty';
import { useContentSubmissions } from '../hooks/use-content-submissions';

interface ContentSubmissionsFormProps {
  formData: {
    campaign: string;
    campaignId: number | undefined;
    contentType: string;
    campaignProductMedia: File[];
    captionAndHashtags: string;
  };
  errors: {
    campaign?: string;
    contentType?: string;
    campaignProductMedia?: string;
    captionAndHashtags?: string;
  };
  updateCampaign: (campaignId: number, campaign: string) => void;
  updateContentType: (campaignId: number, contentType: string) => void;
  updateCampaignProductMedia: (
    campaignId: number,
    campaignProductMedia: File[]
  ) => void;
  updateCaptionAndHashtags: (
    campaignId: number,
    captionAndHashtags: string
  ) => void;
}

export default function ContentSubmissions() {
  const [isSaveSubmitModalOpen, setIsSaveSubmitModalOpen] = useState(false);
  const {
    fields,
    getFormData,
    getErrors,
    handleSubmitAll,
    validateAllForms,
    isAllFormsValid,
    reset,
    updateCampaign,
    updateContentType,
    updateCampaignProductMedia,
    updateCaptionAndHashtags,
    isPending,
    isError,
    trigger,
  } = useContentSubmissions();

  const handleSubmitForm = async () => {
    trigger();
    const isValid = await validateAllForms();
    if (isAllFormsValid && isValid) {
      handleSubmitAll();
      setIsSaveSubmitModalOpen(true);
    }
  };
  if (isPending) {
    return (
      <div className="flex min-h-[calc(100vh-11.2rem)] w-full flex-col items-center justify-center gap-[3.2rem] bg-gray-100 px-[9.4rem] py-[6.4rem]">
        <LoadingSvg />
      </div>
    );
  }

  if (isError) {
    throw isError;
  }

  return (
    <>
      {
        <SaveSubmitModal
          open={isSaveSubmitModalOpen}
          onOpenChange={setIsSaveSubmitModalOpen}
          final={false}
        />
      }
      <div className="flex min-h-[calc(100vh-11.2rem)] w-full flex-col items-center gap-[3.2rem] bg-gray-100 px-[9.4rem] py-[6.4rem]">
        {fields.length > 0 ? (
          fields.map((field) => {
            const formData = getFormData(field.campaignId || 0);
            const errors = getErrors(field.campaignId || 0);

            if (!formData) return null;

            return (
              <ContentSubmissionsForm
                key={field.id}
                formData={formData}
                errors={errors}
                updateCampaign={updateCampaign}
                updateContentType={updateContentType}
                updateCampaignProductMedia={updateCampaignProductMedia}
                updateCaptionAndHashtags={updateCaptionAndHashtags}
              />
            );
          })
        ) : (
          <Empty translationKey="myPage.contentSubmissions.empty" />
        )}
        {fields.length > 0 && (
          <div className="flex w-[84rem] items-center justify-between gap-[1.6rem]">
            <Button
              variant="outline"
              color="primary"
              size="lg"
              className="w-[41.2rem]"
              onClick={() => reset()}
            >
              Cancel
            </Button>
            <Button
              variant="filled"
              color="primary"
              size="lg"
              className="w-[41.2rem]"
              onClick={handleSubmitForm}
            >
              Save
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

function ContentSubmissionsForm({
  formData,
  errors,
  updateCampaign,
  updateContentType,
  updateCampaignProductMedia,
  updateCaptionAndHashtags,
}: ContentSubmissionsFormProps) {
  return (
    <div className="flex w-[84rem] items-center justify-between gap-[4.8rem] border border-gray-400 bg-white p-[4.8rem]">
      <div className="flex w-full flex-col items-start gap-[4.8rem]">
        <CampaignSelect
          formData={formData}
          errors={errors.campaign}
          updateCampaign={updateCampaign}
        />

        <ContentTypeSelect
          formData={formData}
          errors={errors.contentType}
          updateContentType={updateContentType}
        />
        <CampaignProductMediaInput
          formData={formData}
          errors={errors.campaignProductMedia}
          updateCampaignProductMedia={updateCampaignProductMedia}
        />
        <HashtagsInput
          formData={formData}
          errors={errors.captionAndHashtags}
          updateCaptionAndHashtags={updateCaptionAndHashtags}
        />
      </div>
    </div>
  );
}
