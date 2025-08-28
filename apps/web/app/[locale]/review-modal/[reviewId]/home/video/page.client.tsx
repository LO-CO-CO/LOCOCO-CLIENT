'use client';

import { useModalClose } from 'hooks/useModalClose';

import ReviewModalContent from '../../../components/modal-structure/ReviewModalContent';

export default function ClientPage() {
  const { handleClose } = useModalClose();

  return (
    <ReviewModalContent source="home" type="video" onClose={handleClose} />
  );
}
