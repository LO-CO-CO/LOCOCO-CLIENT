'use client';

import { useTranslations } from 'next-intl';

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@lococo/design-system/dialog';
import { ModalButton } from '@lococo/design-system/modal-button';
import { ModalHeader } from '@lococo/design-system/modal-header';

interface RejectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  type: 'notProCreator' | 'notCreator' | null;
}

export function RejectModal({
  open,
  onOpenChange,
  onConfirm,
  type,
}: RejectModalProps) {
  const t = useTranslations('campaignDetail.rejectModal');

  const handleConfirmModal = () => {
    onConfirm();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="fixed left-1/2 top-1/2 w-full max-w-[55rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[3.2rem] p-0"
        showCloseButton={false}
      >
        <DialogTitle className="sr-only">{t('title')}</DialogTitle>

        <ModalHeader text={t('title')} />

        <section className="bg-white px-[4rem] py-[7rem]">
          {/* TODO: 아이콘 추가 */}
          <div className="text-center">
            <p className="body3 whitespace-pre-line font-medium text-gray-800">
              {type === 'notProCreator'
                ? t('notProCreatorDescription')
                : type === 'notCreator'
                  ? t('notCreatorDescription')
                  : t('unExpectedErrorDescription')}
            </p>
          </div>
        </section>

        <div className="border-t border-pink-500">
          <ModalButton text={t('confirmButton')} onClick={handleConfirmModal} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
