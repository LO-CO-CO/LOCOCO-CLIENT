'use client';

import { useEffect, useState } from 'react';

import { useTranslations } from 'next-intl';
import LoadingSvg from 'components/loading/loading-svg';
import { useAuth } from 'hooks/use-auth';

import { useReviewModalData } from '../../hooks/useReviewModalData';
import { ReviewModalSwiper, ReviewOnboardingModal } from './';

interface ReviewModalContentProps {
  source: 'home' | 'detail' | 'search';
  type: 'image' | 'video';
  productId?: number;
  onClose?: () => void;
}

const showOnboarding = (): boolean => {
  if (typeof window === 'undefined') return false;

  const onboardingKey = 'shownOnboarding';
  const isVisited = localStorage.getItem(onboardingKey);

  return !isVisited;
};

const markOnboardingAsSeen = (): void => {
  if (typeof window === 'undefined') return;

  const onboardingKey = 'shownOnboarding';
  localStorage.setItem(onboardingKey, 'true');
};

export default function ReviewModalContent({
  source,
  type,
  productId,
  onClose,
}: ReviewModalContentProps) {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const { isLoggedIn } = useAuth();
  const t = useTranslations('reviews');

  useEffect(() => {
    if (isLoggedIn !== null) {
      const isOnboardingRequired = showOnboarding();
      setIsOnboardingOpen(isOnboardingRequired);
    }
  }, [isLoggedIn]);

  const handleCloseOnboarding = () => {
    setIsOnboardingOpen(false);
    markOnboardingAsSeen();
  };

  const { currentIndex, allReviews, isListLoading, listError, detailQueries } =
    useReviewModalData({ source, type, productId });

  const currentQuery =
    currentIndex >= 0 && currentIndex < detailQueries.length
      ? detailQueries[currentIndex]
      : undefined;
  const isCurrentReady = Boolean(currentQuery?.isSuccess);

  if (isListLoading || !isCurrentReady) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-black">
        <LoadingSvg />
      </div>
    );
  }

  // TODO: 추후 에러 페이지로 변경
  if (listError || allReviews.length === 0) {
    return <div>{t('unableToLoadReviewList')}</div>;
  }

  if (currentIndex === -1) {
    return <div>{t('reviewNotFound')}</div>;
  }

  return (
    <>
      {isOnboardingOpen && (
        <ReviewOnboardingModal handleCloseOnboarding={handleCloseOnboarding} />
      )}
      <ReviewModalSwiper
        currentIndex={currentIndex}
        reviews={allReviews}
        onClose={onClose || (() => {})}
      />
    </>
  );
}
