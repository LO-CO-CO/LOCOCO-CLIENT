import React from 'react';
import { useFormContext } from 'react-hook-form';

import { Input } from '@lococo/design-system/input';
import { SvgMinusButtons, SvgPlusButtons } from '@lococo/icons';

import { useDynamicInputs } from '../../hooks/useDynamicInput';

interface DynamicInputProps {
  fieldName: 'joinConditions' | 'submitConditions' | 'joinRewards';
}

export default function DynamicInput({ fieldName }: DynamicInputProps) {
  const { register } = useFormContext();

  const { fields, addField, removeField } = useDynamicInputs(fieldName);

  return (
    <div className="space-y-[0.8rem]">
      {fields.map((field, index) => {
        const isLastItem = index === fields.length - 1;

        return (
          <div key={field.id} className="flex gap-[0.8rem]">
            <Input
              className="h-[4rem] w-full"
              placeholder="text"
              {...register(`${fieldName}.${index}`)}
            />
            {isLastItem && (
              <button
                type="button"
                onClick={addField}
                className="flex-shrink-0"
              >
                <SvgPlusButtons size={40} className="fill-pink-500" />
              </button>
            )}
            {fields.length > 1 && (
              <button
                type="button"
                onClick={() => removeField(index)}
                className="flex-shrink-0"
              >
                <SvgMinusButtons size={40} className="fill-pink-500" />
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
