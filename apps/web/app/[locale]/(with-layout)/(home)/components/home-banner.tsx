import React from 'react';

import Image from 'next/image';

export default function HomeBanner() {
  return (
    <div className="w-full bg-pink-200">
      <div className="flex min-w-[1366px] justify-center">
        <Image
          src="/images/home-banner.png"
          alt="배너"
          width={1366}
          height={560}
          className="block"
          priority
        />
      </div>
    </div>
  );
}
