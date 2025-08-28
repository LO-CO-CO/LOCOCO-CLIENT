'use client';

import { useModalClose } from 'hooks/useModalClose';

import ReviewModalContent from '../../../components/modal-structure/ReviewModalContent';

export default function ClientPage() {
  const { handleClose } = useModalClose();

  return (
    <ReviewModalContent source="detail" type="image" onClose={handleClose} />
  );
}
