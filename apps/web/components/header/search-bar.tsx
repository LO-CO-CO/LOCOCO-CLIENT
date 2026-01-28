'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useTranslations } from 'next-intl';

import { Input } from '@lococo/design-system/input';
import { SvgSearch } from '@lococo/icons';

import { getUrl } from './utils/get-url';

interface SearchBarProps {
  searchValue: string;
  handleChangeSearchValue: (text: string) => void;
  handleSearchIconClick: () => void;
}

export function SearchBar({
  searchValue,
  handleChangeSearchValue,
  handleSearchIconClick,
}: SearchBarProps) {
  const router = useRouter();
  const t = useTranslations('legacy.header');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchValue.trim()) {
      router.push(getUrl(searchValue, '', '', 'PRODUCT'));
      handleSearchIconClick();
    }
  };
  return (
    <div className="absolute left-0 right-0 top-[calc(100%-1px)] z-50 mx-auto flex h-[5.2rem] w-full min-w-[1366px] flex-col border-b-[1px] border-solid border-pink-500 bg-white">
      <div className="h-[1px] w-full border-t-[1px] border-dashed border-pink-500" />
      <div className="flex h-full w-full items-center">
        <div className="mx-auto flex w-[1366px] items-center gap-[2rem] px-[11.9rem]">
          <Input
            type="search"
            value={searchValue}
            onChange={(e) => handleChangeSearchValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t('searchPlaceholder')}
            className="title2 h-[5.2rem] w-full text-right font-bold leading-[3rem] text-gray-800"
          />
          <div className="flex h-[6.4rem] w-[5.2rem] shrink-0 cursor-pointer items-center justify-center p-[1.4rem]">
            {searchValue.trim() ? (
              <Link
                href={getUrl(searchValue, '', '', 'PRODUCT')}
                onClick={handleSearchIconClick}
              >
                <SvgSearch className="cursor-pointer" />
              </Link>
            ) : (
              <SvgSearch className="cursor-not-allowed" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
