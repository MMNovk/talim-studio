'use client'

import { useRef, useEffect } from 'react'

export default function ClartePhotoBreak() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imgRef       = useRef<HTMLImageElement>(null)

  useEffect(() => {
    let ctx: { revert?: () => void } = {}
    ;(async () => {
      const { default: gsap } = await import('gsap')
      const { ScrollTrigger }  = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      if (containerRef.current && imgRef.current) {
        ctx = gsap.context(() => {
          gsap.fromTo(
            imgRef.current,
            { y: '10%' },
            {
              y: '-10%',
              ease: 'none',
              scrollTrigger: {
                trigger: containerRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.4,
              },
            }
          )
        })
      }
    })()

    return () => { if (ctx.revert) ctx.revert() }
  }, [])

  return (
    <div ref={containerRef} style={{ height: '55vh', overflow: 'hidden', position: 'relative' }}>
      <img
        ref={imgRef}
        src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1800&q=80"
        alt=""
        aria-hidden="true"
        loading="lazy"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '125%',
          top: '-12.5%',
          objectFit: 'cover',
          objectPosition: 'center 40%',
          willChange: 'transform',
        }}
      />
    </div>
  )
}
