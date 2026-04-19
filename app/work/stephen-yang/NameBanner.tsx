'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const serif = { fontFamily: 'Georgia, "Times New Roman", serif' }

const FOREST = 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=85&w=2000&auto=format&fit=crop'

const IMAGE_STYLES = [
  'w-[25vw] h-[25vh]',
  'w-[35vw] h-[30vh] -top-[30vh] left-[5vw]',
  'w-[20vw] h-[55vh] -top-[15vh] -left-[25vw]',
  'w-[25vw] h-[25vh] left-[27.5vw]',
  'w-[20vw] h-[30vh] top-[30vh] left-[5vw]',
  'w-[30vw] h-[25vh] top-[27.5vh] -left-[22.5vw]',
  'w-[15vw] h-[15vh] top-[22.5vh] left-[25vw]',
]

export default function NameBanner() {
  const container = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])
  const opacityImage = useTransform(scrollYProgress, [0.3, 0.65], [1, 0])
  const textOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1])
  const textScale = useTransform(scrollYProgress, [0.7, 0.9], [0.9, 1])

  const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9]

  return (
    <div ref={container} className="relative h-[200vh] bg-[#0a0a0a]">
      <div className="sticky top-0 h-[100vh] overflow-hidden bg-[#0a0a0a]">

        {IMAGE_STYLES.map((style, i) => (
          <motion.div
            key={i}
            style={{ scale: scales[i], opacity: opacityImage }}
            className="absolute flex items-center justify-center w-full h-full top-0"
          >
            <div className={`relative ${style}`}>
              <img
                src={FOREST}
                alt="Landscape"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        ))}

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
