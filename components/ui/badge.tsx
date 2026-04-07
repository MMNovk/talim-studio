import React from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline'
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors',
        variant === 'outline' && 'border border-zinc-200 bg-white text-zinc-900',
        variant === 'default' && 'bg-zinc-900 text-white',
        className
      )}
      {...props}
    />
  )
}
