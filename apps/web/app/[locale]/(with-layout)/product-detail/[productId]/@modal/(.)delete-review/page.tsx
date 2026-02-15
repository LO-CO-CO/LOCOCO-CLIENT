'use client';

import React from 'react';

import { useTranslations } from 'next-intl';
import { useParams, useRouter, useSearchParams } from 'next/navigation';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import Modal from 'components/modal/modal';

import { Button } from '@lococo/design-system/button';

import { deleteReview } from '../../apis';
import { PRODUCT_DETAIL_QUERY_KEYS } from '../../queries';

export default function DeleteReviewModal() {
  const t = useTranslations('reviews');
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();
  const reviewId = searchParams.get('reviewId');

  const queryClient = useQueryClient();

  const { mutate: reviewDeleteMutation } = useMutation({
    mutationFn: (reviewId: number) => {
      const response = deleteReview(reviewId);
      return response;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: PRODUCT_DETAIL_QUERY_KEYS.REVIEW_LIST(
          Number(params.productId)
        ),
      });
      router.back();
    },
  });

  const handleDelete = async () => {
    reviewDeleteMutation(Number(reviewId));
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <Modal className="w-[40rem]">
      <Modal.Header className="h-[4.8rem] font-[700]">
        <h1 className="body1">{t('deleteReviewModal.title')}</h1>
      </Modal.Header>
      <Modal.Body className="flex flex-col gap-[0.8rem] px-[1.6rem] pb-[2.4rem] pt-[1.6rem]">
        <p className="title2 font-bold">{t('deleteReviewModal.description')}</p>
        <p className="caption3 text-gray-00 font-[400]">
          {t('deleteReviewModal.warning')}
        </p>
      </Modal.Body>
      <Modal.Footer className="mb-[1.6rem] justify-center gap-[1.2rem]">
        <div className="flex gap-[1.2rem]">
          <Button
            color="secondary"
            variant="filled"
            size="lg"
            rounded="sm"
            className="title2 w-[17.8rem] text-pink-500"
            onClick={handleCancel}
          >
            {t('deleteReviewModal.cancel')}
          </Button>
          <Button
            color="primary"
            variant="filled"
            size="lg"
            rounded="sm"
            className="title2 w-[17.8rem] text-white"
            onClick={handleDelete}
          >
            {t('deleteReviewModal.delete')}
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
