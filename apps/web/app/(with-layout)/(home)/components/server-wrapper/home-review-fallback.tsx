import React from 'react';

import CardSkeletonWrapper from 'components/card/card-skeleton';

import { SvgJapaneseReview } from '@lococo/icons';

import HomeSection from '../home-section';

export default function HomeReviewFallback() {
  return (
    <HomeSection>
      <HomeSection.Header>
        {<SvgJapaneseReview className="fill-red" width={40} height={29} />}
        いいね数が多いレビュー
      </HomeSection.Header>
      <CardSkeletonWrapper type="REVIEW_VIDEO" count={4} />
      <CardSkeletonWrapper
        type="REVIEW_IMAGE"
        count={4}
        className="mt-[4.8rem]"
      />
    </HomeSection>
  );
}
