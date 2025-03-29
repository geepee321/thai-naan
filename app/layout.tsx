import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chatswood Catering – Exquisite Cuisine for Every Occasion',
  description: 'Premium catering service in Chatswood, NSW offering Western, Thai, Chinese cuisines for events of all sizes. Professional catering for corporate events, parties, and special occasions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 