import type { Metadata } from 'next'
import { Bricolage_Grotesque, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Modern Landing Page',
  description: 'A modern Landing Page',
}

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ["400", "800"]
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={bricolage.className}>
      <body>{children}</body>
    </html>
  )
}
