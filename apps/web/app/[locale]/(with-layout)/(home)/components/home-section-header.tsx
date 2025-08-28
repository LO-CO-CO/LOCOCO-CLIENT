import { PropsWithChildren } from 'react';

import Link from 'next/link';

export interface HomeSectionHeaderProps extends PropsWithChildren {
  moreInfoUrl?: string;
}

export default function HomeSectionHeader({
  children,
  moreInfoUrl,
}: HomeSectionHeaderProps) {
  return (
    <section className="mt-[6rem] flex justify-between">
      <h3 className="jp-head1 flex items-center gap-[1.2rem] font-[700]">
        {children}
      </h3>
      {moreInfoUrl && (
        <Link href={moreInfoUrl} className="jp-title2 font-[700]">
          더보기
        </Link>
      )}
    </section>
  );
}
