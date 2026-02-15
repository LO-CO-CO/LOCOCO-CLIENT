import { useEffect, useState } from 'react';
import { CircleFlag } from 'react-circle-flags';

import { useLocale, useTimeZone, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { REVIEW_KEYS } from 'constants/query-key';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { useAuth } from 'hooks/use-auth';
import { getCountryNameByCode, normalizeCountryCode } from 'utils';

import { Avatar } from '@lococo/design-system/avatar';
import { IconButton } from '@lococo/design-system/icon-button';
import { ReactionToggle } from '@lococo/design-system/reaction-toggle';
import { Star } from '@lococo/design-system/star';
import { Tag } from '@lococo/design-system/tag';
import { SvgDelete, SvgGoodOutline, SvgZoom } from '@lococo/icons';

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
  country,
  isMine,
  isLiked: initialIsLiked,
  isAdmin,
}: ImageReviewDetailData) {
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const queryClient = useQueryClient();
  const router = useRouter();
  const { productId } = useParams();
  const t = useTranslations('reviews');
  const locale = useLocale();
  const timeZone = useTimeZone() || 'UTC';
  const { isLoggedIn } = useAuth();
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [likeCount, setLikeCount] = useState(initialLikeCount);
  const countryCode = normalizeCountryCode(country);
  const countryName = countryCode
    ? getCountryNameByCode(countryCode, locale)
    : null;

  useEffect(() => {
    setIsLiked(initialIsLiked);
    setLikeCount(initialLikeCount);
  }, [initialIsLiked, initialLikeCount]);

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
      queryClient.invalidateQueries({
        queryKey: REVIEW_KEYS.ALL,
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
        <div className="flex gap-[1.6em]">
          {images?.map((image, index) => (
            <button
              type="button"
              title={t('openReviewImageModal')}
              key={image + index}
              className="relative h-[9.2rem] w-[9.2rem] cursor-pointer overflow-hidden rounded-[1.6rem] border border-gray-200"
              onClick={() => {
                router.push(
                  `/review-modal/${reviewId}/detail/image?productId=${productId}`
                );
              }}
            >
              <Image
                src={image.trimEnd()}
                alt={t('reviewImageAlt')}
                width={100}
                height={100}
                className="h-full w-full object-cover"
              />
              <span className="pointer-events-none absolute bottom-[0.6rem] right-[0.7rem] inline-flex h-[1.8rem] w-[1.8rem] items-center justify-center rounded-full bg-black/35 text-white">
                <SvgZoom size={14} />
              </span>
            </button>
          ))}
        </div>
        <div className="flex items-center justify-end">
          <div className="flex items-center gap-[1.2rem]">
            <p className="title3 font-bold text-gray-800">{t('helpful')}</p>

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
          {countryCode && countryName ? (
            <Tag
              text={countryName}
              icon={
                <CircleFlag
                  countryCode={countryCode.toLowerCase()}
                  height={16}
                  width={16}
                />
              }
            />
          ) : null}
        </div>

        <p className="caption1 self-end text-gray-600">
          {dayjs(writtenTime).tz(timeZone).format('YYYY/M/D')}
        </p>
      </div>
    </div>
  );
}
