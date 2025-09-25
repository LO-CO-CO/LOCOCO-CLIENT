import { useState } from 'react';

import { useTranslations } from 'next-intl';

import { ErrorNotice } from '@lococo/design-system/error-notice';
import { SvgInstagram, SvgTiktok } from '@lococo/icons';
import { cn } from '@lococo/utils';

import { ContentSubmissionsFormData } from '../../hooks/use-content-submissions';

interface ContentTypeSelectProps {
  formData: ContentSubmissionsFormData;
  errors: string | undefined;
  updateContentType: (campaignId: number, contentType: string) => void;
}

export default function ContentTypeSelect({
  formData,
  errors,
  updateContentType,
}: ContentTypeSelectProps) {
  const t = useTranslations('myPage.contentSubmissions.contentTypeSelect');
  const [selectedContentType, setSelectedContentType] = useState<string>(
    formData.contentType || ''
  );
  const handleContentTypeChange = (contentType: string) => {
    if (formData.campaignId) {
      updateContentType(formData.campaignId, contentType);
    }
    setSelectedContentType(contentType);
  };

  const CONTENT_TYPES = [
    {
      label: t('instagramPost'),
      value: 'INSTA_POST',
      icon: <SvgInstagram size={20} />,
    },
    {
      label: t('instagramReels'),
      value: 'INSTA_REELS',
      icon: <SvgInstagram size={20} />,
    },
    {
      label: t('tiktokVideo'),
      value: 'TIKTOK_VIDEO',
      icon: <SvgTiktok size={20} />,
    },
  ] as const;

  const getButtonClassName = (value: string) =>
    cn(
      'body1 flex cursor-pointer items-center gap-[0.5rem] rounded-[2.4rem] border border-gray-400 px-[1.6rem] py-[0.6rem] transition-colors',
      selectedContentType === value &&
        'border-pink-500 bg-pink-100 text-pink-500'
    );

  return (
    <section className="flex w-full flex-col gap-[1.6rem]">
      <p className="title2 text-gray-800">{t('title')}</p>
      <div className="flex gap-[1.2rem]">
        {CONTENT_TYPES.map(({ label, value, icon: Icon }) => (
          <button
            key={value}
            onClick={() => handleContentTypeChange(value)}
            className={getButtonClassName(value)}
          >
            {Icon}
            <span>{label}</span>
          </button>
        ))}
      </div>
      {errors && <ErrorNotice message={errors} />}
    </section>
  );
}
