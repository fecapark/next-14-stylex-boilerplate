import type { Metadata } from 'next'

import '@/styles/global.css'
import * as stylex from '@stylexjs/stylex'

export const metadata: Metadata = {
  title: '100 Days Note',
  description:
    'Discover true aspirations and goals in 100 days of repetitive goal writting.',
}

const layout = stylex.create({
  html: {
    width: '100%',
  },
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html style={layout.html} lang="en">
      <body>{children}</body>
    </html>
  )
}
