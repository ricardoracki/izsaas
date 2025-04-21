import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getUserInitials(name?: string | null) {
  if (!name) return 'CN'
  const names = name.split(' ')

  if (names.length == 1) {
    return names[0].charAt(0).concat(names[0].charAt(1)).toUpperCase()
  }

  return names[0].charAt(0).concat(names[1].charAt(0)).toUpperCase()
}
