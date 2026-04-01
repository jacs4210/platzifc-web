import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Platzi FC — El club de la comunidad',
}

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0d1b2a 0%, #1b2d40 50%, #0d1b2a 100%)',
        fontFamily: 'Inter, system-ui, sans-serif',
        color: '#ffffff',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      {/* Badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'rgba(0,214,143,0.12)',
          border: '1px solid rgba(0,214,143,0.3)',
          borderRadius: '9999px',
          padding: '0.375rem 1rem',
          fontSize: '0.8rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#00d68f',
          marginBottom: '2rem',
          fontWeight: 600,
        }}
      >
        <span>⚽</span> Fase 1 — Infraestructura activa
      </div>

      {/* Heading */}
      <h1
        style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight: 900,
          lineHeight: 1.05,
          marginBottom: '1.5rem',
          letterSpacing: '-0.03em',
        }}
      >
        Platzi{' '}
        <span style={{ color: '#00d68f' }}>FC</span>
      </h1>

      {/* Tagline */}
      <p
        style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
          color: '#8a9bb0',
          maxWidth: '480px',
          marginBottom: '3rem',
          lineHeight: 1.7,
        }}
      >
        La plataforma oficial del club de la comunidad tech.
        Próximamente: noticias, partidos en vivo, tienda y boletería.
      </p>

      {/* Status Pills */}
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {[
          { label: 'Monorepo', status: '✅' },
          { label: 'CI/CD', status: '✅' },
          { label: 'Supabase', status: '🔄' },
          { label: 'CMS', status: '🔄' },
          { label: 'Match Center', status: '⏳' },
        ].map(({ label, status }) => (
          <span
            key={label}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '9999px',
              padding: '0.375rem 0.875rem',
              fontSize: '0.85rem',
              color: '#8a9bb0',
            }}
          >
            {status} {label}
          </span>
        ))}
      </div>

      {/* Glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(0,214,143,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
    </main>
  )
}
