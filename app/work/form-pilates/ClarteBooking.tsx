'use client'

import type { CSSProperties } from 'react'
import { useState } from 'react'
import './clarte-booking.css'

const INK    = '#1C1814'
const ACCENT = '#B5623E'
const MUTED  = '#8C7B6E'
const RULE   = '#D4C9BC'
const BG     = '#FDFAF7'

const C300: CSSProperties  = { fontFamily: 'var(--font-cormorant), Georgia, serif', fontWeight: 300 }
const C300I: CSSProperties = { fontFamily: 'var(--font-cormorant), Georgia, serif', fontWeight: 300, fontStyle: 'italic' }
const DM300: CSSProperties = { fontFamily: '"DM Sans", sans-serif', fontWeight: 300 }
const DM400: CSSProperties = { fontFamily: '"DM Sans", sans-serif', fontWeight: 400 }

const AVAILABLE = new Set([3, 5, 8, 10, 12, 15, 17, 19, 22, 24, 26, 29])
const TIME_SLOTS = ['10:00 AM', '11:30 AM', '2:00 PM']
const DAY_LABELS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

const CELLS: (number | null)[] = [
  null, null, 1,  2,  3,  4,  5,
  6,    7,    8,  9,  10, 11, 12,
  13,   14,   15, 16, 17, 18, 19,
  20,   21,   22, 23, 24, 25, 26,
  27,   28,   29, 30, null, null, null,
]

export default function ClarteBooking() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [confirmed, setConfirmed] = useState(false)

  if (confirmed) {
    return (
      <div style={{ textAlign: 'center', padding: '64px 0' }}>
        <p style={{ ...C300I, fontSize: 32, color: INK }}>Your visit is reserved.</p>
        <p style={{ ...DM300, fontSize: 13, color: MUTED, marginTop: 12 }}>
          We&apos;ll be in touch to confirm your details.
        </p>
      </div>
    )
  }

  const canConfirm = selectedDate !== null && selectedTime !== null

  return (
    <div style={{
      border: `1px solid ${RULE}`,
      background: BG,
      borderRadius: 4,
      padding: '32px 28px',
      textAlign: 'left',
    }}>

      {/* Month header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <button style={{ ...DM300, fontSize: 18, color: MUTED, cursor: 'pointer', background: 'none', border: 'none', lineHeight: 1 }}>‹</button>
        <p style={{ ...C300, fontSize: 18, color: INK }}>April 2025</p>
        <button style={{ ...DM300, fontSize: 18, color: MUTED, cursor: 'pointer', background: 'none', border: 'none', lineHeight: 1 }}>›</button>
      </div>

      {/* Day labels */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', marginBottom: 8 }}>
        {DAY_LABELS.map(d => (
          <div key={d} style={{ ...DM400, fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: MUTED, textAlign: 'center', paddingBottom: 8 }}>
            {d}
          </div>
        ))}
      </div>

      {/* Dates */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 3 }}>
        {CELLS.map((day, i) => {
          if (!day) return <div key={i} />
          const avail = AVAILABLE.has(day)
          const sel   = selectedDate === day

          const btnStyle: CSSProperties = {
            ...DM300,
            height: 34,
            width: '100%',
            fontSize: 13,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: avail ? 'pointer' : 'default',
            transition: 'all 0.2s ease',
            border: avail ? `1px solid ${ACCENT}` : 'none',
            background: sel ? ACCENT : 'transparent',
            color: sel ? '#fff' : avail ? ACCENT : RULE,
          }

          return (
            <button
              key={i}
              onClick={() => avail && setSelectedDate(day)}
              style={btnStyle}
              onMouseEnter={e => { if (avail) (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.08)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)' }}
            >
              {day}
            </button>
          )
        })}
      </div>

      {/* Time slots */}
      {selectedDate && (
        <div style={{ marginTop: 24 }}>
          <p style={{ ...DM400, fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', color: MUTED, marginBottom: 12 }}>
            Select a Time
          </p>
          <div style={{ display: 'flex', gap: 8 }}>
            {TIME_SLOTS.map(t => {
              const sel = selectedTime === t
              return (
                <button
                  key={t}
                  onClick={() => setSelectedTime(t)}
                  style={{
                    ...DM300,
                    flex: 1,
                    padding: '10px 4px',
                    fontSize: 12,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: `1px solid ${ACCENT}`,
                    background: sel ? ACCENT : 'transparent',
                    color: sel ? '#fff' : ACCENT,
                  }}
                >
                  {t}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Confirm */}
      <button
        onClick={() => canConfirm && setConfirmed(true)}
        disabled={!canConfirm}
        className={`clarte-confirm-btn${canConfirm ? ' active' : ''}`}
        style={{
          ...DM400,
          marginTop: 24,
          width: '100%',
          padding: '14px 0',
          fontSize: 10,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          cursor: canConfirm ? 'pointer' : 'not-allowed',
          background: canConfirm ? INK : RULE,
          color: canConfirm ? '#F7F3EE' : MUTED,
          border: 'none',
          transition: 'all 0.2s ease',
        }}
      >
        Confirm Booking
      </button>
    </div>
  )
}
