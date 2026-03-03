import type { Metadata } from 'next'
import { Syne, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants'
import './globals.css'

const syne = Syne({ 
  subsets: ["latin"],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: `${SITE_NAME} | Professional Buying & Sourcing Services`,
  description: SITE_DESCRIPTION,
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon.svg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
