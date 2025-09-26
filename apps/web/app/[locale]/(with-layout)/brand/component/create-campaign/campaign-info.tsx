'use client';

import { Controller, useFormContext } from 'react-hook-form';

import { useTranslations } from 'next-intl';

import { SelectFormField, TextFormField } from 'components/forms';
import { CampaignFormData } from 'schema/create-campaign-schema';

export default function CampaignInfo() {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<CampaignFormData>();

  const t = useTranslations('brandMyPageCreateCampaign');

  return (
    <section className="flex w-[64.8rem] flex-col gap-[1.6rem]">
      <TextFormField
        label={t('basicInfo.title')}
        required
        placeholder={t('basicInfo.titlePlaceholder')}
        register={register('title')}
        error={
          errors.title?.message
            ? t(`errorMessage.${errors.title.message}`)
            : undefined
        }
      />

      <Controller
        name="language"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <SelectFormField
            label={t('basicInfo.language')}
            required
            options={[
              { label: t('options.language.EN'), value: 'EN' },
              { label: t('options.language.ES'), value: 'ES' },
            ]}
            value={field.value}
            onValueChange={field.onChange}
            error={
              error?.message ? t(`errorMessage.${error.message}`) : undefined
            }
          />
        )}
      />

      <Controller
        name="type"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <SelectFormField
            label={t('basicInfo.type')}
            required
            options={[
              { label: t('options.type.EXCLUSIVE'), value: 'EXCLUSIVE' },
              { label: t('options.type.GIVEAWAY'), value: 'GIVEAWAY' },
              { label: t('options.type.CONTENTS'), value: 'CONTENTS' },
            ]}
            value={field.value}
            onValueChange={field.onChange}
            error={
              error?.message ? t(`errorMessage.${error.message}`) : undefined
            }
          />
        )}
      />

      <Controller
        name="category"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <SelectFormField
            label={t('basicInfo.category')}
            required
            options={[
              { label: t('options.category.SKINCARE'), value: 'SKINCARE' },
              { label: t('options.category.SUNCARE'), value: 'SUNCARE' },
              { label: t('options.category.MAKEUP'), value: 'MAKEUP' },
            ]}
            value={field.value}
            onValueChange={field.onChange}
            error={
              error?.message ? t(`errorMessage.${error.message}`) : undefined
            }
          />
        )}
      />

      <TextFormField
        label={t('basicInfo.creatorCount')}
        required
        placeholder={t('basicInfo.creatorCountPlaceholder')}
        register={register('creatorCount')}
        error={
          errors.creatorCount?.message
            ? t(`errorMessage.${errors.creatorCount.message}`)
            : undefined
        }
      />
    </section>
  );
}
