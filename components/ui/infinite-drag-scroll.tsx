'use client'

import React, { useRef, type ReactNode } from 'react'
import { motion, useMotionValue } from 'motion/react'
import { cn } from '@/lib/utils'

// ── GridItem ──────────────────────────────────────────────────────────────────

interface GridItemProps {
  children: ReactNode
  className?: string
}

export function GridItem({ children, className }: GridItemProps) {
  return (
    <div className={cn('flex-shrink-0 overflow-hidden', className)}>
      {children}
    </div>
  )
}

// ── GridBody ──────────────────────────────────────────────────────────────────

interface GridBodyProps {
  children: ReactNode
}

export function GridBody({ children }: GridBodyProps) {
  const items = React.Children.toArray(children)
  const row1 = items.filter((_, i) => i % 2 === 0)
  const row2 = items.filter((_, i) => i % 2 === 1)

  return (
    <div className="flex flex-col gap-3 flex-shrink-0">
      <div className="flex gap-3 items-start">
        {row1}
      </div>
      <div className="flex gap-3 items-start" style={{ marginLeft: '80px' }}>
        {row2}
      </div>
    </div>
  )
}

// ── DraggableContainer ────────────────────────────────────────────────────────

interface DraggableContainerProps {
  children: ReactNode
  variant?: 'masonry' | 'grid'
  className?: string
}

export function DraggableContainer({ children, variant, className }: DraggableContainerProps) {
  const x = useMotionValue(0)
  const trackRef = useRef<HTMLDivElement>(null)

  const handleDrag = () => {
    const track = trackRef.current
    if (!track) return
    const half = track.scrollWidth / 2
    const curr = x.get()
    if (curr <= -half) x.set(curr + half)
    else if (curr >= 0) x.set(curr - half)
  }

  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        ref={trackRef}
        drag="x"
        style={{ x, display: 'flex', gap: '24px', width: 'max-content' }}
        dragConstraints={{ left: -Infinity, right: Infinity }}
        dragElastic={0}
        onDrag={handleDrag}
        className="cursor-grab active:cursor-grabbing bg-[#F7F3EE] px-16 py-8"
      >
        {children}
        <div aria-hidden style={{ display: 'flex', gap: '24px' }}>
          {children}
        </div>
      </motion.div>
    </div>
  )
}
