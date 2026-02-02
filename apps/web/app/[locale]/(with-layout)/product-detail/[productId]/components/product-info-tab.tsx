'use client';

import { useState } from 'react';

import { useTranslations } from 'next-intl';

import { Tab, TabContainer } from '@lococo/design-system/tab';

interface ProductInfoTabProps {
  productDetail: string;
  ingredients: string;
}

export default function ProductInfoTab({
  productDetail,
  ingredients,
}: ProductInfoTabProps) {
  const [activeTab, setActiveTab] = useState<'productDetail' | 'ingredients'>(
    'productDetail'
  );
  const t = useTranslations('legacy.productDetail');

  return (
    <div className="flex w-full flex-col">
      <TabContainer className="w-full">
        <Tab
          label={t('productFeatures')}
          value="productDetail"
          selected={activeTab === 'productDetail'}
          onClick={() => setActiveTab('productDetail')}
        ></Tab>
        <Tab
          label={t('ingredients')}
          value="ingredients"
          selected={activeTab === 'ingredients'}
          onClick={() => setActiveTab('ingredients')}
        ></Tab>
      </TabContainer>

      <div className="body1 border-b-[0.1rem] border-gray-300 py-[4rem] text-gray-700">
        {activeTab === 'productDetail' ? productDetail : ingredients}
      </div>
    </div>
  );
}
