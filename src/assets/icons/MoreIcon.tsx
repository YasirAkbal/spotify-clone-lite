import type { IconProps } from '../../types/components/icons.ts';

export const MoreIcon = ({ size = 24, className = '' }: IconProps) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="More"
    height={size}
    width={size}
    className={className}
  >
    <title>More</title>
    <path
      fill="currentColor"
      d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
    ></path>
  </svg>
);
