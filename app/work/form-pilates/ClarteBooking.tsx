'use client'

import { useState } from 'react'

const serif = { fontFamily: 'var(--font-playfair), Georgia, serif' }

const AVAILABLE = new Set([3, 5, 8, 10, 12, 15, 17, 19, 22, 24, 26, 29])
const TIME_SLOTS = ['10:00 AM', '11:30 AM', '2:00 PM']
const DAY_LABELS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

// April 2025: starts on Tuesday (offset 1)
const CELLS: (number | null)[] = [
  null, null, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12,
  13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24, 25, 26,
  27, 28, 29, 30, null, null, null,
]

export default function ClarteBooking() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [confirmed, setConfirmed] = useState(false)

  if (confirmed) {
    return (
      <div className="text-center py-20">
        <p className="font-playfair text-3xl text-clay-dark italic" style={serif}>Your visit is reserved.</p>
        <p className="text-clay-mid text-sm mt-3">We&apos;ll be in touch to confirm your details.</p>
      </div>
    )
  }

  const canConfirm = selectedDate !== null && selectedTime !== null

  return (
    <div className="rounded-2xl border border-clay-border bg-cream p-8 md:p-10 max-w-md mx-auto shadow-sm">

      {/* Month header */}
      <div className="flex items-center justify-between mb-6">
        <button className="text-clay-light hover:text-terracotta transition-colors text-lg leading-none">‹</button>
        <h3 className="font-playfair text-xl text-clay-dark" style={serif}>April 2025</h3>
        <button className="text-clay-light hover:text-terracotta transition-colors text-lg leading-none">›</button>
      </div>

      {/* Day of week headers */}
      <div className="grid grid-cols-7 mb-2">
        {DAY_LABELS.map(d => (
          <div key={d} className="text-center text-[10px] text-clay-light tracking-widest uppercase py-1">
            {d}
          </div>
        ))}
      </div>

      {/* Calendar dates */}
      <div className="grid grid-cols-7 gap-0.5">
        {CELLS.map((day, i) => {
          if (!day) return <div key={i} />
          const avail = AVAILABLE.has(day)
          const sel = selectedDate === day
          return (
            <button
              key={i}
              onClick={() => avail && setSelectedDate(day)}
              className={`h-9 w-full rounded-full text-sm transition-all ${
                sel
                  ? 'bg-terracotta text-white font-medium'
                  : avail
                  ? 'text-terracotta hover:bg-terracotta/10 font-medium cursor-pointer'
                  : 'text-clay-border cursor-default'
              }`}
            >
              {day}
            </button>
          )
        })}
      </div>

      {/* Time slots */}
      {selectedDate && (
        <div className="mt-6">
          <p className="text-[10px] text-clay-light tracking-widest uppercase mb-3">Select a Time</p>
          <div className="flex gap-3">
            {TIME_SLOTS.map(t => (
              <button
                key={t}
                onClick={() => setSelectedTime(t)}
                className={`flex-1 py-2.5 text-sm rounded-lg border transition-all ${
                  selectedTime === t
                    ? 'bg-terracotta border-terracotta text-white'
                    : 'border-clay-border text-clay-mid hover:border-terracotta hover:text-terracotta'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <button
        onClick={() => canConfirm && setConfirmed(true)}
        disabled={!canConfirm}
        className={`mt-6 w-full py-3.5 text-[11px] tracking-[0.2em] uppercase transition-all ${
          canConfirm
            ? 'bg-terracotta text-white hover:bg-terracotta-dark cursor-pointer'
            : 'bg-clay-border text-clay-light cursor-not-allowed'
        }`}
      >
        Confirm Booking
      </button>
    </div>
  )
}
