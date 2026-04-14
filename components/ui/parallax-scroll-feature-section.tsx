'use client'

import { useRef } from "react"
import { motion, useScroll, useTransform } from 'motion/react'

interface SectionData {
  id: number
  title: string
  description: string
  imageUrl: string
  reverse: boolean
}

const sections: SectionData[] = [
  {
    id: 1,
    title: "Realism. Blackwork. Fine line.",
    description: "I specialize in black and grey realism, bold blackwork, and delicate fine line work. Portraits, botanicals, geometric pieces, you name it.",
    imageUrl: 'https://images.pexels.com/photos/4125672/pexels-photo-4125672.jpeg?auto=compress&cs=tinysrgb&w=800',
    reverse: false,
  },
  {
    id: 2,
    title: "The process is part of it.",
    description: "Every piece starts with a conversation. I draw custom pieces for every client and tailor each design to fit the person — your body, your story, your aesthetic. Bring a reference, a feeling, or nothing at all. We'll figure it out together.",
    imageUrl: 'https://images.pexels.com/photos/3997383/pexels-photo-3997383.jpeg?auto=compress&cs=tinysrgb&w=800',
    reverse: true,
  },
  {
    id: 3,
    title: "10 years in Queens.",
    description: "I've been tattooing out of Astoria, Queens for over a decade. Started in a back-room shop on Steinway, now running my own private studio. Every client who walks through that door is part of what keeps me here.",
    imageUrl: 'https://images.pexels.com/photos/2224861/pexels-photo-2224861.jpeg?auto=compress&cs=tinysrgb&w=800',
    reverse: false,
  },
]

function SectionItem({ section }: { section: SectionData }) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })

  const opacityContent = useTransform(scrollYProgress, [0, 0.7], [0, 1])
  const clipProgress = useTransform(
    scrollYProgress,
    [0, 0.7],
    ['inset(0 100% 0 0)', 'inset(0 0% 0 0)']
  )
  const translateContent = useTransform(scrollYProgress, [0, 1], [-50, 0])

  return (
    <div
      ref={ref}
      className={`h-screen flex items-center justify-center md:gap-40 gap-20 ${section.reverse ? 'flex-row-reverse' : ''}`}
    >
      <motion.div style={{ y: translateContent }}>
        <div className="text-4xl md:text-6xl max-w-sm text-white leading-tight">
          {section.title}
        </div>
        <motion.p
          style={{ y: translateContent }}
          className="text-white/70 max-w-sm mt-10 leading-relaxed"
        >
          {section.description}
        </motion.p>
      </motion.div>

      <motion.div
        style={{
          opacity: opacityContent,
          clipPath: clipProgress,
        }}
        className="relative"
      >
        <img
          src={section.imageUrl}
          className="size-80 object-cover"
          alt={section.title}
        />
      </motion.div>
    </div>
  )
}

export const Component = () => {
  return (
    <div className="flex flex-col md:px-0 px-10">
      {sections.map((section) => (
        <SectionItem key={section.id} section={section} />
      ))}
    </div>
  )
}
