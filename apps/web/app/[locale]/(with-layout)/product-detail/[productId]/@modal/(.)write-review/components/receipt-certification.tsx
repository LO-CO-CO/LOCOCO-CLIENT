'use client';

import { ChangeEvent, useEffect, useState } from 'react';

import Image from 'next/image';

import { useTranslations } from 'next-intl';

import ContentWithLabel from 'components/input/content-with-label';
import type { ReviewFormData } from 'types/review';

import { ErrorNotice } from '@lococo/design-system/error-notice';
import { SvgAdd, SvgClose } from '@lococo/icons';

interface Props {
  file: ReviewFormData['receiptFile'];
  onChange: (value: ReviewFormData['receiptFile']) => void;
  error?: string;
}

export default function ReceiptCertification({ file, onChange, error }: Props) {
  const t = useTranslations('legacy.writeReviewModal');
  const tReview = useTranslations('legacy.review');
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      onChange(selectedFile);
    }
    e.target.value = '';
  };

  const handleRemoveFile = () => {
    onChange(undefined);
  };

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageUrl(e.target?.result as string);
      };
      reader.onerror = () => {
        setImageUrl(null);
      };
      reader.readAsDataURL(file);
    } else {
      setImageUrl(null);
    }
  }, [file]);

  return (
    <ContentWithLabel
      label={t('uploadReceipt')}
      className="flex-col border-b border-gray-400"
    >
      <p className="caption3 text-blue mt-[0.8rem] pb-[2.4rem]">
        {t('uploadReceiptDescription')}
      </p>

      {!file && (
        <div className="relative cursor-pointer">
          <input
            type="file"
            accept="image/jpeg, image/png, image/webp"
            className="absolute inset-0 z-10 cursor-pointer opacity-0"
            onChange={handleFileChange}
            aria-label={tReview('receipt')}
          />
          <div className="flex aspect-square size-32 cursor-pointer items-center justify-center rounded bg-gray-800">
            <SvgAdd className="aspect-square size-[3.6rem] shrink-0 cursor-pointer fill-white" />
          </div>
        </div>
      )}

      {file && imageUrl && (
        <div className="relative h-32 w-32">
          <Image
            src={imageUrl}
            alt={tReview('receipt')}
            className="h-full w-full rounded object-cover"
            width={80}
            height={80}
          />
          <button
            onClick={handleRemoveFile}
            className="absolute bottom-[0.4rem] right-[0.4rem] flex size-[1.8rem] items-center justify-center rounded-[0.2px] bg-black/30 p-[0.1rem]"
            type="button"
          >
            <SvgClose className="size-[1.6rem] fill-white" />
          </button>
        </div>
      )}
      {error && <ErrorNotice message={error} />}
    </ContentWithLabel>
  );
}
