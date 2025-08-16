'use client';

import { useRouter } from 'next/navigation';

import ReviewModalContent from '../../../components/modal-structure/ReviewModalContent';

export default function ClientPage() {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <ReviewModalContent source="search" type="video" onClose={handleClose} />
  );
}
