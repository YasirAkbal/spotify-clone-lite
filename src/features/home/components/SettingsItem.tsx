import type { ReactNode } from 'react';

interface SettingsItemProps {
  children: ReactNode;
  isVisible: boolean;
  delay: number;
  variant?: 'default' | 'large';
}

const sizeClasses = {
  default: 'text-base',
  large: 'text-xl',
};

export default function SettingsItem({
  children,
  isVisible,
  delay,
  variant = 'default',
}: SettingsItemProps) {
  return (
    <div
      className={`
        text-white transform transition-all duration-500 ease-out font-bold
        ${sizeClasses[variant]}
        ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}
      `}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
}
