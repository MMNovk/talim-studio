'use client'

import React, { useState } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

interface AnimatedTabsProps {
  tabs?: Tab[]
  defaultTab?: string
  className?: string
}

const AnimatedTabs = ({ tabs = [], defaultTab, className }: AnimatedTabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)
  if (!tabs?.length) return null

  return (
    <div className={cn('flex flex-col', className)}>
      {/* Tab list */}
      <div className="flex gap-0 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'relative px-4 py-2.5 font-mono text-xs tracking-widest uppercase outline-none bg-transparent border-0 cursor-pointer transition-colors border-b-2',
              activeTab === tab.id
                ? 'text-black border-black'
                : 'text-black/40 border-transparent hover:text-black/60',
            )}
          >
            {tab.label}
          </button>
        ))}
        <div className="flex-1 border-b-2 border-black/10" />
      </div>

      {/* Tab content */}
      <div>
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
              >
                {tab.content}
              </motion.div>
            ),
        )}
      </div>
    </div>
  )
}

export { AnimatedTabs }
