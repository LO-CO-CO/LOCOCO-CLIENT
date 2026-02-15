import { useQuery } from '@tanstack/react-query';

import { cn } from '@lococo/utils';

import { getProductBrand } from '../utils/get-product-brand';

const BRAND_TABS = {
  All: 'All',
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  E: 'E',
  F: 'F',
  G: 'G',
  H: 'H',
  I: 'I',
  J: 'J',
  K: 'K',
  L: 'L',
  M: 'M',
  N: 'N',
  O: 'O',
  P: 'P',
  Q: 'Q',
  R: 'R',
  S: 'S',
  T: 'T',
  U: 'U',
  V: 'V',
  W: 'W',
  X: 'X',
  Y: 'Y',
  Z: 'Z',
  '0-9': '0',
};

interface AlphabetIndexProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setSelectedBrandName: (brandName: string) => void;
  selectedBrandName: string;
}

export default function AlphabetIndex({
  activeTab,
  setActiveTab,
  setSelectedBrandName,
  selectedBrandName,
}: AlphabetIndexProps) {
  const { data: brandList } = useQuery(getProductBrand(activeTab));

  return (
    <div className="w-full max-w-[1128px]">
      <div className="flex w-full">
        {Object.entries(BRAND_TABS).map(([key, value]) => (
          <button
            key={key}
            className={cn(
              'text-inter-body3 w-[20.4rem] text-gray-500',
              activeTab === value && 'text-pink-500'
            )}
            onClick={() => setActiveTab(value)}
          >
            {key}
          </button>
        ))}
      </div>
      {activeTab && (
        <div className="mt-[2.4rem] grid w-full grid-cols-6 flex-wrap gap-[2.4rem]">
          {brandList?.data?.brandNames.map((brand) => (
            <button
              key={brand.productBrandId}
              className={cn(
                'text-body2 hover:border-primary-500 hover:text-primary-500 min-w-[calc((100%-5*2.4rem)/6)] flex-1 basis-0 cursor-pointer border-l-2 border-transparent pl-[1.2rem] text-gray-700 transition-colors',
                selectedBrandName === brand.productBrandName && 'text-pink-500'
              )}
              onClick={() => setSelectedBrandName(brand.productBrandName)}
            >
              {brand.productBrandName}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
