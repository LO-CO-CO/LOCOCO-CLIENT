'use client';

import { useTranslations } from 'next-intl';

import { SEARCH_OPTION, SEARCH_OPTION_TRANSLATION_KEYS, SearchOption } from 'constants/option';

import { Button } from '@lococo/design-system/button';
import { cn } from '@lococo/utils';

interface TabsProps {
  selectedTab: SearchOption;
  handleClickTab: (option: SearchOption) => void;
}

export default function OptionSelector({
  selectedTab,
  handleClickTab,
}: TabsProps) {
  const t = useTranslations('legacy.search');

  return (
    <div className="mx-auto flex w-[1366px] items-center px-[11.9rem]">
      {Object.keys(SEARCH_OPTION).map((key) => {
        const value = key as keyof typeof SEARCH_OPTION;
        const isSelected = selectedTab === value;
        const translationKey = SEARCH_OPTION_TRANSLATION_KEYS[value];
        return (
          <Button
            key={value}
            color="secondary"
            variant="outline"
            size="lg"
            onClick={() => handleClickTab(value)}
            className={cn(
              'flex h-[6rem] w-full items-center justify-center border-b-2 bg-white px-[2rem] py-[1rem] font-bold',
              `${isSelected ? 'title2 border-gray-800' : 'title2 border-gray-300'}`
            )}
          >
            {t(translationKey)}
          </Button>
        );
      })}
    </div>
  );
}
