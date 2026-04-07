'use client'

import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    await fetch('https://formspree.io/f/mkopybrk', {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    })
    setSubmitted(true)
  }

  return (
    <section className="bg-white px-12 py-[120px] max-md:px-6 max-md:py-20" id="contact">
      <div className="max-w-xl mx-auto">
        <h2 className="font-black text-[clamp(2.5rem,5vw,4rem)] leading-tight tracking-tighter text-ink mb-4">
          Let's get started
        </h2>
        <p className="text-base text-ink/40 leading-relaxed mb-12">
          Share what you're building. I'll get back to you within 24 hours.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-2xl font-semibold">Got it.</p>
            <p className="text-muted-foreground mt-2">I'll be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} action="https://formspree.io/f/mkopybrk" method="POST" className="flex flex-col gap-10 max-md:gap-7">
            <div className="flex flex-col gap-1">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full bg-transparent border-b border-ink/20 pb-3 text-ink text-base placeholder:text-ink/30 outline-none focus:border-ink/50 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full bg-transparent border-b border-ink/20 pb-3 text-ink text-base placeholder:text-ink/30 outline-none focus:border-ink/50 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1">
              <textarea
                name="message"
                placeholder="Tell me about your project"
                required
                rows={5}
                className="w-full bg-transparent border-b border-ink/20 pb-3 text-ink text-base placeholder:text-ink/30 outline-none focus:border-ink/50 transition-colors resize-none"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-fit flex items-center gap-3 group"
              >
                <div className="w-14 h-14 rounded-full border border-ink/20 flex items-center justify-center group-hover:bg-ink transition-all duration-500">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="stroke-ink group-hover:stroke-white transition-colors duration-500"
                  >
                    <path
                      d="M7 17L17 7M17 7H8M17 7V16"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-sm font-bold text-ink">Send it</span>
              </button>
            </div>
          </form>
        )}

        <p className="mt-16 text-base text-ink/40">
          Or reach out to me directly —{' '}
          <a href="mailto:hello@talimstudio.com" className="text-ink underline-offset-4 hover:underline">
            hello@talimstudio.com
          </a>
        </p>
      </div>
    </section>
  )
}
