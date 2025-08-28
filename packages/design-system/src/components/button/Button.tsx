import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '../../lib/utils';

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof buttonVariants> {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  color: 'primary' | 'secondary';
  variant: 'filled' | 'outline' | 'text';
  size: 'lg' | 'md' | 'sm';
  asChild?: boolean;
}

const baseButtonStyle = 'rounded-[3.2rem] py-[1rem] gap-[0.8rem]';

const buttonVariants = cva(
  'flex items-center transition-colors duration-300 justify-center font-bold disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed cursor-pointer grow',
  {
    variants: {
      variant: {
        filled: '',
        outline: 'bg-white border border-pink-500 text-pink-500',
        text: 'bg-transparent',
      },
      color: {
        primary: '',
        secondary: '',
      },
      size: {
        lg: `h-[6.4rem] px-[3.2rem] ${baseButtonStyle}`,
        md: `h-[5.6rem] px-[3.2rem] ${baseButtonStyle}`,
        sm: `h-[4.8rem] px-[2.4rem] ${baseButtonStyle}`,
      },
    },
    compoundVariants: [
      {
        variant: 'filled',
        color: 'primary',
        class: 'bg-pink-500 text-white',
      },
      {
        variant: 'filled',
        color: 'secondary',
        class: 'bg-pink-100 text-pink-500',
      },
      {
        variant: 'outline',
        color: 'primary',
        class: 'hover:bg-pink-100',
      },
      {
        variant: 'text',
        color: 'primary',
        class: 'text-pink-500',
      },
      {
        variant: 'text',
        color: 'secondary',
        class: 'text-gray-800',
      },
    ],
    defaultVariants: {
      variant: 'filled',
      color: 'primary',
      size: 'md',
    },
  }
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      color,
      size,
      iconLeft,
      iconRight,
      children,
      className,
      asChild = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    const buttonContent = asChild ? (
      children
    ) : (
      <>
        {iconLeft}
        {children}
        {iconRight}
      </>
    );

    return (
      <Comp
        disabled={disabled}
        ref={ref}
        className={cn(buttonVariants({ variant, color, size }), className)}
        {...props}
      >
        {buttonContent}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export default Button;
