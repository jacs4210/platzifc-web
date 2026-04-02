import React from 'react'

export interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'elevated' | 'bordered' | 'glass'
  as?: React.ElementType
}

export default function Card({
  children,
  className = '',
  variant = 'default',
  as: Component = 'div',
}: CardProps) {
  const baseStyles = 'rounded-xl overflow-hidden'
  
  const variants = {
    default: 'bg-navy-secondary border border-white/5',
    elevated: 'bg-navy-secondary shadow-lg border border-white/10',
    bordered: 'bg-transparent border-2 border-green-primary/30',
    glass: 'bg-white/5 backdrop-blur-md border border-white/10',
  }

  return (
    <Component
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={{
        padding: '1.5rem',
        transition: 'all 0.4s ease',
      }}
    >
      {children}
    </Component>
  )
}
