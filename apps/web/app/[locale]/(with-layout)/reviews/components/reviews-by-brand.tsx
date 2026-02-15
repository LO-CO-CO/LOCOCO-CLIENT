import { useTranslations } from 'next-intl';

import { useQuery } from '@tanstack/react-query';
import {
  ImageReviewResponse,
  VideoReviewResponse,
} from '@typescript-swagger/data-contracts';
import CardReview from 'components/card/card-review';
import CardSkeletonWrapper from 'components/card/card-skeleton';

import ReviewNotFoundSection from '../../search/components/review-not-found';
import { getImageReviewsByBrand } from '../utils/get-image-reviews-by-brand';
import { getVideoReviewsByBrand } from '../utils/get-video-reviews-by-brand';

export default function ReviewsByBrand({
  productBrandName,
}: {
  productBrandName: string;
}) {
  const t = useTranslations('reviews');
  const { data: videoData, isPending: isVideoPending } = useQuery(
    getVideoReviewsByBrand({
      page: 0,
      size: 8,
      brandName: productBrandName,
    })
  );
  const { data: imageData, isPending: isImagePending } = useQuery(
    getImageReviewsByBrand({
      page: 0,
      size: 8,
      brandName: productBrandName,
    })
  );

  const videoReviews = videoData?.data?.reviews ?? [];
  const imageReviews = imageData?.data?.reviews ?? [];

  const handleVideoCardClick = () => {
    // TODO
    return null;
  };

  const handleImageCardClick = () => {
    // TODO
    return null;
  };

  return (
    <div className="mx-auto flex w-full max-w-[1366px] flex-col items-center gap-[3.2rem] px-[11.9rem] pb-[3.2rem]">
      <section className="flex w-full flex-col gap-[3.2rem]">
        <p className="head3 font-bold text-gray-700">{t('videoReviews')}</p>
        {isVideoPending ? (
          <CardSkeletonWrapper type="REVIEW_VIDEO" />
        ) : !videoReviews.length ? (
          <ReviewNotFoundSection />
        ) : (
          <div className="grid grid-cols-4 gap-[2.4rem]">
            {videoReviews.map(
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
                  handleCardClick={() => handleVideoCardClick()}
                />
              )
            )}
          </div>
        )}
      </section>

      <section className="flex w-full flex-col gap-[3.2rem]">
        <p className="head3 font-bold text-gray-700">{t('photoReviews')}</p>
        {isImagePending ? (
          <CardSkeletonWrapper type="REVIEW_IMAGE" />
        ) : !imageReviews.length ? (
          <ReviewNotFoundSection />
        ) : (
          <div className="grid grid-cols-4 gap-[2.4rem]">
            {imageReviews.map(
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
                  handleCardClick={() => handleImageCardClick()}
                />
              )
            )}
          </div>
        )}
      </section>
    </div>
  );
}
