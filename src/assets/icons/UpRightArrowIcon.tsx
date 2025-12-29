import type { IconProps } from '../../types/components/icons.ts';

export const UpRightArrowIcon = ({ size = 24, className = '' }: IconProps) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Up Right Arrow"
    height={size}
    width={size}
    className={className}
  >
    <title>Up Right Arrow</title>
    <path
      fill="currentColor"
      d="M19 5v10.193a1 1 0 1 1-2 0V8.414L5.707 19.707a1 1 0 0 1-1.414-1.414L15.586 7H8.808a1 1 0 0 1 0-2z"
    ></path>
  </svg>
);
