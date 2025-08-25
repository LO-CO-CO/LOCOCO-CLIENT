import React from 'react';

import { MediaItem } from '../../types';
import { MediaInfo, MediaViewer } from '../media';
import { ReviewInfo } from '../review';

export type Media = MediaItem;
export interface User {
  name: string;
  avatarUrl: string | null;
  uploadAt: string;
}
export interface ReviewModallayoutProps {
  id: number;
  productId: number;
  mediaList: Media[];
  user: User;
  likeCount: number;
  isLiked: boolean;
  brandName: string;
  productName: string;
  productOption: string;
  rating: number;
  isReceipt?: boolean;
  positiveComment: string;
  negativeComment: string;
  productImageUrl: string;
  onClose?: () => void;
  children?: React.ReactNode;
}

export default function ReviewModallayout({
  id,
  productId,
  mediaList,
  user,
  likeCount,
  isLiked,
  brandName,
  productName,
  productOption,
  rating,
  positiveComment,
  negativeComment,
  productImageUrl,
  isReceipt,
  onClose,
  children,
}: ReviewModallayoutProps) {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="relative flex h-[55.2rem] rounded-xl bg-white">
        {/* 좌측: 미디어 + 하단정보 */}
        <div className="relative flex w-[55.2rem] flex-col">
          <MediaViewer mediaList={mediaList} />
          <MediaInfo
            reviewId={id}
            user={user}
            date={user.uploadAt}
            likeCount={likeCount}
            isLiked={isLiked}
          />
        </div>
        {/* 우측: 리뷰 상세 */}
        <div className="relative flex w-[38.4rem] flex-col">
          <ReviewInfo
            reviewId={id}
            productId={productId}
            brandName={brandName}
            productName={productName}
            option={productOption}
            rating={rating}
            positiveComment={positiveComment}
            negativeComment={negativeComment}
            productImageUrl={productImageUrl}
            receiptUploaded={isReceipt || false}
            onClose={onClose}
          />
        </div>
      </div>
      {children}
    </div>
  );
}
