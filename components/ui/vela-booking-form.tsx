'use client'

import * as React from 'react'
import { motion } from 'motion/react'
import { CalendarDays, User, Clock, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const SERVICES = ['Classic Manicure', 'Gel Extensions', 'Nail Art Add-on', 'Pedicure']

export function VelaBookingForm() {
  const [service, setService] = React.useState('')
  const [date, setDate] = React.useState('')
  const [time, setTime] = React.useState('Morning')
  const [tech, setTech] = React.useState('No preference')
  const [submitted, setSubmitted] = React.useState(false)

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-16 px-4">
        <p className="text-xl font-bold text-ink">We will confirm your appointment within 24 hours.</p>
        <p className="text-ink/40 mt-2 text-sm">See you soon.</p>
      </div>
    )
  }

  const inputClass = cn(
    'h-12 w-full rounded-xl border border-input bg-transparent pl-10 pr-4 text-sm text-foreground',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
  )
  const selectClass = cn(
    'h-12 w-full rounded-xl border border-input bg-transparent pl-10 pr-4 text-sm text-foreground appearance-none',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
  )

  return (
    <motion.form
      onSubmit={handleSubmit}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="max-w-xl mx-auto w-full"
    >
      {/* Service */}
      <motion.div variants={itemVariants} className="mb-6">
        <label className="font-mono text-xs text-ink/50 tracking-widest uppercase mb-3 block">Service</label>
        <div className="relative">
          <Sparkles className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/30 pointer-events-none" />
          <select value={service} onChange={e => setService(e.target.value)} required className={selectClass}>
            <option value="">Select a service</option>
            {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </motion.div>

      {/* Date + time + technician */}
      <motion.div variants={itemVariants} className="mb-8">
        <label className="font-mono text-xs text-ink/50 tracking-widest uppercase mb-3 block">Details</label>
        <div className="flex flex-col gap-3">
          <div className="relative">
            <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/30 pointer-events-none" />
            <input
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              required
              className={inputClass}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/30 pointer-events-none" />
              <select value={time} onChange={e => setTime(e.target.value)} className={selectClass}>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>
            </div>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/30 pointer-events-none" />
              <select value={tech} onChange={e => setTech(e.target.value)} className={selectClass}>
                <option>No preference</option>
                <option>Mia</option>
                <option>Sofia</option>
              </select>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Submit */}
      <motion.div variants={itemVariants}>
        <button
          type="submit"
          className="w-full h-12 bg-black text-white text-xs font-bold tracking-widest hover:bg-ink/80 transition-colors"
        >
          REQUEST BOOKING
        </button>
      </motion.div>
    </motion.form>
  )
}
