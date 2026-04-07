import SolNav from '@/components/ui/sol-nav'
import SolHero from '@/components/ui/sol-hero'
import ShopSection from './ShopSection'
import { AnimatedTabs } from '@/components/ui/animated-tabs'
import ContactForm from './ContactForm'
import Image from 'next/image'

export const metadata = {
  title: 'SOL New York -- Ready-to-Wear, Nolita',
  description: 'A small luxury clothing boutique at 142 Elizabeth St, New York.',
}

const aboutTabs = [
  {
    id: 'store',
    label: 'The Store',
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
        <div className="relative h-48 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&h=400&fit=crop&q=80"
            alt="SOL boutique interior"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-dm-sans font-bold text-base text-black">142 Elizabeth St.</h3>
          <p className="font-dm-sans text-sm text-black/70 leading-relaxed">
            We opened in 2022 in Nolita. The space is small by design - 600 square feet, one rack
            per category, everything visible from the door. We restock on Tuesdays.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'edit',
    label: 'The Edit',
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
        <div className="relative h-48 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=80"
            alt="Fashion design studio"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-dm-sans font-bold text-base text-black">Curated, not comprehensive.</h3>
          <p className="font-dm-sans text-sm text-black/70 leading-relaxed">
            We carry 12 to 15 brands at any time. Everything is chosen by the same two people who
            work the floor. If it&rsquo;s here, one of us would actually wear it.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'sustainability',
    label: 'Sustainability',
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
        <div className="relative h-48 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop&q=80"
            alt="Natural fabric textile"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-dm-sans font-bold text-base text-black">Small runs. No restocks.</h3>
          <p className="font-dm-sans text-sm text-black/70 leading-relaxed">
            Every piece is ordered in quantities of 10 to 30. When it&rsquo;s gone, it&rsquo;s
            gone. We don&rsquo;t do sales. We don&rsquo;t chase trends. We buy what we believe in
            and stand behind the price.
          </p>
        </div>
      </div>
    ),
  },
]

export default function SolStorePage() {
  return (
    <main className="bg-white">

      {/* SECTION 1 - Sticky Nav */}
      <SolNav />

      {/* SECTION 2 - Hero */}
      <SolHero />

      {/* SECTION 3 - Store info strip */}
      <div className="border-y border-black/10 py-4 px-8 bg-white">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12">
          <span className="font-mono text-xs tracking-widest uppercase text-black/50">
            Mon-Sat 11am-7pm &middot; Sun 12pm-6pm
          </span>
          <span className="hidden sm:block font-mono text-xs text-black/20">|</span>
          <span className="font-mono text-xs tracking-widest uppercase text-black/50">
            142 Elizabeth St, New York NY
          </span>
          <span className="hidden sm:block font-mono text-xs text-black/20">|</span>
          <span className="font-mono text-xs tracking-widest uppercase text-black/50">
            hello@solnyc.com
          </span>
        </div>
      </div>

      {/* SECTION 4 - Shop */}
      <ShopSection />

      {/* SECTION 5 - About */}
      <section id="about" style={{ backgroundColor: '#f9f8f6' }} className="py-24 px-8">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-16 md:gap-20 items-start">
          <div className="md:w-2/5 shrink-0">
            <h2 className="font-dm-sans font-bold text-4xl tracking-tighter leading-tight text-black">
              A small store.<br />A clear point of view.
            </h2>
          </div>
          <div className="md:w-3/5">
            <AnimatedTabs tabs={aboutTabs} />
          </div>
        </div>
      </section>

      {/* SECTION 6 - Contact */}
      <section id="contact" className="bg-white py-24 px-8">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">

          {/* Left: address */}
          <div>
            <h2 className="font-dm-sans font-bold text-4xl tracking-tighter text-black mb-12">
              Say hello.
            </h2>
            <address className="not-italic font-mono text-xs tracking-widest uppercase text-black/50 leading-loose flex flex-col">
              <span>SOL NEW YORK</span>
              <span>142 Elizabeth St</span>
              <span>New York NY 10012</span>
              <span className="my-3 text-black/15 select-none">- - -</span>
              <span>Mon-Sat 11am-7pm</span>
              <span>Sun 12pm-6pm</span>
              <span className="my-3 text-black/15 select-none">- - -</span>
              <span>hello@solnyc.com</span>
              <span>(212) 555-0183</span>
            </address>
          </div>

          {/* Right: contact form */}
          <ContactForm />
        </div>
      </section>

      {/* SECTION 7 - Footer */}
      <footer className="bg-white border-t border-black/10 py-8 px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between">
            <span className="font-dm-sans font-bold tracking-widest text-black text-sm">SOL</span>
            <span className="font-mono text-xs text-black/40">
              142 Elizabeth St, New York &middot; hello@solnyc.com
            </span>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="font-mono text-xs text-black/30">&copy; 2025 SOL New York</span>
            <a
              href="https://talimstudio.com"
              className="font-mono text-xs text-black/30 no-underline hover:text-black/50 transition-colors"
            >
              Built by Talim Studio &rarr;
            </a>
          </div>
        </div>
      </footer>

    </main>
  )
}
