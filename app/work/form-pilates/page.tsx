'use client'

import type { CSSProperties } from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import ClarteHero            from './ClarteHero'
import { ManifestoSection }  from './ClarteManifesto'
import TreatmentGrid         from './TreatmentGrid'
import OurWorkScroll         from './OurWorkScroll'
import StudioGallery         from './StudioGallery'
import { TestimonialSlider } from './ClarteTeam'
import { InteractiveCalendar } from './VisualizeBooking'

// ── Design tokens ─────────────────────────────────────────────────────
const BG     = '#F7F3EE'
const INK    = '#1C1814'
const MUTED  = '#8C7B6E'
const RULE   = '#D4C9BC'
const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]
const SLOT:  [number, number, number, number] = [0.76, 0, 0.24, 1]

// ── Type-safe style objects ───────────────────────────────────────────
const C300:  CSSProperties = { fontFamily: 'var(--font-cormorant), Georgia, serif', fontWeight: 300 }
const C300I: CSSProperties = { fontFamily: 'var(--font-cormorant), Georgia, serif', fontWeight: 300, fontStyle: 'italic' }
const DM300: CSSProperties = { fontFamily: '"DM Sans", sans-serif', fontWeight: 300 }
const DM400: CSSProperties = { fontFamily: '"DM Sans", sans-serif', fontWeight: 400 }

// ── Data ──────────────────────────────────────────────────────────────
const team = [
  {
    id: 1,
    name: 'Sophie Marchand',
    affiliation: 'Founder & Lead Esthetician',
    quote: 'I started Clarté because I believed every client deserves a practitioner who actually listens. We adapt every treatment in the room. Nothing is decided in advance.',
    joined: 'Founded in 2024',
    specialization: 'Bespoke Facials · HydraFacial · Client Experience',
    imageSrc: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=987&auto=format&fit=crop',
    thumbnailSrc: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&fit=crop',
  },
  {
    id: 2,
    name: 'Ines Vidal',
    affiliation: 'Senior Esthetician',
    quote: 'Microneedling and chemical peels are my specialty. I approach every treatment with precision. The results speak for themselves.',
    joined: 'Joined in 2025',
    specialization: 'Microneedling · Chemical Peels · Skin Resurfacing',
    imageSrc: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=600&fit=crop&q=80',
    thumbnailSrc: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Camille Tran',
    affiliation: 'Holistic Treatment Specialist',
    quote: "Gua sha is more than technique. It's about understanding how the body holds tension and releasing it with intention. Every session is a ritual.",
    joined: 'Joined in 2026',
    specialization: 'Gua Sha · LED Therapy · Lymphatic Massage',
    imageSrc: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=400&h=600&fit=crop&q=80',
    thumbnailSrc: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=200&fit=crop&q=80',
  },
]

// ── Sub-components ────────────────────────────────────────────────────
function Label({ children }: { children: string }) {
  return (
    <p style={{ ...DM400, fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: MUTED }}>
      {children}
    </p>
  )
}

function WordSlot({ text, style }: { text: string; style?: CSSProperties }) {
  const words = text.split(' ')
  return (
    <span style={{ display: 'flex', flexWrap: 'wrap', rowGap: '0.15em', columnGap: '0.28em', ...style }}>
      {words.map((word, i) => (
        <span key={i} style={{ overflow: 'hidden', display: 'inline-block', lineHeight: 1.1 }}>
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '110%' }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.75, delay: i * 0.12, ease: SLOT }}
            viewport={{ once: true, margin: '-80px' }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

// ── Page ──────────────────────────────────────────────────────────────
export default function ClartePage() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{ background: BG, color: INK }}>

      {/* Fixed minimal navbar */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "20px 40px",
        background: scrolled ? "rgba(245, 240, 235, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background 0.3s ease, backdrop-filter 0.3s ease",
      }}>
        <span style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "1.4rem", letterSpacing: "0.08em", color: scrolled ? "#1C1814" : "#F7F3EE" }}>Clarté</span>
        <a href="#booking" onClick={(e) => { e.preventDefault(); document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }) }} style={{ fontFamily: "DM Sans, sans-serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: scrolled ? "#1C1814" : "#F7F3EE", textDecoration: "none" }}>Book a Visit</a>
      </nav>

      {/* 1. Hero — sticky, sits behind cream card */}
      <div style={{ position: 'sticky', top: 0, height: '100vh', zIndex: 1 }}>
        <ClarteHero />
      </div>

      {/* Cream card — slides over the sticky hero */}
      <div style={{ position: 'relative', zIndex: 2, backgroundColor: '#F7F3EE' }}>
        {/* Spacer: full viewport so hero is visible before card slides up */}

      {/* 2. Manifesto */}
      <div style={{ paddingTop: "80px" }}>
        <ManifestoSection />
      </div>

      {/* 3. Services — 2-col treatment grid */}
      <TreatmentGrid />

      {/* 4. Our Work — sticky scroll gallery */}
      <div id="our-work"><OurWorkScroll /></div>

      {/* 6. The Studio carousel */}
      <div id="about"><StudioGallery /></div>

      {/* 7. Meet the Team */}
      <div id="meet-the-team" style={{ backgroundColor: '#F7F3EE', paddingTop: '80px' }}>
        <p style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontWeight: 300,
          fontSize: 'clamp(1.6rem, 2.8vw, 2.8rem)',
          letterSpacing: '0.12em',
          color: '#C8BEB4',
          textTransform: 'uppercase',
          textAlign: 'center',
          width: '100%',
          display: 'block',
          margin: '0 0 24px',
        }}>
          MEET THE TEAM
        </p>
        <TestimonialSlider reviews={team} />
      </div>

      {/* 8. Booking */}
      <section id="booking" style={{ backgroundColor: '#F7F3EE', padding: '80px 64px' }}>
        <p style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontWeight: 300,
          fontSize: 'clamp(1.6rem, 2.8vw, 2.8rem)',
          letterSpacing: '0.12em',
          color: '#C8BEB4',
          textTransform: 'uppercase',
          textAlign: 'center',
          width: '100%',
          display: 'block',
          marginBottom: '48px',
        }}>
          BOOK A VISIT
        </p>
        <InteractiveCalendar />
      </section>

      {/* 9. Find Us */}
      <section id="find-us" style={{ background: BG }}>
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Info */}
          <motion.div
            style={{ padding: 'clamp(48px, 7vw, 96px)' }}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 style={{ ...C300I, fontSize: 'clamp(3rem, 5vw, 4rem)', color: INK, marginBottom: 56 }}>
              {'Clarté'.split('').map((char, i) => (
                <motion.span
                  key={i}
                  style={{ display: 'inline-block' }}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.07, ease: SLOT }}
                  viewport={{ once: true, margin: '-80px' }}
                >
                  {char}
                </motion.span>
              ))}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
              <div>
                <p style={{ ...DM400, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: MUTED, marginBottom: 10 }}>
                  Address
                </p>
                <p style={{ ...DM300, fontSize: 15, color: INK, lineHeight: 1.7 }}>
                  68 Thomas St<br />Tribeca, NY 10013
                </p>
              </div>

              <div>
                <p style={{ ...DM400, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: MUTED, marginBottom: 12 }}>
                  Hours
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {[
                    { day: 'Tue – Fri', hours: '10am – 7pm' },
                    { day: 'Saturday',  hours: '9am – 5pm'  },
                    { day: 'Sunday',    hours: '11am – 4pm' },
                    { day: 'Monday',    hours: 'Closed'     },
                  ].map(({ day, hours }) => (
                    <div key={day} style={{ display: 'flex', gap: 32 }}>
                      <span style={{ ...DM300, fontSize: 15, color: INK, width: 88 }}>{day}</span>
                      <span style={{ ...DM300, fontSize: 15, color: MUTED }}>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p style={{ ...DM400, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: MUTED, marginBottom: 12 }}>
                  Contact
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <a
                    href="mailto:hello@clartetribeca.com"
                    className="hover:text-[#B5623E] transition-colors duration-200"
                    style={{ ...DM300, fontSize: 15, color: MUTED, textDecoration: 'none' }}
                  >
                    hello@clartetribeca.com
                  </a>
                  <a
                    href="tel:+12125550847"
                    className="hover:text-[#B5623E] transition-colors duration-200"
                    style={{ ...DM300, fontSize: 15, color: MUTED, textDecoration: 'none' }}
                  >
                    (212) 555-0847
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <div
            className="h-[50vh] lg:h-auto overflow-hidden"
            style={{ minHeight: 400, borderLeft: `1px solid ${RULE}` }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7!2d-74.00752!3d40.71833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259e9a45ed419%3A0xd0bf6babb48e1ed6!2s68%20Thomas%20St%2C%20New%20York%2C%20NY%2010013!5e0!3m2!1sen!2sus!4v1713500000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clarté Studio location"
            />
          </div>

        </div>
      </section>

      {/* Footer separator */}
      <div style={{ height: 1, background: '#2C2420' }} />

      {/* Footer */}
      <footer
        style={{ background: INK }}
        className="px-8 md:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <span style={{ ...C300I, fontSize: 18, color: 'rgba(247,243,238,0.75)' }}>Clarté</span>
        <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {[
            { label: 'Treatments',    href: '#treatments'  },
            { label: 'Our Work',      href: '#our-work'    },
            { label: 'The Studio',    href: '#about'       },
            { label: 'Meet the Team', href: '#meet-the-team' },
            { label: 'Book a Visit',  href: '#booking'     },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => { e.preventDefault(); document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' }) }}
              style={{ ...DM300, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: MUTED, textDecoration: 'none' }}
              className="hover:text-[#F7F3EE] transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="https://talimstudio.com"
          style={{ ...DM300, fontSize: 11, color: MUTED, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}
          className="hover:text-[#8C7B6E]"
        >
          Built by Talim Studio
          <motion.span
            style={{ display: 'inline-block' }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            →
          </motion.span>
        </a>
      </footer>

      </div>{/* end cream card */}

    </div>
  )
}
