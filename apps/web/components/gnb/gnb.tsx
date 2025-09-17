import Image from 'next/image';

import GnbAuth from './gnb-auth';
import GnbLanguage from './gnb-language';
import GnbMenu from './gnb-menu';

export default function Gnb() {
  return (
    <header className="body1 flex h-[7.2rem] w-full min-w-[93rem] items-center justify-between px-[11.9rem] font-[700]">
      <div className="h-[2.7rem] w-[16.2rem] flex-shrink-0">
        <Image
          src="/logo.svg"
          alt="logo"
          width={162}
          height={27}
          quality={100}
          className="h-full w-full object-contain"
        />
      </div>
      <GnbMenu />
      <div className="flex h-full flex-shrink-0 items-center gap-[1.6rem]">
        <GnbAuth />
        <GnbLanguage />
      </div>
    </header>
  );
}
