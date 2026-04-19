'use client'

import { useState } from 'react'

const serif = { fontFamily: 'Georgia, "Times New Roman", serif' }

const PORTRAIT =
  'https://images.unsplash.com/photo-1633177188754-980c2a6b6266?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

export default function BioContact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="flex flex-col gap-12">
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        <img
          src={PORTRAIT}
          alt="Stephen Yang"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div id="contact">
        {submitted ? (
          <div style={serif}>
            <p className="text-white text-2xl font-thin">Thank you.</p>
            <p className="text-white/40 text-sm mt-3">I&apos;ll be in touch soon.</p>
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  )
}
