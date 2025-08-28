import { ApiResponseListTrendsYoutubeResponse } from '@typescript-swagger/data-contracts';
import { apiRequest } from 'app/api/apiRequest';
import { validateYoutubeVideoList } from 'utils/youtube';

interface VideoWithAllProps {
  url: string;
  id: number;
  topic: string;
  title: string;
  popularity: number;
  viewCount: number;
  uploadedAt: string;
}

export const getYoutubeVideo = async () => {
  const response = await apiRequest<ApiResponseListTrendsYoutubeResponse>({
    endPoint: '/api/youtube/trends',
  });

  const videos = response.data;

  if (!videos || videos.length === 0) {
    return { showVideos: [] };
  }

  const videoUrls = videos.map((video) => video.url || '').filter((url) => url);
  const validatedVideoUrls = await validateYoutubeVideoList(videoUrls, 10);
  const showVideos: VideoWithAllProps[] = videos
    .map((video, index) => ({
      ...video,
      url: validatedVideoUrls[index] || video.url,
    }))
    .slice(0, 6);
  return { showVideos };
};
