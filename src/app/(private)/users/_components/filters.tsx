'use client'

import { Filter, Search } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const Filters = () => {
  return (
    <>
      <div className="p-4 border-b flex flex-col sm:flex-row gap-4">
        <form action="/users" className="flex gap-4 w-full" method="get">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              name="q"
              type="text"
              placeholder="Buscar por nome ou email..."
              className="pl-9"
            />
          </div>
          <div className="flex gap-2">
            <Select name="status">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filtrar por status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os status</SelectItem>
                <SelectItem value="PENDING">Pendentes</SelectItem>
                <SelectItem value="MEMBER">Membros</SelectItem>
                <SelectItem value="ADMIN">Administradores</SelectItem>
                <SelectItem value="BLOCKED">Bloqueados</SelectItem>
                <SelectItem value="BANNED">Banidos</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon" type="submit">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
