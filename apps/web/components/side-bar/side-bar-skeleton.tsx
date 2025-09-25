import React from 'react';

import { SvgAvatar } from '@lococo/icons';

export default function SideBarSkeleton() {
  return (
    <div className="mr-[2.4rem] mt-[1.6rem] flex w-[16.8rem] flex-col gap-[1.6rem]">
      <SvgAvatar size={98} className="rounded-full" />

      <div className="flex w-full flex-col items-start gap-[0.8rem] self-stretch">
        <div className="h-[2.8rem] w-full bg-gray-200" />
        <div className="h-[1.8rem] w-full bg-gray-200" />
      </div>
      <div className="h-[1px] w-full bg-gray-400" />

      <nav className="flex w-full flex-col items-start gap-[0.8rem] self-stretch">
        <div className="h-[3.8rem] w-full bg-gray-200" />
        <div className="h-[3.8rem] w-full bg-gray-200" />
        <div className="h-[3.8rem] w-full bg-gray-200" />
      </nav>
    </div>
  );
}
