import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { useTranslations } from 'next-intl';

import InputWrapper from 'app/[locale]/(with-layout)/my-page/components/input-wrapper';
import { CampaignFormData } from 'schema/create-campaign-schema';
import { dateOptions } from 'utils';
import { timeOptions } from 'utils/time-options';

import { Select } from '@lococo/design-system/select';

import { RHFSelect } from './rhf-Select';

export default function CampaignDueDate() {
  const {
    control,
    formState: { errors },
  } = useFormContext<CampaignFormData>();
  const { AM_PM, HOURS, MINUTES } = timeOptions();
  const { months, years, days } = dateOptions();
  const t = useTranslations('brandMyPageCreateCampaign');

  return (
    <section className="w-[64.8rem]">
      <InputWrapper label={t('schedule.dueDate')} required>
        <div className="flex gap-[2.4rem]">
          <RHFSelect
            name="dueDate.month"
            options={months}
            size="small"
            placeholder="Month"
          />
          <RHFSelect
            name="dueDate.day"
            options={days}
            size="small"
            placeholder="Day"
          />
          <RHFSelect
            name="dueDate.year"
            options={years}
            size="small"
            placeholder="Year"
          />
        </div>
        {(errors.dueDate?.month ||
          errors.dueDate?.day ||
          errors.dueDate?.year) && (
          <p className="text-red caption3 font-[400]">
            {t(
              `errorMessage.${errors.dueDate.month?.message || errors.dueDate.day?.message || errors.dueDate.year?.message}`
            )}
          </p>
        )}
      </InputWrapper>

      <InputWrapper label={t('schedule.dueTime')} required>
        <div className="flex gap-[2.4rem]">
          <Controller
            name="dueTime.period"
            control={control}
            render={({ field }) => (
              <Select
                size="small"
                options={AM_PM}
                value={field.value}
                onValueChange={field.onChange}
                placeholder="AM/PM"
              />
            )}
          />
          <Controller
            name="dueTime.hour"
            control={control}
            render={({ field }) => (
              <Select
                size="small"
                options={HOURS}
                value={field.value}
                onValueChange={field.onChange}
                placeholder="Hour"
              />
            )}
          />
          <Controller
            name="dueTime.minute"
            control={control}
            render={({ field }) => (
              <Select
                size="small"
                options={MINUTES}
                value={field.value}
                onValueChange={field.onChange}
                placeholder="Minute"
              />
            )}
          />
        </div>
        {(errors.dueTime?.hour || errors.dueTime?.minute) && (
          <p className="text-red caption3 font-[400]">
            {t(
              `errorMessage.${errors.dueTime.hour?.message || errors.dueTime.minute?.message}`
            )}
          </p>
        )}
      </InputWrapper>
    </section>
  );
}
