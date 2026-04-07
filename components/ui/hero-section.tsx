'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'

const InfoIcon = ({ type }: { type: 'website' | 'phone' | 'address' }) => {
  const icons = {
    website: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    phone: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    address: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  }
  return <span className="inline-flex">{icons[type]}</span>
}

interface HeroSectionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  logo?: { url: string; alt: string; text?: string }
  slogan?: string
  title: React.ReactNode
  subtitle: string
  callToAction: { text: string; href: string }
  backgroundImage: string
  contactInfo: { website: string; phone: string; address: string }
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    { className, logo, slogan, title, subtitle, callToAction, backgroundImage, contactInfo, ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn('flex flex-col md:flex-row min-h-screen', className)}
        {...props}
      >
        {/* LEFT — white content panel */}
        <div className="flex flex-col bg-white w-full md:w-1/2 lg:w-3/5 px-8 md:px-14 lg:px-20">

          {/* Slogan / logo at top */}
          <div className="pt-10 md:pt-14 shrink-0">
            {logo ? (
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.url} alt={logo.alt} className="w-9 h-9 object-contain" />
                <div>
                  {logo.text && (
                    <span className="font-dm-sans font-bold text-ink text-sm tracking-wide">
                      {logo.text}
                    </span>
                  )}
                  {slogan && (
                    <p className="font-mono text-ink/40 text-xs tracking-[0.25em] uppercase">
                      {slogan}
                    </p>
                  )}
                </div>
              </div>
            ) : (
              slogan && (
                <p className="font-mono text-ink/40 text-xs tracking-[0.25em] uppercase">
                  {slogan}
                </p>
              )
            )}
          </div>

          {/* Title + divider + subtitle + CTAs — vertically centred */}
          <div className="flex flex-col gap-6 flex-1 justify-center py-12">
            <h1
              className="font-dm-sans font-black leading-[0.88] tracking-tight text-ink"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}
            >
              {title}
            </h1>
            <hr className="border-ink/10" />
            <p className="font-dm-sans text-ink/55 text-lg leading-relaxed max-w-sm">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={callToAction.href}
                className="px-8 py-3 bg-black text-white font-dm-sans font-bold text-xs tracking-widest no-underline hover:bg-ink/80 transition-colors"
              >
                {callToAction.text}
              </a>
              <a
                href="#book"
                className="px-8 py-3 border border-ink/25 text-ink font-dm-sans font-bold text-xs tracking-widest no-underline hover:bg-ink/5 transition-colors"
              >
                BOOK NOW
              </a>
            </div>
          </div>

          {/* Contact info at bottom */}
          <div className="flex flex-wrap gap-6 py-6 md:pb-10 border-t border-ink/10 shrink-0">
            <div className="flex items-center gap-2 text-ink/45 text-xs font-mono">
              <InfoIcon type="website" />
              {contactInfo.website}
            </div>
            <div className="flex items-center gap-2 text-ink/45 text-xs font-mono">
              <InfoIcon type="phone" />
              {contactInfo.phone}
            </div>
            <div className="flex items-center gap-2 text-ink/45 text-xs font-mono">
              <InfoIcon type="address" />
              {contactInfo.address}
            </div>
          </div>
        </div>

        {/* RIGHT — CSS background image with diagonal clip-path reveal */}
        <motion.div
          initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
          animate={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
          transition={{ duration: 1.2, ease: 'circOut' }}
          style={{ backgroundImage: `url(${backgroundImage})` }}
          className="w-full min-h-[300px] bg-cover bg-center md:w-1/2 md:min-h-full lg:w-2/5"
        />
      </div>
    )
  },
)

HeroSection.displayName = 'HeroSection'
export { HeroSection }
