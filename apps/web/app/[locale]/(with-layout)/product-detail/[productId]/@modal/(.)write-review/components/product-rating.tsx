'use client';

import { useTranslations } from 'next-intl';

import ContentWithLabel from 'components/input/content-with-label';
import type { ReviewFormData } from 'types/review';

import { ErrorNotice } from '@lococo/design-system/error-notice';
import { SvgStar } from '@lococo/icons';
import { cn } from '@lococo/utils';

interface Props {
  value: ReviewFormData['rating'];
  onChange: (rating: number) => void;
  error?: string;
}

export default function ProductRating({ value, onChange, error }: Props) {
  const t = useTranslations('legacy.writeReviewModal');

  return (
    <ContentWithLabel
      label={t('ratingQuestion')}
      className="justify-between border-b border-gray-400 pb-[2.8rem]"
      required
    >
      <div className="flex flex-col gap-[0.8rem]">
        <div className="flex items-center gap-[0.8rem]">
          {[...Array(5)].map((_, index) => {
            const starNumber = index + 1;
            const isActive = starNumber <= value;

            return (
              <button
                key={`${index}-star`}
                type="button"
                className="flex cursor-pointer items-center justify-center transition-colors hover:scale-110"
                onClick={() => onChange(starNumber)}
              >
                <SvgStar
                  className={cn(
                    'size-[2.4rem] transition-colors',
                    isActive ? 'fill-yellow' : 'fill-gray-400'
                  )}
                />
              </button>
            );
          })}
        </div>
        {error && <ErrorNotice message={error} />}
      </div>
    </ContentWithLabel>
  );
}
