import { z } from 'zod'

/**
 * Platzi FC — Environment Variable Schema
 * This schema validates all environment variables used in the monorepo.
 * Apps should call `validateEnv()` during their startup sequence.
 */

const envSchema = z.object({
  // Supabase
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1).optional(),

  // App URLs & Environments
  NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),
  NEXT_PUBLIC_SHOP_URL: z.string().url().default('http://localhost:3001'),
  NEXT_PUBLIC_TICKETS_URL: z.string().url().default('http://localhost:3002'),
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
})

export type Env = z.infer<typeof envSchema>

/**
 * Validates process.env against the predefined schema.
 * Throws an error with readable field messages if validation fails.
 */
export function validateEnv(): Env {
  const parsed = envSchema.safeParse(process.env)
  
  if (!parsed.success) {
    const errorDetails = JSON.stringify(parsed.error.flatten().fieldErrors, null, 2)
    console.error('❌ Environment validation failed:', errorDetails)
    
    // In development, error loud and clear
    if (process.env.NODE_ENV === 'development') {
      throw new Error(`Invalid environment variables: ${errorDetails}`)
    }
    
    return process.env as unknown as Env
  }

  return parsed.data
}
