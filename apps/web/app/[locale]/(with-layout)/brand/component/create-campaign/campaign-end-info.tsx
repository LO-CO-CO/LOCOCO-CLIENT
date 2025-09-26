'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';

import { useTranslations } from 'next-intl';

import { SelectFormField } from 'components/forms';
import { CampaignFormData } from 'schema/create-campaign-schema';
import { dateOptions } from 'utils';
import { timeOptions } from 'utils/time-options';

import { RHFSelect } from './rhf-Select';

export default function CampaignEndInfo() {
  const { AM_PM, HOURS, MINUTES } = timeOptions();
  const { months, years, days } = dateOptions();
  const {
    formState: { errors },
  } = useFormContext<CampaignFormData>();

  const t = useTranslations('brandMyPageCreateCampaign');

  return (
    <section className="flex w-[64.8rem] flex-col gap-[1.6rem]">
      <SelectFormField label={t('schedule.endDate')} required>
        <div className="flex gap-[2.4rem]">
          <RHFSelect
            name="endDate.month"
            options={months}
            size="small"
            placeholder="Month"
          />
          <RHFSelect
            name="endDate.day"
            options={days}
            size="small"
            placeholder="Day"
          />
          <RHFSelect
            name="endDate.year"
            options={years}
            size="small"
            placeholder="Year"
          />
        </div>
        {(errors.endDate?.month ||
          errors.endDate?.day ||
          errors.endDate?.year) && (
          <p className="text-red caption3 font-[400]">
            {t(
              `errorMessage.${errors.endDate.month?.message || errors.endDate.day?.message || errors.endDate.year?.message}`
            )}
          </p>
        )}
      </SelectFormField>

      <SelectFormField label={t('schedule.endTime')} required>
        <div className="flex gap-[2.4rem]">
          <RHFSelect
            name="endTime.period"
            options={AM_PM}
            size="small"
            placeholder="AM/PM"
          />
          <RHFSelect
            name="endTime.hour"
            options={HOURS}
            size="small"
            placeholder="Hour"
          />
          <RHFSelect
            name="endTime.minute"
            options={MINUTES}
            size="small"
            placeholder="Minute"
          />
        </div>
        {(errors.endTime?.hour || errors.endTime?.minute) && (
          <p className="text-red caption3 font-[400]">
            {t(
              `errorMessage.${errors.endTime.hour?.message || errors.endTime.minute?.message}`
            )}
          </p>
        )}
      </SelectFormField>
    </section>
  );
}
