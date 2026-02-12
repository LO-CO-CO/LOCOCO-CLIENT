'use client';

import ProductBreadCrumbSection from './components/product-bread-crumb-section';
import ProductDetailSection from './components/product-detail-section';
import ReviewList from './components/review-list';
import StarRating from './components/star-rating';
import UserUploadVideoCarousel from './components/user-upload-video-carousel';
import { ProductDetailData } from './types';

interface ClientPageProps {
  productData: ProductDetailData;
}

export default function ClientPage({ productData }: ClientPageProps) {
  return (
    <div className="flex w-full flex-col lg:flex lg:justify-center">
      <ProductBreadCrumbSection
        middleCategory={productData.middleCategory}
        subCategory={productData.subCategory}
        productName={productData.productName}
      />
      <div className="mx-auto flex w-[136.6rem] items-center">
        <div className="flex w-full flex-col gap-[10rem] px-[11.9rem] pb-[12rem] pt-[3.2rem]">
          <ProductDetailSection
            imageUrls={productData.imageUrls}
            productDetail={productData.productDetail}
            ingredients={productData.ingredients}
            productId={Number(productData.productId)}
            productName={productData.productName}
            brandName={productData.brandName}
            unit={productData.unit}
            reviewCount={productData.reviewCount}
            rating={productData.rating}
            isLiked={productData.isLiked}
            normalPrice={productData.normalPrice}
          />
          <StarRating
            reviewCount={productData.reviewCount}
            rating={productData.rating}
            starPercent={productData.starPercent}
          />
          <UserUploadVideoCarousel />
          <ReviewList />
        </div>
      </div>
    </div>
  );
}
