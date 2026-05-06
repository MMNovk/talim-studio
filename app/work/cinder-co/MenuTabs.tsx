'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import Image from 'next/image'

interface MenuItem {
  name: string
  price: string
  desc: string
}

interface MenuTab {
  value: string
  label: string
  image: string
  items: MenuItem[]
}

export default function MenuTabs({ tabs }: { tabs: MenuTab[] }) {
  return (
    <Tabs defaultValue={tabs[0].value}>
      <TabsList className="flex gap-2 mb-10 flex-wrap">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="px-5 py-2 text-xs font-bold tracking-widest uppercase text-white/40 border border-white/10 data-[state=active]:bg-orange-500 data-[state=active]:text-black data-[state=active]:border-orange-500 transition-all"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="flex flex-col">
              {tab.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-start justify-between py-4 border-b border-white/[0.08] gap-4"
                >
                  <div>
                    <p className="text-white font-bold text-base">{item.name}</p>
                    <p className="text-white/40 text-sm mt-0.5">{item.desc}</p>
                  </div>
                  <span className="text-orange-400 font-mono text-sm shrink-0">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="relative h-64 lg:h-96 rounded-2xl overflow-hidden">
              <Image src={tab.image} alt={tab.label} fill quality={100} loading="eager" className="object-cover" />
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
