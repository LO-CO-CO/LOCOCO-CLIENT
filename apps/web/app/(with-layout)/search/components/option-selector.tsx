'use client';

import { Button } from '@lococo/design-system/button';
import { cn } from '@lococo/utils';

import { SEARCH_OPTION, SearchOption } from '../constant/option';

interface TabsProps {
  selectedTab: SearchOption;
  handleClickTab: (option: SearchOption) => void;
}

export default function OptionSelector({
  selectedTab,
  handleClickTab,
}: TabsProps) {
  return (
    <div className="mx-auto flex w-[1366px] items-center px-[11.9rem]">
      {Object.keys(SEARCH_OPTION).map((key) => {
        const value = key as SearchOption;
        const isSelected = selectedTab === value;
        return (
          <Button
            key={value}
            color="secondary"
            variant="outline"
            size="lg"
            onClick={() => handleClickTab(value)}
            className={cn(
              'flex h-[6rem] w-full items-center justify-center border-b-2 bg-white px-[2rem] py-[1rem] font-bold',
              `${isSelected ? 'en-title2 border-gray-800' : 'jp-title2 border-gray-300'}`
            )}
          >
            {SEARCH_OPTION[value]}
          </Button>
        );
      })}
    </div>
  );
}
