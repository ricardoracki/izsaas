'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

type LoginParams = {
  email: string
  password: string
  redirectTarget?: string
}

export async function login({
  email,
  password,
  redirectTarget = '/home',
}: LoginParams) {
  const cookiesStore = await cookies()

  // TODO implementar validação de usuário e geração de token JWT

  cookiesStore.set('token', 'Algum token aqui')

  return redirect(redirectTarget)
}
