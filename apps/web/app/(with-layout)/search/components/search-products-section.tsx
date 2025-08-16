'use client';

import { useRouter } from 'next/navigation';

import CardProduct from 'components/card/card-product';
import CardSkeletonWrapper from 'components/card/card-skeleton';
import { CategoryNameEng, CategoryOptionEng } from 'types/category';

import type { ProductListItemResponse } from '../../../../swagger-codegen/data-contracts';
import useProductSectionData from '../hook/use-product-section';
import NotFoundSection from './not-found-section';

interface UseProductSectionDataProps {
  keyword?: string;
  middleCategory?: CategoryNameEng | null;
  subCategory?: CategoryOptionEng | null;
  page?: number;
  size?: number;
}

export default function SearchProductsSection({
  keyword,
  middleCategory,
  subCategory,
  page,
  size,
}: UseProductSectionDataProps) {
  const { data, isPending } = useProductSectionData({
    keyword,
    middleCategory,
    subCategory,
    page,
    size,
  });
  const router = useRouter();
  const products = data?.data.products;
  const handleCardClick = (productId: number) => {
    router.push(`/product-detail/${productId}`);
  };

  if (products && products.length === 0) {
    return <NotFoundSection />;
  }

  return (
    <section className="mx-auto grid w-[1366px] grid-cols-4 gap-[2.4rem] px-[11.9rem] pb-[12rem] pt-[3.2rem]">
      <div className="flex w-[112.8rem] flex-wrap content-center gap-[2.4rem]">
        {isPending ? (
          <CardSkeletonWrapper type="PRODUCT" />
        ) : (
          products?.map(
            ({
              productId,
              brandName,
              productName,
              unit,
              isLiked,
              rating,
              reviewCount,
              url,
            }: ProductListItemResponse) => (
              <CardProduct
                key={productId}
                brandName={brandName}
                productName={productName}
                unit={unit}
                productId={productId}
                isLiked={isLiked}
                rating={rating}
                reviewCount={reviewCount}
                imageUrl={url}
                handleCardClick={handleCardClick}
              />
            )
          )
        )}
      </div>
    </section>
  );
}
