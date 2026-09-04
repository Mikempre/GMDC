import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-brandRed-500 hover:bg-brandRed-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:ring-brandRed-500',
    secondary: 'bg-navy-900 hover:bg-navy-800 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:ring-navy-900',
    outline: 'border-2 border-brandRed-500 text-brandRed-500 hover:bg-brandRed-50 focus:ring-brandRed-500'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg font-semibold'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
