'use client';

import { useTranslations } from 'next-intl';

import ContentWithLabel from 'components/input/content-with-label';
import { REVIEW_TEXT } from 'constants/review';
import type { ReviewFormData } from 'types/review';

import { ErrorNotice } from '@lococo/design-system/error-notice';
import { Textarea } from '@lococo/design-system/textarea';

interface Props {
  value: ReviewFormData['negativeComment'];
  onChange: (comment: string) => void;
  error?: string;
}

export default function NegativeReview({ value, onChange, error }: Props) {
  const t = useTranslations('legacy.review');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <ContentWithLabel label={t('negativeLabel')} className="flex-col" required>
      <Textarea.Container>
        <Textarea
          value={value}
          onChange={handleChange}
          placeholder={t('negativePlaceholder')}
          maxLength={REVIEW_TEXT.MAX_LENGTH}
          className="h-[6.6rem]"
        />
        {error && value.length > 0 && <ErrorNotice message={error} />}
      </Textarea.Container>
    </ContentWithLabel>
  );
}
