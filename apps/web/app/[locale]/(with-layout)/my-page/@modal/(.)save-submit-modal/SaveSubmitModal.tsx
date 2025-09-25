import React from 'react';

import { useTranslations } from 'next-intl';

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@lococo/design-system/dialog';
import { ModalButton } from '@lococo/design-system/modal-button';
import { ModalHeader } from '@lococo/design-system/modal-header';

interface SaveSubmitModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  final?: boolean;
}

export function SaveSubmitModal({
  open,
  onOpenChange,
  final,
}: SaveSubmitModalProps) {
  const t = useTranslations('myPage.contentSubmissions.saveSubmitModal');
  const handleSaveSubmitModal = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="w-full max-w-[55rem] items-center overflow-hidden rounded-[3.2rem] p-0"
        showCloseButton={false}
      >
        <DialogTitle className="sr-only">Save Submit</DialogTitle>

        <ModalHeader text={t('title')} />

        <section className="flex min-h-[20rem] items-center justify-center bg-white p-[4rem]">
          <p className="body3 text-gray-800">
            {final ? t('secondDescription') : t('firstDescription')}
          </p>
        </section>
        <div className="flex items-center border-t border-pink-500">
          <ModalButton text={t('save')} onClick={handleSaveSubmitModal} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
