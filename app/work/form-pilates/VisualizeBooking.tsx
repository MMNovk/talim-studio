'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

type DayType = {
  day: string
  classNames: string
}

const DAYS: DayType[] = [
  { day: '-1', classNames: 'bg-[#F0EBE4] opacity-40' },
  { day: '-2', classNames: 'bg-[#F0EBE4] opacity-40' },
  { day: '-3', classNames: 'bg-[#F0EBE4] opacity-40' },
  { day: '-4', classNames: 'bg-[#F0EBE4] opacity-40' },
  { day: '1',  classNames: 'bg-[#EDE8E2]' },
  { day: '2',  classNames: 'bg-[#EDE8E2]' },
  { day: '3',  classNames: 'bg-[#EDE8E2]' },
  { day: '4',  classNames: 'bg-[#F0EBE4] opacity-40' },
  { day: '5',  classNames: 'bg-[#F0EBE4] opacity-40' },
  { day: '6',  classNames: 'bg-[#EDE8E2]' },
  { day: '7',  classNames: 'bg-[#EDE8E2]' },
  { day: '8',  classNames: 'bg-[#EDE8E2]' },
  { day: '9',  classNames: 'bg-[#EDE8E2]' },
  { day: '10', classNames: 'bg-[#EDE8E2]' },
  { day: '11', classNames: 'bg-[#F0EBE4] opacity-40' },
  { day: '12', classNames: 'bg-[#F0EBE4] opacity-40' },
  { day: '13', classNames: 'bg-[#EDE8E2]' },
  { day: '14', classNames: 'bg-[#EDE8E2]' },
  { day: '15', classNames: 'bg-[#EDE8E2]' },
  { day: '16', classNames: 'bg-[#EDE8E2]' },
  { day: '17', classNames: 'bg-[#EDE8E2] border border-[#B5623E] cursor-pointer' },
  { day: '18', classNames: 'bg-[#F0EBE4] opacity-40' },
  { day: '19', classNames: 'bg-[#F0EBE4] opacity-40' },
  { day: '20', classNames: 'bg-[#EDE8E2]' },
  { day: '21', classNames: 'bg-[#EDE8E2]' },
  { day: '22', classNames: 'bg-[#EDE8E2]' },
  { day: '23', classNames: 'bg-[#EDE8E2] border border-[#B5623E] cursor-pointer' },
  { day: '24', classNames: 'bg-[#B5623E] cursor-pointer' },
  { day: '25', classNames: 'bg-[#F0EBE4] opacity-40' },
  { day: '26', classNames: 'bg-[#F0EBE4] opacity-40' },
  { day: '27', classNames: 'bg-[#EDE8E2] border border-[#B5623E] cursor-pointer' },
  { day: '28', classNames: 'bg-[#EDE8E2] border border-[#B5623E] cursor-pointer' },
  { day: '29', classNames: 'bg-[#EDE8E2] border border-[#B5623E] cursor-pointer' },
  { day: '30', classNames: 'bg-[#EDE8E2] border border-[#B5623E] cursor-pointer' },
  { day: '+1', classNames: 'bg-[#F0EBE4] opacity-40' },
  { day: '+2', classNames: 'bg-[#F0EBE4] opacity-40' },
]

const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

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

// ── Day cell ──────────────────────────────────────────────────────────────
interface DayProps {
  dayInfo: DayType
  isSelected: boolean
  onClick: () => void
}

function Day({ dayInfo, isSelected, onClick }: DayProps) {
  const isPlaceholder = dayInfo.day.startsWith('-') || dayInfo.day.startsWith('+')
  const isAvailable   = dayInfo.classNames.includes('cursor-pointer')
  const isPreFilled   = dayInfo.classNames.includes('bg-[#B5623E]')

  const textColor =
    (isSelected && isAvailable) || (isPreFilled && !isSelected)
      ? '#F7F3EE'
      : '#1C1814'

  return (
    <motion.div
      className={dayInfo.classNames}
      onClick={isAvailable ? onClick : undefined}
      whileHover={isAvailable ? { scale: 1.08 } : {}}
      transition={{ duration: 0.15 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: '1',
        fontFamily: '"DM Sans", sans-serif',
        fontSize: '13px',
        fontWeight: 400,
        color: textColor,
        ...(isSelected && isAvailable
          ? { backgroundColor: '#B5623E', border: '1px solid #B5623E' }
          : {}),
        cursor: isAvailable ? 'pointer' : 'default',
        borderRadius: '2px',
        userSelect: 'none',
      }}
    >
      {!isPlaceholder ? dayInfo.day : ''}
    </motion.div>
  )
}

// ── Calendar grid ─────────────────────────────────────────────────────────
interface CalendarGridProps {
  selectedDay: string | null
  onDayClick: (day: string) => void
}

function CalendarGrid({ selectedDay, onDayClick }: CalendarGridProps) {
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', marginBottom: '8px' }}>
        {daysOfWeek.map(d => (
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
              padding: '6px 0',
            }}
          >
            {d}
          </div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
        {DAYS.map((dayInfo, i) => (
          <Day
            key={i}
            dayInfo={dayInfo}
            isSelected={selectedDay === dayInfo.day}
            onClick={() => onDayClick(dayInfo.day)}
          />
        ))}
      </div>
    </div>
  )
}

// ── Interactive calendar ──────────────────────────────────────────────────
export function InteractiveCalendar() {
  const [moreView,            setMoreView]            = useState(false)
  const [selectedDay,         setSelectedDay]         = useState<string | null>(null)
  const [selectedTime,        setSelectedTime]        = useState<string | null>(null)
  const [selectedEsthetician, setSelectedEsthetician] = useState<string | null>(null)
  const [selectedTreatment,   setSelectedTreatment]   = useState(SERVICES[0])

  const handleDayClick = (day: string) => {
    setSelectedDay(day)
    setMoreView(true)
    setSelectedTime(null)
    setSelectedEsthetician(null)
  }

  return (
    <div style={{
      backgroundColor: '#F7F3EE',
      border: '1px solid #D4C9BC',
      borderRadius: '4px',
      overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', alignItems: 'stretch' }}>

        {/* ── Calendar column ── */}
        <div style={{ flex: 1, padding: '32px', minWidth: 0 }}>

          {/* Header row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
            <motion.h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 300,
              fontSize: '32px',
              color: '#1C1814',
              letterSpacing: '0.05em',
              margin: 0,
            }}>
              April <span style={{ color: '#B5623E' }}>2026</span>
            </motion.h2>

            <motion.button
              onClick={() => setMoreView(v => !v)}
              whileHover={{ scale: 1.02 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                border: '1px solid #D4C9BC',
                backgroundColor: 'transparent',
                padding: '8px 16px',
                cursor: 'pointer',
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#1C1814',
                borderRadius: '2px',
              }}
            >
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: moreView ? '#B5623E' : '#D4C9BC',
                transition: 'background-color 300ms ease',
                flexShrink: 0,
              }} />
              {moreView ? 'Close' : 'Book'}
            </motion.button>
          </div>

          {/* Treatment selector */}
          <div style={{ marginBottom: '32px' }}>
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
              onChange={(e) => setSelectedTreatment(e.target.value)}
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

          <CalendarGrid selectedDay={selectedDay} onDayClick={handleDayClick} />
        </div>

        {/* ── Side panel ── */}
        <AnimatePresence>
          {moreView && (
            <motion.div
              key="panel"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 320, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ borderLeft: '1px solid #D4C9BC', overflow: 'hidden', flexShrink: 0 }}
            >
              <div style={{ padding: '32px', width: 320 }}>
                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
                >

                  {/* Selected date */}
                  <div>
                    <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8C7B6E', marginBottom: '8px' }}>
                      Selected Date
                    </p>
                    <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '28px', color: '#1C1814', margin: 0 }}>
                      {selectedDay ? `April ${selectedDay}, 2026` : 'Select a date'}
                    </p>
                  </div>

                  {/* Time slots */}
                  {selectedDay && (
                    <div>
                      <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8C7B6E', marginBottom: '12px' }}>
                        Available Times
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {['10:00 AM', '11:30 AM', '2:00 PM', '3:30 PM'].map((time) => (
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
                  )}

                  {/* Esthetician */}
                  {selectedDay && selectedTime && (
                    <div>
                      <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8C7B6E', marginBottom: '12px' }}>
                        Your Esthetician
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {ESTHETICIANS.map((est) => (
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
                    </div>
                  )}

                  {/* Confirm */}
                  {selectedDay && selectedTime && selectedEsthetician && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
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

                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}
