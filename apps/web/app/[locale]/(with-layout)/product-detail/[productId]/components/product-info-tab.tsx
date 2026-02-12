'use client';

import { useState } from 'react';

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

  return (
    <div className="flex w-full flex-col">
      <TabContainer className="w-full">
        <Tab
          label="Details"
          value="productDetail"
          selected={activeTab === 'productDetail'}
          onClick={() => setActiveTab('productDetail')}
        />
        <Tab
          label="Ingredients"
          value="ingredients"
          selected={activeTab === 'ingredients'}
          onClick={() => setActiveTab('ingredients')}
        />
      </TabContainer>

      <div className="body1 border-b-[0.1rem] border-gray-300 py-[4rem] text-gray-700">
        {activeTab === 'productDetail' ? productDetail : ingredients}
      </div>
    </div>
  );
}
