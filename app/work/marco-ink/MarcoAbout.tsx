'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const sections = [
  {
    title: '12 years under the needle.',
    description:
      "I've been tattooing professionally since 2012, working out of a private studio on 31st Ave in Astoria. Started as an apprentice in the Bronx, found my voice doing black and grey realism, and never looked back.",
    image: 'https://images.unsplash.com/photo-1598775378872-7b5a6b7e9c4f?w=600&h=600&fit=crop&q=100',
    fallback: 'https://images.pexels.com/photos/4125667/pexels-photo-4125667.jpeg?w=600&q=100',
    flip: false,
  },
  {
    title: 'Realism. Blackwork. Fine line.',
    description:
      "I specialize in black and grey realism, bold blackwork, and delicate fine line work. Portraits, botanicals, geometric pieces — if it lives in the dark end of the spectrum, I'm your guy.",
    image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=600&h=600&fit=crop&q=100',
    fallback: 'https://images.pexels.com/photos/4123816/pexels-photo-4123816.jpeg?w=600&q=100',
    flip: true,
  },
  {
    title: 'The process is part of it.',
    description:
      "Every piece starts with a conversation. I don't do flash off the wall — I draw custom for every client. Bring a reference, a feeling, or nothing at all. We'll figure it out together.",
    image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&h=600&fit=crop&q=100',
    fallback: 'https://images.pexels.com/photos/5692237/pexels-photo-5692237.jpeg?w=600&q=100',
    flip: false,
  },
]

function ParallaxImage({ src, fallback, alt }: { src: string; fallback: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <div ref={ref} className="overflow-hidden aspect-square">
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="w-full h-[120%] object-cover -mt-[10%]"
        onError={(e) => { (e.target as HTMLImageElement).src = fallback }}
      />
    </div>
  )
}

export function MarcoAbout() {
  return (
    <section id="about" className="bg-black py-8 px-8 md:px-16">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-0">
        {sections.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-24 border-t border-neutral-900 ${
              section.flip ? 'lg:[&>:first-child]:order-2' : ''
            }`}
          >
            {/* Text */}
            <div className="flex flex-col gap-6">
              <h2
                className="text-white font-black leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
              >
                {section.title}
              </h2>
              <p className="text-neutral-500 text-base leading-relaxed max-w-md">
                {section.description}
              </p>
            </div>

            {/* Image with parallax */}
            <ParallaxImage src={section.image} fallback={section.fallback} alt={section.title} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
