'use client'

import type { CSSProperties } from 'react'
import { motion } from 'motion/react'
import ClarteHero from './ClarteHero'
import ClarteMarquee from './ClarteMarquee'
import ClarteBooking from './ClarteBooking'

// ── Design tokens ─────────────────────────────────────────────────────
const BG     = '#F7F3EE'
const INK    = '#1C1814'
const ACCENT = '#B5623E'
const MUTED  = '#8C7B6E'
const RULE   = '#D4C9BC'
const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

// ── Type-safe style objects ───────────────────────────────────────────
const C300:  CSSProperties = { fontFamily: 'var(--font-cormorant), Georgia, serif', fontWeight: 300 }
const C300I: CSSProperties = { fontFamily: 'var(--font-cormorant), Georgia, serif', fontWeight: 300, fontStyle: 'italic' }
const DM300: CSSProperties = { fontFamily: '"DM Sans", sans-serif', fontWeight: 300 }
const DM400: CSSProperties = { fontFamily: '"DM Sans", sans-serif', fontWeight: 400 }

// ── Shared animation props ────────────────────────────────────────────
const appear = (delay = 0) => ({
  initial:     { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition:  { duration: 0.9, delay, ease: EASE },
  viewport:    { once: true, margin: '-100px' as const },
})

// ── Data ──────────────────────────────────────────────────────────────
const services = [
  { name: 'HydraFacial',    price: '$185', duration: '60 min' },
  { name: 'LED Therapy',    price: '$95',  duration: '45 min' },
  { name: 'Microneedling',  price: '$275', duration: '75 min' },
  { name: 'Gua Sha Ritual', price: '$120', duration: '60 min' },
  { name: 'Chemical Peel',  price: '$150', duration: '45 min' },
  { name: 'Bespoke Facial', price: '$220', duration: '90 min' },
]

const testimonials = [
  { quote: "I've tried every facial in the city. Nothing compares to what Sophie does.", name: 'Margaux T.', location: 'Tribeca' },
  { quote: "My skin has never looked like this. I refer everyone I know.",               name: 'Diana L.',   location: 'West Village' },
  { quote: "Clarté is the only place I trust with my skin. Worth every penny.",          name: 'Priya S.',   location: 'Nolita' },
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

function HRule() {
  return <div style={{ width: 96, height: 1, background: RULE, margin: '0 auto' }} />
}

function TypographicStatement({ text }: { text: string }) {
  return (
    <motion.section className="px-8 py-40 text-center" style={{ background: BG }} {...appear()}>
      <HRule />
      <p style={{
        ...C300,
        fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
        color: INK,
        letterSpacing: '-0.02em',
        lineHeight: 1.1,
        margin: '48px 0',
      }}>
        {text}
      </p>
      <HRule />
    </motion.section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────
export default function ClartePage() {
  return (
    <div style={{ background: BG, color: INK }}>

      {/* ── 1. Hero ────────────────────────────────────────────────── */}
      <ClarteHero />

      {/* ── 2. Marquee ─────────────────────────────────────────────── */}
      <ClarteMarquee />

      {/* ── 3. Statement ───────────────────────────────────────────── */}
      <TypographicStatement text="Skin that speaks for itself." />

      {/* ── 4. Services ────────────────────────────────────────────── */}
      <section style={{ background: BG }} className="px-8 md:px-16 lg:px-24 py-32">
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>

          <motion.div style={{ marginBottom: 64 }} {...appear()}>
            <Label>Treatments</Label>
            <h2 style={{ ...C300, fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: INK, marginTop: 16 }}>
              Our Services
            </h2>
          </motion.div>

          {services.map((s, i) => (
            <motion.div
              key={s.name}
              className="group flex items-center justify-between py-8"
              style={{ borderTop: `1px solid ${RULE}` }}
              {...appear(i * 0.06)}
            >
              <h3
                className="transition-transform duration-300 ease-out group-hover:translate-x-2"
                style={{ ...C300, fontSize: 28, color: INK, lineHeight: 1 }}
              >
                {s.name}
              </h3>
              <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 24 }}>
                <span style={{ ...DM300, fontSize: 18, color: ACCENT, display: 'block' }}>{s.price}</span>
                <span style={{ ...DM400, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED, display: 'block', marginTop: 4 }}>
                  {s.duration}
                </span>
              </div>
            </motion.div>
          ))}
          <div style={{ borderTop: `1px solid ${RULE}` }} />

        </div>
      </section>

      {/* ── 5. Statement 2 ─────────────────────────────────────────── */}
      <TypographicStatement text="One client at a time. Always." />

      {/* ── 6. About / Sophie ──────────────────────────────────────── */}
      <section id="about" style={{ background: BG }}>
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Portrait */}
          <motion.div
            className="relative overflow-hidden"
            style={{ minHeight: '60vh' }}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: EASE }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <img
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1470&auto=format&fit=crop"
              alt="Sophie Marchand, founder of Clarté"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="flex flex-col justify-center"
            style={{ padding: 'clamp(48px, 7vw, 96px)' }}
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.15, ease: EASE }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <Label>Founder</Label>
            <h2 style={{ ...C300, fontSize: 'clamp(3rem, 5vw, 4rem)', color: INK, lineHeight: 1.05, marginTop: 16, marginBottom: 32 }}>
              Sophie<br />Marchand
            </h2>
            <p style={{ ...DM300, fontSize: 16, lineHeight: 1.85, color: MUTED, maxWidth: 400 }}>
              I spent eight years training in Paris and working across some of New York&apos;s most
              sought-after skin clinics before opening Clarté in 2021. I started this studio
              because I believed skincare should be slow, intentional, and built around one
              person at a time. We see a limited number of clients each week by design. Every
              treatment is adapted in the room, not decided in advance.
            </p>

            <div style={{ marginTop: 48, paddingTop: 32, borderTop: `1px solid ${RULE}`, display: 'flex', gap: 48 }}>
              <div>
                <span style={{ ...DM400, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: MUTED, display: 'block', marginBottom: 8 }}>
                  Established
                </span>
                <span style={{ ...C300, fontSize: 24, color: ACCENT }}>2021</span>
              </div>
              <div>
                <span style={{ ...DM400, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: MUTED, display: 'block', marginBottom: 8 }}>
                  Location
                </span>
                <span style={{ ...C300, fontSize: 24, color: INK }}>Tribeca, NYC</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── 7. Testimonials ────────────────────────────────────────── */}
      <section style={{ background: BG }} className="px-8 md:px-16 lg:px-24 py-32">
        <div style={{ maxWidth: 760, margin: '0 auto' }}>

          <motion.div style={{ marginBottom: 64 }} {...appear()}>
            <Label>Client Words</Label>
          </motion.div>

          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              style={{ borderTop: `1px solid ${RULE}`, padding: '40px 0' }}
              {...appear(i * 0.15)}
            >
              <blockquote style={{ paddingLeft: 28, borderLeft: `1px solid ${ACCENT}` }}>
                <p style={{ ...C300I, fontSize: 'clamp(1.2rem, 2.2vw, 1.5rem)', color: INK, lineHeight: 1.55, marginBottom: 20 }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p style={{ ...DM400, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: MUTED }}>
                  {t.name} · {t.location}
                </p>
              </blockquote>
            </motion.div>
          ))}
          <div style={{ borderTop: `1px solid ${RULE}` }} />

        </div>
      </section>

      {/* ── 8. What to Expect ──────────────────────────────────────── */}
      <section style={{ background: INK }} className="px-8 md:px-16 lg:px-24 py-32">
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>

          <motion.h2
            style={{ ...C300, fontSize: 'clamp(2.5rem, 4.5vw, 3.5rem)', color: BG, textAlign: 'center', marginBottom: 80 }}
            {...appear()}
          >
            The Clarté Experience
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {steps.map((step, i) => (
              <motion.div key={step.num} {...appear(i * 0.15)}>
                <span style={{ ...C300, fontSize: 'clamp(3.5rem, 6vw, 5rem)', color: ACCENT, display: 'block', lineHeight: 1, marginBottom: 24 }}>
                  {step.num}
                </span>
                <h3 style={{ ...C300, fontSize: 28, color: BG, marginBottom: 16 }}>
                  {step.title}
                </h3>
                <p style={{ ...DM300, fontSize: 14, color: MUTED, lineHeight: 1.8 }}>
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 9. Booking ─────────────────────────────────────────────── */}
      <section id="booking" style={{ background: BG }} className="px-8 md:px-16 py-32">
        <motion.div style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center' }} {...appear()}>

          <Label>Availability</Label>
          <h2 style={{ ...C300, fontSize: 'clamp(2.5rem, 4.5vw, 3.5rem)', color: INK, marginTop: 16, marginBottom: 12 }}>
            Reserve Your Visit
          </h2>
          <p style={{ ...DM300, fontSize: 11, color: MUTED, letterSpacing: '0.05em', marginBottom: 40 }}>
            Scheduling powered by Calendly — live booking available on your site.
          </p>
          <ClarteBooking />

        </motion.div>
      </section>

      {/* ── 10. Find Us ────────────────────────────────────────────── */}
      <section id="find-us" style={{ background: BG }}>
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Info */}
          <motion.div
            style={{ padding: 'clamp(48px, 7vw, 96px)' }}
            {...appear()}
          >
            <h2 style={{ ...C300I, fontSize: 'clamp(3rem, 5vw, 4rem)', color: INK, marginBottom: 56 }}>
              Clarté
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

      {/* ── 11. Footer ─────────────────────────────────────────────── */}
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
          style={{ ...DM300, fontSize: 11, color: MUTED, textDecoration: 'none' }}
        >
          Built by Talim Studio →
        </a>
      </footer>

    </div>
  )
}
