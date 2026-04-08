"use client"

import { useState } from "react"

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
      { name: "Mushroom Swiss", description: "Double smash, roasted mushrooms, gruyere, garlic aioli.", price: "$15", image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&h=800&fit=crop&q=100" },
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
      { name: "Vanilla", description: "Madagascar vanilla, whole milk, hand-spun.", price: "$8", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&h=800&fit=crop&q=100" },
      { name: "Chocolate", description: "Dutch cocoa, dark chocolate, whole milk, hand-spun.", price: "$8", image: "https://images.unsplash.com/photo-1541658016709-82835106602c?w=800&h=800&fit=crop&q=100" },
      { name: "Strawberry", description: "Real strawberries, no syrup, hand-spun.", price: "$8", image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=800&h=800&fit=crop&q=100" },
      { name: "Black & White", description: "Half chocolate, half vanilla, oreo crumble top.", price: "$9", image: "https://images.unsplash.com/photo-1619158401201-8fa744b4d245?w=800&h=800&fit=crop&q=100" },
    ],
  },
  {
    label: "Desserts",
    items: [
      { name: "Rotating Special", description: "One dessert, changes weekly. Ask your server.", price: "Market", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&h=800&fit=crop&q=100" },
      { name: "Brownie Sundae", description: "Warm brownie, vanilla soft serve, salted caramel.", price: "$10", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&h=800&fit=crop&q=100" },
      { name: "Soft Serve Cone", description: "Vanilla or chocolate. Cup or cone.", price: "$5", image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=800&h=800&fit=crop&q=100" },
    ],
  },
]

export function CinderMenu() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const currentCategory = menuData[activeCategory]
  const displayImage = hoveredItem !== null
    ? currentCategory.items[hoveredItem].image
    : currentCategory.items[0].image

  return (
    <section className="bg-[#111111] py-24 px-8 md:px-14 lg:px-20">
      <div className="max-w-screen-xl mx-auto">

        <h2
          className="text-white font-black mb-12"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          The Menu
        </h2>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {menuData.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => { setActiveCategory(i); setHoveredItem(null); }}
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
              <div
                key={item.name}
                onMouseEnter={() => setHoveredItem(i)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`group flex items-baseline justify-between py-5 border-b border-white/10 cursor-default transition-colors duration-200 ${
                  hoveredItem === i ? "border-white/30" : ""
                }`}
              >
                <div className="flex-1 min-w-0 pr-8">
                  <p className="text-white font-bold text-lg group-hover:text-orange-500 transition-colors duration-200">
                    {item.name}
                  </p>
                  <p className="text-white/40 text-sm mt-1 leading-snug">{item.description}</p>
                </div>
                <span className="text-white/60 text-sm font-sans shrink-0">
                  {item.price}
                </span>
              </div>
            ))}
          </div>

          {/* Right: image panel */}
          <div className="relative aspect-square lg:sticky lg:top-8 bg-[#0a0a0a]">
            {currentCategory.items.map((item, i) => (
              <img
                key={`${activeCategory}-${item.name}`}
                src={item.image}
                alt={item.name}
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
                  (hoveredItem === null && i === 0) || hoveredItem === i
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
