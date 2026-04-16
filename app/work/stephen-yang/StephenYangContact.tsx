'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const serif = { fontFamily: 'Georgia, "Times New Roman", serif' }

const PORTRAIT =
  'https://images.unsplash.com/photo-1633177188754-980c2a6b6266?q=95&w=3000&auto=format&fit=crop'

const IMAGE_STYLES = [
  'w-[25vw] h-[25vh]',
  'w-[35vw] h-[30vh] -top-[30vh] left-[5vw]',
  'w-[20vw] h-[55vh] -top-[15vh] -left-[25vw]',
  'w-[25vw] h-[25vh] left-[27.5vw]',
  'w-[20vw] h-[30vh] top-[30vh] left-[5vw]',
  'w-[30vw] h-[25vh] top-[27.5vh] -left-[22.5vw]',
  'w-[15vw] h-[15vh] top-[22.5vh] left-[25vw]',
]

export default function StephenYangContact() {
  const container = useRef<HTMLDivElement>(null)
  const [submitted, setSubmitted] = useState(false)

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
  const opacitySection = useTransform(scrollYProgress, [0.6, 0.8], [0, 1])
  const scaleSection = useTransform(scrollYProgress, [0.6, 0.8], [0.8, 1])

  const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9]

  return (
    <div ref={container} className="relative h-[200vh] bg-[#0a0a0a]" id="contact">
      <div className="sticky top-0 h-[100vh] overflow-hidden bg-[#0a0a0a]">

        {/* Portrait tiles — each zooms at a different rate */}
        {IMAGE_STYLES.map((style, i) => (
          <motion.div
            key={i}
            style={{ scale: scales[i], opacity: opacityImage }}
            className="absolute flex items-center justify-center w-full h-full top-0"
          >
            <div className={`relative ${style}`}>
              <img
                src={PORTRAIT}
                alt="Stephen Yang"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        ))}

        {/* Reveal — fades in as portrait tiles zoom out */}
        <motion.div
          style={{ opacity: opacitySection, scale: scaleSection }}
          className="w-full h-full flex items-center justify-center px-8 relative"
        >
          {submitted ? (
            <div className="text-center" style={serif}>
              <p className="text-white text-2xl font-thin">Thank you.</p>
              <p className="text-white/40 text-sm mt-3">I&apos;ll be in touch soon.</p>
            </div>
          ) : (
            <div className="w-full max-w-lg">
              <p
                className="text-white font-thin text-4xl md:text-5xl tracking-wide mb-10"
                style={serif}
              >
                Stephen Yang
              </p>
              <p
                className="text-white/40 text-[10px] tracking-[0.25em] uppercase mb-6"
                style={serif}
              >
                Get in Touch
              </p>
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
                className="flex flex-col gap-5"
              >
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-white/30 text-[10px] tracking-[0.2em] uppercase" style={serif}>Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="bg-transparent border-b border-white/20 text-white placeholder:text-white/20 py-2.5 text-sm font-thin focus:outline-none focus:border-white/50 transition-colors"
                      style={serif}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-white/30 text-[10px] tracking-[0.2em] uppercase" style={serif}>Email</label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="bg-transparent border-b border-white/20 text-white placeholder:text-white/20 py-2.5 text-sm font-thin focus:outline-none focus:border-white/50 transition-colors"
                      style={serif}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white/30 text-[10px] tracking-[0.2em] uppercase" style={serif}>Subject</label>
                  <input
                    type="text"
                    placeholder="Print inquiry, commission, press..."
                    className="bg-transparent border-b border-white/20 text-white placeholder:text-white/20 py-2.5 text-sm font-thin focus:outline-none focus:border-white/50 transition-colors"
                    style={serif}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white/30 text-[10px] tracking-[0.2em] uppercase" style={serif}>Message</label>
                  <textarea
                    placeholder="Tell me about your project..."
                    rows={4}
                    className="bg-transparent border-b border-white/20 text-white placeholder:text-white/20 py-2.5 text-sm font-thin focus:outline-none focus:border-white/50 transition-colors resize-none"
                    style={serif}
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 self-start text-white/60 text-xs tracking-[0.25em] uppercase hover:text-white transition-colors"
                  style={serif}
                >
                  Send Message →
                </button>
              </form>
            </div>
          )}
        </motion.div>

      </div>
    </div>
  )
}
