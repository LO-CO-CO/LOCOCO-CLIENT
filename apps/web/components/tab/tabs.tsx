import { ReactNode } from 'react';

import { cn } from '@lococo/utils';

interface TabsProps {
  children: ReactNode;
  className?: string;
}

export default function Tabs({ children, className }: TabsProps) {
  return (
    <div
      role="tablist"
      className={cn('flex items-center border-b border-gray-200', className)}
    >
      {children}
    </div>
  );
}
