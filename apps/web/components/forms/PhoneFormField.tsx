import React, { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { ErrorNotice } from '@lococo/design-system/error-notice';
import { Input } from '@lococo/design-system/input';
import { cn } from '@lococo/utils';

interface PhoneFormFieldProps {
  label: string;
  required?: boolean;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: string;
  className?: string;
}

export function PhoneFormField({
  label,
  required = false,
  placeholder,
  register,
  error,
  className,
}: PhoneFormFieldProps) {
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/[^0-9]/g, '');
    setFormattedPhoneNumber(numericValue);
    e.target.value = numericValue;

    register.onChange(e);
  };

  return (
    <div className={cn('flex items-center justify-between', className)}>
      <label className="body1 flex items-center font-bold text-gray-700">
        {required && (
          <span className="mr-[0.8rem] h-[0.6rem] w-[0.6rem] rounded-full bg-[#EF4351]" />
        )}
        {label}
      </label>
      <div className="flex flex-col">
        <Input
          {...register}
          value={formattedPhoneNumber}
          onChange={handleInputChange}
          placeholder={placeholder}
          maxLength={11}
        />
        {error && <ErrorNotice message={error} />}
      </div>
    </div>
  );
}
