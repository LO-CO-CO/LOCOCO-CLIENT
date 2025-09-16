'use client';

import { useTranslations } from 'next-intl';

export default function GnbMenu() {
  const t = useTranslations('gnb');
  return (
    <nav className="flex">
      <button className="whitespace-nowrap p-[1.6rem]">{t('campaigns')}</button>
      <button className="whitespace-nowrap p-[1.6rem]">
        {t('howItWorks')}
      </button>
    </nav>
  );
}
