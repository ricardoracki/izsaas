import { z } from 'zod'

const envSchema = z.object({
  PASSWORD_SALT: z.coerce.number(),
  DATABASE_URL: z.string().url(),
  NEXTAUTH_URL: z.string(),
  NEXTAUTH_SECRET: z.string(),
})

export const env = envSchema.parse(process.env)

export type Env = z.infer<typeof envSchema>
