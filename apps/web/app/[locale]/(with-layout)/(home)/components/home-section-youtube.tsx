import { convertToEmbedUrl } from 'utils/youtube';

interface HomeSectionYouTubeProps {
  showVideos: {
    url: string;
    id: number;
    topic: string;
    title: string;
    popularity: number;
    viewCount: number;
    uploadedAt: string;
  }[];
}

export default async function HomeSectionYouTube({
  showVideos,
}: HomeSectionYouTubeProps) {
  return (
    <div className="mb-[12rem] grid grid-cols-3 gap-[2.4rem]">
      {showVideos?.map((video) => (
        <article className="h-[20.3rem] w-full bg-gray-100" key={video.id}>
          <iframe
            width="100%"
            height="100%"
            src={convertToEmbedUrl(video.url || '')}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </article>
      ))}
    </div>
  );
}
