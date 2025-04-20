'use server'

import bcrypt from 'bcryptjs'
import { db } from '@/database/client'
import { env } from '@/env'

type User = {
  name: string
  email: string
  password: string
}
export async function registerUser({ email, name, password }: User) {
  const pass = bcrypt.hashSync(password, env.PASSWORD_SALT)

  const user = await db.user.create({
    data: {
      name,
      email,
      password: pass,
    },
    select: {
      id: true,
      name: true,
      email: true,
    },
  })

  return { user }
}
