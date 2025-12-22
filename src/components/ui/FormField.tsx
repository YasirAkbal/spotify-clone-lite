import React from 'react';

interface FormFieldProps {
  label: string;
  id: string;
  description?: string;
  error?: string;
  children: React.ReactNode;
}

export default function FormField({ label, id, description, error, children }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-bold text-white">
        {label}
      </label>
      {description && <p className="text-xs text-[#a7a7a7] mb-1">{description}</p>}
      {children}
      {error && (
        <div className="flex items-center gap-1 mt-1">
          <span className="text-xs text-[#f15e6c]">{error}</span>
        </div>
      )}
    </div>
  );
}
