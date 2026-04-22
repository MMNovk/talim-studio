'use client'

import { useRef, useState } from 'react'

interface LensProps {
  children: React.ReactNode
  zoomFactor?: number
  lensSize?: number
}

type MouseState = { x: number; y: number; w: number; h: number }

export function Lens({ children, zoomFactor = 2, lensSize = 150 }: LensProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mouse, setMouse] = useState<MouseState | null>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      w: rect.width,
      h: rect.height,
    })
  }

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ borderRadius: '2px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMouse(null)}
    >
      {children}

      {mouse && (
        <div
          className="pointer-events-none absolute z-50"
          style={{
            left: mouse.x - lensSize / 2,
            top: mouse.y - lensSize / 2,
            width: lensSize,
            height: lensSize,
            borderRadius: '50%',
            overflow: 'hidden',
            border: '1.5px solid rgba(255,255,255,0.5)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.18), inset 0 0 0 1px rgba(255,255,255,0.1)',
          }}
        >
          {/* Zoomed content — positioned so that mouse.x/y maps to lens center */}
          <div
            style={{
              position: 'absolute',
              left: lensSize / 2 - mouse.x * zoomFactor,
              top: lensSize / 2 - mouse.y * zoomFactor,
              width: mouse.w,
              height: mouse.h,
              transform: `scale(${zoomFactor})`,
              transformOrigin: '0 0',
            }}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  )
}
