import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({
  className,
  label,
  error,
  ...props
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={props.id} 
          className="block text-sm font-medium text-chocolate-700 mb-1"
        >
          {label}
        </label>
      )}
      
      <textarea
        ref={ref}
        className={cn(
          "w-full px-4 py-3 border border-cream-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 bg-cream-50 min-h-[120px] resize-y",
          error && "border-red-300 focus:ring-red-500",
          className
        )}
        {...props}
      />
      
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
});

TextArea.displayName = "TextArea";