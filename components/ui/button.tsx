import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

export function Button({ className, variant = 'default', size = 'default', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md font-semibold transition-colors',
        variant === 'default' && 'bg-zinc-900 text-white hover:bg-zinc-700',
        variant === 'outline' && 'border border-zinc-200 bg-white hover:bg-zinc-50',
        variant === 'ghost' && 'hover:bg-zinc-100',
        size === 'default' && 'h-9 px-4 py-2 text-sm',
        size === 'sm' && 'h-8 px-3 text-xs',
        size === 'lg' && 'h-11 px-8 text-base',
        size === 'icon' && 'h-9 w-9 p-0',
        className
      )}
      {...props}
    />
  )
}
