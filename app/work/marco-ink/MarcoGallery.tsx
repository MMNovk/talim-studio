'use client'

import { useRef } from 'react'
import { motion, useScroll, useVelocity, useTransform, useSpring } from 'motion/react'

const images = [
  "https://images.pexels.com/photos/4125666/pexels-photo-4125666.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/3997373/pexels-photo-3997373.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/4125672/pexels-photo-4125672.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/7156862/pexels-photo-7156862.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/3997392/pexels-photo-3997392.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/4125671/pexels-photo-4125671.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/4125651/pexels-photo-4125651.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/5432021/pexels-photo-5432021.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/4125654/pexels-photo-4125654.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&w=800",
]

export function MarcoGallery() {
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)

  // Map scroll velocity to a skewY value — smooth it out with spring
  const rawSkew = useTransform(scrollVelocity, [-2500, 0, 2500], [-8, 0, 8])
  const skewY = useSpring(rawSkew, { stiffness: 300, damping: 80 })

  return (
    <section id="work" className="bg-neutral-900 py-24 px-8 md:px-14">
      {/* Heading */}
      <div className="text-center mb-16 max-w-screen-xl mx-auto">
        <h2
          className="text-white font-bold leading-tight mb-4"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          Check out my work.
        </h2>
        <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase">
          Black &amp; grey · Blackwork · Fine line
        </p>
      </div>

      {/* Kinetic grid — skews on scroll */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-screen-xl mx-auto"
        style={{ skewY }}
      >
        {images.map((src, i) => (
          <div key={i} className="overflow-hidden aspect-square">
            <motion.img
              src={src}
              alt={`Tattoo work ${i + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        ))}
      </motion.div>
    </section>
  )
}
