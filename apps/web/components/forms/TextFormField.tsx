import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { ErrorNotice } from '@lococo/design-system/error-notice';
import { Input } from '@lococo/design-system/input';
import { SvgCheckRound, SvgSearch } from '@lococo/icons';
import { cn } from '@lococo/utils';

interface TextFormFieldProps {
  label: string;
  required?: boolean;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: string;
  successMessage?: string;
  className?: string;
  rightContent?: React.ReactNode;
  onRightContentClick?: () => void;
  showSearchIcon?: boolean;
  handleClickSearch?: () => void;
}

export function TextFormField({
  label,
  required = false,
  placeholder,
  register,
  error,
  successMessage,
  className,
  rightContent,
  onRightContentClick,
  showSearchIcon = false,
  handleClickSearch,
}: TextFormFieldProps) {
  return (
    <div className={cn('flex items-center justify-between', className)}>
      <label className="body1 flex items-center font-bold text-gray-700">
        {required && (
          <span className="mr-[0.8rem] h-[0.6rem] w-[0.6rem] rounded-full bg-[#EF4351]" />
        )}
        {label}
      </label>
      <div className="flex flex-col">
        <div className="relative">
          <Input {...register} placeholder={placeholder} className="h-[4rem]" />

          {rightContent && (
            <div
              onClick={onRightContentClick}
              className="absolute right-2 top-1/2 flex -translate-y-1/2 cursor-pointer items-center justify-center"
            >
              {rightContent}
            </div>
          )}
          {!rightContent && showSearchIcon && (
            <button
              type="button"
              onClick={handleClickSearch}
              className="absolute right-2 top-1/2 flex -translate-y-1/2 cursor-pointer items-center justify-center"
              aria-label="주소 검색 아이콘"
            >
              <SvgSearch size={16} />
            </button>
          )}
        </div>
        {error && <ErrorNotice message={error} />}
        {!error && successMessage && (
          <div className="mt-[0.2rem] flex items-center gap-[0.8rem]">
            <SvgCheckRound size={16} className="fill-green" />
            <span className="caption3 text-green font-normal">
              {successMessage}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
