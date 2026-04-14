'use client'

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface Contact2Props {
  title?: string
  description?: string
  phone?: string
  email?: string
}

const fieldCls =
  "w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors"

export const Contact2 = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities.",
  phone = "(123) 34567890",
  email = "email@example.com",
}: Contact2Props) => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="py-24 px-8 md:px-14 lg:px-20">
      <div className="mx-auto max-w-screen-xl flex flex-col lg:flex-row justify-between gap-16">

        {/* Left: text + contact details */}
        <div className="flex flex-col justify-between gap-12 max-w-sm">
          <div>
            <h1 className="text-5xl lg:text-6xl font-semibold mb-3 text-white leading-tight">
              {title}
            </h1>
            <p className="text-neutral-400 leading-relaxed">{description}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">Contact Details</h3>
            <ul className="flex flex-col gap-2 text-sm text-neutral-400">
              <li>
                <span className="font-semibold text-white">Phone: </span>
                {phone}
              </li>
              <li>
                <span className="font-semibold text-white">Email: </span>
                <a href={`mailto:${email}`} className="underline hover:text-white transition-colors">
                  {email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: form or success */}
        <div className="flex-1 max-w-2xl flex flex-col gap-5 rounded-xl border border-white/10 p-8 md:p-10 bg-white/[0.03]">
          {submitted ? (
            <div className="flex flex-col items-center justify-center flex-1 min-h-[280px] text-center gap-3">
              <p className="text-white text-2xl font-semibold">Thanks!</p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                I&rsquo;ll get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex gap-4">
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="firstname" className="text-white/70 text-xs tracking-wider uppercase">First Name</Label>
                  <input className={fieldCls} type="text" id="firstname" placeholder="First Name" />
                </div>
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="lastname" className="text-white/70 text-xs tracking-wider uppercase">Last Name</Label>
                  <input className={fieldCls} type="text" id="lastname" placeholder="Last Name" />
                </div>
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="email" className="text-white/70 text-xs tracking-wider uppercase">Email</Label>
                <input className={fieldCls} type="email" id="email" placeholder="your@email.com" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="subject" className="text-white/70 text-xs tracking-wider uppercase">Subject</Label>
                <input className={fieldCls} type="text" id="subject" placeholder="Subject" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="message" className="text-white/70 text-xs tracking-wider uppercase">Message</Label>
                <textarea
                  className={`${fieldCls} min-h-[120px] resize-none`}
                  id="message"
                  placeholder="Describe what you're thinking — style, size, placement, references"
                />
              </div>
              <Button type="submit" className="w-full bg-white text-black hover:bg-neutral-200 font-semibold tracking-widest uppercase text-xs py-5">
                Send Message
              </Button>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}
