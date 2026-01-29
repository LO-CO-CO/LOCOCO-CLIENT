'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import { useTranslations } from 'next-intl';

import { useProductLike } from 'components/card/hooks/use-product-like';
import { useAuth } from 'hooks/use-auth';
import { useRouter } from 'i18n/navigation';
import { formatJPY } from 'utils/formatJPY';

import { Button } from '@lococo/design-system/button';
import { IconButton } from '@lococo/design-system/icon-button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@lococo/design-system/select';
import {
  SvgLikeFill,
  SvgLikeOutline,
  SvgPurchase,
  SvgStar,
  SvgWrite,
} from '@lococo/icons';
import { cn } from '@lococo/utils';

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
  productOptions: {
    id: number;
    optionName: string;
  }[];
  oliveYoungUrl: string;
  q10Url: string;
}

export default function ProductInfo({
  productId,
  productName,
  brandName,
  unit,
  reviewCount,
  rating,
  isLiked: initialIsLiked,
  productOptions,
  normalPrice,
  oliveYoungUrl,
  q10Url,
}: ProductInfoProps) {
  const params = useParams();
  const router = useRouter();
  const t = useTranslations('legacy.productDetail');
  const tReview = useTranslations('legacy.review');
  const { isLiked, handleLikeClick } = useProductLike({
    initialIsLiked,
  });
  const { isLoggedIn } = useAuth();

  const handleClickReviewBtn = () => {
    if (isLoggedIn) {
      router.push(`/product-detail/${params.productId}/write-review`, {
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
          <IconButton
            onClick={() => handleLikeClick(productId)}
            size="lg"
            ariaLabel={
              isLiked ? t('unlikeButton') : t('likeButton')
            }
            icon={
              isLiked ? (
                <SvgLikeFill />
              ) : (
                <SvgLikeOutline
                  className={cn(isLiked ? 'text-pink-500' : 'text-gray-500')}
                />
              )
            }
            color={isLiked ? 'primary' : 'tertiary'}
          />
        </div>
        <div className="flex flex-col gap-[0.8rem]">
          <p className="text-red head2 font-bold">¥{formatJPY(normalPrice)}</p>
          <p className="body2 text-gray-600"> {unit}</p>
          <div className="flex items-center gap-[0.4rem]">
            <SvgStar className="fill-yellow" />
            <span className="body1 text-gray-800">
              {rating}/{MAX_RATING}
            </span>
            <span className="body1 text-gray-600">({reviewCount})</span>
          </div>
        </div>
        {productOptions.length > 0 && (
          <Select>
            <SelectTrigger
              className="body2 text-gray-800"
              disabled={productOptions.length === 0}
            >
              <SelectValue placeholder={t('selectOption')} />
            </SelectTrigger>
            <SelectContent className="body2 text-gray-800">
              {productOptions.map((option) => (
                <SelectItem value={option.optionName} key={option.id} disabled>
                  {option.optionName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>

      {/* 버튼 레이어 */}
      <div className="flex flex-col gap-[1.2rem]">
        <div className="flex justify-between gap-[1.2rem]">
          <Button
            color="primary"
            variant="filled"
            rounded="sm"
            size="lg"
            asChild
            className="flex-1"
          >
            <Link
              href={q10Url}
              target="_blank"
              rel="noopener noreferrer"
              className="title2 flex items-center gap-[0.8rem] font-bold"
            >
              <SvgPurchase /> Qoo10
            </Link>
          </Button>

          <Button
            color="primary"
            variant="filled"
            rounded="sm"
            size="lg"
            asChild
            className="flex-1"
          >
            <Link
              href={oliveYoungUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="title2 flex items-center gap-[0.8rem] font-bold"
            >
              <SvgPurchase /> Olive Young
            </Link>
          </Button>
        </div>
        <Button
          color="secondary"
          variant="filled"
          rounded="sm"
          size="lg"
          className="title2 font-bold"
          onClick={() => handleClickReviewBtn()}
        >
          <SvgWrite /> {tReview('writeReview')}
        </Button>
      </div>
    </div>
  );
}
