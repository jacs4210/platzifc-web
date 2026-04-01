import React from 'react'

export interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'elevated' | 'bordered'
  as?: React.ElementType
}

export default function Card({
  children,
  className,
  variant = 'default',
  as: Component = 'div',
}: CardProps) {
  const variants = {
    default: 'bg-white rounded-xl',
    elevated: 'bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300',
    bordered: 'bg-white rounded-xl border border-gray-200',
  }

  return (
    <Component className={`${variants[variant]} ${className ?? ''}`}>
      {children}
    </Component>
  )
}
