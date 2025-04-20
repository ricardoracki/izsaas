'use client'
import { Button, ButtonProps } from '../ui/button'

import { logout } from './actions'

export function LogoutButton(props: ButtonProps) {
  return (
    <Button variant="outline" {...props} onClick={logout}>
      Logout
    </Button>
  )
}
