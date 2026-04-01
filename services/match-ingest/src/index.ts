// Match Ingest Worker — Cloudflare Worker / Vercel Edge Function
// Receives webhooks from API-Football and writes events to Supabase

export interface Env {
  SUPABASE_URL: string
  SUPABASE_SERVICE_ROLE_KEY: string
  API_FOOTBALL_KEY: string
  WEBHOOK_SECRET: string
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    // Verify webhook authenticity
    const signature = request.headers.get('x-webhook-secret')
    if (signature !== env.WEBHOOK_SECRET) {
      return new Response('Unauthorized', { status: 401 })
    }

    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405 })
    }

    try {
      const event = await request.json<MatchEvent>()

      // Write event to Supabase match_events table
      const response = await fetch(`${env.SUPABASE_URL}/rest/v1/match_events`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: env.SUPABASE_SERVICE_ROLE_KEY,
          Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
          Prefer: 'return=minimal',
        },
        body: JSON.stringify({
          match_id: event.matchId,
          event_type: event.type,
          minute: event.minute,
          player_id: event.playerId,
          team_id: event.teamId,
          payload: event,
          created_at: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error(`Supabase error: ${response.status}`)
      }

      return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json' },
      })
    } catch (error) {
      console.error('Match ingest error:', error)
      return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      })
    }
  },
}

interface MatchEvent {
  matchId: string
  type: 'goal' | 'yellow_card' | 'red_card' | 'substitution' | 'kickoff' | 'halftime' | 'fulltime'
  minute: number
  playerId?: string
  teamId: string
  description?: string
}
