import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  children: React.ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95'
  
  const variants = {
    primary: 'bg-green-primary text-navy-primary hover:bg-green-dark shadow-glow',
    secondary: 'bg-navy-secondary text-white hover:bg-navy-light border border-navy-light',
    outline: 'bg-transparent border-2 border-green-primary text-green-primary hover:bg-green-primary/10',
    ghost: 'bg-transparent text-gray-500 hover:bg-white/5 hover:text-white',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  }

  const sizes = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
    xl: 'px-10 py-4 text-xl',
  }

  // Final className synthesis
  // Note: We use custom design tokens from globals.css as tailwind-like classes where applicable
  // or standard CSS if Tailwind isn't fully set up.
  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  return (
    <button
      disabled={disabled || isLoading}
      className={combinedClassName}
      {...props}
      style={{
        // Fallback or custom styles for the specific Platzi FC look
        cursor: (disabled || isLoading) ? 'not-allowed' : 'pointer',
        gap: '0.5rem',
      }}
    >
      {isLoading ? (
        <span className="animate-spin mr-2">⏳</span>
      ) : leftIcon}
      {children}
      {!isLoading && rightIcon}
    </button>
  )
}
