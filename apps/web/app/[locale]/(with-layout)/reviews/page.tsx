'use client';

import { useState } from 'react';

import { useTranslations } from 'next-intl';

import { useQuery } from '@tanstack/react-query';
import TabButton from 'components/tab/tab-button';
import Tabs from 'components/tab/tabs';

import AlphabetIndex from './components/alphabet-index';
import ProductsByBrand from './components/products-by-brand';
import ReviewsByBrand from './components/reviews-by-brand';
import { getProductAndReviewCount } from './utils/get-product-and-review-count';

function Reviews() {
  const [activeTab, setActiveTab] = useState<'products' | 'reviews'>(
    'products'
  );
  const t = useTranslations('reviews');
  const [activeBrandTab, setActiveBrandTab] = useState('All');
  const [selectedBrandName, setSelectedBrandName] = useState('');
  const { data: countData } = useQuery(
    getProductAndReviewCount({ brandName: selectedBrandName })
  );
  const productCount = countData?.data?.productCount ?? 0;
  const reviewCount = countData?.data?.reviewCount ?? 0;

  const renderContent = () => {
    switch (activeTab) {
      case 'products':
        return <ProductsByBrand productBrandName={selectedBrandName} />;
      case 'reviews':
        return <ReviewsByBrand productBrandName={selectedBrandName} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-[3.2rem]">
      <AlphabetIndex
        activeTab={activeBrandTab}
        setActiveTab={setActiveBrandTab}
        setSelectedBrandName={setSelectedBrandName}
        selectedBrandName={selectedBrandName}
      />
      <div className="flex w-full max-w-[1128px] flex-col gap-[2.4rem]">
        <Tabs>
          <TabButton
            label={`${t('products')} (${productCount})`}
            value="products"
            className="w-full"
            selected={activeTab === 'products'}
            onClick={() => setActiveTab('products')}
          />
          <TabButton
            label={`${t('reviews')} (${reviewCount})`}
            value="reviews"
            className="w-full"
            selected={activeTab === 'reviews'}
            onClick={() => setActiveTab('reviews')}
          />
        </Tabs>
      </div>
      {renderContent()}
    </div>
  );
}

export default Reviews;
