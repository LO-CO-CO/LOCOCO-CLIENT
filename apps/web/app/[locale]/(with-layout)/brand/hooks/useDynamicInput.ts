import { useEffect } from 'react';
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form';

export function useDynamicInputs(fieldPath: string) {
  const { control } = useFormContext();

  const { fields, append, remove, update } = useFieldArray({
    control,
    name: fieldPath,
  });

  const currentValue = useWatch({
    control,
    name: fieldPath,
  });
  useEffect(() => {
    if (currentValue && currentValue.length > 0 && fields.length === 0) {
      console.log(`Syncing fields for ${fieldPath}`);
      currentValue.forEach(() => append(''));
    }
  }, [currentValue, fields.length, append, fieldPath]);

  const addField = () => {
    append('');
  };

  const removeField = (index: number) => {
    if (fields.length > 1) {
      remove(index);
    }
  };

  const updateField = (index: number, value: string) => {
    update(index, value);
  };

  return {
    fields,
    addField,
    removeField,
    updateField,
  };
}
