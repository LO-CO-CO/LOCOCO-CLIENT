'use client';

import { useTranslations } from 'next-intl';

export default function LoginTitle() {
  const t = useTranslations('legacy.login');

  return (
    <>
      <h1 className="head3 mb-[1.4rem] font-bold text-pink-500">
        {t('memberLogin')}
      </h1>
      <p className="body2 text-gray-700">{t('lineLoginMessage')}</p>
    </>
  );
}
