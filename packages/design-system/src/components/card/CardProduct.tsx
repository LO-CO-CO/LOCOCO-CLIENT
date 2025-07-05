import { SvgLikeFill } from '../../icons/fill/components/LikeFill';
import { SvgLikeOutline } from '../../icons/fill/components/LikeOutline';
import { SvgStar } from '../../icons/fill/components/Star';
import { Badge } from '../badge';

interface CardProductProps {
  isShowRank?: boolean;
  rank?: number;
  brand: string;
  title: string;
  description: string;
  productId: number;
  isLiked: boolean;
  rating?: number;
  reviewCount?: number;
  likeCount: number;
  imageUrl?: string;
  handleLikeToggle?: (productId: number) => void;
  handleCardClick?: (productId: number) => void;
}

export default function CardProduct({
  isShowRank,
  rank,
  brand,
  title,
  description,
  productId,
  isLiked,
  rating,
  reviewCount,
  imageUrl,
  handleCardClick,
  handleLikeToggle,
}: CardProductProps) {
  return (
    <article
      className="flex w-[26.4rem] cursor-pointer flex-col"
      onClick={() => handleCardClick?.(productId)}
    >
      <div className="relative border-[0.0625rem] border-gray-200">
        {imageUrl ? (
          <img className="h-[16.5rem] w-[16.5rem]" src={imageUrl} />
        ) : (
          <div className="flex h-[16.5rem] w-[16.5rem] items-center justify-center">
            상품 이미지 준비중
          </div>
        )}
        {isShowRank && <Badge rank={rank} />}
      </div>
      <div className="flex h-[2.75rem] items-center justify-between border-b-[0.0625rem] border-dashed border-pink-500">
        <p className="text-jp-body1 font-[700]">{brand}</p>
        {isLiked ? (
          <SvgLikeFill size={44} fill="rgba(255, 72, 143, 1)" />
        ) : (
          <SvgLikeOutline
            size={44}
            fill="white"
            onClick={() => handleLikeToggle?.(productId)}
          />
        )}
      </div>
      <div className="flex h-[2.75rem] items-center border-b-[0.0625rem] border-dashed border-pink-500">
        <p className="text-jp-body2 font-[500]">{title}</p>
      </div>
      <div className="text-en-caption1 flex h-[2.75rem] items-center justify-between border-b-[0.0625rem] border-pink-500 text-gray-600">
        <p>{description}</p>
        <div className="flex">
          <SvgStar size={16} fill="rgba(254, 195, 65, 1)" />{' '}
          <div className="flex">
            <p>{rating}/5</p>
            <p>({reviewCount})</p>
          </div>
        </div>
      </div>
    </article>
  );
}
