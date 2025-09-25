'use client';

import { useState } from 'react';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

import {
  SignupFormLayout,
  SnsConnection,
} from '../../../../../../components/forms';
import { ConfirmSignupModal } from '../../components/confirm-signup-modal';

export default function CreatorSnsLinksPage() {
  const router = useRouter();
  const t = useTranslations('creatorSnsLinksPage');

  const [isShowConfirmModal, setIsShowConfirmModal] = useState(false);

  const handleSubmit = () => {
    // SnsConnection 컴포넌트 내부에서 연결 상태를 관리하므로
    // 여기서는 단순히 확인 모달만 표시
    setIsShowConfirmModal(true);
  };

  const handleConfirmModalConfirm = () => {
    router.push('/');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <SignupFormLayout
        title={t('title')}
        onBack={handleBack}
        onSubmit={handleSubmit}
        isValid={true}
        submitLabel={t('submitLabel')}
        isBackDisabled={false}
      >
        <SnsConnection description={t('snsDescription')} />
      </SignupFormLayout>

      <ConfirmSignupModal
        open={isShowConfirmModal}
        onOpenChange={setIsShowConfirmModal}
        onConfirm={handleConfirmModalConfirm}
      />
    </>
  );
}
