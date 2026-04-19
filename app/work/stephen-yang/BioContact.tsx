'use client'

import { useState } from 'react'

const serif = { fontFamily: 'Georgia, "Times New Roman", serif' }

export default function BioContact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="w-full max-w-lg">
      {submitted ? (
        <div style={serif}>
          <p className="text-white text-2xl font-thin">Thank you.</p>
          <p className="text-white/40 text-sm mt-3">I&apos;ll be in touch soon.</p>
        </div>
      ) : (
        <>
          <p className="text-white font-thin text-4xl md:text-5xl tracking-wide mb-10" style={serif}>
            Stephen Yang
          </p>
          <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase mb-6" style={serif}>
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
        </>
      )}
    </div>
  )
}
