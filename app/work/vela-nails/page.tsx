import { DM_Sans } from 'next/font/google'
import { HeroSection } from '@/components/ui/hero-section'
import VelaCarousel from '@/components/ui/elegant-carousel'
import { VelaBookingForm } from '@/components/ui/vela-booking-form'
import OwnerSection from './OwnerSection'
import VelaFooter from './VelaFooter'

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600'] })

export const metadata = {
  title: 'Vela Nails — Brooklyn Nail Studio',
  description: 'A quiet, unhurried nail studio in Williamsburg. Manicures, gel extensions, nail art, and pedicures.',
}

export default function VelaNailsPage() {
  return (
    <div className={`${dmSans.className} bg-white min-h-screen`}>

      {/* SECTION 1 — Hero */}
      <HeroSection
        title={<>Vela Nails</>}
        subtitle="A small nail studio in Williamsburg. We do one thing and we do it well."
        callToAction={{ text: 'OUR SERVICES', href: '#services' }}
        backgroundImage="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&h=1600&fit=crop&q=80"
        contactInfo={{
          website: 'velanails.com',
          phone: '(718) 555-0192',
          address: '284 Bedford Ave, Brooklyn NY',
        }}
      />

      {/* SECTION 2 — Services */}
      <div id="services">
        <VelaCarousel />
      </div>

      {/* SECTION 3 — Owner */}
      <div id="about"><OwnerSection /></div>

      {/* SECTION 4 — Booking */}
      <section id="booking" className="bg-white py-24">
        <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 mb-14">
          <h2 className="font-black text-ink mb-2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Book a Visit
          </h2>
        </div>
        <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20">
          <VelaBookingForm />
        </div>
      </section>

      {/* SECTION 5 — Location */}
      <section id="find-us" className="bg-white py-24">
        <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: info */}
          <div>
            <h2 className="font-black text-ink mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Find Us
            </h2>
            <div className="flex flex-col gap-6 text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>
              <div>
                <p className="font-semibold text-ink">Address</p>
                <p>284 Bedford Ave</p>
                <p>Brooklyn, NY 11249</p>
              </div>
              <div>
                <p className="font-semibold text-ink">Hours</p>
                <p>Tue – Fri &nbsp;&nbsp; 11am – 7pm</p>
                <p>Sat &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10am – 6pm</p>
                <p>Sun &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 12pm – 5pm</p>
                <p>Mon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Closed</p>
              </div>
              <div>
                <p className="font-semibold text-ink">Contact</p>
                <p>(718) 555-0192</p>
                <p>hello@velanails.com</p>
              </div>
            </div>
          </div>

          {/* Right: map */}
          <div className="rounded-2xl overflow-hidden h-[400px] bg-stone-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-73.95824492346843!3d40.71840537139461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25948ecf3cb7b%3A0x7eb694bec1b43ded!2s284%20Bedford%20Ave%2C%20Brooklyn%2C%20NY%2011249!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vela Nails location"
            />
          </div>
        </div>
      </section>

      {/* SECTION 6 — Footer */}
      <VelaFooter />

    </div>
  )
}
