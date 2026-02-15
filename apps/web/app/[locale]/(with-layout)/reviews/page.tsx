'use client';

import { useState } from 'react';

import { useTranslations } from 'next-intl';

import { useQuery } from '@tanstack/react-query';

import AlphabetIndex from './components/alphabet-index';
import ProductsByBrand from './components/products-by-brand';
import ReviewsByBrand from './components/reviews-by-brand';
import { getProductAndReviewCount } from './utils/get-product-and-review-count';

function Reviews() {
  const [activeTab, setActiveTab] = useState<'products' | 'reviews'>(
    'products'
  );
  const t = useTranslations('reviews');
  const { data: countData } = useQuery(getProductAndReviewCount());

  const productCount = countData?.data?.productCount ?? 0;
  const reviewCount = countData?.data?.reviewCount ?? 0;

  const renderContent = () => {
    switch (activeTab) {
      case 'products':
        return <ProductsByBrand />;
      case 'reviews':
        return <ReviewsByBrand />;
      default:
        return null;
    }
  };

  return (
      <AlphabetIndex
        activeTab={activeBrandTab}
        setActiveTab={setActiveBrandTab}
        setSelectedBrandName={setSelectedBrandName}
        selectedBrandName={selectedBrandName}
      />
      {renderContent()}
    </div>
  );
}

export default Reviews;
