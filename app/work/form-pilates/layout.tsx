import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond } from 'next/font/google'
import ClarteScroll from './ClarteScroll'
import PageLoader from '@/components/ui/loader'

export const metadata: Metadata = {
  title: 'Clarté — Luxury Facial Studio, Tribeca NYC',
  description: 'Precision skincare in Tribeca. Appointments by design, results by intention.',
}

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export default function ClarteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${playfair.variable} ${cormorant.variable}`}>
      <PageLoader />
      <ClarteScroll />
      {children}
    </div>
  )
}
