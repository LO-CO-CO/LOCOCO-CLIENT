'use client';

import { useTranslations } from 'next-intl';

import { AddressSearchModal } from '../../../../../components/address/AddressSearchModal';
import {
  FormSection,
  PhoneFormField,
  SignupFormLayout,
  TextFormField,
} from '../../../../../components/forms';
import { useAddressSearch } from '../../../../../hooks/useAddressSearch';
import { useBrandForm } from './hooks/useBrandForm';

export default function BrandSignupPage() {
  const t = useTranslations('brandSignup');
  const { form, handleSubmit, handleBack } = useBrandForm();

  const { isOpen, openAddressSearch, closeAddressSearch, handleComplete } =
    useAddressSearch({
      onComplete: (data) => {
        const address = `${data.roadAddress} (${data.zonecode})`;
        form.setValue('street', address);
        form.trigger('street');
      },
    });

  return (
    <>
      <AddressSearchModal
        isOpen={isOpen}
        onComplete={handleComplete}
        onClose={closeAddressSearch}
      />
      <SignupFormLayout
        title={t('layout.title')}
        onBack={handleBack}
        onSubmit={form.handleSubmit(handleSubmit)}
        isValid={form.formState.isValid}
        submitLabel={t('layout.submit')}
        isBackDisabled={true}
      >
        <FormSection
          title={t('brandInfo.title')}
          description={t('brandInfo.description')}
        >
          <TextFormField
            label={t('brandInfo.brandName')}
            required
            placeholder={t('brandInfo.brandNamePlaceholder')}
            register={form.register('brandName')}
            error={form.formState.errors.brandName?.message}
          />

          <TextFormField
            label={t('brandInfo.contactName')}
            required
            placeholder={t('brandInfo.contactNamePlaceholder')}
            register={form.register('contactName')}
            error={form.formState.errors.contactName?.message}
          />

          <TextFormField
            label={t('brandInfo.contactPosition')}
            required
            placeholder={t('brandInfo.contactPositionPlaceholder')}
            register={form.register('contactPosition')}
            error={form.formState.errors.contactPosition?.message}
          />

          <PhoneFormField
            label={t('brandInfo.contactPhone')}
            required
            placeholder={t('brandInfo.contactPhonePlaceholder')}
            register={form.register('contactPhone')}
            error={form.formState.errors.contactPhone?.message}
          />
        </FormSection>

        <div className="mt-[4.8rem]">
          <FormSection
            title={t('companyAddress.title')}
            description={t('companyAddress.description')}
          >
            <TextFormField
              label={t('companyAddress.streetAddress')}
              required
              placeholder={t('companyAddress.streetAddressPlaceholder')}
              register={form.register('street')}
              error={form.formState.errors.street?.message}
              showSearchIcon
              handleClickSearch={openAddressSearch}
            />

            <TextFormField
              label={t('companyAddress.detailAddress')}
              required
              placeholder={t('companyAddress.detailAddressPlaceholder')}
              register={form.register('detail')}
              error={form.formState.errors.detail?.message}
            />
          </FormSection>
        </div>
      </SignupFormLayout>
    </>
  );
}
