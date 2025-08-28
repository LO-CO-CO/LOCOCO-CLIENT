import React from 'react';

import { SvgJapaneseReview } from '@lococo/icons';

import HomeSection from '../home-section';
import {
  emptyReviewData,
  getImageReviews,
  getVideoReviews,
} from './../../utils/getReviewItems';

export default async function HomeReviewServer() {
  const [reviewImageData, reviewVideoData] = await Promise.all([
    getImageReviews(),
    getVideoReviews(),
  ]);

  return (
    <HomeSection>
      <HomeSection.Header>
        {<SvgJapaneseReview className="fill-red" width={40} height={29} />}
        いいね数が多いレビュー
      </HomeSection.Header>
      <HomeSection.Review
        type="video"
        reviewCardList={reviewVideoData?.data || emptyReviewData}
      />
      <HomeSection.Review
        reviewCardList={reviewImageData?.data || emptyReviewData}
        type="image"
        className="mt-[4.8rem]"
      />
    </HomeSection>
  );
}
