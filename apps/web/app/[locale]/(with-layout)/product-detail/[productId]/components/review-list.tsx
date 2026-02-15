import { useParams } from 'next/navigation';

import { useQuery } from '@tanstack/react-query';
import LoadingSvg from 'components/loading/loading-svg';

import { SvgImgPhoto } from '@lococo/icons';

import { getReviewList } from '../apis';
import { PRODUCT_DETAIL_QUERY_KEYS } from '../queries';
import Review from './review';

export default function ReviewList() {
  const { productId } = useParams();

  const { data: reviewList, isPending } = useQuery({
    queryKey: PRODUCT_DETAIL_QUERY_KEYS.REVIEW_LIST(Number(productId)),
    queryFn: () => getReviewList(Number(productId)),
  });

  if (isPending) {
    return (
      <div className="flex h-[50rem] w-full items-center justify-center">
        <LoadingSvg />
      </div>
    );
  }
  const reviewListData = reviewList?.imageReviews;
  return (
    <div className="flex flex-col gap-[3.2rem]">
      <h2 className="head3 font-bold">Photo Reviews </h2>
      {reviewListData && reviewListData.length > 0 ? (
        reviewListData.map((review) => (
          <Review
            key={review.reviewId}
            images={review.images}
            writtenTime={review.writtenTime}
            positiveComment={review.positiveComment}
            negativeComment={review.negativeComment}
            likeCount={review.likeCount}
            brandName={review.brandName}
            profileImageUrl={review.profileImageUrl}
            authorName={review.authorName}
            rating={review.rating}
            country={review.country}
            receiptUploaded={review.receiptUploaded}
            isMine={review.isMine}
            isLiked={review.isLiked}
            option={review.option}
            reviewId={review.reviewId}
            productName={review.productName}
            authorId={review.authorId}
            isAdmin={reviewList.isAdmin}
          />
        ))
      ) : (
        <>
          <div className="flex h-[31.1rem] flex-col items-center justify-center gap-[2.4rem]">
            <SvgImgPhoto size={100} className="fill-pink-300" />
            <p className="body1 font-[700]">
              There are no registered photo reviews.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
