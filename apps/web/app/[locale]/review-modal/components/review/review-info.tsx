import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { IconButton } from '@lococo/design-system/icon-button';
import { Star } from '@lococo/design-system/star';
import { SvgArrowOutward, SvgClose } from '@lococo/icons';

import { ReviewDetail } from '../../types';
import Comment from './comment';

type ReviewInfoProps = Pick<
  ReviewDetail,
  | 'reviewId'
  | 'productId'
  | 'rating'
  | 'positiveComment'
  | 'negativeComment'
  | 'productName'
  | 'brandName'
> & {
  productImageUrl: string;
  onClose?: () => void;
};

export default function ReviewInfo({
  productId,
  rating,
  positiveComment,
  negativeComment,
  productName,
  productImageUrl,
  brandName,
  onClose,
}: ReviewInfoProps) {
  const router = useRouter();
  const handleProductClick = () => {
    router.push(`/product-detail/${productId}`);
  };

  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-r-xl">
      <header className="body1 sticky top-0 z-10 flex h-[4.8rem] items-center justify-between border-b border-pink-500 bg-white pl-[1.6rem] font-bold">
        <span>Review</span>
        <IconButton
          icon={<SvgClose />}
          color="tertiary"
          size="sm"
          onClick={onClose}
        />
      </header>

      <div className="noMousewheel flex-1 overflow-y-scroll p-[1.6rem] pb-[11rem] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-400 [&::-webkit-scrollbar-track]:bg-gray-200 [&::-webkit-scrollbar]:w-2.5">
        <Star rating={rating} size="sm" color="yellow" />
        <div className="mt-[3.2rem]">
          <Comment type="positive">{positiveComment}</Comment>
        </div>
        <hr className="-mx-[1.6rem] my-[1.6rem] h-[0.1rem] w-[calc(100%+3.2rem)] border-t border-dashed border-pink-500" />
        <div>
          <Comment type="negative">{negativeComment}</Comment>
        </div>
      </div>

      <footer className="absolute inset-x-0 bottom-0 flex items-center gap-[1.2rem] border-t border-pink-500 bg-white py-[1.2rem] pb-[1.6rem] pl-[1.6rem] pr-[0.8rem]">
        <div
          className="relative h-[6rem] w-[6rem] cursor-pointer overflow-hidden rounded-lg"
          onClick={handleProductClick}
        >
          <Image src={productImageUrl} alt={productName} fill />
        </div>

        <div
          className="mr-[1.2rem] flex cursor-pointer flex-col items-start gap-[0.4rem]"
          onClick={handleProductClick}
        >
          <span className="body1 truncate font-bold text-gray-800">
            {brandName}
          </span>
          <span className="body2 w-[23.3rem] truncate text-gray-800">
            {productName}
          </span>
        </div>
        <SvgArrowOutward
          className="cursor-pointer fill-pink-500"
          onClick={handleProductClick}
        />
      </footer>
    </div>
  );
}
