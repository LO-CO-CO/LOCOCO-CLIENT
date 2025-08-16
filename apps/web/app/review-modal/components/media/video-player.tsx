'use client';

import { useEffect, useRef, useState } from 'react';

import { Progress } from '@lococo/design-system/progress';
import { SvgPause, SvgPlayArrow } from '@lococo/icons';
import { cn } from '@lococo/utils';

interface VideoLayoutProps {
  url: string;
}

export default function VideoLayout({ url }: VideoLayoutProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);
  const [overlay, setOverlay] = useState<'play' | 'pause' | null>('play');
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const videoPlayer = videoRef.current;
    if (!videoPlayer) return;

    const handleTimeUpdate = () => {
      setProgress((videoPlayer.currentTime / videoPlayer.duration) * 100);
    };

    videoPlayer.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      videoPlayer.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [url]);

  const handleVideoClick = () => {
    if (!videoRef.current) return;

    if (!hasStarted) {
      videoRef.current.play();
      setHasStarted(true);
      setOverlay('play');
      setTimeout(() => setOverlay(null), 300);
    } else if (videoRef.current.paused) {
      videoRef.current.play();
      setOverlay('play');
      setTimeout(() => setOverlay(null), 300);
    } else {
      videoRef.current.pause();
      setOverlay('pause');
    }
  };

  return (
    <div className="relative h-full w-full">
      <video
        ref={videoRef}
        src={url}
        controls={false}
        loop
        playsInline
        className="h-full w-full cursor-pointer object-contain"
        onClick={handleVideoClick}
      />
      <div
        className={cn(
          'pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity',
          overlay ? 'opacity-100' : 'opacity-0'
        )}
      >
        {overlay === 'play' && (
          <SvgPlayArrow className="size-[7.2rem] fill-white" />
        )}
        {overlay === 'pause' && (
          <SvgPause className="size-[7.2rem] fill-white" />
        )}
      </div>
      <div className="absolute bottom-2 left-4 right-4">
        <Progress
          value={progress}
          height="0.25rem"
          className="w-full bg-gray-600"
        />
      </div>
    </div>
  );
}
