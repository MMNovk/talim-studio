'use client'

import type { CSSProperties } from 'react'
import { motion } from 'motion/react'
import ClarteHero       from './ClarteHero'
import ClarteMarquee    from './ClarteMarquee'
import TreatmentGrid    from './TreatmentGrid'
import ClarteManifesto  from './ClarteManifesto'
import { TestimonialSlider } from './ClarteTeam'
import { GalleryScroller }  from './GalleryScroller'
import ClartePhotoBreak from './ClartePhotoBreak'
import ClarteAbout      from './ClarteAbout'
import ClarteBooking    from './ClarteBooking'

// ── Design tokens ─────────────────────────────────────────────────────
const BG     = '#F7F3EE'
const INK    = '#1C1814'
const ACCENT = '#B5623E'
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
const testimonials = [
  { quote: "I've tried every facial in the city. Nothing compares to what Sophie does.", name: 'Margaux T.', location: 'Tribeca' },
  { quote: "My skin has never looked like this. I refer everyone I know.",               name: 'Diana L.',   location: 'West Village' },
  { quote: "Clarté is the only place I trust with my skin. Worth every penny.",          name: 'Priya S.',   location: 'Nolita' },
]

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

const steps = [
  { num: '01', title: 'Consultation', body: "We start by understanding your skin — its history, its needs, and what you're hoping to change." },
  { num: '02', title: 'Treatment',    body: 'Every session is adapted in real time. We adjust as we go based on how your skin responds.' },
  { num: '03', title: 'Aftercare',    body: 'You leave with a simple, specific routine and a follow-up plan tailored to your treatment.' },
]

// ── Sub-components ────────────────────────────────────────────────────
function Label({ children }: { children: string }) {
  return (
    <p style={{ ...DM400, fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: MUTED }}>
      {children}
    </p>
  )
}

/** Each word rises from overflow:hidden slot, staggered */
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

function TypographicStatement({ text }: { text: string }) {
  const wordCount = text.split(' ').length
  const ruleDelay = wordCount * 0.12 + 0.2
  return (
    <section className="px-8 py-40 text-center" style={{ background: BG }}>
      {/* top rule */}
      <motion.div
        style={{ width: 96, height: 1, background: RULE, margin: '0 auto', transformOrigin: 'center' }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
        viewport={{ once: true, margin: '-80px' }}
      />

      <div style={{ margin: '48px 0' }}>
        <WordSlot
          text={text}
          style={{
            ...C300,
            fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
            color: INK,
            letterSpacing: '-0.02em',
            justifyContent: 'center',
          }}
        />
      </div>

      {/* bottom rule */}
      <motion.div
        style={{ width: 96, height: 1, background: RULE, margin: '0 auto', transformOrigin: 'center' }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: ruleDelay, ease: EASE }}
        viewport={{ once: true, margin: '-80px' }}
      />
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────
export default function ClartePage() {
  return (
    <div style={{ background: BG, color: INK }}>

      {/* 1. Hero */}
      <ClarteHero />

      {/* 2. Marquee */}
      <ClarteMarquee />

      {/* 3. Manifesto */}
      <ClarteManifesto />

      {/* 4. Services — 2-col treatment grid */}
      <TreatmentGrid />

      {/* 5. Gallery scroller */}
      <GalleryScroller />

      {/* 6. Meet the Team */}
      <div style={{ backgroundColor: '#F7F3EE' }}>
        <p style={{
          fontFamily: '"DM Sans", sans-serif',
          fontWeight: 400,
          fontSize: '11px',
          textTransform: 'uppercase',
          letterSpacing: '0.25em',
          color: '#8C7B6E',
          padding: '64px 64px 0',
          margin: 0,
        }}>
          MEET THE TEAM
        </p>
        <TestimonialSlider reviews={team} />
      </div>

      {/* 7. Statement 2 */}
      <TypographicStatement text="One client at a time. Always." />

      {/* 7. About / Sophie */}
      <ClarteAbout />

      {/* 8. Testimonials */}
      <section style={{ background: BG }} className="px-8 md:px-16 lg:px-24 py-32">
        <div style={{ maxWidth: 760, margin: '0 auto' }}>

          <motion.div
            style={{ marginBottom: 64 }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <Label>Client Words</Label>
          </motion.div>

          {testimonials.map((t, i) => (
            <div key={t.name} style={{ borderTop: `1px solid ${RULE}`, padding: '40px 0 40px 28px', position: 'relative' }}>
              {/* scaleY bar */}
              <motion.div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 40,
                  bottom: 40,
                  width: 1,
                  background: ACCENT,
                  transformOrigin: 'top center',
                }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 0.5, delay: i * 0.18, ease: EASE }}
                viewport={{ once: true, margin: '-100px' }}
              />
              <motion.blockquote
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.18 + 0.15, ease: EASE }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <p style={{ ...C300I, fontSize: 'clamp(1.2rem, 2.2vw, 1.5rem)', color: INK, lineHeight: 1.55, marginBottom: 20 }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <motion.p
                  style={{ ...DM400, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: MUTED }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.18 + 0.25, ease: EASE }}
                  viewport={{ once: true, margin: '-100px' }}
                >
                  {t.name} · {t.location}
                </motion.p>
              </motion.blockquote>
            </div>
          ))}
          <div style={{ borderTop: `1px solid ${RULE}` }} />

        </div>
      </section>

      {/* 9. What to Expect */}
      <section style={{ background: INK }} className="px-8 md:px-16 lg:px-24 py-32">
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <WordSlot
              text="The Clarté Experience"
              style={{
                ...C300,
                fontSize: 'clamp(2.5rem, 4.5vw, 3.5rem)',
                color: BG,
                justifyContent: 'center',
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.2, ease: EASE }}
                viewport={{ once: true, margin: '-80px' }}
                className="group"
                style={{ cursor: 'default' }}
              >
                {/* elastic numeral pop */}
                <motion.span
                  style={{
                    ...C300,
                    fontSize: 'clamp(3.5rem, 6vw, 5rem)',
                    color: ACCENT,
                    display: 'block',
                    lineHeight: 1,
                    marginBottom: 24,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.55, delay: i * 0.2 + 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                  viewport={{ once: true, margin: '-80px' }}
                >
                  {step.num}
                </motion.span>

                <h3
                  style={{
                    ...C300,
                    fontSize: 28,
                    color: BG,
                    marginBottom: 16,
                    transition: 'transform 0.3s ease',
                  }}
                  className="group-hover:translate-x-1"
                >
                  {step.title}
                </h3>

                {/* terracotta underline on hover */}
                <div style={{
                  height: 1,
                  background: ACCENT,
                  marginBottom: 16,
                  transformOrigin: 'left center',
                  transition: 'transform 0.4s cubic-bezier(0.76,0,0.24,1)',
                }} className="group-hover:scale-x-100 scale-x-0" />

                <p style={{ ...DM300, fontSize: 14, color: MUTED, lineHeight: 1.8 }}>
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. Booking */}
      <section id="booking" style={{ background: BG }} className="px-8 md:px-16 py-32">
        <motion.div
          style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center' }}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <Label>Availability</Label>
          <div style={{ margin: '16px 0 12px' }}>
            <WordSlot
              text="Reserve Your Visit"
              style={{
                ...C300,
                fontSize: 'clamp(2.5rem, 4.5vw, 3.5rem)',
                color: INK,
                justifyContent: 'center',
              }}
            />
          </div>
          <p style={{ ...DM300, fontSize: 11, color: MUTED, letterSpacing: '0.05em', marginBottom: 40 }}>
            Scheduling powered by Calendly — live booking available on your site.
          </p>
          <ClarteBooking />
        </motion.div>
      </section>

      {/* 11. Find Us */}
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
            {/* letter-by-letter "Clarté" */}
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
                    { day: 'Tue – Fri', hours: '10am – 7pm', closed: false },
                    { day: 'Saturday',  hours: '9am – 5pm',  closed: false },
                    { day: 'Sunday',    hours: '11am – 4pm', closed: false },
                    { day: 'Monday',    hours: 'Closed',     closed: true  },
                  ].map(({ day, hours, closed }) => (
                    <div key={day} style={{ display: 'flex', gap: 32 }}>
                      <span style={{ ...DM300, fontSize: 15, color: closed ? MUTED : INK, width: 88 }}>{day}</span>
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

      {/* 12. Footer */}
      <footer
        style={{ background: INK }}
        className="px-8 md:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <span style={{ ...C300I, fontSize: 18, color: 'rgba(247,243,238,0.75)' }}>Clarté</span>
        <span style={{ ...DM300, fontSize: 11, color: MUTED, textAlign: 'center', letterSpacing: '0.05em' }}>
          68 Thomas St, Tribeca, NY 10013
        </span>
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

    </div>
  )
}
