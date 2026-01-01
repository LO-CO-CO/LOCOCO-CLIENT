import React, { ReactNode } from 'react';

import { cn } from '@lococo/utils';

interface FormSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  required?: boolean;
}

export function FormSection({
  title,
  description,
  children,
  className,
  required,
}: FormSectionProps) {
  return (
    <div className={cn('w-full space-y-[1.6rem]', className)}>
      <div>
        <div className="flex items-center gap-[0.8rem]">
          {required && (
            <span className="bg-red mr-[0.8rem] h-[0.6rem] w-[0.6rem] rounded-full" />
          )}
          <h2 className="title2 font-bold text-gray-800">{title}</h2>
        </div>
        <p className="body4 mt-[0.4rem] whitespace-pre-line text-gray-500">
          {description}
        </p>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}
