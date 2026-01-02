import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ error, className = '', ...props }, ref) => {
    const baseClasses = `px-3 py-3 bg-[#121212] border ${
      error ? 'border-[#f15e6c] focus:border-[#f15e6c]' : 'border-[#727272] focus:border-white'
    } rounded text-white placeholder:text-[#a7a7a7] outline-none transition-all`;

    return <input ref={ref} className={twMerge(baseClasses, className)} {...props} />;
  }
);

TextInput.displayName = 'TextInput';

export default TextInput;
