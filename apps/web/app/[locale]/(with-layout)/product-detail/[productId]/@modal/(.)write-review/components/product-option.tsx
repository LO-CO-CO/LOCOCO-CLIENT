import ContentWithLabel from 'components/input/content-with-label';
import type { ReviewFormData } from 'types/review';

import { ErrorNotice } from '@lococo/design-system/error-notice';
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValue,
} from '@lococo/design-system/select';

import { ProductOptionData } from '../../../types';

interface Props {
  value?: ReviewFormData['productOptionId'];
  onChange: (value: number) => void;
  error?: string;
  options: ProductOptionData[];
}

export default function ProductOption({
  value,
  onChange,
  error,
  options,
}: Props) {
  const handleValueChange = (id: string) => {
    onChange(Number(id));
  };

  return (
    <ContentWithLabel
      label="オプションを選んでください"
      className="flex w-full flex-col"
      required
    >
      <SelectRoot
        value={value ? String(value) : ''}
        onValueChange={handleValueChange}
      >
        <SelectTrigger className="jp-body2">
          <SelectValue placeholder="オプション" />
        </SelectTrigger>
        <SelectContent className="scrollbar-hide jp-body2">
          {options.map(({ id, optionName }) => (
            <SelectItem hover value={String(id)} key={id}>
              {optionName}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>
      {error && <ErrorNotice message={error} />}
    </ContentWithLabel>
  );
}
