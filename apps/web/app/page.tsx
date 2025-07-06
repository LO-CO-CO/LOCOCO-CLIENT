'use client';

import {
  Badge,
  Button,
  SvgArrowUp,
  SvgErrorFill,
  SvgHome,
  SvgLikeFill,
} from '@lococo/design-system';
import CardProduct from '../components/card/CardProducts';
import CardReview from '../components/card/CardReview';

export default function Home() {
  return (
    <div>
      <Button size="small">ui 컴포넌트 핑크 버튼</Button>
      <div className="mt-12 flex space-x-14">
        <div>
          <p className="text-jp-head1 font-bold">head1 JP</p>
          <p className="text-jp-head2 font-bold">head2 JP</p>
          <p className="text-jp-head3 font-bold">head3 JP</p>
          <p className="text-jp-title1 font-bold">title1 JP</p>
          <p className="text-jp-title2 font-bold">title 2 JP</p>
          <p className="text-jp-title3 font-bold">title 3 JP</p>
          <p className="text-jp-body1 font-bold">body1 JP</p>
          <p className="text-jp-body2 font-medium">body2 JP</p>
          <p className="text-jp-caption1 font-bold">caption1 JP</p>
          <p className="text-jp-caption2 font-medium">caption2 JP</p>
          <p className="text-jp-caption3 font-regular">caption3 JP</p>
        </div>
        <div>
          <p className="text-en-head1 font-bold">head1 EN</p>
          <p className="text-en-title1 font-bold">title1 EN</p>
          <p className="text-en-title2 font-bold">title 2 EN</p>
          <p className="text-en-title3 font-bold">title 3 EN</p>
          <p className="text-en-body1 font-bold">body1 b EN</p>
          <p className="text-en-body1 font-medium">body1 m EN</p>
          <p className="text-en-caption1 font-bold">caption1 b EN</p>
          <p className="text-en-caption1 font-medium">caption1 m EN</p>
        </div>
      </div>
      <SvgHome />
      <SvgHome size={32} className="stroke-blue" />
      <SvgHome className="stroke-blue" />
      <SvgArrowUp className="fill-pink-400" />
      <SvgErrorFill />
      <SvgLikeFill className="fill-pink-400" />
      <Badge rank={1} className="bg-pink-200" />
      <CardProduct
        brand="브랜드명"
        title="상품명"
        description="50ml, 100ml"
        productId={1}
        isLiked={true}
        likeCount={123}
        rank={1}
        rating={4}
        reviewCount={999}
      />
      <CardReview
        type="video"
        brand="브랜드명"
        title="상품명"
        reviewId={4}
        likeCount={123}
        rank={5}
      />
    </div>
  );
}
