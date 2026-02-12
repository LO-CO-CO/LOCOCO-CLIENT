import ProductDetailMainCarousel from './product-detail-main-carousel';
import ProductInfo from './product-info';
import ProductInfoTab from './product-info-tab';

interface ProductDetailSectionProps {
  imageUrls: string[];
  productDetail: string;
  ingredients: string;
  productId: number;
  productName: string;
  brandName: string;
  unit: string;
  reviewCount: number;
  rating: number;
  isLiked: boolean;
  normalPrice: number;
}

export default function ProductDetailSection({
  imageUrls,
  productDetail,
  ingredients,
  productId,
  productName,
  brandName,
  unit,
  reviewCount,
  rating,
  isLiked,
  normalPrice,
}: ProductDetailSectionProps) {
  return (
    <div className="flex w-full flex-col">
      <div className="flex justify-center gap-[8.4rem] pb-[6rem] pt-[3.2rem]">
        <ProductDetailMainCarousel
          imageUrlList={imageUrls}
          productName={productName}
        />
        <ProductInfo
          productId={Number(productId)}
          productName={productName}
          brandName={brandName}
          unit={unit}
          reviewCount={reviewCount}
          rating={rating}
          isLiked={isLiked}
          normalPrice={normalPrice}
        />
      </div>
      <ProductInfoTab productDetail={productDetail} ingredients={ingredients} />
    </div>
  );
}
