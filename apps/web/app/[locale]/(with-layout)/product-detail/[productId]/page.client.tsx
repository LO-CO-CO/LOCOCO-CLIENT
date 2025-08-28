'use client';

import ProductBreadCrumbSection from './components/product-bread-crumb-section';
import ProductDetailSection from './components/product-detail-section';
import ReviewList from './components/review-list';
import StarRating from './components/star-rating';
import UserUploadVideoCarousel from './components/user-upload-video-carousel';
import YoutubeCarousel from './components/youtube-carousel';
import { ProductDetailData, YoutubeListData } from './types';

interface ClientPageProps {
  productData: ProductDetailData;
  youtubeListData: YoutubeListData;
}

export default function ClientPage({
  productData,
  youtubeListData,
}: ClientPageProps) {
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
            productOptions={productData.productOptions}
            normalPrice={productData.normalPrice}
            oliveYoungUrl={productData.oliveYoungUrl}
            q10Url={productData.q10Url}
          />
          <YoutubeCarousel youtubeListData={youtubeListData} />
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
