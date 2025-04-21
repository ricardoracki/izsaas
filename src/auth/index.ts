import { DefaultSession, NextAuthOptions, getServerSession } from 'next-auth'

import { credentialsProvider } from './providers/credentials-provider'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: User
  }
}

export type User = {
  id: string
} & DefaultSession['user']

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },

  callbacks: {
    jwt: ({ token, user }) => {
      const customUser = user as any
      if (user) {
        return {
          ...token,
          id: customUser.id,
          image: customUser.image || '',
        }
      }

      return token
    },

    session: ({ session, token }) => {
      console.log('session')
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          image: token.image,
        },
      } as any
    },
  },
  pages: {
    signIn: '/login',
  },

  providers: [credentialsProvider],
}

export const getServerAuthSession = () => getServerSession(authOptions)
