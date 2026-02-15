import { ComponentProps } from 'react';

import { Tab } from '@lococo/design-system/tab';
import { cn } from '@lococo/utils';

interface TabProps extends ComponentProps<'button'> {
  label: string;
  value: string;
  selected: boolean;
  className?: string;
  onClick?: () => void;
}

export default function TabButtons({
  label,
  value,
  selected,
  className,
  onClick,
}: TabProps) {
  return (
    <Tab
      key={value}
      label={label}
      value={value}
      selected={selected}
      className={cn(
        className,
        selected ? 'border-b-2 border-gray-800 text-gray-800' : 'text-gray-800'
      )}
      onClick={onClick}
    />
  );
}
