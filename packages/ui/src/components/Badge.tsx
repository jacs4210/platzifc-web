import React from 'react'

export interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'dot'
  status?: 'default' | 'success' | 'warning' | 'error' | 'info'
  className?: string
  pulse?: boolean
}

export default function Badge({
  children,
  variant = 'primary',
  status = 'default',
  className = '',
  pulse = false,
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold'
  
  const statusStyles = {
    default: 'bg-white/10 text-gray-300 border border-white/5',
    success: 'bg-green-primary/10 text-green-primary border border-green-primary/30',
    warning: 'bg-yellow-primary/10 text-yellow-primary border border-yellow-primary/30',
    error: 'bg-red-600/10 text-red-600 border border-red-600/30',
    info: 'bg-blue-primary/10 text-blue-primary border border-blue-primary/30',
  }

  const variants = {
    primary: statusStyles[status],
    secondary: 'bg-navy-secondary text-white border border-navy-light',
    outline: `bg-transparent border border-current`,
    dot: 'bg-transparent flex items-center gap-1.5',
  }

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {pulse && (
        <span className="relative flex h-2 w-2 mr-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-current"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
        </span>
      )}
      {children}
    </span>
  )
}
