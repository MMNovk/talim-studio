import Image from 'next/image'

export const metadata = {
  title: 'Mesa Kitchen — Neighborhood Mexican Restaurant, Ridgewood Queens',
  description: 'Comfort food, made honest. Mesa Kitchen serves fresh, traditional Mexican cooking in Ridgewood, Queens.',
}

const menuItems = [
  {
    name: 'Birria Tacos',
    price: '$16',
    desc: 'Slow-braised beef, consommé, pickled onion, cilantro',
  },
  {
    name: 'Elote',
    price: '$8',
    desc: 'Grilled corn, crema, cotija, chili lime',
  },
  {
    name: 'Enchiladas Rojas',
    price: '$18',
    desc: 'Pulled chicken, house red sauce, jack cheese, crema',
  },
  {
    name: 'Agua de Jamaica',
    price: '$5',
    desc: 'House-made hibiscus, lightly sweetened',
  },
]

export default function MesaKitchenPage() {
  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: 'DM Sans, sans-serif' }}>

      {/* Top bar */}
      <header className="px-8 py-6 border-b border-ink/10">
        <span className="font-black text-ink text-lg tracking-wide" style={{ fontFamily: 'Syne, sans-serif' }}>
          MESA KITCHEN
        </span>
      </header>

      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1600&q=80"
          alt="Mesa Kitchen food"
          fill
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ink/30" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
          <h1
            className="text-white font-black leading-none text-[clamp(2.5rem,7vw,6rem)]"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Comfort food,<br />made honest.
          </h1>
          <a href="#menu" className="mt-8 w-fit flex items-center gap-3 group no-underline">
            <div className="w-14 h-14 rounded-full border border-white/50 flex items-center justify-center group-hover:bg-white transition-all duration-500">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-white group-hover:stroke-ink transition-colors duration-500">
                <path d="M7 17L17 7M17 7H8M17 7V16" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-sm font-bold text-white">View menu</span>
          </a>
        </div>
      </section>

      {/* Story */}
      <section className="px-8 md:px-16 py-20 flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 max-w-lg">
          <h2
            className="font-black text-ink text-2xl md:text-3xl mb-6"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Our story.
          </h2>
          <p className="text-ink/70 leading-relaxed">
            Mesa Kitchen opened in 2021 in Ridgewood, Queens. We cook the food we grew up with, using fresh ingredients and old recipes. Nothing on the menu is new — it is just honest.
          </p>
        </div>
        <div className="relative w-full md:w-72 h-64 rounded-2xl overflow-hidden flex-shrink-0">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
            alt="Mesa Kitchen interior"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="px-8 md:px-16 py-20 bg-[#fdf8f4]">
        <h2
          className="text-xs font-bold text-ink/40 mb-10 tracking-widest"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          MENU
        </h2>
        <div className="max-w-2xl">
          {menuItems.map((item, i) => (
            <div
              key={item.name}
              className={`flex items-baseline justify-between py-6 ${i < menuItems.length - 1 ? 'border-b border-ink/10' : ''}`}
            >
              <div className="flex-1 pr-6">
                <p className="font-bold text-ink text-base">{item.name}</p>
                <p className="text-sm text-ink/50 mt-1">{item.desc}</p>
              </div>
              <span className="font-bold text-ink text-sm flex-shrink-0">{item.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Hours + Location */}
      <section className="px-8 md:px-16 py-20">
        <h2
          className="font-black text-ink text-2xl md:text-3xl mb-8"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          Find us.
        </h2>
        <div className="flex flex-col gap-4 text-sm text-ink/70">
          <p>
            <span className="font-bold text-ink">Address</span><br />
            38 St Nicholas Ave, Ridgewood NY 11385
          </p>
          <p>
            <span className="font-bold text-ink">Hours</span><br />
            Mon–Thu 12pm–9pm · Fri–Sat 12pm–10pm · Sun 12pm–8pm
          </p>
          <p>
            <span className="font-bold text-ink">Phone</span><br />
            <a href="tel:7185550190" className="underline underline-offset-2 hover:text-ink transition-colors">(718) 555-0190</a>
          </p>
          <p>
            <span className="font-bold text-ink">Email</span><br />
            <a href="mailto:hello@mesakitchen.com" className="underline underline-offset-2 hover:text-ink transition-colors">hello@mesakitchen.com</a>
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
