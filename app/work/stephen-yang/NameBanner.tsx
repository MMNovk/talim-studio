'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const serif = { fontFamily: 'Georgia, "Times New Roman", serif' }

const FOREST = 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=85&w=2000&auto=format&fit=crop'

export default function NameBanner() {
  const container = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 8])
  const photoOpacity = useTransform(scrollYProgress, [0.35, 0.65], [1, 0])
  const textOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1])
  const textScale = useTransform(scrollYProgress, [0.7, 0.9], [0.9, 1])

  return (
    <div ref={container} className="relative h-[200vh] bg-[#0a0a0a]">
      <div className="sticky top-0 h-[100vh] overflow-hidden bg-[#0a0a0a]">

        {/* Single forest photo — zooms in and disappears */}
        <motion.div
          style={{ scale, opacity: photoOpacity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-[40vw] h-[55vh]">
            <img
              src={FOREST}
              alt="Landscape"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* STEPHEN YANG — revealed after photo fully disappears */}
        <motion.div
          style={{ opacity: textOpacity, scale: textScale }}
          className="w-full h-full flex items-center relative"
        >
          <div className="w-full px-8">
            <h2
              className="text-white font-black uppercase leading-none tracking-tight whitespace-nowrap w-full block"
              style={{ fontSize: 'clamp(3rem, 11vw, 10rem)', letterSpacing: '-0.02em' }}
            >
              STEPHEN YANG
            </h2>
            <p className="text-[#666] text-sm mt-6 tracking-widest" style={serif}>
              New York · Fine Art Photography · Est. 2019
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
