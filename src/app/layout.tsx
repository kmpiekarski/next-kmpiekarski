import type { Metadata } from 'next'
import { Cousine } from 'next/font/google'
import { ApolloWrapper } from '@/lib/apolloWrapper'
import './globals.css'

const cousine = Cousine({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-cousine-mono',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'kmpiekarski.com',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cousine.className}>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  )
}
