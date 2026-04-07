import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Talim Studio — Web Design for Small Businesses & Creatives',
  description:
    'Talim Studio builds fast, beautiful websites for small businesses and creatives. Based in New York City. Starting at $500.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='white'/><text x='50' y='50' font-family='sans-serif' font-weight='900' font-size='48' fill='%230e0e0e' text-anchor='middle' dominant-baseline='central'>TS</text></svg>"
        />
      </head>
      <body className="bg-white text-ink text-base leading-relaxed">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
