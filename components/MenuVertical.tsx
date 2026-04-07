'use client'

import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

type MenuItem = {
  label: string
  href: string
}

interface MenuVerticalProps {
  menuItems: MenuItem[]
  color?: string
  skew?: number
}

const MotionLink = motion.create(Link)

export const MenuVertical = ({
  menuItems = [],
  color = '#C97B63',
  skew = 0,
}: MenuVerticalProps) => {
  const [tappedIndex, setTappedIndex] = useState<number | null>(null)

  useEffect(() => {
    if (tappedIndex === null) return
    const t = setTimeout(() => setTappedIndex(null), 200)
    return () => clearTimeout(t)
  }, [tappedIndex])

  return (
    <div className="flex w-fit flex-col gap-4 px-10">
      {menuItems.map((item, index) => (
        <motion.div
          key={`${item.href}-${index}`}
          className="group/nav flex items-center gap-2 cursor-pointer text-zinc-900 rounded-lg transition-colors duration-100"
          style={{
            backgroundColor: tappedIndex === index ? '#e9e9e8' : 'transparent',
          }}
          initial="initial"
          whileHover="hover"
          onTouchStart={() => setTappedIndex(index)}
        >
          <motion.div
            variants={{
              initial: { x: '-100%', color: 'inherit', opacity: 0 },
              hover: { x: 0, color, opacity: 1 },
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="z-0"
          >
            <ArrowRight strokeWidth={3} className="size-10" />
          </motion.div>

          <MotionLink
            href={item.href}
            variants={{
              initial: { x: -40, color: 'inherit' },
              hover: { x: 0, color, skewX: skew },
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="text-4xl no-underline"
          >
            {item.label}
          </MotionLink>
        </motion.div>
      ))}
    </div>
  )
}
