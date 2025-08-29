import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Avatar } from '../avatar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValue,
} from './Select';

const meta: Meta<typeof SelectRoot> = {
  title: 'components/Select',
  component: SelectRoot,
  tags: ['autodocs'],
};
export default meta;

const SELECT_OPTIONS = ['apple', 'banana', 'blueberry', 'grapes', 'pineapple'];

const OptionSelectOverflow = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SelectRoot open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <SelectTrigger open={isOpen}>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        {SELECT_OPTIONS.map((option) => (
          <SelectItem hover value={option} key={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
};

const OptionSelect = () => {
  return (
    <SelectRoot>
      <SelectTrigger open>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        {SELECT_OPTIONS.slice(0, 3).map((option) => (
          <SelectItem hover value={option} key={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
};

const ReviewSelect = () => {
  return (
    <SelectRoot>
      <SelectTrigger open>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        {SELECT_OPTIONS.map((option) => (
          <SelectItem value={option} key={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
};

const NewSelect = () => {
  return (
    <Select
      variant="reverse"
      placeholder="ddddddd"
      options={[
        { label: '빨강', icon: <Avatar sizes="16p" /> },
        { label: '파랑' },
        { label: '초록' },
      ]}
      isError={true}
      errorText="에러메쎄제에이에이예"
    ></Select>
  );
};

export const New: StoryObj<typeof Select> = { render: () => <NewSelect /> };

export const OptionOverflow: StoryObj<typeof SelectRoot> = {
  render: () => <OptionSelectOverflow />,
};
export const Option: StoryObj<typeof SelectRoot> = {
  render: () => <OptionSelect />,
};
export const Review: StoryObj<typeof SelectRoot> = {
  render: () => <ReviewSelect />,
};
