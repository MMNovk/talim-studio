'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const images = [
  "https://images.pexels.com/photos/4123816/pexels-photo-4123816.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/4125667/pexels-photo-4125667.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/4125624/pexels-photo-4125624.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/4125651/pexels-photo-4125651.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/4046316/pexels-photo-4046316.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/4125589/pexels-photo-4125589.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/3997980/pexels-photo-3997980.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/4046317/pexels-photo-4046317.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/4125660/pexels-photo-4125660.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/4046321/pexels-photo-4046321.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/4125648/pexels-photo-4125648.jpeg?auto=compress&cs=tinysrgb&w=800",
]

const row1 = images.slice(0, 6)
const row2 = images.slice(6, 12)

export function MarcoGallery() {
  const track1 = useRef<HTMLDivElement>(null)
  const track2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.set(track2.current, { xPercent: -50 })

    const t1 = gsap.to(track1.current, {
      xPercent: -50,
      duration: 28,
      ease: 'none',
      repeat: -1,
    })
    const t2 = gsap.to(track2.current, {
      xPercent: 0,
      duration: 34,
      ease: 'none',
      repeat: -1,
    })

    return () => {
      t1.kill()
      t2.kill()
    }
  }, [])

  const imgClass = "w-60 h-60 md:w-72 md:h-72 shrink-0 object-cover"

  return (
    <section id="work" className="bg-black py-24">
      {/* Heading */}
      <div className="text-center mb-16 px-8">
        <h2
          className="text-white font-bold leading-tight mb-3"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
        >
          Check out my work.
        </h2>
        <p className="text-neutral-600 text-xs font-mono tracking-widest uppercase">
          Black &amp; grey · Blackwork · Fine line
        </p>
      </div>

      {/* Row 1 — moves left */}
      <div className="overflow-hidden mb-4">
        <div ref={track1} className="flex gap-4" style={{ width: '200%' }}>
          {[...row1, ...row1].map((src, i) => (
            <img key={i} src={src} alt="" className={imgClass} loading="lazy" />
          ))}
        </div>
      </div>

      {/* Row 2 — moves right */}
      <div className="overflow-hidden">
        <div ref={track2} className="flex gap-4" style={{ width: '200%' }}>
          {[...row2, ...row2].map((src, i) => (
            <img key={i} src={src} alt="" className={imgClass} loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  )
}
