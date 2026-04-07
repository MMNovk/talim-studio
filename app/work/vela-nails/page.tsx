import Image from 'next/image'

export const metadata = {
  title: 'Vela Nails — Brooklyn Nail Salon',
  description: 'Minimalist nail salon in Brooklyn. Gel manicures, acrylics, nail art, and classic services — every detail considered.',
}

export default function VelaNailsPage() {
  return (
    <div className="bg-white min-h-screen font-[family-name:var(--font-dm-sans)]">

      {/* Top bar */}
      <header className="px-8 py-6 border-b border-ink/10">
        <span className="font-black text-ink text-lg tracking-wide" style={{ fontFamily: 'Syne, sans-serif' }}>
          VELA NAILS
        </span>
      </header>

      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1600&q=80"
          alt="Vela Nails hero"
          fill
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ink/20" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
          <h1
            className="text-white font-black text-[clamp(2.5rem,7vw,6rem)] leading-none"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Nails, refined.
          </h1>
          <a href="#contact" className="mt-8 w-fit flex items-center gap-3 group no-underline">
            <div className="w-14 h-14 rounded-full border border-white/50 flex items-center justify-center group-hover:bg-white transition-all duration-500">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-white group-hover:stroke-ink transition-colors duration-500">
                <path d="M7 17L17 7M17 7H8M17 7V16" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-sm font-bold text-white">Book an appointment</span>
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="px-8 md:px-16 py-20">
        <h2
          className="text-xs font-bold text-ink/40 mb-10 tracking-widest"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          SERVICES
        </h2>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">
          {[
            { name: 'Gel Manicure', desc: 'Long-lasting color with a flawless finish, starting at $45.' },
            { name: 'Acrylics', desc: 'Durable extensions shaped and finished to your preference.' },
            { name: 'Nail Art', desc: 'Custom designs from minimalist linework to detailed illustration.' },
            { name: 'Classic Mani/Pedi', desc: 'The essentials, done with care and the right products.' },
          ].map((svc) => (
            <div key={svc.name} className="border border-ink/10 rounded-xl p-6">
              <h3
                className="font-black text-ink text-lg mb-2"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {svc.name}
              </h3>
              <p className="text-sm text-ink/60 leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="px-8 md:px-16 py-20 bg-paper flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <h2
            className="font-black text-ink text-2xl md:text-3xl mb-6"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            A quiet corner of Brooklyn.
          </h2>
          <p className="text-ink/70 leading-relaxed max-w-lg">
            Vela Nails is a quiet corner of Brooklyn built for people who appreciate craft. Every service is intentional, every detail considered. We believe a great manicure is about more than color — it is about the time, the calm, and the result that lasts.
          </p>
        </div>
        <div className="relative w-full md:w-64 h-72 rounded-2xl overflow-hidden flex-shrink-0">
          <Image
            src="https://images.unsplash.com/photo-1604902396830-aca55e603416?w=800&q=80"
            alt="Nail detail"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 md:px-16 py-20">
        <h2
          className="font-black text-ink text-2xl md:text-3xl mb-10"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          Find us.
        </h2>
        <div className="flex flex-col gap-4 text-sm text-ink/70">
          <p>
            <span className="font-bold text-ink">Address</span><br />
            218 Bedford Ave, Brooklyn NY 11211
          </p>
          <p>
            <span className="font-bold text-ink">Hours</span><br />
            Tue–Sat 10am–7pm · Sun 11am–5pm
          </p>
          <p>
            <span className="font-bold text-ink">Email</span><br />
            <a href="mailto:hello@velanails.com" className="underline underline-offset-2 hover:text-ink transition-colors">hello@velanails.com</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 md:px-16 py-8 border-t border-ink/10">
        <a
          href="https://talimstudio.com"
          className="text-xs text-ink/40 no-underline hover:text-ink/60 transition-colors"
        >
          Built by Talim Studio →
        </a>
      </footer>

    </div>
  )
}
