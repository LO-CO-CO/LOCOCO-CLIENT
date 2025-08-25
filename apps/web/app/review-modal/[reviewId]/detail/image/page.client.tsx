'use client';

import { useRouter } from 'next/navigation';

import ReviewModalContent from '../../../components/modal-structure/ReviewModalContent';

export default function ClientPage() {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <ReviewModalContent source="detail" type="image" onClose={handleClose} />
  );
}
