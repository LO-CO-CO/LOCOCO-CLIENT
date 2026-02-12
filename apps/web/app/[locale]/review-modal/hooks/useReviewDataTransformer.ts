import { useTimeZone } from 'next-intl';

import {
  ApiReviewItem,
  ImageReviewResponse,
  VideoReviewResponse,
} from 'app/api/review-response';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import {
  ApiResponseImageReviewDetailResponse,
  ApiResponseVideoReviewDetailResponse,
  ImageReviewDetailResponse,
  VideoReviewDetailResponse,
} from 'swagger-codegen/data-contracts';

import { ReviewDetail } from '../types';

interface UseReviewDataTransformerProps {
  type: 'image' | 'video';
  reviews: ImageReviewResponse[] | VideoReviewResponse[] | ApiReviewItem[];
  detailQueries: Array<{
    isSuccess?: boolean;
    data?:
      | ApiResponseImageReviewDetailResponse
      | ApiResponseVideoReviewDetailResponse;
  }>;
}

export function useReviewDataTransformer({
  type,
  reviews,
  detailQueries,
}: UseReviewDataTransformerProps) {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const timeZone = useTimeZone() || 'UTC';

  const findCurrentIndex = (currentReviewId: number) => {
    return reviews.findIndex((review) => review.reviewId === currentReviewId);
  };

  const createDetailMap = () => {
    const detailMap = new Map<
      number,
      ImageReviewDetailResponse | VideoReviewDetailResponse
    >();

    reviews.forEach((review, index) => {
      const dq = detailQueries[index];
      if (dq?.isSuccess && dq.data) {
        const response =
          type === 'image'
            ? (dq.data as ApiResponseImageReviewDetailResponse)
            : (dq.data as ApiResponseVideoReviewDetailResponse);
        if (response.data) {
          detailMap.set(review.reviewId, response.data);
        }
      }
    });

    return detailMap;
  };

  const transformToAllReviews = (
    detailMap: Map<
      number,
      ImageReviewDetailResponse | VideoReviewDetailResponse
    >
  ): ReviewDetail[] => {
    return reviews
      .filter((review) => {
        const detail = detailMap.get(review.reviewId);
        if (type === 'image') {
          return (
            !!detail && (detail as ImageReviewDetailResponse).images.length > 0
          );
        } else {
          return (
            !!detail &&
            (detail as VideoReviewDetailResponse).videoUrls.length > 0
          );
        }
      })
      .map((review) => {
        const detail = detailMap.get(review.reviewId)!;

        if (type === 'image') {
          const imageDetail = detail as ImageReviewDetailResponse;
          return {
            reviewId: imageDetail.reviewId,
            productId: imageDetail.productId,
            writtenTime: dayjs(imageDetail.writtenTime)
              .tz(timeZone)
              .format('YYYY.MM.DD'),
            positiveComment: imageDetail.positiveComment,
            negativeComment: imageDetail.negativeComment,
            authorName: imageDetail.authorName,
            profileImageUrl: imageDetail.profileImageUrl ?? null,
            rating: imageDetail.rating,
            likeCount: imageDetail.likeCount,
            brandName: imageDetail.brandName,
            productName: imageDetail.productName,
            productImageUrl: imageDetail.productImageUrl,
            mediaList: imageDetail.images.map((url, index) => ({
              id: index,
              type: 'image' as const,
              url,
            })),
          };
        } else {
          const videoDetail = detail as VideoReviewDetailResponse;
          return {
            reviewId: videoDetail.reviewId,
            productId: videoDetail.productId,
            writtenTime: dayjs(videoDetail.uploadAt)
              .tz(timeZone)
              .format('YYYY.MM.DD'),
            positiveComment: videoDetail.positiveContent,
            negativeComment: videoDetail.negativeContent,
            authorName: videoDetail.authorName,
            profileImageUrl: videoDetail.profileImageUrl ?? null,
            rating: videoDetail.rating,
            likeCount: videoDetail.likeCount,
            brandName: videoDetail.brandName,
            productName: videoDetail.productName,
            productImageUrl: videoDetail.productImageUrl,
            mediaList: videoDetail.videoUrls.map((url, index) => ({
              id: index,
              type: 'video' as const,
              url,
            })),
          };
        }
      });
  };

  return {
    findCurrentIndex,
    createDetailMap,
    transformToAllReviews,
  };
}
