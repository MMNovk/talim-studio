import ConnoisseurStack from '@/components/ui/connoisseur-stack'
import About3 from '@/components/ui/about3'
import Image from 'next/image'
import { CinderMenu } from '@/components/ui/cinder-menu'

export const metadata = {
  title: 'Cinder & Co. — Ridgewood Queens',
  description: 'Smash burgers, loaded fries, and desserts worth the drive.',
}


const reviews = [
  {
    quote: '\u201CThe smash burger here is the reason I started telling people to stop going to Manhattan for food.\u201D',
    logo: '/images/eatny.jpg.webp',
    publication: 'Eater NY',
  },
  {
    quote: '\u201CExactly what a neighborhood burger spot should be. Nothing extra, nothing missing.\u201D',
    logo: '/images/infatuation.jpeg',
    publication: 'The Infatuation',
  },
  {
    quote: '\u201COrder the double. You\u2019ll thank yourself.\u201D',
    logo: '/images/timeoutny.jpg',
    publication: 'Time Out New York',
  },
]

export default function CinderCoPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">

      {/* SECTION 1 — ConnoisseurStack hero */}
      <div className="dark">
        <ConnoisseurStack
          eyebrow="CINDER & CO."
          items={[
            {
              num: "01",
              name: "Smash Burgers",
              clipId: "clip-original",
              image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            },
            {
              num: "02",
              name: "Loaded Fries",
              clipId: "clip-hexagons",
              image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            },
            {
              num: "03",
              name: "Diner Desserts",
              clipId: "clip-pixels",
              image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            },
          ]}
        />
      </div>

      {/* Orange marquee — hours */}
      <div className="bg-orange-500 py-3 px-8 flex flex-wrap gap-2 items-center justify-center">
        <span className="text-black text-xs font-bold tracking-widest uppercase">
          Tue – Sun &nbsp;·&nbsp; 11am – midnight &nbsp;·&nbsp; Mon &nbsp;·&nbsp; Closed
        </span>
      </div>

      {/* Full-bleed photo divider */}
      <div className="w-full h-[70vh] relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1703219338561-074c44c34c18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
          quality={100}
          className="object-cover"
          style={{ objectPosition: "center 60%" }}
          loading="eager"
        />
      </div>

      {/* Second orange marquee — address + phone */}
      <div className="bg-orange-500 py-3 px-8 flex flex-wrap gap-2 items-center justify-center">
        <span className="text-black text-xs font-bold tracking-widest uppercase">
          7812 Myrtle Ave, Ridgewood, NY 11385 &nbsp;·&nbsp; (718) 555-0147
        </span>
      </div>

      {/* SECTION 2 — Menu */}
      <div id="menu">
        <CinderMenu />
      </div>

      {/* SECTION 3 — Review quotes */}
      <section className="bg-[#0a0a0a] py-24 px-8 md:px-14 lg:px-20">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {reviews.map(({ quote, logo, publication }) => (
            <div key={publication} className="flex flex-col gap-4">
              <p className="text-white text-lg font-light leading-relaxed">{quote}</p>
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt={publication}
                  className="h-5 w-auto grayscale opacity-50"
                />
                <span className="font-sans text-sm text-zinc-400 font-medium">{publication}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — About */}
      <About3
        title="Born in Ridgewood."
        description="We opened Cinder & Co. in 2021 with a simple idea: make the burger you'd actually travel across the borough for. No gimmicks. Just quality ingredients, a flat-top that never cools down, and a dessert menu that earns its place."
        mainImage="https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80"
        secondaryImage="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80"
        breakout={{
          src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
          title: 'The same way, every time.',
          description:
            "Everything on the menu is made to order. The smash happens when you order it. The fries go straight from the fryer. We don't hold food under heat lamps and we don't cut corners on the bun.",
          buttonText: 'Our Story',
          buttonUrl: '/work/mesa-kitchen/about',
        }}
      />

      {/* SECTION 5 — Contact */}
      <section id="contact" className="bg-[#0a0a0a] py-24 px-8 md:px-14 lg:px-20 flex justify-center">
        <div className="w-full max-w-2xl flex flex-col gap-16">

          {/* Come Through info */}
          <div>
            <h2
              className="text-white font-black mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Come Through
            </h2>
            <div className="flex flex-col gap-5 text-sm text-white/50 mb-8">
              <div>
                <p className="text-white font-bold mb-1">Address</p>
                <p>7812 Myrtle Ave, Ridgewood, NY 11385</p>
              </div>
              <div>
                <p className="text-white font-bold mb-1">Hours</p>
                <p>Tue – Thu &nbsp;&nbsp; 11am – 10pm</p>
                <p>Fri – Sat &nbsp;&nbsp;&nbsp;&nbsp; 11am – midnight</p>
                <p>Sun &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; noon – 9pm</p>
                <p>Mon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Closed</p>
              </div>
              <div>
                <p className="text-white font-bold mb-1">Contact</p>
                <p>hello@cinderandco.com</p>
              </div>
            </div>
            <div className="overflow-hidden h-56 bg-stone-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.8!2d-73.9012!3d40.7001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s7812+Myrtle+Ave%2C+Ridgewood%2C+NY+11385!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cinder & Co. location"
              />
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6 — Footer */}
      <footer className="border-t border-white/10 py-6 px-8 md:px-14 lg:px-20">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-bold text-sm text-white">Cinder & Co.</span>
          <span className="text-xs text-white/25">7812 Myrtle Ave, Ridgewood, Queens</span>
          <a
            href="https://talimstudio.com"
            className="text-xs text-white/20 no-underline hover:text-white/40 transition-colors"
          >
            Built by Talim Studio →
          </a>
        </div>
      </footer>

    </div>
  )
}
