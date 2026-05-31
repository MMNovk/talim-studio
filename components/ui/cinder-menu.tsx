"use client"

import { useState, useEffect } from "react"

interface MenuItem {
  name: string
  description: string
  price: string
  image: string
}

interface MenuCategory {
  label: string
  items: MenuItem[]
}

const menuData: MenuCategory[] = [
  {
    label: "Burgers",
    items: [
      { name: "The Cinder", description: "Double smash, american cheese, house sauce, shredded lettuce, pickles on a toasted brioche.", price: "$14", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=800&fit=crop&q=100" },
      { name: "The Cowboy", description: "Double smash, bacon jam, crispy onions, pepper jack, pickles.", price: "$16", image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&h=800&fit=crop&q=100" },
      { name: "Mushroom Swiss", description: "Double smash, roasted mushrooms, gruyere, garlic aioli.", price: "$15", image: "https://images.unsplash.com/photo-1551987840-f62d9c74ae78?q=80&w=1581&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { name: "The Plain", description: "Single smash, american cheese, mustard, pickles. No frills.", price: "$12", image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&h=800&fit=crop&q=100" },
    ],
  },
  {
    label: "Sides",
    items: [
      { name: "Classic Fries", description: "Thin cut, fried twice, salted hard.", price: "$5", image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=800&h=800&fit=crop&q=100" },
      { name: "Cinder Fries", description: "Classic fries, house cheese sauce, pickled jalapenos, chives.", price: "$9", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&h=800&fit=crop&q=100" },
      { name: "Onion Rings", description: "Beer battered, thick cut, comeback sauce.", price: "$7", image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=800&h=800&fit=crop&q=100" },
      { name: "Side Salad", description: "Because someone always asks.", price: "$6", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=800&fit=crop&q=100" },
    ],
  },
  {
    label: "Shakes",
    items: [
      { name: "Vanilla", description: "Madagascar vanilla, whole milk, hand-spun.", price: "$8", image: "https://images.unsplash.com/photo-1648580967100-436583074ea0?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { name: "Chocolate", description: "Dutch cocoa, dark chocolate, whole milk, hand-spun.", price: "$8", image: "https://images.unsplash.com/photo-1648775948447-78c34dd56090?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { name: "Strawberry", description: "Real strawberries, no syrup, hand-spun.", price: "$8", image: "https://images.unsplash.com/photo-1648580967255-d4beb1feed82?q=80&w=1481&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { name: "Black & White", description: "Half chocolate, half vanilla, oreo crumble top.", price: "$9", image: "https://images.unsplash.com/photo-1565899947426-b2424039f921?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    ],
  },
  {
    label: "Desserts",
    items: [
      { name: "Rotating Special", description: "One dessert, changes weekly. Ask your server.", price: "Market", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&h=800&fit=crop&q=100" },
      { name: "Brownie Sundae", description: "Warm brownie, vanilla soft serve, salted caramel.", price: "$10", image: "https://images.unsplash.com/photo-1639744093238-d12f04cf5950?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { name: "Soft Serve Cone", description: "Vanilla or chocolate. Cup or cone.", price: "$5", image: "https://images.unsplash.com/photo-1768249731626-962d1a16f811?q=80&w=1050&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    ],
  },
]

export function CinderMenu() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [mobileActiveItem, setMobileActiveItem] = useState<number | null>(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const currentCategory = menuData[activeCategory]

  const handleTabSwitch = (i: number) => {
    setActiveCategory(i)
    setHoveredItem(null)
    setMobileActiveItem(null)
  }

  const handleMobileTap = (i: number) => {
    setMobileActiveItem(prev => prev === i ? null : i)
  }

  return (
    <section className="bg-[#0a0a0a] py-24 px-8 md:px-14 lg:px-20">
      <div className="max-w-screen-xl mx-auto">

        <h2
          className="text-white font-black mb-3"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          The Menu
        </h2>
        <p style={{ fontSize: 13, color: '#6b7280', fontWeight: 400, marginBottom: '2.5rem' }}>
          Take a look, click on something.
        </p>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-0">
          {menuData.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => handleTabSwitch(i)}
              className={`px-5 py-2 text-xs font-sans tracking-widest uppercase border transition-colors duration-200 ${
                activeCategory === i
                  ? "bg-orange-500 border-orange-500 text-white"
                  : "border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: menu list */}
          <div>
            {currentCategory.items.map((item, i) => (
              <div key={item.name}>
                <div
                  onMouseEnter={() => { if (!isMobile) setHoveredItem(i) }}
                  onMouseLeave={() => { if (!isMobile) setHoveredItem(null) }}
                  onClick={() => { if (isMobile) handleMobileTap(i) }}
                  className={`group flex items-baseline justify-between py-5 border-b border-white/10 transition-colors duration-200 ${
                    isMobile ? 'cursor-pointer' : 'cursor-default'
                  } ${hoveredItem === i ? "border-white/30" : ""}`}
                >
                  <div className="flex-1 min-w-0 pr-8">
                    <p className={`font-bold text-lg transition-colors duration-200 ${
                      (isMobile && mobileActiveItem === i) ? 'text-orange-500' : 'text-white group-hover:text-orange-500'
                    }`}>
                      {item.name}
                    </p>
                    <p className="text-white/40 text-sm mt-1 leading-snug">{item.description}</p>
                  </div>
                  <span className="text-white/60 text-sm font-sans shrink-0">
                    {item.price}
                  </span>
                </div>

                {/* Mobile tap-to-reveal image */}
                <div
                  className="md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out"
                  style={{ maxHeight: mobileActiveItem === i ? '236px' : '0px' }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100%', height: '220px', objectFit: 'cover', objectPosition: 'center center', borderRadius: '12px', marginTop: '12px' }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right: image panel — desktop only */}
          <div className="max-md:hidden relative aspect-square self-start bg-[#0a0a0a]">
            {currentCategory.items.map((item, i) => (
              <div
                key={`${activeCategory}-${item.name}`}
                className={`absolute inset-0 transition-opacity duration-300 ${
                  (hoveredItem === null && i === 0) || hoveredItem === i
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
