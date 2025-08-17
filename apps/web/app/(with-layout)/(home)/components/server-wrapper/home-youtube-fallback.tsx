import React from 'react';

import { SvgKoreanReview } from '@lococo/icons';

import HomeSection from '../home-section';

export default function HomeYoutubeFallback() {
  const skeletonItems = Array.from({ length: 6 }, (_, index) => index);

  return (
    <HomeSection>
      <HomeSection.Header>
        {<SvgKoreanReview width={40} height={29} />}
        人気のKビューティーYouTube動画
      </HomeSection.Header>
      <div className="mb-[12rem] grid grid-cols-3 gap-[2.4rem]">
        {skeletonItems.map((index) => (
          <article
            className="relative h-[20.3rem] w-full overflow-hidden rounded-md bg-gray-100"
            key={`skeleton-${index}`}
          ></article>
        ))}
      </div>
    </HomeSection>
  );
}
