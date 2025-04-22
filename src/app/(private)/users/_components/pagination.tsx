'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

type PaginationProps = {
  pages: number
  currentPage: number
  total: number
  perPage: number
  showInThisPage: number
}

export const Pagination = ({
  currentPage,
  pages,
  perPage,
  total,
  showInThisPage,
}: PaginationProps) => {
  const router = useRouter()

  function handleNavigation(page: number) {
    let url = new URL(window.location.href)
    url.searchParams.set('page', page.toString())
    router.replace(url.toString())
  }

  return (
    <div className="p-4 border-t flex items-center justify-between">
      <div className="text-sm text-muted-foreground">
        Mostrando <strong>{showInThisPage}</strong> de <strong>{total}</strong>{' '}
        usuários
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          disabled={currentPage === 1}
          onClick={() => handleNavigation(currentPage - 1)}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {Array.from({ length: pages }, (_, i) => i + 1).map((page) => (
          <Button
            key={`user-pagination-${page}`}
            variant="outline"
            size="sm"
            className="bg-primary text-primary-foreground"
            disabled={page == currentPage}
            onClick={() => handleNavigation(page)}
          >
            {page}
          </Button>
        ))}

        <Button
          variant="outline"
          size="icon"
          disabled={currentPage === pages}
          onClick={() => handleNavigation(currentPage + 1)}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
