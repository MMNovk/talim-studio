'use client'

import { motion } from 'motion/react'

const serif = { fontFamily: 'Georgia, "Times New Roman", serif' }

export default function NameBanner() {
  return (
    <motion.section
      className="bg-[#0a0a0a] w-full py-16 md:py-24 overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <h2
        className="text-white font-black uppercase leading-none tracking-tight whitespace-nowrap w-full block px-8"
        style={{ fontSize: 'clamp(3rem, 11vw, 10rem)', letterSpacing: '-0.02em' }}
      >
        STEPHEN YANG
      </h2>
      <p
        className="text-[#666] text-sm mt-6 px-8 tracking-widest"
        style={serif}
      >
        New York · Fine Art Photography · Est. 2019
      </p>
    </motion.section>
  )
}
