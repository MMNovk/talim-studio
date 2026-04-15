'use client'

import * as React from 'react'

const SERVICES = ['Classic Manicure', 'Gel Extensions', 'Nail Art Add-on', 'Pedicure']

export function VelaBookingForm() {
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto text-center py-16 px-4">
        <p className="text-xl font-bold text-ink">Thanks — we'll be in touch soon.</p>
        <p className="text-ink/40 mt-2 text-sm">See you at the studio.</p>
      </div>
    )
  }

  const inputClass =
    'w-full border border-stone-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/30 focus:outline-none focus:border-ink/40 transition-colors'

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto w-full flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="font-mono text-[10px] text-ink/40 tracking-widest uppercase mb-1.5 block">Name</label>
          <input type="text" required placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label className="font-mono text-[10px] text-ink/40 tracking-widest uppercase mb-1.5 block">Email</label>
          <input type="email" required placeholder="your@email.com" className={inputClass} />
        </div>
      </div>

      <div>
        <label className="font-mono text-[10px] text-ink/40 tracking-widest uppercase mb-1.5 block">Service</label>
        <select required defaultValue="" className={inputClass}>
          <option value="" disabled>Select a service</option>
          {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div>
        <label className="font-mono text-[10px] text-ink/40 tracking-widest uppercase mb-1.5 block">Message</label>
        <textarea
          placeholder="Anything we should know — preferred dates, nail inspo, questions..."
          rows={4}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-3 text-xs font-bold tracking-widest hover:bg-ink/80 transition-colors"
      >
        SEND INQUIRY
      </button>
    </form>
  )
}
