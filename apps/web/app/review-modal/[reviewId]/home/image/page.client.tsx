'use client';

import { useRouter } from 'next/navigation';

import ReviewModalContent from '../../../components/modal-structure/ReviewModalContent';

interface ImageReviewClientPageProps {
  userStatus: boolean;
}

export default function ClientPage({ userStatus }: ImageReviewClientPageProps) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <ReviewModalContent
      userStatus={userStatus}
      source="home"
      type="image"
      onClose={handleClose}
    />
  );
}
