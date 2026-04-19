'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const serif = { fontFamily: 'Georgia, "Times New Roman", serif' }

const PORTRAIT =
  'https://images.unsplash.com/photo-1633177188754-980c2a6b6266?q=90&w=3000&auto=format&fit=crop'

export default function StephenYangContact() {
  const container = useRef<HTMLDivElement>(null)
  const [submitted, setSubmitted] = useState(false)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 8])
  const opacityImage = useTransform(scrollYProgress, [0.35, 0.65], [1, 0])
  const opacityForm = useTransform(scrollYProgress, [0.7, 0.9], [0, 1])
  const scaleForm = useTransform(scrollYProgress, [0.7, 0.9], [0.9, 1])

  return (
    <div ref={container} className="relative h-[200vh] bg-[#0a0a0a]" id="contact">
      <div className="sticky top-0 h-[100vh] overflow-hidden bg-[#0a0a0a]">

        {/* Portrait — zooms in and disappears */}
        <motion.div
          style={{ scale, opacity: opacityImage }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-[38vw] h-[52vh]">
            <img
              src={PORTRAIT}
              alt="Stephen Yang"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Contact form — revealed after portrait fully disappears */}
        <motion.div
          style={{ opacity: opacityForm, scale: scaleForm }}
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
