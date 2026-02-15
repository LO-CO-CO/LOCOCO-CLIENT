import type { ReactNode } from 'react';

import { cn } from '../../lib/utils';

interface TagProps {
  text: string;
  icon?: ReactNode;
  className?: string;
}

export default function Tag({ text, icon, className }: TagProps) {
  return (
    <div
      className={cn(
        'caption1 inline-flex w-fit items-center justify-center gap-[0.4rem] rounded-[0.4rem] bg-gray-100 px-[0.8rem] py-[0.45rem] font-[500] text-gray-800',
        className
      )}
    >
      {icon}
      <p>{text}</p>
    </div>
  );
}
