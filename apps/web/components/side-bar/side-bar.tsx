'use client';

import React from 'react';

import Image from 'next/image';

import { MenuItem } from 'app/[locale]/(with-layout)/brand/layout';
import { usePathname, useRouter } from 'i18n/navigation';

import { InfoChip } from '@lococo/design-system/info-chip';
import { Tab, TabContainer } from '@lococo/design-system/tab';
import { SvgAvatar } from '@lococo/icons';

interface SideBarProps {
  name?: string;
  email?: string;
  userType?: string;
  profileImage?: string;
  instagram?: string;
  menus: MenuItem[];
  defaultActiveMenu: string;
}

export default function SideBar({
  profileImage,
  name,
  email,
  instagram,
  userType,
  menus,
  defaultActiveMenu,
}: SideBarProps) {
  const router = useRouter();
  const pathname = usePathname();

  const getActiveMenu = () => {
    if (pathname.includes('/my-page/')) {
      const pathAfterMyPage = pathname.split('/my-page/')[1];
      const menuFromPath = pathAfterMyPage?.split('/')[0];
      return menuFromPath || defaultActiveMenu;
    }
    return defaultActiveMenu;
  };

  const activeMenu = getActiveMenu();

  const handleClickTab = (item: MenuItem) => {
    const pathParts = pathname.split('/');
    pathParts[pathParts.length - 1] = item.value;
    router.push(pathParts.join('/'));
  };

  return (
    <div className="mr-[2.4rem] mt-[1.6rem] flex w-[16.8rem] flex-col gap-[1.6rem]">
      {profileImage ? (
        <div className="relative h-[9.8rem] w-[9.8rem] overflow-hidden rounded-full">
          <Image
            src={profileImage}
            alt="profile photo"
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <SvgAvatar size={98} className="rounded-full" />
      )}
      <div className="flex w-full flex-col items-start gap-[0.8rem] self-stretch">
        <span className="title2 text-nowrap font-[700] text-gray-800">
          {name}
        </span>
        <span className="caption2 font-[700] text-gray-800">{email}</span>
        <span className="caption2 font-[700] text-gray-800">{instagram}</span>
        {userType && (
          <InfoChip text={userType} color="default" size="md" icon />
        )}
      </div>
      <div className="h-[1px] w-full bg-gray-400" />

      <nav>
        <TabContainer variant="vertical" className="flex w-full items-start">
          {menus.map((menu) => (
            <Tab
              key={menu.value}
              label={menu.label}
              value={menu.value}
              selected={activeMenu === menu.value}
              className="p-0"
              onClick={() => handleClickTab(menu)}
            />
          ))}
        </TabContainer>
      </nav>
    </div>
  );
}
