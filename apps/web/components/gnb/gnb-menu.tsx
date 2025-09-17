'use client';

import { useTranslations } from 'next-intl';

import { Link } from 'i18n/navigation';

export default function GnbMenu() {
  const t = useTranslations('gnb');
  return (
    <nav className="flex">
      <Link href={'/all/1'} className="whitespace-nowrap p-[1.6rem]">
        {t('campaigns')}
      </Link>
      <Link href={'/'} className="whitespace-nowrap p-[1.6rem]">
        {t('howItWorks')}
      </Link>
    </nav>
  );
}
