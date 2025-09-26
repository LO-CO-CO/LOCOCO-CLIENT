import React from 'react';

interface InputWrapperProps {
  label: string;
  required?: boolean;
  children?: React.ReactNode;
  notice?: React.ReactNode;
}

export default function InputWrapper({
  label,
  required,
  children,
  notice,
}: InputWrapperProps) {
  return (
    <div className="flex w-full justify-between py-[0.8rem]">
      <div className="flex items-center">
        {required && (
          <span className="mr-[0.8rem] h-[0.6rem] w-[0.6rem] rounded-full bg-[#EF4351]" />
        )}
        <p className="body1 text-gray-700">{label}</p>
      </div>
      <div className="relative">
        {children}
        {notice}
      </div>
    </div>
  );
}
