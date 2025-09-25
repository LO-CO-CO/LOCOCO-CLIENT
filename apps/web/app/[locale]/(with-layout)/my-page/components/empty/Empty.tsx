import React from 'react';

import { useTranslations } from 'next-intl';

import { SvgImgPhoto } from '@lococo/icons';

interface EmptyProps {
  translationKey: string;
}

export default function Empty({ translationKey }: EmptyProps) {
  const t = useTranslations(translationKey);
  return (
    <div className="flex min-h-[44rem] w-full flex-col items-center justify-center gap-[3.2rem]">
      <SvgImgPhoto size={120} className="fill-pink-300" />
      <p className="title2 font-bold text-gray-700">{t('title')}</p>
    </div>
  );
}
