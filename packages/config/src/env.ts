import { z } from 'zod'

// Environment variable schema — validated at runtime
// All apps import this to ensure required vars are present at startup

const envSchema = z.object({
  // Supabase
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1).optional(),

  // MongoDB Atlas
  MONGODB_URI: z.string().url().optional(),

  // Upstash Redis
  UPSTASH_REDIS_REST_URL: z.string().url().optional(),
  UPSTASH_REDIS_REST_TOKEN: z.string().min(1).optional(),

  // Upstash Kafka
  UPSTASH_KAFKA_REST_URL: z.string().url().optional(),
  UPSTASH_KAFKA_REST_USERNAME: z.string().min(1).optional(),
  UPSTASH_KAFKA_REST_PASSWORD: z.string().min(1).optional(),

  // API Football
  API_FOOTBALL_KEY: z.string().min(1).optional(),

  // Resend (email)
  RESEND_API_KEY: z.string().min(1).optional(),

  // Stripe
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().min(1).optional(),
  STRIPE_SECRET_KEY: z.string().min(1).optional(),
  STRIPE_WEBHOOK_SECRET: z.string().min(1).optional(),

  // MercadoPago
  MERCADOPAGO_ACCESS_TOKEN: z.string().min(1).optional(),

  // App
  NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),
  NEXT_PUBLIC_SHOP_URL: z.string().url().default('http://localhost:3001'),
  NEXT_PUBLIC_TICKETS_URL: z.string().url().default('http://localhost:3002'),
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
})

export type Env = z.infer<typeof envSchema>

// Use this function inside each app's startup to validate env
export function validateEnv(): Env {
  const parsed = envSchema.safeParse(process.env)
  if (!parsed.success) {
    console.error('❌ Invalid environment variables:', parsed.error.flatten().fieldErrors)
    throw new Error('Invalid environment variables')
  }
  return parsed.data
}
