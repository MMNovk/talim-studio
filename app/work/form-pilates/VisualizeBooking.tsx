'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// ── Constants ─────────────────────────────────────────────────────────────
const DAYS_OF_WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
const MONTH_NAMES  = ['January','February','March','April','May','June','July','August','September','October','November','December']

const ESTHETICIANS = [
  { name: 'Sophie Marchand', specialty: 'Bespoke Facials · HydraFacial' },
  { name: 'Ines Vidal',      specialty: 'Microneedling · Chemical Peels' },
  { name: 'Camille Tran',    specialty: 'Gua Sha · LED Therapy' },
]

const SERVICES = [
  'HydraFacial — $185 · 60 min',
  'LED Therapy — $95 · 45 min',
  'Microneedling — $275 · 75 min',
  'Gua Sha Ritual — $120 · 60 min',
  'Chemical Peel — $150 · 45 min',
  'Bespoke Facial — $220 · 90 min',
]

// ── Calendar logic ────────────────────────────────────────────────────────
type CalendarCell = {
  day: number | null
  available: boolean  // clickable, has terra-cotta border
  closed: boolean     // Sunday / Monday — muted
}

function generateCalendarDays(year: number, month: number): CalendarCell[] {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const isCurrentMonth = year === today.getFullYear() && month === today.getMonth()

  const firstDayOfWeek = new Date(year, month, 1).getDay() // 0=Sun
  const daysInMonth    = new Date(year, month + 1, 0).getDate()

  const cells: CalendarCell[] = []

  // Leading empty cells
  for (let i = 0; i < firstDayOfWeek; i++) {
    cells.push({ day: null, available: false, closed: false })
  }

  // Days of the month
  for (let d = 1; d <= daysInMonth; d++) {
    const dayOfWeek = new Date(year, month, d).getDay()
    const closed    = dayOfWeek === 0 || dayOfWeek === 1          // Sun or Mon
    const isPast    = isCurrentMonth && new Date(year, month, d) < today
    cells.push({ day: d, available: !closed && !isPast, closed })
  }

  // Trailing empty cells to complete the last row
  const remainder = cells.length % 7
  if (remainder > 0) {
    for (let i = 0; i < 7 - remainder; i++) {
      cells.push({ day: null, available: false, closed: false })
    }
  }

  return cells
}

// ── Day cell ──────────────────────────────────────────────────────────────
interface DayProps {
  cell: CalendarCell
  isSelected: boolean
  onClick: () => void
}

function Day({ cell, isSelected, onClick }: DayProps) {
  if (cell.day === null) {
    return (
      <div style={{
        height: '2.5rem',
        borderRadius: '6px',
        backgroundColor: '#F0EBE4',
        opacity: 0.4,
      }} />
    )
  }

  const base: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '2.5rem',
    width: '100%',
    fontFamily: '"DM Sans", sans-serif',
    fontSize: '12px',
    fontWeight: 400,
    borderRadius: '6px',
    userSelect: 'none',
    cursor: cell.available ? 'pointer' : 'default',
    transition: 'background-color 150ms ease',
  }

  const variant: React.CSSProperties = isSelected
    ? { backgroundColor: '#B5623E', color: '#F7F3EE', border: '1px solid #B5623E' }
    : cell.closed
    ? { backgroundColor: '#F0EBE4', color: '#1C1814', opacity: 0.4 }
    : cell.available
    ? { backgroundColor: '#EDE8E2', color: '#1C1814', border: '1px solid #B5623E' }
    : { backgroundColor: '#EDE8E2', color: '#1C1814' }

  return (
    <motion.div
      onClick={cell.available ? onClick : undefined}
      whileHover={cell.available && !isSelected ? { scale: 1.08 } : {}}
      transition={{ duration: 0.15 }}
      style={{ ...base, ...variant }}
    >
      {cell.day}
    </motion.div>
  )
}

// ── Calendar grid ─────────────────────────────────────────────────────────
interface CalendarGridProps {
  year: number
  month: number
  selectedDate: Date | null
  onDayClick: (day: number) => void
}

function CalendarGrid({ year, month, selectedDate, onDayClick }: CalendarGridProps) {
  const cells = useMemo(() => generateCalendarDays(year, month), [year, month])

  return (
    <div>
      {/* Weekday headers */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', marginBottom: '8px' }}>
        {DAYS_OF_WEEK.map(d => (
          <div
            key={d}
            style={{
              backgroundColor: '#D4C9BC',
              color: '#1C1814',
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '9px',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textAlign: 'center',
              padding: '2px 0',
            }}
          >
            {d}
          </div>
        ))}
      </div>

      {/* Day cells */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
        {cells.map((cell, i) => {
          const isSelected =
            selectedDate !== null &&
            cell.day !== null &&
            selectedDate.getFullYear() === year &&
            selectedDate.getMonth() === month &&
            selectedDate.getDate() === cell.day

          return (
            <Day
              key={i}
              cell={cell}
              isSelected={isSelected}
              onClick={() => cell.day !== null && onDayClick(cell.day)}
            />
          )
        })}
      </div>
    </div>
  )
}

// ── Interactive calendar ──────────────────────────────────────────────────
export function InteractiveCalendar() {
  const today = useMemo(() => {
    const d = new Date(); d.setHours(0, 0, 0, 0); return d
  }, [])

  const [monthOffset,         setMonthOffset]         = useState(0)
  const [selectedDate,        setSelectedDate]         = useState<Date | null>(null)
  const [selectedTime,        setSelectedTime]         = useState<string | null>(null)
  const [selectedEsthetician, setSelectedEsthetician]  = useState<string | null>(null)
  const [selectedTreatment,   setSelectedTreatment]    = useState(SERVICES[0])
  const [confirmed,           setConfirmed]            = useState(false)

  // Displayed month
  const displayDate  = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1)
  const displayYear  = displayDate.getFullYear()
  const displayMonth = displayDate.getMonth()

  const handleDayClick = (day: number) => {
    setSelectedDate(new Date(displayYear, displayMonth, day))
    setSelectedTime(null)
    setSelectedEsthetician(null)
    setConfirmed(false)
  }

  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : null

  return (
    <div style={{
      border: '1px solid rgba(200, 190, 180, 0.3)',
      borderRadius: '16px',
      padding: '48px',
      display: 'flex',
      flexDirection: 'row',
      gap: '48px',
      width: '100%',
      transition: 'all 0.3s ease',
    }}>

      {/* ── Calendar column ── */}
      <div style={{ flex: '1 1 0', minWidth: 0 }}>

        {/* Month navigation */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
          <button
            onClick={() => setMonthOffset(o => o - 1)}
            disabled={monthOffset === 0}
            aria-label="Previous month"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              border: '1px solid #D4C9BC',
              borderRadius: '50%',
              backgroundColor: 'transparent',
              cursor: monthOffset === 0 ? 'default' : 'pointer',
              opacity: monthOffset === 0 ? 0.3 : 1,
              transition: 'opacity 200ms ease',
              flexShrink: 0,
            }}
          >
            <ChevronLeft size={16} color="#1C1814" />
          </button>

          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 300,
            fontSize: '32px',
            color: '#1C1814',
            letterSpacing: '0.05em',
            margin: 0,
            textAlign: 'center',
          }}>
            {MONTH_NAMES[displayMonth]}{' '}
            <span style={{ color: '#B5623E' }}>{displayYear}</span>
          </h2>

          <button
            onClick={() => setMonthOffset(o => o + 1)}
            aria-label="Next month"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              border: '1px solid #D4C9BC',
              borderRadius: '50%',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <ChevronRight size={16} color="#1C1814" />
          </button>
        </div>

        {/* Treatment selector */}
        <div style={{ marginBottom: '24px' }}>
          <p style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '11px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#8C7B6E',
            marginBottom: '8px',
          }}>
            Select a Treatment
          </p>
          <select
            value={selectedTreatment}
            onChange={e => setSelectedTreatment(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid #D4C9BC',
              backgroundColor: '#F7F3EE',
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 300,
              fontSize: '18px',
              color: '#1C1814',
              appearance: 'none',
              cursor: 'pointer',
              outline: 'none',
              borderRadius: '2px',
            }}
          >
            {SERVICES.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>

        <CalendarGrid
          year={displayYear}
          month={displayMonth}
          selectedDate={selectedDate}
          onDayClick={handleDayClick}
        />
      </div>

      {/* ── Right panel — fades in when a date is selected ── */}
      <AnimatePresence>
        {selectedDate && (
          <motion.div
            key="panel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
              minWidth: '280px',
              borderLeft: '1px solid #D4C9BC',
              paddingLeft: '48px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {confirmed ? (
              /* ── Confirmation state ── */
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', gap: '12px' }}>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 300, color: '#1C1814', margin: 0 }}>
                  You&apos;re booked.
                </p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#8C7B6E', lineHeight: 1.6, margin: 0 }}>
                  We&apos;ll see you soon. A confirmation has been sent to your email.
                </p>
              </div>
            ) : (
              /* ── Booking flow ── */
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

                {/* Selected date */}
                <div>
                  <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8C7B6E', marginBottom: '8px' }}>
                    Selected Date
                  </p>
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '28px', color: '#1C1814', margin: 0 }}>
                    {formattedDate}
                  </p>
                </div>

                {/* Time slots */}
                <div>
                  <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8C7B6E', marginBottom: '12px' }}>
                    Available Times
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {['10:00 AM', '11:30 AM', '2:00 PM', '3:30 PM'].map(time => (
                      <div
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        style={{
                          padding: '12px 16px',
                          border: `1px solid ${selectedTime === time ? '#B5623E' : '#D4C9BC'}`,
                          backgroundColor: selectedTime === time ? '#B5623E' : 'transparent',
                          color: selectedTime === time ? '#F7F3EE' : '#1C1814',
                          fontFamily: '"DM Sans", sans-serif',
                          fontSize: '14px',
                          cursor: 'pointer',
                          transition: 'all 200ms ease',
                          borderRadius: '2px',
                        }}
                      >
                        {time}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Esthetician */}
                {selectedTime && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8C7B6E', marginBottom: '12px' }}>
                      Your Esthetician
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {ESTHETICIANS.map(est => (
                        <div
                          key={est.name}
                          onClick={() => setSelectedEsthetician(est.name)}
                          style={{
                            padding: '12px 16px',
                            border: `1px solid ${selectedEsthetician === est.name ? '#B5623E' : '#D4C9BC'}`,
                            backgroundColor: selectedEsthetician === est.name ? '#FDF6F2' : 'transparent',
                            cursor: 'pointer',
                            transition: 'all 200ms ease',
                            borderRadius: '2px',
                          }}
                        >
                          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '18px', color: '#1C1814', margin: '0 0 2px 0' }}>
                            {est.name}
                          </p>
                          <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8C7B6E', margin: 0 }}>
                            {est.specialty}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Confirm */}
                {selectedTime && selectedEsthetician && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={() => setConfirmed(true)}
                    style={{
                      padding: '14px',
                      backgroundColor: '#1C1814',
                      color: '#F7F3EE',
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '11px',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      textAlign: 'center',
                      cursor: 'pointer',
                      borderRadius: '2px',
                    }}
                  >
                    Confirm Booking
                  </motion.div>
                )}

              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
