import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { db } from '@/database/client'

export const credentialsProvider = Credentials({
  name: 'credentials',
  credentials: {
    email: { label: 'email' },
    password: { label: 'password', type: 'password' },
  },

  async authorize(credentials) {
    try {
      if (!credentials?.email || !credentials?.password) {
        return null
      }
      const user = await db.user.findFirst({
        where: {
          email: credentials.email,
        },
      })
      if (!user) return null
      if (!bcrypt.compareSync(credentials.password, user.password)) return null

      const { password, ...userData } = user
      return userData
    } catch (error) {
      console.log(error)
      return null
    }
  },
})
