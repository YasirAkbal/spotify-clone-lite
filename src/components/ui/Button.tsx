import { Button as RadixButton } from '@radix-ui/themes';
import type { ButtonProps as RadixButtonProps } from '@radix-ui/themes';
import clsx from 'clsx';

interface ButtonProps extends RadixButtonProps {}

export default function Button({ children, disabled, className, ...props }: ButtonProps) {
  return (
    <RadixButton
      disabled={disabled}
      {...props}
      className={clsx(
        'bg-green-700 cursor-pointer hover:bg-green-600 rounded-xl w-[260px] py-3',
        {
          'opacity-50 cursor-not-allowed': disabled,
        },
        className
      )}
    >
      {children}
    </RadixButton>
  );
}
