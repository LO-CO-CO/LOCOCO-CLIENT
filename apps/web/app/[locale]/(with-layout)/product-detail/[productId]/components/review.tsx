'use client';

import { useState } from 'react';

import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

import { useTranslations } from 'next-intl';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { useAuth } from 'hooks/use-auth';

import { Avatar } from '@lococo/design-system/avatar';
import { IconButton } from '@lococo/design-system/icon-button';
import { ReactionToggle } from '@lococo/design-system/reaction-toggle';
import { Star } from '@lococo/design-system/star';
import { Tag } from '@lococo/design-system/tag';
import { SvgDelete, SvgGoodOutline } from '@lococo/icons';

import { postReviewLike } from '../apis';
import { PRODUCT_DETAIL_QUERY_KEYS } from '../queries';
import { ImageReviewDetailData } from '../types';
import CommentBox from './comment-box';

export default function Review({
  reviewId,
  writtenTime,
  positiveComment,
  negativeComment,
  images,
  likeCount: initialLikeCount,
  profileImageUrl,
  authorName,
  rating,
  receiptUploaded,
  isMine,
  option,
  isLiked: initialIsLiked,
  isAdmin,
  //brandName,
  //productName,
  //authorId,
}: ImageReviewDetailData) {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { productId } = useParams();
  const { isLoggedIn } = useAuth();
  const t = useTranslations('legacy');
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [likeCount, setLikeCount] = useState(initialLikeCount);

  const { mutate: reviewLikeMutation } = useMutation({
    mutationKey: ['reviewLike'],
    mutationFn: (reviewId: number) => postReviewLike(reviewId),
    onMutate: async () => {
      if (isLiked) {
        setLikeCount(likeCount - 1);
      } else {
        setLikeCount(likeCount + 1);
      }
      setIsLiked(!isLiked);
      return { previousState: isLiked };
    },
    onError: (__err, _, context) => {
      if (context?.previousState) {
        setLikeCount((prev) => prev + 1);
      } else {
        setLikeCount((prev) => prev - 1);
      }
      setIsLiked(context?.previousState || false);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: PRODUCT_DETAIL_QUERY_KEYS.REVIEW_LIST(Number(productId)),
      });
    },
  });

  const handleDeleteReview = () => {
    router.push(
      `/product-detail/${productId}/delete-review?reviewId=${reviewId}`,
      { scroll: false }
    );
  };

  const handleLikeReview = (reviewId: number) => {
    if (isLoggedIn) {
      reviewLikeMutation(reviewId);
    } else {
      router.push('/login');
    }
  };

  return (
    <div
      key={reviewId}
      className="flex h-fit w-full justify-between gap-[2.4rem] border-b-2 border-pink-500 py-[2.4rem]"
    >
      <div className="flex w-[84rem] flex-col gap-[2.4rem]">
        <CommentBox type="positive" text={positiveComment} />
        <div className="h-[0.1rem] w-full border-t border-dashed border-pink-500" />
        <CommentBox type="negative" text={negativeComment} />
        <div className="flex gap-[1.26em]">
          {images?.map((image, index) => (
            <Image
              key={image + index}
              src={image.trimEnd()}
              alt="reviewImage"
              width={100}
              height={100}
              className="h-[10rem] w-[10rem] cursor-pointer object-cover"
              onClick={() => {
                router.push(
                  `/review-modal/${reviewId}/detail/image?productId=${productId}`
                );
              }}
            />
          ))}
        </div>
        <div className="flex items-center justify-end">
          <div className="flex items-center gap-[1.2rem]">
            <p className="title3 font-bold text-gray-800">{t('review.helpful')}</p>

            <ReactionToggle
              variant="horizontal"
              pressed={isLiked}
              className="group"
              onClick={() => handleLikeReview(reviewId)}
            >
              <div className="flex items-center gap-[0.4rem]">
                <SvgGoodOutline className="transition-colors duration-300 group-hover:text-gray-500" />
                <p className="body1 text-gray-800 transition-colors duration-300 group-hover:text-gray-500">
                  {likeCount}
                </p>
              </div>
            </ReactionToggle>
          </div>
        </div>
      </div>

      <div className="flex w-[26.4rem] flex-col items-stretch gap-[1.2rem]">
        <div className="flex items-center gap-[1.2rem]">
          <Avatar src={profileImageUrl} />
          <p className="title2 w-full text-gray-800">{authorName}</p>
          {(isMine || isAdmin) && (
            <IconButton
              onClick={handleDeleteReview}
              size="md"
              color="tertiary"
              icon={
                <SvgDelete className="flex-shrink-0 items-end text-gray-500" />
              }
            ></IconButton>
          )}
        </div>

        <div className="flex h-full flex-col gap-[1.2rem]">
          <Star rating={Number(rating)} />
          <div className="caption1 flex gap-[0.6rem] text-gray-600">
            <span className="inline-flex w-[6.7rem] flex-shrink-0">
              {t('review.option')}:
            </span>
            <span className="break-words"> {option}</span>
          </div>
          {receiptUploaded && <Tag text={t('review.receipt')} className="inline-flex" />}
        </div>

        <p className="caption1 self-end text-gray-600">
          {dayjs(writtenTime).format('YYYY年MM月DD日')}
        </p>
      </div>
    </div>
  );
}
