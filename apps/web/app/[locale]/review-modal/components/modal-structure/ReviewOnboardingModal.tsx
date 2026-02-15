'use client';

import { useTranslations } from 'next-intl';

import { SvgClose, SvgVector, SvgVector469, SvgVector470 } from '@lococo/icons';

function LeftAnimation() {
  return (
    <div className="relative flex h-[22.8rem] w-[22.8rem] rounded-[1.6rem] bg-[rgba(235,236,239,0.20)]">
      <div className="absolute left-[8.87rem] top-[2rem]">
        <SvgVector470 height={99.704} width={26.408} />
        <div className="absolute bottom-[0rem] left-1/2 h-[2rem] w-[2rem] -translate-x-1/2 rounded-full bg-pink-500"></div>
      </div>
      <div className="absolute left-[7.2rem] top-[10rem]">
        <SvgVector width={73.456} height={65.175} fill="white" />
      </div>
    </div>
  );
}

function RightAnimation() {
  return (
    <div className="relative flex h-[22.8rem] w-[22.8rem] items-center justify-center rounded-[1.6rem] bg-[rgba(235,236,239,0.20)] px-0 py-[5.2464rem] backdrop-blur-sm">
      <div className="relative h-[12.3072rem] w-[6.7341rem] rounded-[13.9326rem] bg-white">
        <div className="absolute left-1/2 top-[1.3rem] -translate-x-1/2">
          <SvgVector469 height={36.015} />
          <div className="absolute bottom-[0rem] left-1/2 h-[1rem] w-[1rem] -translate-x-1/2 rounded-full bg-pink-500"></div>
        </div>
      </div>
    </div>
  );
}

export default function ReviewOnboardingModal({
  handleCloseOnboarding,
}: {
  handleCloseOnboarding: () => void;
}) {
  const t = useTranslations('reviews');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={handleCloseOnboarding}
    >
      <div className="absolute right-0 top-0 z-10 cursor-pointer p-[1.4rem]">
        <SvgClose width={36} height={36} className="text-gray-500" />
      </div>

      <div className="relative flex w-[93.6rem] flex-col px-[22.4rem] py-[11.8rem]">
        {/* Main content */}
        <div className="flex w-[48.8rem] flex-col items-center gap-[4rem] self-stretch">
          <div className="flex items-center gap-[3.2rem]">
            <LeftAnimation />
            <RightAnimation />
          </div>
          <div className="text-center text-lg font-medium text-white">
            {t('onboardingPrefix')}
            <span className="text-pink-500">{t('onboardingSwipe')}</span>
            {t('onboardingMiddle')}
            <span className="text-pink-500">{t('onboardingScroll')}</span>
            {t('onboardingSuffix')}
          </div>
        </div>
      </div>
    </div>
  );
}
