import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '360° Interactive Virtual Tour',
  description: 'Explore stunning 360° panoramic views in an interactive virtual tour experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

