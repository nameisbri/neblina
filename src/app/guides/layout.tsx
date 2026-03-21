import type { Metadata } from 'next'
import { DisableCursor } from './DisableCursor'

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <DisableCursor />
      {children}
    </>
  )
}
