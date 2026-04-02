import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { MasterLayout } from '@platzifc/ui'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Platzi FC — El club de la comunidad',
    template: '%s | Platzi FC',
  },
  description:
    'Plataforma oficial de Platzi FC. Noticias, partidos en vivo, fichajes y más del club de la comunidad tech.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? 'https://platzifc.js.org'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body style={{ margin: 0, padding: 0 }}>
        <MasterLayout>{children}</MasterLayout>
      </body>
    </html>
  )
}
