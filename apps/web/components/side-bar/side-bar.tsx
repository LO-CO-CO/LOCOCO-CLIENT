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
  level?: string;
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
  level,
  menus,
  defaultActiveMenu,
}: SideBarProps) {
  const router = useRouter();
  const pathname = usePathname();

  const activeMenu =
    pathname.split('/').pop() || menus[0]?.value || defaultActiveMenu;

  const handleClickTab = (item: MenuItem) => {
    const pathParts = pathname.split('/');
    pathParts[pathParts.length - 1] = item.value;
    router.push(pathParts.join('/'));
  };

  return (
    <div className="mr-[2.4rem] mt-[1.6rem] flex w-[16.8rem] flex-col gap-[1.6rem]">
      {profileImage ? (
        <Image
          src={profileImage}
          alt="profile"
          className="rounded-full"
          width={98}
          height={98}
        />
      ) : (
        <SvgAvatar size={98} className="rounded-full" />
      )}
      <div className="flex w-full flex-col items-start gap-[0.8rem] self-stretch">
        <span className="title2 text-nowrap font-[700] text-gray-800">
          {name}
        </span>
        <span className="caption2 font-[700] text-gray-800">{email}</span>
        <span className="caption2 font-[700] text-gray-800">{instagram}</span>
        {level && <InfoChip text={level} color="default" size="md" icon />}
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
              className="flex h-fit items-start truncate px-0 py-[1.15rem]"
              onClick={() => handleClickTab(menu)}
            />
          ))}
        </TabContainer>
      </nav>
    </div>
  );
}
