'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import { useTranslations } from 'next-intl';

import { useAuth } from 'hooks/use-auth';

import { Button } from '@lococo/design-system/button';
import { Progress } from '@lococo/design-system/progress';
import { Star } from '@lococo/design-system/star';
import { SvgJapaneseReview, SvgWrite } from '@lococo/icons';

import { ScorePercentData } from '../types';

interface StarRatingProps {
  reviewCount: number;
  rating: number;
  starPercent: ScorePercentData[];
}

export default function StarRating({
  reviewCount,
  rating,
  starPercent,
}: StarRatingProps) {
  const params = useParams();
  const { isLoggedIn } = useAuth();
  const t = useTranslations('legacy');

  return (
    <div className="flex flex-col gap-[3.2rem]">
      <h2 className="head2 inline-flex items-center gap-[1.2rem] font-bold">
        <SvgJapaneseReview size={24} className="fill-red" /> {t('productDetail.japaneseReview')}
      </h2>

      <div className="flex h-[25.6rem] w-full items-center justify-between rounded-[1.2rem] bg-gray-100 px-[8rem] py-[4rem]">
        <div className="flex gap-[2rem]">
          <span className="head1 font-bold text-gray-800">{rating}</span>
          <div className="flex flex-col items-center gap-[0.6rem]">
            <Star color="black" rating={rating} />
            <div className="flex gap-[0.4rem]">
              <span className="title3 font-bold text-gray-600">
                {reviewCount}
              </span>
              <span className="title3 font-bold text-gray-600">{t('review.reviewCount')}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[1.4rem]">
          {starPercent.map(({ percent, score }, index) => (
            <div className="flex items-center gap-[1.6rem]" key={index}>
              <span className="title3 font-bold text-gray-600">{score}</span>
              <Progress value={percent} width="52rem"></Progress>
              <span className="title3 font-bold text-gray-600">{percent}%</span>
            </div>
          ))}
        </div>
      </div>

      <Button color="primary" variant="filled" size="lg" rounded="sm" asChild>
        {/* TODO: 랜딩 배포 이후 라우팅 URL 추가 */}
        <Link
          href={
            isLoggedIn
              ? `/product-detail/${params.productId}/write-review`
              : '/login'
          }
        >
          <span className="title2 inline-flex items-center gap-[0.8rem]">
            <SvgWrite />
            {t('review.writeReview')}
          </span>
        </Link>
      </Button>
    </div>
  );
}
