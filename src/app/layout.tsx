import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Goldy Dev',
  description: 'Goldy Token',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0D0907] mx-12">{children}</body>
    </html>
  )
}
