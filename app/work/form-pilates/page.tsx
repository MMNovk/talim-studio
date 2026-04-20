'use client'

import { motion } from 'motion/react'
import ClarteHero from './ClarteHero'
import ClarteMarquee from './ClarteMarquee'
import ClarteBooking from './ClarteBooking'

const serif     = { fontFamily: 'var(--font-playfair), Georgia, serif' }
const cormorant = { fontFamily: 'var(--font-cormorant), Georgia, serif', fontWeight: 300 }

const services = [
  { name: 'HydraFacial',    price: '$185', duration: '60 min', description: 'Full cleanse, extraction, and hydration in one session.' },
  { name: 'LED Therapy',    price: '$95',  duration: '45 min', description: 'Light wavelengths that calm, repair, and restore.' },
  { name: 'Microneedling',  price: '$275', duration: '75 min', description: 'Controlled micro-channels for collagen stimulation.' },
  { name: 'Gua Sha Ritual', price: '$120', duration: '60 min', description: 'Ancient lymphatic technique adapted for modern skin.' },
  { name: 'Chemical Peel',  price: '$150', duration: '45 min', description: 'Precision exfoliation revealing fresh, even skin beneath.' },
  { name: 'Bespoke Facial', price: '$220', duration: '90 min', description: 'A fully custom treatment built around your skin that day.' },
]

const testimonials = [
  { quote: "I've tried every facial in the city. Nothing compares to what Sophie does.", name: 'Margaux T.', location: 'Tribeca' },
  { quote: "My skin has never looked like this. I refer everyone I know.",               name: 'Diana L.',   location: 'West Village' },
  { quote: "Clarté is the only place I trust with my skin. Worth every penny.",          name: 'Priya S.',   location: 'Nolita' },
]

const steps = [
  { num: '01', title: 'Consultation', description: "We start by understanding your skin — its history, its needs, and what you're hoping to change." },
  { num: '02', title: 'Treatment',    description: 'Every session is adapted in real time. We adjust as we go based on how your skin responds.' },
  { num: '03', title: 'Aftercare',    description: 'You leave with a simple, specific routine and a follow-up plan tailored to your treatment.' },
]

function TypographicStatement({ text }: { text: string }) {
  return (
    <motion.section
      className="bg-cream px-8 py-24 md:py-32 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <p
        className="text-clay-dark italic leading-tight"
        style={{ ...cormorant, fontSize: 'clamp(3rem, 8vw, 7rem)' }}
      >
        {text}
      </p>
    </motion.section>
  )
}

export default function ClartePage() {
  return (
    <div className="bg-cream text-clay-dark">

      {/* ── 1. Hero ──────────────────────────────────────────────────── */}
      <ClarteHero />

      {/* ── 2. Marquee ───────────────────────────────────────────────── */}
      <ClarteMarquee />

      {/* ── 3. Statement ─────────────────────────────────────────────── */}
      <TypographicStatement text="Skin that speaks for itself." />

      {/* ── 4. Services ──────────────────────────────────────────────── */}
      <section id="services" className="bg-cream px-8 md:px-16 py-28">
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="text-[10px] tracking-[0.3em] uppercase text-clay-light mb-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Treatments
          </motion.p>
          <motion.h2
            className="font-playfair text-4xl md:text-5xl text-clay-dark mb-16"
            style={serif}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-clay-border">
            {services.map((s, i) => (
              <motion.div
                key={s.name}
                className="bg-cream p-8 md:p-10 flex flex-col gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-playfair text-2xl text-clay-dark leading-snug" style={serif}>
                    {s.name}
                  </h3>
                  <div className="text-right shrink-0">
                    <span className="block text-terracotta font-medium text-lg">{s.price}</span>
                    <span className="block text-[11px] text-clay-light tracking-wider uppercase mt-0.5">{s.duration}</span>
                  </div>
                </div>
                <p className="text-clay-mid text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Editorial photo break ─────────────────────────────────── */}
      <section style={{ height: '100vh' }} className="overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1800&q=80"
          alt=""
          className="w-full h-full object-cover block"
        />
      </section>

      {/* ── 5. Statement 2 ───────────────────────────────────────────── */}
      <TypographicStatement text="One client at a time. Always." />

      {/* ── 6. About ─────────────────────────────────────────────────── */}
      <section id="about" className="bg-warm-beige">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">

          {/* Portrait — slides in from left */}
          <motion.div
            className="relative h-[55vh] lg:h-auto overflow-hidden"
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1470&auto=format&fit=crop"
              alt="Sophie Marchand, founder of Clarté"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </motion.div>

          {/* Text — fades in from right */}
          <motion.div
            className="px-8 md:px-14 py-20 md:py-28 flex flex-col justify-center"
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] tracking-[0.3em] uppercase text-clay-light mb-4">Founder</p>
            <h2 className="font-playfair text-4xl md:text-5xl italic text-clay-dark mb-8 leading-snug" style={serif}>
              Sophie<br />Marchand
            </h2>
            <p className="text-clay-mid text-base md:text-lg leading-[1.85] max-w-md">
              I spent eight years training in Paris and working across some of New York&apos;s most
              sought-after skin clinics before opening Clarté in 2021. I started this studio
              because I believed skincare should be slow, intentional, and built around one
              person at a time. We see a limited number of clients each week by design. Every
              treatment is adapted in the room, not decided in advance.
            </p>

            <div className="flex gap-12 mt-14 pt-10 border-t border-clay-border">
              <div>
                <span className="block font-playfair text-3xl text-clay-dark leading-none" style={serif}>EST.</span>
                <span className="block font-playfair text-3xl text-terracotta" style={serif}>2021</span>
              </div>
              <div className="w-px bg-clay-border" />
              <div className="flex flex-col justify-center">
                <span className="block text-[10px] tracking-[0.2em] uppercase text-clay-light mb-1">Location</span>
                <span className="font-playfair text-xl text-clay-dark" style={serif}>Tribeca, NYC</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 7. Testimonials ──────────────────────────────────────────── */}
      <section className="bg-cream px-8 md:px-16 py-24 md:py-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="border-t border-clay-border pt-8">
                <p
                  className="text-clay-dark italic leading-relaxed mb-6"
                  style={{ ...cormorant, fontSize: 'clamp(1.05rem, 1.8vw, 1.3rem)' }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-clay-light text-[10px] tracking-[0.25em] uppercase">
                  {t.name} &middot; {t.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 8. What to Expect ────────────────────────────────────────── */}
      <section className="bg-[#1a0f0b] px-8 md:px-16 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="font-playfair text-4xl md:text-5xl text-white text-center mb-20"
            style={serif}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            The Clarté Experience
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <span
                  className="block mb-5 text-terracotta leading-none"
                  style={{ ...cormorant, fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                >
                  {step.num}
                </span>
                <h3 className="font-playfair text-xl text-white mb-3" style={serif}>
                  {step.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Booking ───────────────────────────────────────────────── */}
      <section id="booking" className="bg-cream px-8 md:px-16 py-28">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <p className="text-[10px] tracking-[0.3em] uppercase text-clay-light mb-4">Availability</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-clay-dark mb-3" style={serif}>
            Reserve Your Visit
          </h2>
          <p className="text-clay-light text-xs tracking-wider mb-12">
            Scheduling powered by Calendly — live booking available on your site.
          </p>
          <ClarteBooking />
        </motion.div>
      </section>

      {/* ── 10. Find Us ──────────────────────────────────────────────── */}
      <section id="find-us" className="bg-warm-beige">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">

          {/* Info — slides up */}
          <motion.div
            className="px-8 md:px-14 py-20 md:py-28"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] tracking-[0.3em] uppercase text-clay-light mb-4">Find Us</p>
            <h2 className="font-playfair text-4xl md:text-5xl text-clay-dark mb-14" style={serif}>
              Tribeca Studio
            </h2>

            <div className="flex flex-col gap-10">
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase text-clay-light mb-2">Address</p>
                <p className="text-clay-dark text-base leading-relaxed">
                  68 Thomas St<br />Tribeca, NY 10013
                </p>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase text-clay-light mb-3">Hours</p>
                <div className="text-sm space-y-1.5 leading-relaxed">
                  <div className="flex gap-6">
                    <span className="text-clay-dark w-20">Tue – Fri</span>
                    <span className="text-clay-mid">10am – 7pm</span>
                  </div>
                  <div className="flex gap-6">
                    <span className="text-clay-dark w-20">Saturday</span>
                    <span className="text-clay-mid">9am – 5pm</span>
                  </div>
                  <div className="flex gap-6">
                    <span className="text-clay-dark w-20">Sunday</span>
                    <span className="text-clay-mid">11am – 4pm</span>
                  </div>
                  <div className="flex gap-6">
                    <span className="text-clay-light w-20">Monday</span>
                    <span className="text-clay-light">Closed</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase text-clay-light mb-3">Contact</p>
                <div className="text-sm space-y-1.5">
                  <a href="mailto:hello@clartetribeca.com" className="block text-clay-mid hover:text-terracotta transition-colors">
                    hello@clartetribeca.com
                  </a>
                  <a href="tel:+12125550847" className="block text-clay-mid hover:text-terracotta transition-colors">
                    (212) 555-0847
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <div className="h-[50vh] lg:h-auto overflow-hidden" style={{ minHeight: '400px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7!2d-74.00752!3d40.71833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259e9a45ed419%3A0xd0bf6babb48e1ed6!2s68%20Thomas%20St%2C%20New%20York%2C%20NY%2010013!5e0!3m2!1sen!2sus!4v1713500000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clarté Studio location"
            />
          </div>
        </div>
      </section>

      {/* ── 11. Footer ───────────────────────────────────────────────── */}
      <footer className="bg-[#1a0f0b] px-8 md:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-playfair text-lg italic text-white/80" style={serif}>Clarté</span>
        <span className="text-white/30 text-xs tracking-wider text-center">
          68 Thomas St, Tribeca, NY 10013
        </span>
        <a
          href="https://talimstudio.com"
          className="text-white/25 text-xs hover:text-white/50 transition-colors"
        >
          Built by Talim Studio →
        </a>
      </footer>

    </div>
  )
}
