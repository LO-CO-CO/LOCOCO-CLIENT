'use client';

import { useState } from 'react';

import { useTranslations } from 'next-intl';
import TabButton from 'components/tab/tab-button';
import Tabs from 'components/tab/tabs';

interface ProductInfoTabProps {
  productDetail: string;
  ingredients: string;
}

export default function ProductInfoTab({
  productDetail,
  ingredients,
}: ProductInfoTabProps) {
  const t = useTranslations('reviews');
  const [activeTab, setActiveTab] = useState<'productDetail' | 'ingredients'>(
    'productDetail'
  );

  return (
    <div className="flex w-full flex-col">
      <Tabs className="w-full">
        <TabButton
          label={t('details')}
          value="productDetail"
          selected={activeTab === 'productDetail'}
          className="w-full"
          onClick={() => setActiveTab('productDetail')}
        />
        <TabButton
          label={t('ingredients')}
          value="ingredients"
          selected={activeTab === 'ingredients'}
          className="w-full"
          onClick={() => setActiveTab('ingredients')}
        />
      </Tabs>

      <div className="body1 border-b-[0.1rem] border-gray-300 py-[4rem] text-gray-700">
        {activeTab === 'productDetail' ? productDetail : ingredients}
      </div>
    </div>
  );
}
