'use server'

import { UserStatus, User as UserType } from '@/database/generated'

import { db } from '@/database/client'
import { revalidatePath } from 'next/cache'

export async function setUserStatus(
  user: Omit<UserType, 'password'>,
  status: UserStatus
) {
  await db.user.update({
    data: { status },
    where: { id: user.id },
  })

  revalidatePath('/users')
}

export async function deleteUser(id: string) {
  await db.user.delete({ where: { id } })
  revalidatePath('/users')
}
