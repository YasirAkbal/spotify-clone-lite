import { Button as RadixButton } from '@radix-ui/themes';
import type { ButtonProps as RadixButtonProps } from '@radix-ui/themes';

interface ButtonProps extends RadixButtonProps {}

export default function Button({ children, disabled, ...props }: ButtonProps) {
  return (
    <RadixButton disabled={disabled} {...props}>
      {children}
    </RadixButton>
  );
}
