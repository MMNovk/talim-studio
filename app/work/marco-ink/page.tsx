'use client'

import React from 'react'
import Link from 'next/link'
import { MarcoHero } from './MarcoHero'
import { MarcoAbout } from './MarcoAbout'
import { MarcoGallery } from './MarcoGallery'

export default function MarcoMillerPage() {
  return (
    <>
      {/* Google Fonts — scoped to this page only */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&family=Antic&family=Dancing+Script:wght@700&display=swap"
      />

      <div className="w-full bg-black text-white">

        {/* HERO */}
        <MarcoHero />

        {/* ABOUT / PARALLAX */}
        <MarcoAbout />

        {/* GALLERY */}
        <MarcoGallery />

        {/* CONTACT */}
        <section id="book" className="bg-black py-32 px-8 md:px-16">
          <div className="max-w-xl mx-auto">
            <h2
              className="text-white font-bold leading-tight mb-4"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
            >
              Like what you see?
            </h2>
            <p className="text-neutral-400 text-lg mb-12 leading-relaxed">
              Fill out the form and I&rsquo;ll get back to you within 48 hours.
            </p>

            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg bg-neutral-900 border border-neutral-800 text-white placeholder:text-neutral-500 px-5 py-4 text-sm focus:border-white focus:outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-lg bg-neutral-900 border border-neutral-800 text-white placeholder:text-neutral-500 px-5 py-4 text-sm focus:border-white focus:outline-none transition-colors"
              />
              <textarea
                placeholder="Describe what you're thinking — style, size, placement, references"
                className="w-full rounded-lg bg-neutral-900 border border-neutral-800 text-white placeholder:text-neutral-500 px-5 py-4 text-sm focus:border-white focus:outline-none transition-colors resize-none"
                style={{ minHeight: '120px' }}
              />
              <input
                type="text"
                placeholder="Instagram handle or phone number"
                className="w-full rounded-lg bg-neutral-900 border border-neutral-800 text-white placeholder:text-neutral-500 px-5 py-4 text-sm focus:border-white focus:outline-none transition-colors"
              />
              <button
                type="button"
                onClick={() => {}}
                className="w-full rounded-lg bg-white text-black font-bold py-4 text-sm tracking-widest uppercase hover:bg-neutral-200 transition-colors mt-2"
              >
                Book a Consultation
              </button>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-black border-t border-neutral-900 py-10 px-8 md:px-14">
          <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Left */}
            <div className="text-center sm:text-left">
              <p className="text-white font-bold text-sm tracking-widest uppercase">Marco Miller</p>
              <p className="text-neutral-500 text-xs mt-1" style={{ fontFamily: 'monospace' }}>
                Astoria, Queens, NY
              </p>
            </div>

            {/* Center */}
            <p className="text-neutral-500 text-xs text-center">
              &copy; 2025 Marco Miller. All rights reserved.
            </p>

            {/* Right */}
            <Link
              href="/work"
              className="text-neutral-500 text-sm no-underline hover:text-white transition-colors text-center sm:text-right"
            >
              ← Back to Talim Studio
            </Link>
          </div>
        </footer>

      </div>
    </>
  )
}
