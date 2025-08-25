'use client';

import { useEffect, useState } from 'react';

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

const showOnboarding = (isLoggedIn: boolean): boolean => {
  if (typeof window === 'undefined') return false;

  const onboardingKey = isLoggedIn ? 'shownLoggedIn' : 'shownAnonymous';
  const isVisited = localStorage.getItem(onboardingKey);

  return !isVisited;
};

const markOnboardingAsSeen = (isLoggedIn: boolean): void => {
  if (typeof window === 'undefined') return;

  const onboardingKey = isLoggedIn ? 'shownLoggedIn' : 'shownAnonymous';
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

  useEffect(() => {
    if (isLoggedIn !== null) {
      const isOnboardingRequired = showOnboarding(isLoggedIn);
      setIsOnboardingOpen(isOnboardingRequired);
    }
  }, [isLoggedIn]);

  const handleCloseOnboarding = () => {
    setIsOnboardingOpen(false);
    if (isLoggedIn !== null) {
      markOnboardingAsSeen(isLoggedIn);
    }
  };

  const { currentIndex, allReviews, isListLoading, listError, detailQueries } =
    useReviewModalData({ source, type, productId });

  if (isListLoading || detailQueries.some((q) => q.isLoading)) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-black">
        <LoadingSvg />
      </div>
    );
  }

  // TODO: 추후 에러 페이지로 변경
  if (listError || allReviews.length === 0) {
    return <div>리뷰 목록을 불러올 수 없습니다.</div>;
  }

  if (currentIndex === -1) {
    return <div>리뷰를 찾을 수 없습니다.</div>;
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
