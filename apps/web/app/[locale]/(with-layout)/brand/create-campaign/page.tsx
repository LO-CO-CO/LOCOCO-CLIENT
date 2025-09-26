'use client';

import { FormProvider, useForm } from 'react-hook-form';

import { useTranslations } from 'next-intl';

import { zodResolver } from '@hookform/resolvers/zod';
import CampaignUploadMedia from 'components/campaign/campaign-upload-media';
import { FormSection } from 'components/forms';
import {
  CampaignFormData,
  createCampaignSchema,
} from 'schema/create-campaign-schema';

import { Button } from '@lococo/design-system/button';

import InputWrapper from '../../my-page/components/input-wrapper';
import CampaignDueDate from '../component/create-campaign/campaign-due-date';
import CampaignEndInfo from '../component/create-campaign/campaign-end-info';
import CampaignInfo from '../component/create-campaign/campaign-info';
import CampaignStartInfo from '../component/create-campaign/campaign-start-info';
import CampaignWinnerAnnounce from '../component/create-campaign/campaign-winner-announce';
import DynamicInput from '../component/create-campaign/dynamic-inpt';
import SocialChip, {
  SOCIAL_CONFIGS,
  SocialPlatform,
} from '../component/create-campaign/social-chip';
import { usePlatformSelection } from '../hooks/usePlatformSelection';

export default function CreateCampaign() {
  const methods = useForm<CampaignFormData>({
    resolver: zodResolver(createCampaignSchema),
    mode: 'onChange',
    shouldFocusError: false,
    defaultValues: {
      title: '',
      language: '',
      type: '',
      category: '',
      creatorCount: '',
      startDate: { year: '', month: '', day: '' },
      startTime: { period: 'AM', hour: '', minute: '' },
      endDate: { year: '', month: '', day: '' },
      endTime: { period: 'AM', hour: '', minute: '' },
      announceDate: { year: '', month: '', day: '' },
      announceTime: { period: 'AM', hour: '', minute: '' },
      dueDate: { year: '', month: '', day: '' },
      dueTime: { period: 'AM', hour: '', minute: '' },
      joinConditions: [''],
      submitConditions: [''],
      joinRewards: [''],
      firstContents: {
        'instagram-post': false,
        'instagram-reels': false,
        'tiktok-video': false,
      },
      secondContents: {
        'instagram-post': false,
        'instagram-reels': false,
        'tiktok-video': false,
      },
      thumbnailFiles: [],
      detailFiles: [],
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const firstContents = usePlatformSelection(methods, 'firstContents');
  const secondContents = usePlatformSelection(methods, 'secondContents');

  const onSubmit = (data: CampaignFormData) => {
    console.log('=== 폼 제출 데이터 ===');
    console.log('기본 정보:', {
      title: data.title,
      language: data.language,
      type: data.type,
      category: data.category,
      creatorCount: data.creatorCount,
    });

    console.log('일정 정보:', {
      startDate: data.startDate,
      startTime: data.startTime,
      endDate: data.endDate,
      endTime: data.endTime,
      announceDate: data.announceDate,
      announceTime: data.announceTime,
      dueDate: data.dueDate,
      dueTime: data.dueTime,
    });

    console.log('조건/보상:', {
      joinConditions: data.joinConditions,
      submitConditions: data.submitConditions,
      joinRewards: data.joinRewards,
    });

    console.log('플랫폼 선택:', {
      firstContents: data.firstContents,
      secondContents: data.secondContents,
    });

    console.log('파일:', {
      thumbnailFiles: data.thumbnailFiles,
      detailFiles: data.detailFiles,
    });
  };

  const t = useTranslations('brandMyPageCreateCampaign');

  return (
    <FormProvider {...methods}>
      <div className="h-full w-full bg-gray-100 pl-[6.6rem] pt-[6.4rem]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-gray-100">
            <div className="flex min-h-[260.4rem] w-[84rem] flex-col gap-[4.8rem] bg-white px-[9.6rem] py-[4.8rem]">
              <h3 className="title2 font-[700] text-gray-800">
                {t('pageTitle')}
              </h3>
              <CampaignInfo />
              <CampaignStartInfo />
              <CampaignEndInfo />
              <CampaignWinnerAnnounce />
              <CampaignDueDate />
              <FormSection
                title={t('conditions.joinConditionTitle')}
                description={t('conditions.joinConditionDescription')}
              >
                <DynamicInput fieldName="joinConditions" />
              </FormSection>
              <FormSection
                title={t('conditions.submitConditionTitle')}
                description={t('conditions.submitConditionDescription')}
              >
                <DynamicInput fieldName="submitConditions" />
              </FormSection>
              <FormSection
                title={t('conditions.rewardTitle')}
                description={t('conditions.rewardDescription')}
              >
                <DynamicInput fieldName="joinRewards" />
              </FormSection>
              <FormSection
                title={t('platform.title')}
                description={t('platform.description')}
              >
                <InputWrapper label={t('platform.firstContent')} required />
                <div className="flex gap-[1.2rem]">
                  {(Object.keys(SOCIAL_CONFIGS) as SocialPlatform[]).map(
                    (platform) => (
                      <SocialChip
                        key={platform}
                        type={platform}
                        selected={firstContents.selectStatus[platform]}
                        onClick={firstContents.toggleChip}
                        disabled={firstContents.isDisabled(platform)}
                      />
                    )
                  )}
                </div>
                {errors.firstContents && (
                  <p className="body2 text-red font-[500]">
                    {t(`errorMessage.${errors.firstContents.message}`)}
                  </p>
                )}
                <InputWrapper label={t('platform.secondContent')} />
                <div className="flex gap-[1.2rem]">
                  {(Object.keys(SOCIAL_CONFIGS) as SocialPlatform[]).map(
                    (platform) => (
                      <SocialChip
                        key={platform}
                        type={platform}
                        selected={secondContents.selectStatus[platform]}
                        onClick={secondContents.toggleChip}
                        disabled={secondContents.isDisabled(platform)}
                      />
                    )
                  )}
                </div>
                {errors.secondContents && (
                  <p className="body2 text-red font-[500]">
                    {t(`errorMessage.${errors.secondContents.message}`)}
                  </p>
                )}
              </FormSection>
              <CampaignUploadMedia />
            </div>
            <div className="mt-[3.2rem] flex gap-[1.6rem]">
              <Button
                type="button"
                variant="outline"
                size="lg"
                color="secondary"
                className="w-[41.2rem]"
                onClick={() => {
                  console.log('저장하기 클릭');
                }}
              >
                {t('buttons.save')}
              </Button>
              <Button
                type="submit"
                variant="filled"
                size="lg"
                color="primary"
                className="w-[41.2rem]"
              >
                {t('buttons.publish')}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </FormProvider>
  );
}
