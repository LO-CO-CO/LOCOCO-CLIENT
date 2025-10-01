'use client';

import LoadingSvg from 'components/loading/loading-svg';

import { useTikTokOAuth } from '../hooks/useTikTokOAuth';

export default function TikTokOAuthLoading() {
  useTikTokOAuth({});

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="text-center">
        <LoadingSvg />
      </div>
    </div>
  );
}
