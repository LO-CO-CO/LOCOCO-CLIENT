'use client';

import { useRouter } from 'next/navigation';

import CardReview from 'components/card/card-review';
import {
  MainImageReview,
  MainImageReviewResponse,
  MainVideoReview,
  MainVideoReviewResponse,
} from 'swagger-codegen/data-contracts';

import { Button } from '@lococo/design-system/button';
import { SvgArrowOutward } from '@lococo/icons';
import { cn } from '@lococo/utils';

interface HomeSectionReviewProps {
  type: 'video' | 'image';
  className?: string;
  reviewCardList: MainImageReviewResponse | MainVideoReviewResponse;
}

export default function HomeSectionReview({
  type,
  className,
  reviewCardList,
}: HomeSectionReviewProps) {
  const router = useRouter();
  const reviews =
    'imageReviews' in reviewCardList
      ? reviewCardList.imageReviews
      : reviewCardList.videoReviews;

  return (
    <div className={cn(`mt-[3.2rem] flex flex-col gap-[3.2rem]`, className)}>
      <p className="jp-head3 font-[700]">
        {type === 'video' && '動画レビュー'}
        {type === 'image' && '写真付きレビュー'}
      </p>
      <div className="grid grid-cols-4 gap-[2.4rem]">
        {reviews.map((review, index) => (
          <CardReview
            key={review.reviewId}
            {...(index < 3 && { ranking: index + 1 })}
            type={type}
            brandName={review.brandName}
            productName={review.productName}
            reviewId={review.reviewId}
            likeCount={review.likeCount}
            mediaUrl={
              type === 'image'
                ? (review as MainImageReview).reviewImage
                : (review as MainVideoReview).reviewVideo
            }
            handleCardClick={() => {
              router.push(`/review-modal/${review.reviewId}/home/${type}`);
            }}
          >
            <Button
              color="primary"
              variant="outline"
              size="lg"
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/product-detail/${review.productId}`);
              }}
            >
              <div className="jp-title3 flex items-center gap-[0.8rem] font-bold">
                <SvgArrowOutward />
                見に行く
              </div>
            </Button>
          </CardReview>
        ))}
      </div>
    </div>
  );
}
