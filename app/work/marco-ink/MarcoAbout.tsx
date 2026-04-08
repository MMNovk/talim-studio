'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const sections = [
  {
    title: '10 years. One needle at a time.',
    description:
      "I've been tattooing out of Astoria, Queens for over a decade. Started in a back-room shop on Steinway, now running my own private studio. Every piece I do is custom — no flash, no copy-paste.",
    image: 'https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageLeft: true,
  },
  {
    title: 'Realism. Blackwork. Fine line.',
    description:
      "I specialize in black and grey realism, bold blackwork, and delicate fine line work. Portraits, botanicals, geometric pieces — if it lives in the dark end of the spectrum, I'm your guy.",
    image: 'https://images.pexels.com/photos/4125672/pexels-photo-4125672.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageLeft: false,
  },
  {
    title: 'The process is part of it.',
    description:
      "Every piece starts with a conversation. I don't do flash off the wall — I draw custom for every client. Bring a reference, a feeling, or nothing at all. We'll figure it out together.",
    image: 'https://images.pexels.com/photos/7156862/pexels-photo-7156862.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageLeft: true,
  },
]

function FeatureSection({
  section,
  index,
}: {
  section: (typeof sections)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [70, -70])

  return (
    <div
      ref={ref}
      className={`flex flex-col ${section.imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-screen`}
    >
      {/* Image side */}
      <div className="relative w-full lg:w-1/2 h-[55vw] lg:h-auto overflow-hidden">
        <motion.div
          style={{ y, top: '-10%', bottom: '-10%', position: 'absolute', left: 0, right: 0 }}
        >
          <img
            src={section.image}
            alt={section.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Text side */}
      <motion.div
        initial={{ opacity: 0, x: section.imageLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="w-full lg:w-1/2 bg-black flex items-center px-10 md:px-16 lg:px-20 py-20 lg:py-0"
      >
        <div className="max-w-md">
          <span
            className="block text-[#C3E41D] text-xs tracking-[0.3em] uppercase mb-5"
            style={{ fontFamily: '"Fira Code", monospace' }}
          >
            0{index + 1}
          </span>
          <h2
            className="text-white font-black leading-tight mb-6"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
          >
            {section.title}
          </h2>
          <p className="text-neutral-500 text-base leading-relaxed">
            {section.description}
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export function MarcoAbout() {
  return (
    <section id="about" className="bg-black">
      {sections.map((section, i) => (
        <FeatureSection key={i} section={section} index={i} />
      ))}
    </section>
  )
}
