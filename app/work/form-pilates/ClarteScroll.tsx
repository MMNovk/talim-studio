'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function ClarteScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    // Keep GSAP ScrollTrigger in sync when both are active
    ;(async () => {
      const { default: gsap } = await import('gsap')
      const { ScrollTrigger }  = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      lenis.on('scroll', ScrollTrigger.update)
      gsap.ticker.add((time) => lenis.raf(time * 1000))
      gsap.ticker.lagSmoothing(0)
    })()

    return () => {
      lenis.destroy()
    }
  }, [])

  return null
}
