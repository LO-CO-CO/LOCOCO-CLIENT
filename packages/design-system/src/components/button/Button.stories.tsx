import type { Meta, StoryObj } from '@storybook/react-vite';

import { SvgErrorFill } from '../../icons/fill/components/ErrorFill';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio', options: ['filled', 'outline', 'text'] },
    color: {
      control: 'radio',
      options: ['primary', 'secondary'],
    },
    size: { control: 'radio', options: ['lg', 'md', 'sm'] },
    disabled: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

// FILLED VARIANTS
export const FilledPrimary: Story = {
  args: {
    children: 'Label',
    variant: 'filled',
    color: 'primary',
    size: 'lg',
  },
};

export const FilledPrimaryMedium: Story = {
  args: {
    children: 'Label',
    variant: 'filled',
    color: 'primary',
    size: 'md',
  },
};

export const FilledPrimarySmall: Story = {
  args: {
    children: 'Label',
    variant: 'filled',
    color: 'primary',
    size: 'sm',
  },
};

export const FilledPrimaryWithLeftIcon: Story = {
  args: {
    children: 'Label',
    variant: 'filled',
    color: 'primary',
    size: 'lg',
    iconLeft: <SvgErrorFill />,
  },
};

export const FilledPrimaryWithRightIcon: Story = {
  args: {
    children: 'Label',
    variant: 'filled',
    color: 'primary',
    size: 'lg',
    iconRight: <SvgErrorFill />,
  },
};

export const FilledPrimaryMediumWithLeftIcon: Story = {
  args: {
    children: 'Label',
    variant: 'filled',
    color: 'primary',
    size: 'md',
    iconLeft: <SvgErrorFill />,
  },
};

export const FilledPrimaryMediumWithRightIcon: Story = {
  args: {
    children: 'Label',
    variant: 'filled',
    color: 'primary',
    size: 'md',
    iconRight: <SvgErrorFill />,
  },
};

export const FilledPrimarySmallWithLeftIcon: Story = {
  args: {
    children: 'Label',
    variant: 'filled',
    color: 'primary',
    size: 'sm',
    iconLeft: <SvgErrorFill />,
  },
};

export const FilledPrimarySmallWithRightIcon: Story = {
  args: {
    children: 'Label',
    variant: 'filled',
    color: 'primary',
    size: 'sm',
    iconRight: <SvgErrorFill />,
  },
};

// OUTLINE VARIANTS
export const OutlineDefault: Story = {
  args: {
    children: 'Label',
    variant: 'outline',
    color: 'primary',
    size: 'lg',
  },
};

export const OutlineDefaultMedium: Story = {
  args: {
    children: 'Label',
    variant: 'outline',
    color: 'primary',
    size: 'md',
  },
};

export const OutlineDefaultSmall: Story = {
  args: {
    children: 'Label',
    variant: 'outline',
    color: 'primary',
    size: 'sm',
  },
};

export const OutlineDefaultWithLeftIcon: Story = {
  args: {
    children: 'Label',
    variant: 'outline',
    color: 'primary',
    size: 'lg',
    iconLeft: <SvgErrorFill />,
  },
};

export const OutlineDefaultWithRightIcon: Story = {
  args: {
    children: 'Label',
    variant: 'outline',
    color: 'primary',
    size: 'lg',
    iconRight: <SvgErrorFill />,
  },
};

// TEXT VARIANTS
export const TextPrimary: Story = {
  args: {
    children: 'Label',
    variant: 'text',
    color: 'primary',
    size: 'lg',
  },
};

export const TextPrimaryMedium: Story = {
  args: {
    children: 'Label',
    variant: 'text',
    color: 'primary',
    size: 'md',
  },
};

export const TextPrimarySmall: Story = {
  args: {
    children: 'Label',
    variant: 'text',
    color: 'primary',
    size: 'sm',
  },
};

export const TextPrimaryWithLeftIcon: Story = {
  args: {
    children: 'Label',
    variant: 'text',
    color: 'primary',
    size: 'lg',
    iconLeft: <SvgErrorFill />,
  },
};

export const TextPrimaryWithRightIcon: Story = {
  args: {
    children: 'Label',
    variant: 'text',
    color: 'primary',
    size: 'lg',
    iconRight: <SvgErrorFill />,
  },
};

// SECONDARY VARIANTS
export const FilledSecondary: Story = {
  args: {
    children: 'Label',
    variant: 'filled',
    color: 'secondary',
    size: 'lg',
  },
};

export const FilledSecondaryMedium: Story = {
  args: {
    children: 'Label',
    variant: 'filled',
    color: 'secondary',
    size: 'md',
  },
};

export const FilledSecondarySmall: Story = {
  args: {
    children: 'Label',
    variant: 'filled',
    color: 'secondary',
    size: 'sm',
  },
};

export const FilledSecondaryWithLeftIcon: Story = {
  args: {
    children: 'Label',
    variant: 'filled',
    color: 'secondary',
    size: 'lg',
    iconLeft: <SvgErrorFill />,
  },
};

export const FilledSecondaryWithRightIcon: Story = {
  args: {
    children: 'Label',
    variant: 'filled',
    color: 'secondary',
    size: 'lg',
    iconRight: <SvgErrorFill />,
  },
};

export const TextSecondary: Story = {
  args: {
    children: 'Label',
    variant: 'text',
    color: 'secondary',
    size: 'lg',
  },
};

export const TextSecondaryMedium: Story = {
  args: {
    children: 'Label',
    variant: 'text',
    color: 'secondary',
    size: 'md',
  },
};

export const TextSecondarySmall: Story = {
  args: {
    children: 'Label',
    variant: 'text',
    color: 'secondary',
    size: 'sm',
  },
};

// DISABLED VARIANTS
export const FilledPrimaryDisabled: Story = {
  args: {
    children: 'Label',
    variant: 'filled',
    color: 'primary',
    size: 'lg',
    disabled: true,
  },
};

export const TextPrimaryDisabled: Story = {
  args: {
    children: 'Label',
    variant: 'text',
    color: 'primary',
    size: 'lg',
    disabled: true,
  },
};
