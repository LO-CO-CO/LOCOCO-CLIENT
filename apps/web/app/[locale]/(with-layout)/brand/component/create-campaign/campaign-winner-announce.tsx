'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';

import { useTranslations } from 'next-intl';

import { SelectFormField } from 'components/forms';
import { CampaignFormData } from 'schema/create-campaign-schema';
import { dateOptions } from 'utils';
import { timeOptions } from 'utils/time-options';

import { RHFSelect } from './rhf-Select';

export default function CampaignWinnerAnnounce() {
  const { AM_PM, HOURS, MINUTES } = timeOptions();
  const { months, years, days } = dateOptions();
  const {
    formState: { errors },
  } = useFormContext<CampaignFormData>();

  const t = useTranslations('brandMyPageCreateCampaign');

  return (
    <section className="flex w-[64.8rem] flex-col gap-[1.6rem]">
      <SelectFormField label={t('schedule.announceDate')} required>
        <div className="flex gap-[2.4rem]">
          <RHFSelect
            name="announceDate.month"
            options={months}
            placeholder="Month"
            size="small"
          />
          <RHFSelect
            name="announceDate.day"
            options={days}
            placeholder="Day"
            size="small"
          />
          <RHFSelect
            name="announceDate.year"
            options={years}
            placeholder="Year"
            size="small"
          />
        </div>
        {(errors.announceDate?.month ||
          errors.announceDate?.day ||
          errors.announceDate?.year) && (
          <p className="text-red caption3 font-[400]">
            {t(
              `errorMessage.${errors.announceDate.month?.message || errors.announceDate.day?.message || errors.announceDate.year?.message}`
            )}
          </p>
        )}
      </SelectFormField>

      <SelectFormField label={t('schedule.announceTime')} required>
        <div className="flex gap-[2.4rem]">
          <RHFSelect
            name="announceTime.period"
            options={AM_PM}
            placeholder="AM/PM"
            size="small"
          />
          <RHFSelect
            name="announceTime.hour"
            options={HOURS}
            placeholder="Hour"
            size="small"
          />
          <RHFSelect
            name="announceTime.minute"
            options={MINUTES}
            placeholder="Minute"
            size="small"
          />
        </div>
        {(errors.announceTime?.hour || errors.announceTime?.minute) && (
          <p className="text-red caption3 font-[400]">
            {t(
              `errorMessage.${errors.announceTime.hour?.message || errors.announceTime.minute?.message}`
            )}
          </p>
        )}
      </SelectFormField>
    </section>
  );
}
