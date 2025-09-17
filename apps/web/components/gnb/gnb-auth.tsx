'use client';

import { useTranslations } from 'next-intl';

import { useAuth } from 'hooks/use-auth';

import { SvgProfileIcon } from '@lococo/icons';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

export default function GnbAuth() {
  const { isLoggedIn } = useAuth();
  const t = useTranslations('gnb');
  return (
    <div className="flex h-[5.6rem] items-center gap-4">
      {isLoggedIn ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="relative">
            <button className="flex h-[5.6rem] items-center gap-[1rem] px-[1rem] py-[1.6rem] text-black">
              <SvgProfileIcon size={20} />
              <span>유저이름</span>
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="body4 mt-[0.4rem] w-[var(--radix-dropdown-menu-trigger-width)] font-[500]"
          >
            <DropdownMenuItem>{t('myPage')}</DropdownMenuItem>
            <DropdownMenuItem>{t('logOut')}</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <>
          <button className="px-[1.6rem] py-[1rem]">{t('login')}</button>
          <button className="px-[1.6rem] py-[1rem] text-pink-500">
            {t('signUp')}
          </button>
        </>
      )}
    </div>
  );
}
