import { Controller, useFormContext } from 'react-hook-form';

import { Select } from '@lococo/design-system/select';

interface RHFSelectProps {
  name: string;
  options: Array<{ label: string; value: string }>;
  placeholder?: string;
  size?: 'small' | 'default';
  className?: string;
}

export function RHFSelect({
  name,
  options,
  placeholder,
  size = 'default',
  className,
}: RHFSelectProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select
          size={size}
          options={options}
          value={field.value}
          onValueChange={field.onChange}
          placeholder={placeholder}
          className={className}
        />
      )}
    />
  );
}
