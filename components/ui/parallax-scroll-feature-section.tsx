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
    imageUrl: 'https://images.unsplash.com/photo-1775134088834-6479b080ab03?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    reverse: false,
  },
  {
    id: 2,
    title: "The process is part of it.",
    description: "Every piece starts with a conversation. I draw custom pieces for every client and tailor each design to fit the person. Bring a reference, a feeling, or nothing at all. We'll figure it out together.",
    imageUrl: 'https://images.unsplash.com/photo-1711112109420-ecf9be11abb7?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    reverse: true,
  },
  {
    id: 3,
    title: "10 years in Queens.",
    description: "I've been tattooing out of Astoria, Queens for over a decade. Started in a back-room shop on Steinway, now running my own private studio. Every client who walks through that door is part of what keeps me here.",
    imageUrl: 'https://images.unsplash.com/photo-1739132271373-2298ef68eedd?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
