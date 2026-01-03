import type { IconProps } from '../../types/components/icons.ts';

export const PauseIcon = ({ size = 24, className = '' }: IconProps) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Pause"
    height={size}
    width={size}
    className={className}
  >
    <title>Pause</title>
    <path
      fill="currentColor"
      d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7z"
    ></path>
  </svg>
);
