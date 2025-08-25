'use client';

import { useRouter } from 'next/navigation';

import ReviewModalContent from '../../../components/modal-structure/ReviewModalContent';

interface VideoReviewClientPageProps {
  userStatus: boolean;
}

export default function ClientPage({ userStatus }: VideoReviewClientPageProps) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <ReviewModalContent
      userStatus={userStatus}
      source="search"
      type="video"
      onClose={handleClose}
    />
  );
}
