import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  icon,
  iconPosition = 'left',
  disabled,
  ...props
}) => {
  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 focus:ring-primary-500 shadow-soft hover:shadow-glow',
    secondary: 'bg-gradient-to-r from-secondary-400 to-secondary-500 text-chocolate-800 hover:from-secondary-500 hover:to-secondary-600 focus:ring-secondary-500 shadow-soft',
    outline: 'bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-50 focus:ring-primary-500 hover:border-primary-600',
    ghost: 'bg-transparent hover:bg-cream-100 text-chocolate-700 focus:ring-chocolate-500',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-lg',
    md: 'px-4 py-2 rounded-xl',
    lg: 'px-6 py-3 text-lg rounded-xl',
  };

  return (
    <button
      className={cn(
        'font-medium transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2',
        'inline-flex items-center justify-center',
        variants[variant],
        sizes[size],
        isLoading && 'opacity-70 cursor-not-allowed',
        disabled && 'opacity-50 cursor-not-allowed hover:scale-100',
        className
      )}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
          <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : icon && iconPosition === 'left' ? (
        <span className="mr-2">{icon}</span>
      ) : null}
      
      {children}
      
      {!isLoading && icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </button>
  );
};