'use client';

import { useState } from 'react';

import LoadingSvg from 'components/loading/loading-svg';

import { useReviewModalData } from '../../hooks/useReviewModalData';
import { ReviewModalSwiper, ReviewOnboardingModal } from './';

interface ReviewModalContentProps {
  userStatus: boolean;
  source: 'home' | 'detail' | 'search';
  type: 'image' | 'video';
  productId?: number;
  onClose?: () => void;
}

export default function ReviewModalContent({
  userStatus,
  source,
  type,
  productId,
  onClose,
}: ReviewModalContentProps) {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(true);

  const handleCloseOnboarding = () => {
    setIsOnboardingOpen(false);
  };

  const { currentIndex, allReviews, isListLoading, listError, detailQueries } =
    useReviewModalData({ source, type, productId });

  if (isListLoading) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-black">
        <LoadingSvg />
      </div>
    );
  }

  if (listError || allReviews.length === 0) {
    return <div>리뷰 목록을 불러올 수 없습니다.</div>;
  }

  if (currentIndex === -1) {
    return <div>리뷰를 찾을 수 없습니다.</div>;
  }

  if (detailQueries.some((q) => q.isLoading)) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-black">
        <LoadingSvg />
      </div>
    );
  }

  return (
    <>
      {isOnboardingOpen && (
        <ReviewOnboardingModal handleCloseOnboarding={handleCloseOnboarding} />
      )}
      <ReviewModalSwiper
        userStatus={userStatus}
        currentIndex={currentIndex}
        reviews={allReviews}
        onClose={onClose || (() => {})}
      />
    </>
  );
}
