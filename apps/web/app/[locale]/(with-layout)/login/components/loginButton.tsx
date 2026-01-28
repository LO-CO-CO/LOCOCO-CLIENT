'use client';

import { useId } from 'react';

import Link from 'next/link';

import { useTranslations } from 'next-intl';

import { SvgLine } from '@lococo/icons';

import { generateLineLoginUrl } from '../utils/generateLinLoginUrl';

export default function LoginButton() {
  const uuid = useId();
  const lineLoginUrl = generateLineLoginUrl(uuid);
  const t = useTranslations('legacy.login');

  return (
    <Link
      href={lineLoginUrl}
      className="body1 relative mt-[12rem] flex h-[4.8rem] cursor-pointer items-center rounded-[0.6rem] bg-[#06C755] pl-[5.4rem] pr-[5.4rem] font-bold text-white"
    >
      <span className="absolute left-[2.1rem] flex items-center">
        <SvgLine size={20} />
      </span>
      <span className="flex w-[18.4rem] justify-center">{t('loginWithLine')}</span>
    </Link>
  );
}
