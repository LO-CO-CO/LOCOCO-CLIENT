'use client';

import { useRouter } from 'next/navigation';

import { useTranslations } from 'next-intl';

import {
  ImageReviewResponse,
  VideoReviewResponse,
} from '@typescript-swagger/data-contracts';
import CardReview from 'components/card/card-review';
import CardSkeletonWrapper from 'components/card/card-skeleton';
import { CategoryNameEng, CategoryOptionEng } from 'types/category';

import useReviewSectionData from '../hook/use-review-section';
import ReviewNotFoundSection from './review-not-found';

interface SearchReviewSectionProps {
  keyword?: string;
  middleCategory?: CategoryNameEng | null;
  subCategory?: CategoryOptionEng | null;
  page?: number;
  size?: number;
}

function VideoReviewSection({
  keyword,
  middleCategory,
  subCategory,
  page,
  size,
}: SearchReviewSectionProps) {
  const { data, isPending } = useReviewSectionData({
    keyword,
    middleCategory,
    subCategory,
    reviewType: 'VIDEO',
    page,
    size,
  });
  const router = useRouter();
  const t = useTranslations('legacy.search');
  const handleCardClick = (reviewId: number) => {
    if (keyword) {
      router.push(`/review-modal/${reviewId}/search/video?keyword=${keyword}`);
    } else {
      router.push(
        `/review-modal/${reviewId}/search/video?middleCategory=${middleCategory}&subCategory=${subCategory}`
      );
    }
  };

  const reviews = data?.data.reviews;

  return (
    <div className="flex max-w-[1366px] flex-col gap-[3.2rem] pt-[3.2rem]">
      <p className="head3 font-bold text-gray-700">{t('videoReviews')}</p>
      {isPending ? (
        <CardSkeletonWrapper type="REVIEW_VIDEO" />
      ) : !reviews || reviews.length === 0 ? (
        <ReviewNotFoundSection />
      ) : (
        <div className="grid max-w-[1366px] grid-cols-4 gap-[2.4rem]">
          {reviews.map(
            ({
              reviewId,
              brandName,
              productName,
              likeCount,
              url,
            }: VideoReviewResponse) => (
              <CardReview
                key={reviewId}
                type="video"
                brandName={brandName}
                productName={productName}
                reviewId={reviewId}
                likeCount={likeCount}
                mediaUrl={url}
                handleCardClick={() => handleCardClick(reviewId)}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}

function ImageReviewSection({
  keyword,
  middleCategory,
  subCategory,
  page,
  size,
}: SearchReviewSectionProps) {
  const { data, isPending } = useReviewSectionData({
    keyword,
    middleCategory,
    subCategory,
    reviewType: 'IMAGE',
    page,
    size,
  });
  const router = useRouter();
  const t = useTranslations('legacy.search');
  const handleCardClick = (reviewId: number) => {
    if (keyword) {
      router.push(`/review-modal/${reviewId}/search/image?keyword=${keyword}`);
    } else {
      router.push(
        `/review-modal/${reviewId}/search/image?middleCategory=${middleCategory}&subCategory=${subCategory}`
      );
    }
  };

  const reviews = data?.data.reviews;

  return (
    <div className="flex max-w-[1366px] flex-col gap-[3.2rem] pt-[3.2rem]">
      <p className="head3 font-bold text-gray-700">{t('photoReviews')}</p>
      {isPending ? (
        <CardSkeletonWrapper type="REVIEW_IMAGE" />
      ) : !reviews || reviews.length === 0 ? (
        <ReviewNotFoundSection />
      ) : (
        <div className="grid max-w-[1366px] grid-cols-4 gap-[2.4rem]">
          {reviews.map(
            ({
              reviewId,
              brandName,
              productName,
              likeCount,
              url,
            }: ImageReviewResponse) => (
              <CardReview
                key={reviewId}
                type="image"
                brandName={brandName}
                productName={productName}
                reviewId={reviewId}
                likeCount={likeCount}
                mediaUrl={url}
                handleCardClick={() => handleCardClick(reviewId)}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}

export default function SearchReviewSection({
  keyword,
  middleCategory,
  subCategory,
  page,
  size,
}: SearchReviewSectionProps) {
  return (
    <section className="mx-auto flex w-[1366px] flex-col content-center px-[11.9rem] pb-[12rem] pt-0">
      <VideoReviewSection
        keyword={keyword}
        middleCategory={middleCategory}
        subCategory={subCategory}
        page={page}
        size={size}
      />
      <ImageReviewSection
        keyword={keyword}
        middleCategory={middleCategory}
        subCategory={subCategory}
        page={page}
        size={size}
      />
    </section>
  );
}
