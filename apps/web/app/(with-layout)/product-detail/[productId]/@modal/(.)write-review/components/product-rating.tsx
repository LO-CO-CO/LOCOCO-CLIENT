'use client';

import ContentWithLabel from 'components/input/content-with-label';
import type { ReviewFormData } from 'types/review';
import { SvgStar } from '@lococo/design-system';
import { ErrorNotice } from '@/components';
import { cn } from '@/lib/utils';

interface Props {
  value: ReviewFormData['rating'];
  onChange: (rating: number) => void;
  error?: string;
}

export default function ProductRating({ value, onChange, error }: Props) {
  return (
    <ContentWithLabel
      label="商品はいかがでしたか？"
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
