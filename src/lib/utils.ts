import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Retorna as iniciais do nome passado em uppercase
 * @param name
 * @returns
 */
export function getUserInitials(name?: string | null) {
  if (!name) return 'CN'
  const names = name.split(' ')

  if (names.length == 1) {
    return names[0].substring(0, 2).toUpperCase()
  }

  return names[0].charAt(0).concat(names[1].charAt(0)).toUpperCase()
}

/**
 * Retorna o campo da queryString em formato numérico
 * @param val string
 * @returns number | undefined
 */
export function getIntQueryValue(val?: string) {
  return (val && Number.isInteger(Number(val)) && Number(val)) || undefined
}
