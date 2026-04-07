'use client'

import { useRef } from 'react'
import React from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'motion/react'

// Types
interface iIPicture {
  src: string
  scale: MotionValue<number>
}

interface iImmersiveScrollGalleryProps {
  images?: Omit<iIPicture, 'scale'>[]
  className?: string
}

// Constants
const DEFAULT_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80' },
  { src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80' },
  { src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80' },
  { src: 'https://images.unsplash.com/photo-1540390769625-2fc3f8b1d50c?w=1200&q=80' },
  { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80' },
  { src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=80' },
  { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80' },
]

const IMAGE_STYLES = [
  'w-[25vw] h-[25vh]',
  'w-[35vw] h-[30vh] -top-[30vh] left-[5vw]',
  'w-[20vw] h-[55vh] -top-[15vh] -left-[25vw]',
  'w-[25vw] h-[25vh] left-[27.5vw]',
  'w-[20vw] h-[30vh] top-[30vh] left-[5vw]',
  'w-[30vw] h-[25vh] top-[27.5vh] -left-[22.5vw]',
  'w-[15vw] h-[15vh] top-[22.5vh] left-[25vw]',
]

const ImmersiveScrollGallery: React.FC<iImmersiveScrollGalleryProps> = ({
  images = DEFAULT_IMAGES,
  className = '',
}) => {
  const container = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])
  const opacityImage = useTransform(scrollYProgress, [0, 1], [1, 0])
  const opacitySection2 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1])
  const scaleSection2 = useTransform(scrollYProgress, [0.6, 0.8], [0.8, 1])

  const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9]

  const pictures = images.map((img, index) => ({
    ...img,
    scale: scales[index % 7],
  }))

  return (
    <div ref={container} className={`relative h-[200vh] ${className}`}>
      <div className="sticky top-0 h-[100vh] overflow-hidden">
        {pictures.map(({ src, scale }, index) => (
          <motion.div
            key={index}
            style={{ scale, opacity: opacityImage }}
            className="absolute flex items-center justify-center w-full h-full top-0"
          >
            <div className={`relative ${IMAGE_STYLES[index]}`}>
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        ))}

        <motion.div
          style={{ opacity: opacitySection2, scale: scaleSection2 }}
          className="w-full h-full flex items-center justify-center max-w-3xl mx-auto p-8 relative"
        >
          <h1
            className="text-white text-2xl md:text-4xl font-thin py-4 lowercase"
            style={{ lineHeight: 1.6, fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            i photograph the spaces between things. the pause before a door opens. light that doesn&apos;t know it&apos;s being watched. i am interested in what a photograph can hold that a memory cannot.
          </h1>
        </motion.div>
      </div>
    </div>
  )
}

export default ImmersiveScrollGallery
