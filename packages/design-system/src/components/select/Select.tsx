import { ComponentProps, ReactNode } from 'react';

import * as SelectPrimitive from '@radix-ui/react-select';

import {
  SvgArrowDown,
  SvgArrowUp,
  SvgError,
} from '../../icons/fill/components';
import { cn } from '../../lib/utils';

function SelectRoot({ ...props }: ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectGroup({
  ...props
}: ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({
  ...props
}: ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
  className,
  children,
  ...props
}: ComponentProps<typeof SelectPrimitive.Trigger> & {
  open?: boolean;
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        'group flex h-[4rem] cursor-pointer items-center justify-between gap-[1rem] self-stretch border-b border-gray-500 bg-white pr-[1.2rem] text-gray-500 focus:outline-none',
        '[&:not([data-placeholder])]:border-gray-400',
        '[&[data-state=open]]:border-b-pink-500 [&[data-state=open]]:text-black',
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <div className="relative">
          <SvgArrowDown className="group-data-[state=open]:hidden" />
          <SvgArrowUp className="inset-0 fill-pink-500 group-data-[state=closed]:hidden" />
        </div>
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  position = 'popper',
  variant = 'default',
  ...props
}: ComponentProps<typeof SelectPrimitive.Content> & {
  variant?: 'default' | 'reverse';
}) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 scrollbar-hide box-shadow relative z-50 w-[var(--radix-select-trigger-width)] overflow-y-auto overflow-x-hidden border-b border-pink-500 bg-pink-100',
          position === 'popper' && 'overflow-y-scroll',
          variant === 'reverse' && 'data-[side=top]:slide-in-from-bottom-2',
          className
        )}
        style={{
          maxHeight: '19.2rem',
        }}
        position={position}
        avoidCollisions={false}
        side={variant === 'reverse' ? 'top' : 'bottom'}
        {...props}
      >
        <SelectPrimitive.Viewport
          className={cn(
            'w-full',
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] scroll-my-1'
          )}
        >
          <SelectGroup>{children}</SelectGroup>
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectItem({
  className,
  children,
  hover = true,
  ...props
}: ComponentProps<typeof SelectPrimitive.Item> & {
  hover?: boolean;
}) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        'flex h-[4.4rem] w-full flex-shrink-0 items-center self-stretch border-b border-dashed border-pink-500 bg-pink-100 px-[1.2rem] outline-none ring-0 last:border-none focus:outline-none focus:ring-0',
        hover && 'hover:cursor-pointer hover:bg-pink-200',
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

interface SelectOption {
  label: string;
  icon?: ReactNode;
}

interface SelectProps {
  variant?: 'default' | 'reverse';
  placeholder?: string;
  options?: SelectOption[];
  className?: string;
  isError?: boolean;
  errorText?: string;
  size?: 'small' | 'large';
  children?: ReactNode;
}

export function Select({
  variant = 'default',
  placeholder,
  options = [],
  className,
  isError,
  errorText,
  size,
  children,
}: SelectProps) {
  return (
    <SelectRoot>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      {isError && (
        <div className="h-19px mt-[0.2rem] flex items-center gap-[0.8rem]">
          <SvgError size={13.33} fill="rgba(239,67,81,1)" />
          <span className="text-[12px] font-[400] text-[rgba(239,67,81,1)]">
            {errorText}
          </span>
        </div>
      )}
      <SelectContent variant={variant}>
        {options.length > 0
          ? options.map((option) => (
              <SelectItem key={option.label} value={option.label}>
                <div className="flex items-center gap-[16px]">
                  {option?.icon}
                  <span className="text-[14px] font-[500] text-gray-800">
                    {option.label}
                  </span>
                </div>
              </SelectItem>
            ))
          : children}
      </SelectContent>
    </SelectRoot>
  );
}

export { SelectRoot, SelectContent, SelectItem, SelectTrigger, SelectValue };
