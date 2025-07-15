'use client';

import type { ReviewDetail } from 'app/review-modal/types';
import { useState } from 'react';
import {
  Avatar,
  ReactionToggle,
  SvgGoodFill,
  SvgGoodOutline,
  SvgSend,
} from '@lococo/design-system';

type ModalInfo = Pick<
  ReviewDetail,
  'authorName' | 'profileImageUrl' | 'writtenTime' | 'likeCount'
>;
interface MediaInfoProps {
  user: {
    name: ModalInfo['authorName'];
    avatarUrl?: ModalInfo['profileImageUrl'];
  };
  date: ModalInfo['writtenTime'];
  likeCount: ModalInfo['likeCount'];
}

export default function MediaInfo({ user, date, likeCount }: MediaInfoProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="absolute bottom-0 left-0 z-10 flex h-[16rem] w-full items-center justify-between rounded-bl-xl bg-gradient-to-t from-black/60 to-transparent p-[1.6rem]">
      <div className="mt-auto flex flex-col">
        <div className="mb-[1.2rem] flex flex-row items-center gap-[1.2rem]">
          <Avatar src={user.avatarUrl ?? undefined} />
          <p className="en-body1 font-bold text-white">{user.name}</p>
        </div>
        <p className="en-caption1 text-white">{date}</p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <SvgSend className="h-[6.4rem] cursor-pointer fill-white transition-colors hover:fill-gray-400" />
        <ReactionToggle
          variant="vertical"
          pressed={isLiked}
          onPressedChange={setIsLiked}
          className="text-white"
        >
          {isLiked ? <SvgGoodFill /> : <SvgGoodOutline />}
          <span className="text-en-body1">{likeCount}</span>
        </ReactionToggle>
      </div>
    </div>
  );
}
