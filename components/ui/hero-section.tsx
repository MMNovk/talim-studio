'use client'

import React from 'react'
import Image from 'next/image'
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
  ({ className, logo, slogan, title, subtitle, callToAction, backgroundImage, contactInfo, ...props }, ref) => {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
    }
    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
    }

    return (
      <div
        ref={ref}
        className={cn('relative min-h-screen flex flex-col overflow-hidden', className)}
        {...props}
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Vela Nails"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* Main content */}
        <motion.div
          className="relative z-10 flex flex-col flex-1 px-8 md:px-14 lg:px-20 pt-20 pb-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Slogan / logo */}
          <div className="mb-auto">
            {logo ? (
              <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                <Image src={logo.url} alt={logo.alt} width={36} height={36} className="object-contain" />
                <div>
                  {logo.text && <span className="font-bold text-white text-sm tracking-wide">{logo.text}</span>}
                  {slogan && <p className="text-white/50 text-xs tracking-widest uppercase">{slogan}</p>}
                </div>
              </motion.div>
            ) : slogan && (
              <motion.p
                variants={itemVariants}
                className="text-white/50 text-xs tracking-[0.25em] uppercase mb-10"
              >
                {slogan}
              </motion.p>
            )}
          </div>

          {/* Title + subtitle + CTA */}
          <div className="flex flex-col gap-7 max-w-4xl">
            <motion.h1
              variants={itemVariants}
              className="text-white font-black leading-[0.88] tracking-tight"
              style={{ fontSize: 'clamp(4rem, 10vw, 11rem)' }}
            >
              {title}
            </motion.h1>

            <motion.p variants={itemVariants} className="text-white/65 text-lg max-w-md leading-relaxed">
              {subtitle}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a
                href={callToAction.href}
                className="px-8 py-3 bg-white text-black font-bold text-xs tracking-widest no-underline hover:bg-white/90 transition-colors"
              >
                {callToAction.text}
              </a>
              <a
                href="#book"
                className="px-8 py-3 border border-white/60 text-white font-bold text-xs tracking-widest no-underline hover:bg-white/10 transition-colors"
              >
                BOOK NOW
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact bar */}
        <div className="relative z-10 border-t border-white/15 px-8 md:px-14 lg:px-20 py-4 flex flex-wrap gap-6">
          <div className="flex items-center gap-2 text-white/55 text-xs">
            <InfoIcon type="website" />
            {contactInfo.website}
          </div>
          <div className="flex items-center gap-2 text-white/55 text-xs">
            <InfoIcon type="phone" />
            {contactInfo.phone}
          </div>
          <div className="flex items-center gap-2 text-white/55 text-xs">
            <InfoIcon type="address" />
            {contactInfo.address}
          </div>
        </div>
      </div>
    )
  }
)
HeroSection.displayName = 'HeroSection'
export { HeroSection }
