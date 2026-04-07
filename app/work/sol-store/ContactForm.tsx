'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <p className="font-mono text-sm text-black/60 pt-6">
        Thank you. We&rsquo;ll be in touch.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <label className="font-mono text-xs tracking-widest uppercase text-black/40 mb-1">
          Name
        </label>
        <input
          type="text"
          required
          placeholder="Your name"
          className="border-b border-black/20 bg-transparent text-sm py-3 w-full focus:outline-none focus:border-black font-dm-sans transition-colors placeholder:text-black/25"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-mono text-xs tracking-widest uppercase text-black/40 mb-1">
          Email
        </label>
        <input
          type="email"
          required
          placeholder="you@email.com"
          className="border-b border-black/20 bg-transparent text-sm py-3 w-full focus:outline-none focus:border-black font-dm-sans transition-colors placeholder:text-black/25"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-mono text-xs tracking-widest uppercase text-black/40 mb-1">
          Message
        </label>
        <textarea
          required
          rows={5}
          placeholder="Say hello..."
          className="border-b border-black/20 bg-transparent text-sm py-3 w-full focus:outline-none focus:border-black font-dm-sans transition-colors resize-none placeholder:text-black/25 h-32"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-black text-white font-mono text-sm tracking-widest uppercase py-3 hover:bg-black/80 transition-colors"
      >
        Send
      </button>
    </form>
  )
}
