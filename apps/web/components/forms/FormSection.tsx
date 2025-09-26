import React, { ReactNode } from 'react';

import { cn } from '@lococo/utils';

interface FormSectionProps {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
}

export function FormSection({
  title,
  description,
  children,
  className,
}: FormSectionProps) {
  return (
    <div className={cn('space-y-[1.6rem]', className)}>
      <div>
        <h2 className="title2 font-bold text-gray-800">{title}</h2>
        <p className="body4 mt-[0.4rem] whitespace-pre-line text-gray-500">
          {description}
        </p>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}
