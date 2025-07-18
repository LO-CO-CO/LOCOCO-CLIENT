import ContentWithLabel from 'components/input/content-with-label';
import type { ReviewFormData } from 'types/review';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components';
import { ErrorNotice } from '@/components';
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
      <Select
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
      </Select>
      {error && <ErrorNotice message={error} />}
    </ContentWithLabel>
  );
}
