'use client';

import { useAuth } from 'hooks/use-auth';
import { useRouter } from 'i18n/navigation';
import { formatJPY } from 'utils/formatJPY';

import { Button } from '@lococo/design-system/button';
import { SvgStar, SvgWrite } from '@lococo/icons';

const MAX_RATING = 5;

interface ProductInfoProps {
  productId: number;
  productName: string;
  normalPrice: number;
  brandName: string;
  unit: string;
  reviewCount: number;
  rating: number;
  isLiked: boolean;
}

export default function ProductInfo({
  productId,
  productName,
  brandName,
  unit,
  reviewCount,
  rating,
  normalPrice,
}: ProductInfoProps) {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  const handleClickReviewBtn = () => {
    if (isLoggedIn) {
      router.push(`/product-detail/${productId}/write-review`, {
        scroll: false,
      });
    } else {
      router.push('/login');
    }
  };

  return (
    <div className="flex flex-col justify-between">
      {/* 상품 정보 */}
      <div className="flex w-[48rem] flex-col gap-[1.2rem]">
        <div className="flex justify-between gap-[0.4rem]">
          <div className="flex flex-col gap-[0.6rem]">
            <p className="title3 font-bold text-gray-700">{brandName}</p>
            <h1 className="head3 font-bold text-gray-800">{productName}</h1>
          </div>
        </div>
        <div className="flex flex-col gap-[0.8rem]">
          <p className="text-red head2 font-bold">${formatJPY(normalPrice)}</p>
          <p className="body2 text-gray-600">Volume: {unit}</p>
          <div className="flex items-center gap-[0.4rem]">
            <SvgStar className="fill-yellow" />
            <span className="body1 text-gray-800">
              {rating}/{MAX_RATING}
            </span>
            <span className="body1 text-gray-600">({reviewCount})</span>
          </div>
        </div>
      </div>

      {/* 버튼 레이어 */}
      <div className="flex flex-col gap-[1.2rem]">
        <Button
          color="primary"
          variant="filled"
          rounded="sm"
          size="lg"
          className="title2 font-bold"
          onClick={() => handleClickReviewBtn()}
        >
          <SvgWrite /> Write a review
        </Button>
      </div>
    </div>
  );
}
