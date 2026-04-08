import ConnoisseurStack from '@/components/ui/connoisseur-stack'
import About3 from '@/components/ui/about3'
import MenuTabs from './MenuTabs'

export const metadata = {
  title: 'Cinder & Co. — Ridgewood Queens',
  description: 'Smash burgers, loaded fries, and desserts worth the drive.',
}

const menuTabs = [
  {
    value: 'burgers',
    label: 'Burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
    items: [
      { name: 'The Classic', price: '$13', desc: 'Smash patty, American cheese, pickles, house sauce' },
      { name: 'Double Stack', price: '$16', desc: 'Two patties, sharp cheddar, caramelized onion' },
      { name: 'Mushroom Melt', price: '$15', desc: 'Smash patty, gruyère, roasted mushrooms, truffle aioli' },
      { name: 'Spicy Bird', price: '$14', desc: 'Crispy chicken, hot honey, slaw, dill pickle' },
    ],
  },
  {
    value: 'sides',
    label: 'Sides',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80',
    items: [
      { name: 'Loaded Fries', price: '$9', desc: 'Cheese sauce, bacon, scallions' },
      { name: 'Onion Rings', price: '$7', desc: 'Beer batter, comeback sauce' },
      { name: 'House Salad', price: '$8', desc: 'Mixed greens, radish, herb vinaigrette' },
      { name: 'Street Corn', price: '$6', desc: 'Cotija, chili butter, lime' },
    ],
  },
  {
    value: 'shakes',
    label: 'Shakes',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80',
    items: [
      { name: 'Vanilla Soft Serve', price: '$6', desc: 'Classic, hand-spun' },
      { name: 'Chocolate Malt', price: '$7', desc: 'Dark cocoa, malted milk' },
      { name: 'Strawberry', price: '$6', desc: 'Fresh strawberry, vanilla base' },
      { name: 'Black & White', price: '$8', desc: 'Chocolate and vanilla, swirled' },
    ],
  },
  {
    value: 'desserts',
    label: 'Desserts',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80',
    items: [
      { name: 'Smash Brownie', price: '$5', desc: 'Warm brownie, soft serve, sea salt' },
      { name: 'Apple Hand Pie', price: '$5', desc: 'Flaky pastry, cinnamon apple' },
      { name: 'Banana Pudding', price: '$6', desc: 'Vanilla wafer, whipped cream' },
      { name: 'Soft Serve Cone', price: '$4', desc: 'Plain or dipped in chocolate' },
    ],
  },
]

export default function CinderCoPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">

      {/* SECTION 1 — ConnoisseurStack hero */}
      <ConnoisseurStack
        eyebrow="CINDER & CO."
        items={[
          {
            num: "01",
            name: "Smash Burgers",
            clipId: "clip-original",
            description: "Single or double. Always fresh. Never frozen.",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          },
          {
            num: "02",
            name: "Loaded Fries",
            clipId: "clip-hexagons",
            description: "Golden, crispy, impossible to share.",
            image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          },
          {
            num: "03",
            name: "Diner Desserts",
            clipId: "clip-pixels",
            description: "Brownies, hand pies, and soft serve done right.",
            image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          },
        ]}
      />

      {/* Info strip */}
      <div className="bg-orange-500 py-3 px-8 flex flex-wrap gap-6 items-center justify-center">
        <span className="text-black text-xs font-bold tracking-widest uppercase">
          Myrtle Ave, Ridgewood Queens
        </span>
        <span className="text-black/40 hidden sm:block">·</span>
        <span className="text-black text-xs font-bold tracking-widest uppercase">
          Tue – Sun · 11am – 11pm
        </span>
        <span className="text-black/40 hidden sm:block">·</span>
        <a
          href="#menu"
          className="text-black text-xs font-bold tracking-widest uppercase no-underline hover:underline"
        >
          See the Menu →
        </a>
      </div>

      {/* SECTION 2 — About */}
      <About3
        title="Born in Ridgewood."
        description="We opened Cinder & Co. in 2021 with a simple idea: make the burger you'd actually drive across the borough for. No gimmicks. Just quality ingredients, a flat-top that never cools down, and a dessert menu that earns its place."
        mainImage="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
        secondaryImage="https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80"
        breakout={{
          src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
          title: 'What We Stand For',
          description:
            "Every ingredient on our menu is sourced within 150 miles. We work with local farms, local bakeries, and a butcher two blocks over who's been doing this for 40 years.",
          buttonText: 'Our Story',
          buttonUrl: '/work/mesa-kitchen/about',
        }}
        companiesTitle="As seen in"
        companies={['Eater NY', 'Time Out New York', 'The Infatuation', 'Gothamist']}
        achievementsTitle="By the numbers."
        achievementsDescription="Since opening in 2021, we have served a lot of burgers, flipped a lot of patties, and tried to get better every single week."
        achievements={[
          { label: 'Burgers Served', value: '180K+' },
          { label: 'Years Open', value: '3' },
          { label: 'Menu Items', value: '24' },
          { label: 'Seats', value: '40' },
        ]}
      />

      {/* SECTION 3 — Menu */}
      <section id="menu" className="bg-[#111111] py-24 px-8 md:px-14 lg:px-20">
        <div className="max-w-screen-xl mx-auto">
          <h2
            className="text-white font-black mb-12"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            The Menu
          </h2>
          <MenuTabs tabs={menuTabs} />
        </div>
      </section>

      {/* SECTION 4 — Contact */}
      <section id="contact" className="bg-[#0a0a0a] py-24 px-8 md:px-14 lg:px-20">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: address + map */}
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
                <p>Myrtle Ave, Ridgewood, NY 11385</p>
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
            <div className="rounded-xl overflow-hidden h-56 bg-stone-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6043.8763940774375!2d-73.91256!3d40.70158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25e0e9f81a691%3A0x39e3d84d4b2d1bcb!2sRidgewood%2C%20Queens%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
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

          {/* Right: contact form */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Get in Touch</h3>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                className="h-12 bg-white/5 border border-white/10 text-white placeholder:text-white/25 px-4 text-sm focus:outline-none focus:border-orange-500 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="h-12 bg-white/5 border border-white/10 text-white placeholder:text-white/25 px-4 text-sm focus:outline-none focus:border-orange-500 transition-colors"
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="bg-white/5 border border-white/10 text-white placeholder:text-white/25 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors resize-none"
              />
              <button
                type="submit"
                className="h-12 bg-orange-500 text-black text-xs font-bold tracking-widest uppercase hover:bg-orange-400 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Footer */}
      <footer className="border-t border-white/10 py-6 px-8 md:px-14 lg:px-20">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-bold text-sm text-white">Cinder & Co.</span>
          <span className="text-xs text-white/25">Myrtle Ave, Ridgewood, Queens</span>
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
