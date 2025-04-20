import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

export const credentialsProvider = Credentials({
  name: 'credentials',
  credentials: {
    username: { label: 'username' },
    password: { label: 'password', type: 'password' },
  },
  async authorize(credentials) {
    try {
      if (!credentials?.username || !credentials?.password) {
        return null
      }
      // const user = await db.users.findFirst({
      //   select: {
      //     id: true,
      //     username: true,
      //     password: true,
      //     name: true,
      //     email: true,
      //     image: true,
      //   },
      //   where: {
      //     username: credentials.username,
      //   },
      // })

      const user: any = null
      if (!user || !bcrypt.compareSync(credentials.password, user.password))
        return null

      const { password, ...userData } = user

      return userData
    } catch (error) {
      return null
    }
  },
})
