import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ayesha Summaiyya — Portfolio',
  description:
    'AI Engineer & Product Designer. RAG systems, fraud intelligence, clinical ML. Published ML researcher.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
