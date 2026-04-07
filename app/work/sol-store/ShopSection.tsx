'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Linen Overshirt',
    price: '$285',
    category: 'tops',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&h=800&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Wool Trousers',
    price: '$390',
    category: 'bottoms',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Canvas Overcoat',
    price: '$680',
    category: 'outerwear',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&h=800&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'Ribbed Tank',
    price: '$145',
    category: 'tops',
    image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&h=800&fit=crop&q=80',
  },
  {
    id: 5,
    name: 'Straight-Leg Denim',
    price: '$320',
    category: 'bottoms',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop&q=80',
  },
  {
    id: 6,
    name: 'Cashmere Scarf',
    price: '$195',
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&h=800&fit=crop&q=80',
  },
  {
    id: 7,
    name: 'Waxed Cotton Jacket',
    price: '$520',
    category: 'outerwear',
    image: 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=600&h=800&fit=crop&q=80',
  },
  {
    id: 8,
    name: 'Leather Tote',
    price: '$445',
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=800&fit=crop&q=80',
  },
]

type Category = 'all' | 'tops' | 'bottoms' | 'outerwear' | 'accessories'

const TABS: { value: Category; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'tops', label: 'Tops' },
  { value: 'bottoms', label: 'Bottoms' },
  { value: 'outerwear', label: 'Outerwear' },
  { value: 'accessories', label: 'Accessories' },
]

function ProductCard({ name, price, image }: { name: string; price: string; image: string }) {
  return (
    <div>
      <div className="relative aspect-[3/4] overflow-hidden w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <p className="font-dm-sans text-sm font-medium text-black mt-3">{name}</p>
      <p className="font-mono text-xs text-black/50 mt-1">{price}</p>
    </div>
  )
}

export default function ShopSection() {
  return (
    <section id="shop" className="bg-white py-24 px-8">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="font-dm-sans font-bold text-4xl tracking-tighter text-black">
          The Collection
        </h2>
        <p className="font-mono text-sm text-black/50 mt-1">
          Fall / Winter 2025. Limited quantities.
        </p>

        <Tabs defaultValue="all" className="mt-10">
          <TabsList className="flex gap-8 mb-10 bg-transparent p-0 h-auto border-b border-black/10">
            {TABS.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="font-mono text-xs tracking-widest uppercase text-black/40 data-[state=active]:text-black pb-3 px-0 bg-transparent rounded-none border-b-2 border-transparent data-[state=active]:border-black -mb-px transition-colors"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((p) => (
                <ProductCard key={p.id} name={p.name} price={p.price} image={p.image} />
              ))}
            </div>
          </TabsContent>

          {(['tops', 'bottoms', 'outerwear', 'accessories'] as Category[]).map((cat) => (
            <TabsContent key={cat} value={cat}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products
                  .filter((p) => p.category === cat)
                  .map((p) => (
                    <ProductCard key={p.id} name={p.name} price={p.price} image={p.image} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
