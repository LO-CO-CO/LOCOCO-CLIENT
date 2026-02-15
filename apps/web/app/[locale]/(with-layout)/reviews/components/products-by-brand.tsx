'use client';

import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { ProductBrandInfoResponse } from '@typescript-swagger/data-contracts';
import CardProduct from 'components/card/card-product';
import CardSkeletonWrapper from 'components/card/card-skeleton';

import { Pagenation } from '@lococo/design-system/pagenation';

import ProductNotFoundSection from '../../search/components/product-not-found';
import { getProductsByBrandName } from '../utils/get-products-by-brand-name';

export default function ProductsByBrand({
  productBrandName,
}: {
  productBrandName: string;
}) {
  const [pagination, setPagination] = useState({
    page: 0,
    size: 12,
  });
  const { data, isPending } = useQuery(
    getProductsByBrandName({
      page: pagination.page,
      size: pagination.size,
      productBrandName,
    })
  );

  const products = data?.data?.products ?? [];

  const handleCardClick = () => {
    // TODO
    return null;
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-[3.2rem] pb-[3.2rem]">
      {isPending ? (
        <div className="mx-auto gap-[2.4rem] px-[11.9rem] pb-[12rem] pt-0">
          <CardSkeletonWrapper type="PRODUCT" />
        </div>
      ) : !products.length ? (
        <ProductNotFoundSection />
      ) : (
        <section className="mx-auto grid grid-cols-4 gap-[2.4rem] px-[11.9rem] pb-[12rem] pt-0">
          {products.map(
            (
              {
                productBrandName,
                productName,
                unit,
                rating,
                imageUrl,
              }: ProductBrandInfoResponse,
              index: number
            ) => (
              <CardProduct
                key={`${productBrandName}-${productName}-${index}`}
                brandName={productBrandName}
                productName={productName}
                unit={unit}
                productId={0}
                isLiked={false}
                rating={rating}
                reviewCount={0}
                imageUrl={imageUrl}
                handleCardClick={handleCardClick}
              />
            )
          )}
        </section>
      )}
      <Pagenation
        currentPage={pagination.page}
        totalPages={data?.data?.pageInfo.totalPages ?? 0}
        handlePageChange={(page) => setPagination({ ...pagination, page })}
      />
    </div>
  );
}
