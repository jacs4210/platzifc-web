// Platzi FC — Shared constants across all apps

export const PLATZIFC = {
  name: 'Platzi FC',
  tagline: 'El club de la comunidad',
  url: 'https://www.platzifc.com',
  shopUrl: 'https://shop.platzifc.com',
  ticketsUrl: 'https://tickets.platzifc.com',
  social: {
    twitter: 'https://twitter.com/platzifc',
    instagram: 'https://instagram.com/platzifc',
    youtube: 'https://youtube.com/@platzifc',
  },
} as const

export const CACHE_TTL = {
  standings: 30,       // seconds — tabla de posiciones
  schedule: 1800,      // seconds — calendario
  players: 3600,       // seconds — plantilla
  news: 86400,         // seconds — noticias
  static: 31536000,    // seconds — assets estáticos (1 año)
} as const

export const SUPABASE_TABLES = {
  tickets: 'tickets',
  orders: 'orders',
  players: 'players',
  matches: 'matches',
  standings: 'standings',
  matchEvents: 'match_events',
  userProfiles: 'user_profiles',
  seats: 'seats',
} as const

export const KAFKA_TOPICS = {
  sportEvents: 'sport.events.normalized',
  commerceOrders: 'commerce.orders',
  ticketReservations: 'tickets.reservations',
} as const

export const USER_ROLES = {
  fan: 'fan',
  member: 'member',
  premium: 'premium',
  staffFinance: 'staff_finance',
  staffLegal: 'staff_legal',
  admin: 'admin',
} as const

export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES]
