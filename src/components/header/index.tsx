import { AppHeader } from './app-header'
import { getServerAuthSession } from '@/auth'

export async function Header() {
  const session = await getServerAuthSession()

  return <AppHeader user={session?.user} />
}
