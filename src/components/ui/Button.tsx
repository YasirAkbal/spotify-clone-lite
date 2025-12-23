import { Button as RadixButton } from '@radix-ui/themes';
import type { ButtonProps as RadixButtonProps } from '@radix-ui/themes';

interface ButtonProps extends RadixButtonProps {}

export default function Button({ children, disabled, ...props }: ButtonProps) {
  return (
    <RadixButton
      disabled={disabled}
      {...props}
      className="bg-green-700 cursor-pointer hover:bg-green-600 rounded-xl w-[260px] py-3"
    >
      {children}
    </RadixButton>
  );
}
