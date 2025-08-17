'use client';

import React, { useState } from 'react';

import { useRouter } from 'next/navigation';

import { useQuery } from '@tanstack/react-query';
import { apiRequest } from 'app/api/apiRequest';
import CardProduct from 'components/card/card-product';
import { CardSkeleton } from 'components/card/card-skeleton';
import { CATEGORY_NAME } from 'constants/category';
import {
  ApiResponseNewProductsByCategoryResponse,
  ProductBasicResponse,
} from 'swagger-codegen/data-contracts';
import { CategoryNameEng } from 'types/category';

import { Tab, TabContainer } from '@lococo/design-system/tab';

type ProductSortType = 'new' | 'popular';

interface HomeSectionProductProps {
  productSortType: ProductSortType;
  initialProducts: ProductBasicResponse[];
}

export const PRODUCT_QUERIES = {
  // TODO 다른 PR에서 생성한 QUERY KEY들과 병합 예정
  ALL: ['product'] as const,
  LISTS: () => [...PRODUCT_QUERIES.ALL, 'list'] as const,
  SEARCH_TYPE: (category: CategoryNameEng, sortType: ProductSortType) =>
    [...PRODUCT_QUERIES.ALL, 'search', category, sortType] as const,
  CATEGORY: (category: CategoryNameEng, sortType: ProductSortType) =>
    [...PRODUCT_QUERIES.ALL, 'category', category, sortType] as const,
  DETAILS: (detailId: number) =>
    [...PRODUCT_QUERIES.ALL, 'detail', detailId] as const,
} as const;

export default function HomeSectionProduct({
  productSortType = 'new',
  initialProducts,
}: HomeSectionProductProps) {
  const [selectedTab, setSelectedTab] =
    useState<CategoryNameEng>('FACIAL_CARE');
  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: PRODUCT_QUERIES.CATEGORY(selectedTab, productSortType),
    queryFn: async (): Promise<ProductBasicResponse[]> => {
      const response =
        await apiRequest<ApiResponseNewProductsByCategoryResponse>({
          endPoint: `/api/products/categories/${productSortType}?middleCategory=${selectedTab}&page=0&size=4`,
        });
      return response.data?.products || [];
    },
    initialData: selectedTab === 'FACIAL_CARE' ? initialProducts : undefined,
  });

  const products = data;

  return (
    <div className="flex w-full flex-col gap-4">
      <TabContainer className="flex w-full items-end">
        {Object.keys(CATEGORY_NAME).map((key) => {
          const categoryKey = key as keyof typeof CATEGORY_NAME;
          const name = CATEGORY_NAME[categoryKey];
          return (
            <Tab
              onClick={() => setSelectedTab(categoryKey)}
              key={key}
              label={name}
              variant="primary"
              active={categoryKey === selectedTab}
              className="jp-title3"
            />
          );
        })}
        <div className="h-full flex-1 border-b" />
      </TabContainer>
      {isLoading ? (
        <div className="grid grid-cols-4 gap-[2.4rem]">
          {Array.from({ length: 4 }, (_, index) => (
            <CardSkeleton key={index} type="PRODUCT" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-[2.4rem]">
          {products?.map((product, index) => (
            <CardProduct
              key={product.productId}
              brandName={product.brandName}
              productName={product.productName}
              unit={product.unit}
              productId={product.productId}
              isLiked={product.isLiked}
              rating={product.rating}
              reviewCount={product.reviewCount}
              imageUrl={product.imageUrls?.[0]}
              handleCardClick={() =>
                router.push(`/product-detail/${product.productId}`)
              }
              {...(index >= 0 && index < 3 && { ranking: index + 1 })}
            />
          ))}
        </div>
      )}
    </div>
  );
}
