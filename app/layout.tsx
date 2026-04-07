import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Talim Studio',
  description: 'Fast, beautiful websites for small businesses and creatives. Built in NYC. Starting at $499, delivered in days.',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Talim Studio',
    description: 'Fast, beautiful websites for small businesses and creatives.',
    url: 'https://talimstudio.com',
    siteName: 'Talim Studio',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload all Feature108 tab images so first-click is instant */}
        <link rel="preload" as="image" href="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80" />
        <link rel="preload" as="image" href="https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&q=80" />
        <link rel="preload" as="image" href="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" />
        <link rel="preload" as="image" href="https://images.unsplash.com/photo-1491016253668-b48ef9f4e746?w=800&q=80" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-ink text-base leading-relaxed font-dm-sans">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
