'use client';

import { useAuth } from 'hooks/use-auth';
import { useRouter } from 'i18n/navigation';

import { Avatar } from '@lococo/design-system/avatar';
import { ReactionToggle } from '@lococo/design-system/reaction-toggle';
import { SvgGoodFill, SvgGoodOutline } from '@lococo/icons';

import { useReviewLikeToggle } from '../../hooks/review-api';

interface MediaInfoProps {
  reviewId: number;
  user: {
    name: string;
    avatarUrl: string | null;
  };
  date: string;
  likeCount: number;
  isLiked?: boolean;
}

export default function MediaInfo({
  reviewId,
  user,
  date,
  likeCount: initialLikeCount,
  isLiked: initialIsLiked = false,
}: MediaInfoProps) {
  const { likeMutation, isLiked, likeCount } = useReviewLikeToggle(
    initialIsLiked,
    initialLikeCount
  );
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  return (
    <div className="absolute bottom-0 left-0 z-10 flex w-full items-end justify-between rounded-bl-xl bg-gradient-to-t from-black/60 to-transparent p-[1.6rem]">
      <div className="mt-auto flex flex-col">
        <div className="mb-[1.2rem] flex flex-row items-center gap-[1.2rem]">
          <Avatar src={user.avatarUrl ?? undefined} />
          <p className="body1 font-bold text-white">{user.name}</p>
        </div>
        <p className="caption1 text-white">{date}</p>
      </div>
      <div className="flex flex-col items-center">
        <ReactionToggle
          variant="vertical"
          pressed={isLiked}
          onPressedChange={() => {
            if (isLoggedIn) {
              likeMutation.mutate(reviewId);
            } else {
              router.push('/?roleModal=show');
            }
          }}
          className="text-white"
        >
          {isLiked ? <SvgGoodFill /> : <SvgGoodOutline />}
          <span className="body1">{likeCount}</span>
        </ReactionToggle>
      </div>
    </div>
  );
}
