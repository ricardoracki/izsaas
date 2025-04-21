'use client'
import { Button, ButtonProps } from '../ui/button'

import { signOut } from 'next-auth/react'

export function LogoutButton(props: ButtonProps) {
  return (
    <Button variant="outline" {...props} onClick={() => signOut()}>
      Logout
    </Button>
  )
}
