'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'

interface Props {
  isLoaderVisible?: boolean
}

export default function CustomCursor({ isLoaderVisible = false }: Props) {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef  = useRef<HTMLDivElement>(null)
  const mouse   = useRef<{ x: number; y: number } | null>(null)
  const lerp    = useRef<{ x: number; y: number } | null>(null)
  const [hovered, setHovered] = useState(false)
  const [ready,   setReady]   = useState(false)

  // Event listeners + RAF — set up once, independent of element refs
  useEffect(() => {
    document.body.style.cursor = 'none'

    let rafId: number

    function onMove(e: MouseEvent) {
      if (!mouse.current) {
        // First move: snap both refs to exact cursor position (no lerp from 0,0)
        mouse.current = { x: e.clientX, y: e.clientY }
        lerp.current  = { x: e.clientX, y: e.clientY }
        setReady(true)
      } else {
        mouse.current.x = e.clientX
        mouse.current.y = e.clientY
      }
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`
        dotRef.current.style.top  = `${e.clientY}px`
      }
    }

    function onOver(e: MouseEvent) {
      if ((e.target as HTMLElement).closest('a, button, [data-cursor="hover"]')) {
        setHovered(true)
      }
    }

    function onOut(e: MouseEvent) {
      const target  = e.target as HTMLElement
      const related = e.relatedTarget as HTMLElement | null
      if (target.closest('a, button, [data-cursor="hover"]') &&
          !related?.closest('a, button, [data-cursor="hover"]')) {
        setHovered(false)
      }
    }

    function tick() {
      // Skip frames until first mousemove initializes positions
      if (lerp.current && mouse.current && ringRef.current) {
        lerp.current.x += (mouse.current.x - lerp.current.x) * 0.12
        lerp.current.y += (mouse.current.y - lerp.current.y) * 0.12
        ringRef.current.style.left = `${lerp.current.x}px`
        ringRef.current.style.top  = `${lerp.current.y}px`
      }
      rafId = requestAnimationFrame(tick)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover',  onOver)
    document.addEventListener('mouseout',   onOut)
    rafId = requestAnimationFrame(tick)

    return () => {
      document.body.style.cursor = ''
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover',  onOver)
      document.removeEventListener('mouseout',   onOut)
      cancelAnimationFrame(rafId)
    }
  }, [])

  // Snap to cursor before first paint so elements never appear at 0,0
  useLayoutEffect(() => {
    if (!ready || !ringRef.current || !dotRef.current || !lerp.current || !mouse.current) return
    ringRef.current.style.left = `${lerp.current.x}px`
    ringRef.current.style.top  = `${lerp.current.y}px`
    dotRef.current.style.left  = `${mouse.current.x}px`
    dotRef.current.style.top   = `${mouse.current.y}px`
  }, [ready])

  // Fade in after first paint at correct position (triggers CSS transition)
  useEffect(() => {
    if (!ready || !ringRef.current || !dotRef.current) return
    ringRef.current.style.opacity = '1'
    dotRef.current.style.opacity  = '1'
  }, [ready])

  if (isLoaderVisible) return null

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 99999, mixBlendMode: 'difference' }}>

      {/* Elements only mount after first mousemove — no 0,0 flash on load */}
      {ready && (
        <>
          <div
            ref={ringRef}
            style={{
              position:      'absolute',
              opacity:       0,
              width:         hovered ? 48 : 32,
              height:        hovered ? 48 : 32,
              border:        '1.5px solid #ffffff',
              background:    'transparent',
              borderRadius:  '50%',
              transform:     'translate(-50%, -50%)',
              pointerEvents: 'none',
              transition:    'opacity 300ms ease, width 300ms ease, height 300ms ease',
            }}
          />
          <div
            ref={dotRef}
            style={{
              position:      'absolute',
              opacity:       0,
              width:         hovered ? 6 : 4,
              height:        hovered ? 6 : 4,
              background:    '#ffffff',
              borderRadius:  '50%',
              transform:     'translate(-50%, -50%)',
              pointerEvents: 'none',
              transition:    'opacity 300ms ease, width 300ms ease, height 300ms ease',
            }}
          />
        </>
      )}

    </div>
  )
}
