import type { IconProps } from '../../types/components/icons.ts';

export const CloseRightSidebarIcon = ({ size = 16, className = '' }: IconProps) => (
  <svg
    role="img"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Close Right Sidebar"
    height={size}
    width={size}
    className={className}
  >
    <title>Close Right Sidebar</title>
    <path
      fill="currentColor"
      d="M10.03 10.53a.75.75 0 1 1-1.06-1.06L10.44 8 8.97 6.53a.75.75 0 0 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06z"
    />
    <path
      fill="currentColor"
      d="M15 16a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1zm-8.5-1.5v-13h8v13zm-1.5 0H1.5v-13H5z"
    />
  </svg>
);
