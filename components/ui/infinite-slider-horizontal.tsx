'use client'

import { useRef, type ReactNode } from 'react'
import useMeasure from 'react-use-measure'

interface InfiniteSliderProps {
  children: ReactNode
  direction?: 'horizontal' | 'vertical'
  duration?: number
  reverse?: boolean
  className?: string
}

export function InfiniteSlider({
  children,
  duration = 30,
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [ref, { width }] = useMeasure()
  const trackWidth = width || 0

  const keyframe = reverse ? 'slide-reverse' : 'slide-forward'

  return (
    <div style={{ overflow: 'hidden', width: '100%' }} className={className}>
      <div
        style={{
          display: 'flex',
          width: 'max-content',
          animation: `${keyframe} ${duration}s linear infinite`,
        }}
      >
        {/* Two copies — animation moves by -50% so it loops seamlessly */}
        <div ref={ref} style={{ display: 'flex', gap: '16px' }}>
          {children}
        </div>
        <div style={{ display: 'flex', gap: '16px' }} aria-hidden>
          {children}
        </div>
      </div>
      <style>{`
        @keyframes slide-forward {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes slide-reverse {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}
