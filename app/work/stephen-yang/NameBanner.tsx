'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const serif = { fontFamily: 'Georgia, "Times New Roman", serif' }

const FOREST = 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=3000&q=90&auto=format&fit=crop'

export default function NameBanner() {
  const container = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  const scale = useTransform(scrollYProgress, [0, 0.75], [1, 12])
  const photoOpacity = useTransform(scrollYProgress, [0.5, 0.78], [1, 0])
  const textOpacity = useTransform(scrollYProgress, [0.65, 0.88], [0, 1])
  const textY = useTransform(scrollYProgress, [0.65, 0.88], [30, 0])

  return (
    <div ref={container} className="relative h-[200vh] bg-[#0a0a0a]">
      <div className="sticky top-0 h-[100vh] overflow-hidden bg-[#0a0a0a] flex items-center">

        {/* Forest photo — zooms in and disappears into the text */}
        <motion.div
          style={{ scale, opacity: photoOpacity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <img
            src={FOREST}
            alt="Landscape"
            className="w-[55vw] h-[65vh] object-cover"
          />
        </motion.div>

        {/* STEPHEN YANG — revealed as photo disappears */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="relative z-10 w-full px-8"
        >
          <h2
            className="text-white font-black uppercase leading-none tracking-tight whitespace-nowrap w-full block"
            style={{ fontSize: 'clamp(3rem, 11vw, 10rem)', letterSpacing: '-0.02em' }}
          >
            STEPHEN YANG
          </h2>
          <p className="text-[#666] text-sm mt-6 tracking-widest" style={serif}>
            New York · Fine Art Photography · Est. 2019
          </p>
        </motion.div>

      </div>
    </div>
  )
}
