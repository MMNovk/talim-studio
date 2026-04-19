import { Playfair_Display, Cormorant_Garamond } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export default function ClarteLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${playfair.variable} ${cormorant.variable}`}>{children}</div>
}
