import { createSupabaseAdmin } from '@platzifc/config/supabase'
import { Button, Card, Badge } from '@platzifc/ui'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Platzi FC — El club de la comunidad',
}

async function getSupabaseStatus() {
  try {
    const supabase = createSupabaseAdmin()
    const { error } = await supabase.from('players').select('count', { count: 'exact', head: true })
    if (error) return 'error'
    return 'active'
  } catch (err) {
    return 'offline'
  }
}

export default async function HomePage() {
  const supabaseStatus = await getSupabaseStatus()

  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Hero Section */}
      <section style={{ textAlign: 'center', marginBottom: '6rem' }}>
        <Badge variant="primary" status="success" pulse pulseColor="#00d68f" style={{ marginBottom: '1.5rem' }}>
          FASE 1 — INFRAESTRUCTURA ACTIVA
        </Badge>
        
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-0.04em' }}>
          Platzi <span style={{ color: '#00d68f' }}>FC</span>
        </h1>
        
        <p style={{ fontSize: '1.25rem', color: '#8a9bb0', maxWidth: '600px', margin: '0 auto 3rem auto', lineHeight: 1.6 }}>
          La plataforma oficial del club de la comunidad tech. 
          Eventos en vivo, noticias de fichajes y el corazón de la hinchada digital.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Button variant="primary" size="lg">Ver Partidos</Button>
          <Button variant="outline" size="lg">Unirse al Club</Button>
        </div>
      </section>

      {/* Status Grid */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        <Card variant="glass">
          <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Infraestructura</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <StatusRow label="Monorepo" status="✅" />
            <StatusRow label="Vercel Deploy" status="✅" />
            <StatusRow 
              label="Supabase DB" 
              status={supabaseStatus === 'active' ? '✅' : supabaseStatus === 'error' ? '❌' : '🔄'} 
            />
          </div>
        </Card>

        <Card variant="glass">
          <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Próximos Pasos</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <StatusRow label="Sistema de Diseño" status="🔄" />
            <StatusRow label="Match Center" status="⏳" />
            <StatusRow label="Auth Fans" status="⏳" />
          </div>
        </Card>

        <Card variant="glass">
          <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Ecosistema</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <StatusRow label="Portal Web" status="✅" />
            <StatusRow label="Tienda Oficial" status="⏳" />
            <StatusRow label="Boletería" status="⏳" />
          </div>
        </Card>
      </section>
    </div>
  )
}

function StatusRow({ label, status }: { label: string; status: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <span style={{ fontSize: '0.9rem', color: '#8a9bb0' }}>{label}</span>
      <span>{status}</span>
    </div>
  )
}
