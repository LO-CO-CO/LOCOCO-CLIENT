'use client';

import { useTranslations } from 'next-intl';

import { useAuth } from 'hooks/use-auth';
import { Link } from 'i18n/navigation';

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
  // TODO Link태그 href 경로 논의 필요
  return (
    <div className="flex h-[5.6rem] items-center gap-4">
      {isLoggedIn ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="relative">
            <Link
              href={'/myPage'}
              className="flex h-[5.6rem] items-center gap-[1rem] px-[1rem] py-[1.6rem] text-black"
            >
              <SvgProfileIcon size={20} />
              <span>유저이름</span>
            </Link>
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
          <Link href={'/login'} className="px-[1.6rem] py-[1rem]">
            {t('logIn')}
          </Link>
          <Link href={'signup'} className="px-[1.6rem] py-[1rem] text-pink-500">
            {t('signUp')}
          </Link>
        </>
      )}
    </div>
  );
}
