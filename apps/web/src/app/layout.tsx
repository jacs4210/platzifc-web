import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
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
    'Plataforma oficial de Platzi FC. Noticias, partidos en vivo, fichajes, tabla de posiciones y más del club de la comunidad tech.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? 'https://platzifc.js.org'),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://platzifc.js.org',
    siteName: 'Platzi FC',
    title: 'Platzi FC — El club de la comunidad',
    description: 'Plataforma oficial de Platzi FC. Noticias, partidos en vivo, fichajes y más.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@platzifc',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
