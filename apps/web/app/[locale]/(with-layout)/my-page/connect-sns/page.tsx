'use client';

import React from 'react';

import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';

import LoadingSvg from 'components/loading/loading-svg';

import { SnsConnection } from '../../../../../components/forms/SnsConnection';
import { useOAuthCallback } from '../../../../../hooks/use-connect-sns';

export default function ConnectSNS() {
  const t = useTranslations('creatorSnsLinksPage');
  const searchParams = useSearchParams();

  // OAuth 콜백 처리
  const { isProcessingCallback } = useOAuthCallback();

  const error = searchParams.get('error');

  if (isProcessingCallback) {
    return <LoadingSvg />;
  }

  if (error) {
    throw new Error('SNS 연결에 실패했습니다.');
  }

  return (
    <div className="flex min-h-[calc(100vh-11.2rem)] w-full flex-col items-center bg-gray-100 px-[9.4rem] py-[6.4rem]">
      <div className="flex items-center justify-center bg-white px-[6.4rem] py-[12.8rem]">
        <SnsConnection
          description={t('snsDescription')}
          className="w-[84rem]"
        />
      </div>
    </div>
  );
}
