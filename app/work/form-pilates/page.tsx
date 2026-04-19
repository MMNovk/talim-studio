import LuminaInteractiveList from '@/components/ui/lumina-interactive-list'
import ClarteBooking from './ClarteBooking'

export const metadata = {
  title: 'Clarté — Luxury Facial Studio, Tribeca NYC',
  description: 'Precision skincare in Tribeca. Appointments by design, results by intention.',
}

const slides = [
  { title: 'HydraFacial', description: 'Deep cleanse, extract, and hydrate in one transformative session.', media: 'https://assets.codepen.io/7558/orange-portrait-001.jpg' },
  { title: 'LED Therapy', description: 'Wavelengths of light working beneath the surface to restore and renew.', media: 'https://assets.codepen.io/7558/orange-portrait-002.jpg' },
  { title: 'Microneedling', description: "Precision micro-channels that awaken your skin's natural repair.", media: 'https://assets.codepen.io/7558/orange-portrait-003.jpg' },
  { title: 'Gua Sha Ritual', description: 'An ancient practice, refined for the modern complexion.', media: 'https://assets.codepen.io/7558/orange-portrait-004.jpg' },
  { title: 'Chemical Peel', description: 'Controlled renewal that reveals the skin you were meant to have.', media: 'https://assets.codepen.io/7558/orange-portrait-005.jpg' },
  { title: 'Bespoke Facial', description: 'Formulated entirely around you. No two are ever the same.', media: 'https://assets.codepen.io/7558/orange-portrait-006.jpg' },
]

const services = [
  { name: 'HydraFacial', price: '$185', duration: '60 min', description: 'Full cleanse, extraction, and hydration in one session.' },
  { name: 'LED Therapy', price: '$95', duration: '45 min', description: 'Light wavelengths that calm, repair, and restore.' },
  { name: 'Microneedling', price: '$275', duration: '75 min', description: 'Controlled micro-channels for collagen stimulation.' },
  { name: 'Gua Sha Ritual', price: '$120', duration: '60 min', description: 'Ancient lymphatic technique adapted for modern skin.' },
  { name: 'Chemical Peel', price: '$150', duration: '45 min', description: 'Precision exfoliation revealing fresh, even skin beneath.' },
  { name: 'Bespoke Facial', price: '$220', duration: '90 min', description: 'A fully custom treatment built around your skin that day.' },
]

const serif = { fontFamily: 'var(--font-playfair), Georgia, serif' }

export default function ClartePage() {
  return (
    <div className="bg-cream text-clay-dark">

      {/* ── 1. Hero ──────────────────────────────────────────────────── */}
      <LuminaInteractiveList slides={slides} studioName="Clarté" ctaHref="#booking" />

      {/* ── 2. Services ──────────────────────────────────────────────── */}
      <section id="services" className="bg-cream px-8 md:px-16 py-28">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase text-clay-light mb-4">Treatments</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-clay-dark mb-16" style={serif}>
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-clay-border">
            {services.map((s) => (
              <div key={s.name} className="bg-cream p-8 md:p-10 flex flex-col gap-4">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. About ─────────────────────────────────────────────────── */}
      <section id="about" className="bg-warm-beige">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">

          {/* Portrait */}
          <div className="relative h-[55vh] lg:h-auto overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1470&auto=format&fit=crop"
              alt="Sophie Marchand, founder of Clarté"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          {/* Text */}
          <div className="px-8 md:px-14 py-20 md:py-28 flex flex-col justify-center">
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

            {/* Stats */}
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
          </div>
        </div>
      </section>

      {/* ── 4. Booking ───────────────────────────────────────────────── */}
      <section id="booking" className="bg-cream px-8 md:px-16 py-28">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-clay-light mb-4">Availability</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-clay-dark mb-3" style={serif}>
            Reserve Your Visit
          </h2>
          <p className="text-clay-light text-xs tracking-wider mb-12">
            Scheduling powered by Calendly — live booking available on your site.
          </p>
          <ClarteBooking />
        </div>
      </section>

      {/* ── 5. Find Us ───────────────────────────────────────────────── */}
      <section id="find-us" className="bg-warm-beige">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">

          {/* Info */}
          <div className="px-8 md:px-14 py-20 md:py-28">
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
          </div>

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

      {/* ── 6. Footer ────────────────────────────────────────────────── */}
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
