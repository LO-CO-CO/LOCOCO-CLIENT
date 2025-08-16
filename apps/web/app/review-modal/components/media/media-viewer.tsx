'use client';

import { MediaItem } from '../../types';
import { ImageCarousel, VideoPlayer } from './';

interface MediaViewerProps {
  mediaList: MediaItem[];
}

export default function MediaViewer({ mediaList }: MediaViewerProps) {
  const videoItem = mediaList.find((m) => m.type === 'video');
  const imageItems = mediaList.filter((m) => m.type === 'image');

  return (
    <div className="relative flex h-full w-full overflow-hidden rounded-l-xl">
      {videoItem && <VideoPlayer url={videoItem.url} />}
      {imageItems.length > 0 && (
        <ImageCarousel images={imageItems.map((img) => img.url)} />
      )}
    </div>
  );
}
