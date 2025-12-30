import type { IconProps } from '../../types/components/icons.ts';

export const BackIcon = ({ size = 24, className = '' }: IconProps) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Back"
    height={size}
    width={size}
    className={className}
  >
    <title>Back</title>
    <path
      fill="currentColor"
      d="M13.414 3.5a.999.999 0 0 0-1.707-.707l-9.207 9.2 9.207 9.202a1 1 0 1 0 1.414-1.413L6.335 13H20.5a1 1 0 0 0 0-2H6.322l6.799-6.794a1 1 0 0 0 .293-.707z"
    ></path>
  </svg>
);
