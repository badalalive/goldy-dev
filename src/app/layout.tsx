import './globals.css'
import '@rainbow-me/rainbowkit/styles.css';
import type { Metadata } from 'next'
import { Providers } from './providers'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

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
      <body className="bg-[#1E1E1E] mx-12">
       <Providers>{children}</Providers>
       </body>
    </html>
  )
}
