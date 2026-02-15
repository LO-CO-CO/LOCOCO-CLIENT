import { useTranslations } from 'next-intl';

import { SvgBad, SvgGoodFill } from '@lococo/icons';

interface CommentProps {
  children: React.ReactNode;
  type: 'positive' | 'negative';
}
export default function Comment({ children, type }: CommentProps) {
  const t = useTranslations('reviews');

  return (
    <div className="flex w-fit flex-col gap-[1.2rem]">
      <div className="flex items-center gap-[1rem]">
        {type === 'positive' ? (
          <SvgGoodFill className="text-pink-500" />
        ) : (
          <SvgBad />
        )}
        <span className="body1 font-bold text-gray-600">
          {type === 'positive' ? t('good') : t('bad')}
        </span>
      </div>
      <div className="body2 text-gray-800">{children}</div>
    </div>
  );
}
