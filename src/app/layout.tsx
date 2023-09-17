import './globals.css'
import '@rainbow-me/rainbowkit/styles.css';
import type { Metadata } from 'next'
import { Providers } from './providers'


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
      <body className="bg-[#0D0907] mx-12">       
       <Providers>{children}</Providers>
       </body>
    </html>
  )
}
