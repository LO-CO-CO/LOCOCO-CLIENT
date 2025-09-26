import { UseFormReturn } from 'react-hook-form';

import { useTranslations } from 'next-intl';

import { ErrorNotice } from '@lococo/design-system/error-notice';
import { Input } from '@lococo/design-system/input';
import { Select } from '@lococo/design-system/select';

import {
  FormSection,
  SelectFormField,
  TextFormField,
} from '../../../../../../components/forms';
import {
  CONTENT_LANGUAGES,
  GENDERS,
} from '../../../../../../constants/creator-options';
import { countryPhoneCodeOptions, dateOptions } from '../../../../../../utils';
import { type CreatorSignupForm } from '../utils/signup';

interface PersonalDetailsProps {
  form: UseFormReturn<CreatorSignupForm>;
}

export function PersonalDetails({ form }: PersonalDetailsProps) {
  const t = useTranslations('creatorSignup.personalDetails');
  const { months, days, years } = dateOptions();
  const countryCodes = countryPhoneCodeOptions();

  return (
    <div className="mt-[4.8rem] w-full">
      <FormSection title={t('title')} description={t('description')}>
        <div className="space-y-[1.6rem]">
          <SelectFormField label={t('birthLabel')} required>
            <div className="flex flex-col">
              <div className="flex gap-[2.4rem]">
                <Select
                  placeholder={t('monthPlaceholder')}
                  options={months}
                  value={form.watch('birthMonth')}
                  onValueChange={(selectedLabel) => {
                    const selectedMonth = months.find(
                      (option) => option.label === selectedLabel
                    );
                    form.setValue(
                      'birthMonth',
                      selectedMonth?.value || selectedLabel,
                      {
                        shouldValidate: true,
                      }
                    );
                  }}
                  size="small"
                />
                <Select
                  placeholder={t('dayPlaceholder')}
                  options={days}
                  value={form.watch('birthDay')}
                  onValueChange={(selectedLabel) => {
                    const selectedDay = days.find(
                      (option) => option.label === selectedLabel
                    );
                    form.setValue(
                      'birthDay',
                      selectedDay?.value || selectedLabel,
                      {
                        shouldValidate: true,
                      }
                    );
                  }}
                  size="small"
                />
                <Select
                  placeholder={t('yearPlaceholder')}
                  options={years}
                  value={form.watch('birthYear')}
                  onValueChange={(selectedLabel) => {
                    const selectedYear = years.find(
                      (option) => option.label === selectedLabel
                    );
                    form.setValue(
                      'birthYear',
                      selectedYear?.value || selectedLabel,
                      {
                        shouldValidate: true,
                      }
                    );
                  }}
                  size="small"
                />
              </div>
              {(form.formState.errors.birthMonth ||
                form.formState.errors.birthDay ||
                form.formState.errors.birthYear) && (
                <div className="mt-[0.8rem]">
                  <ErrorNotice
                    message={
                      form.formState.errors.birthMonth?.message ||
                      form.formState.errors.birthDay?.message ||
                      form.formState.errors.birthYear?.message ||
                      ''
                    }
                  />
                </div>
              )}
            </div>
          </SelectFormField>

          <SelectFormField
            label={t('genderLabel')}
            required
            placeholder={t('genderPlaceholder')}
            options={GENDERS}
            value={form.watch('gender')}
            onValueChange={(value) =>
              form.setValue('gender', value, { shouldValidate: true })
            }
            error={form.formState.errors.gender?.message}
          />

          <TextFormField
            label={t('firstNameLabel')}
            required
            placeholder={t('firstNamePlaceholder')}
            register={form.register('firstName')}
            error={form.formState.errors.firstName?.message}
          />

          <TextFormField
            label={t('lastNameLabel')}
            required
            placeholder={t('lastNamePlaceholder')}
            register={form.register('lastName')}
            error={form.formState.errors.lastName?.message}
          />

          <SelectFormField label={t('phoneNumberLabel')} required>
            <div className="flex flex-col">
              <div className="flex gap-[2.4rem]">
                <Select
                  placeholder={t('phoneCountryPlaceholder')}
                  options={countryCodes}
                  value={form.watch('phoneCountryCode')}
                  onValueChange={(selectedLabel) => {
                    const selectedCountryCode = countryCodes.find(
                      (option) => option.label === selectedLabel
                    );
                    form.setValue(
                      'phoneCountryCode',
                      selectedCountryCode?.value || selectedLabel,
                      {
                        shouldValidate: true,
                      }
                    );
                  }}
                  size="small"
                />
                <Input
                  type="default"
                  placeholder={t('phoneNumberPlaceholder')}
                  className="h-[4rem] w-[26.4rem]"
                  maxLength={12}
                  {...form.register('phoneNumber', {
                    onChange: () =>
                      form.trigger(['phoneCountryCode', 'phoneNumber']),
                  })}
                />
              </div>
              {(form.formState.errors.phoneCountryCode ||
                form.formState.errors.phoneNumber) && (
                <div className="mt-[0.8rem]">
                  <ErrorNotice
                    message={
                      form.formState.errors.phoneCountryCode?.message ||
                      form.formState.errors.phoneNumber?.message ||
                      ''
                    }
                  />
                </div>
              )}
            </div>
          </SelectFormField>

          <SelectFormField
            label={t('contentLanguageLabel')}
            required
            placeholder={t('contentLanguagePlaceholder')}
            options={CONTENT_LANGUAGES}
            value={form.watch('contentLanguage')}
            onValueChange={(value) =>
              form.setValue('contentLanguage', value, {
                shouldValidate: true,
              })
            }
            error={form.formState.errors.contentLanguage?.message}
          />
        </div>
      </FormSection>
    </div>
  );
}
