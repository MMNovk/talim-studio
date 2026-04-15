'use client'

import React from 'react'
import Link from 'next/link'
import { MarcoHero } from './MarcoHero'
import { MarcoAbout } from './MarcoAbout'
import { MarcoGallery } from './MarcoGallery'
import { Contact2 } from '@/components/ui/contact-2'

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
        <section id="book" className="bg-black">
          <Contact2
            title="Like what you see?"
            description="Fill out the form and I'll get back to you within 48 hours."
            phone="(718) 555-0147"
            email="marco@marcoink.com"
          />
        </section>

        {/* FOOTER */}
        <footer className="bg-black border-t border-neutral-900 py-10 px-8 md:px-14">
          <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="text-white font-bold text-sm tracking-widest uppercase">Marco Miller</p>
              <p className="text-neutral-500 text-xs mt-1" style={{ fontFamily: 'monospace' }}>
                Astoria, Queens, NY
              </p>
            </div>
            <p className="text-neutral-500 text-xs text-center">
              &copy; 2025 Marco Miller. All rights reserved.
            </p>
            <a
              href="https://www.talimstudio.com"
              className="text-neutral-500 text-sm no-underline hover:text-white transition-colors text-center sm:text-right"
            >
              Built by Talim Studio
            </a>
          </div>
        </footer>

      </div>
    </>
  )
}
