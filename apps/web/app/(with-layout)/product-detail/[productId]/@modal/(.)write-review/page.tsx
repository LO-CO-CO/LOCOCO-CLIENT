'use client';

import Modal from 'components/modal/modal';
import { useEffect, useState } from 'react';
import { notFound, useParams, useRouter } from 'next/navigation';
import { Button, IconButton } from '@lococo/design-system';
import { SvgClose } from '@/icons';
import { getProductDetail } from '../../apis';
import { ProductOptionData } from '../../types';
import {
  MediaUpload,
  NegativeReview,
  PositiveReview,
  ProductInfo,
  ProductOption,
  ProductRating,
  ReceiptCertification,
} from './components';
import { useReviewInput } from './hooks';

export default function WriteReviewModal() {
  const router = useRouter();
  const { productId } = useParams();

  const {
    formData,
    errors,
    reset,
    updateProductOption,
    updateRating,
    updatePositiveComment,
    updateNegativeComment,
    updateMediaFiles,
    updateReceiptFile,
    handleSubmit,
    isFormValid,
  } = useReviewInput(Number(productId), () => {
    reset();
    router.back();
  });
  const [productName, setProductName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [brandName, setBrandName] = useState('');
  const [productOptions, setProductOptions] = useState<ProductOptionData[]>([]);

  useEffect(() => {
    const fetchProductDetail = async () => {
      const { productName, imageUrls, brandName, productOptions } =
        await getProductDetail(Number(productId));
      setProductName(productName);
      setImageUrl(imageUrls[0] || '');
      setBrandName(brandName);
      setProductOptions(productOptions);
    };
    fetchProductDetail();
  }, [productId]);

  const handleClose = () => {
    router.back();
  };

  const onSubmit = () => {
    handleSubmit();
  };

  return (
    <Modal className="size-[70rem] rounded-[0.8rem]" onClose={handleClose}>
      <Modal.Header className="sticky top-0 flex justify-between">
        <h2 className="jp-body1 font-bold text-gray-800">レビューを書く</h2>
        <IconButton
          icon={<SvgClose />}
          size="sm"
          color="secondary"
          onClick={handleClose}
        />
      </Modal.Header>

      <Modal.Body className="scrollbar-hide overflow-y-scroll">
        <ProductInfo
          productName={productName}
          imageUrl={imageUrl}
          brandName={brandName}
        />
        <div className="flex flex-col gap-[1.2rem] p-[2rem]">
          <ProductOption
            value={formData.productOptionId}
            onChange={updateProductOption}
            error={errors.productOptionId}
            options={productOptions}
          />
          <ProductRating
            value={formData.rating}
            onChange={updateRating}
            error={errors.rating}
          />
          <PositiveReview
            value={formData.positiveComment}
            onChange={updatePositiveComment}
            error={errors.positiveComment}
          />
          <NegativeReview
            value={formData.negativeComment}
            onChange={updateNegativeComment}
            error={errors.negativeComment}
          />
          <ReceiptCertification
            file={formData.receiptFile}
            onChange={updateReceiptFile}
            error={errors.receiptFile}
          />
          <MediaUpload
            files={formData.mediaFiles}
            onChange={updateMediaFiles}
            error={errors.mediaFiles}
          />
        </div>
      </Modal.Body>

      <Modal.Footer className="px-[2rem] py-[1.2rem]">
        <Button
          variant="filled"
          size="lg"
          color="primary"
          className="jp-title2 w-full px-[1.6rem] py-[1.2rem]"
          rounded
          onClick={onSubmit}
          disabled={!isFormValid}
        >
          送信する
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
