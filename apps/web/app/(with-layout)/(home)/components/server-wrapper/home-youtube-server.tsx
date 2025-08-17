import React from 'react';

import { SvgKoreanReview } from '@lococo/icons';

import { getYoutubeVideo } from '../../utils/getYoutubeVideos';
import HomeSection from '../home-section';

export default async function HomeYoutubeServer() {
  const { showVideos } = await getYoutubeVideo();
  return (
    <HomeSection>
      <HomeSection.Header>
        {<SvgKoreanReview width={40} height={29} />}
        人気のKビューティーYouTube動画
      </HomeSection.Header>
      <HomeSection.YouTube showVideos={showVideos} />
    </HomeSection>
  );
}
