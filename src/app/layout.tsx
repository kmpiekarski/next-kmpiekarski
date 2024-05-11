import './globals.css'

import type { Metadata } from 'next'
import { Cousine } from 'next/font/google'

const cousine = Cousine({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-cousine-mono',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Kenneth M. Piekarski',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cousine.className}>{children}</body>
    </html>
  )
}
