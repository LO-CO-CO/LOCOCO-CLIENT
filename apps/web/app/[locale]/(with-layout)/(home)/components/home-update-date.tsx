'use client';

import { useTranslations } from 'next-intl';

export default function HomeUpdateDate() {
  const t = useTranslations('legacy.home');

  const japanDate = new Date().toLocaleDateString('ja-JP', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const [year, month, day] = japanDate.split('/');

  return (
    <div className="body2 mt-[4rem] flex justify-end font-medium text-gray-600">
      {t('updateDate')} :<span className="body1">{year}</span>{t('year')}
      <span className="body1">{month}</span>{t('month')}
      <span className="body1">{day}</span>{t('day')}
    </div>
  );
}
