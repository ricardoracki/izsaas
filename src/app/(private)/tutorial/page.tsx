import { Edit, Share2, Trash } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MarkdownReader } from '@/components/markdown-reader'
import { Separator } from '@/components/ui/separator'

const mark = `<ol><li><b>*Hola*</b></li><li><br></li></ol>
`

export default function Dashboard() {
  return (
    <>
      <div className="flex justify-between flex-nowrap overflow-hidden">
        <h1 className="text-3xl font-bold mb-2 text-ellipsis line-clamp-1">
          Calibrar detector de marca Autonics
        </h1>
        <div className="flex gap-3 ml-3">
          <Button size="icon" variant="outline">
            <Share2 />
          </Button>
          <Button size="icon" variant="outline">
            <Edit />
          </Button>
        </div>
      </div>
      <p className="text-lg text-muted-foreground">
        Como calibrar um detector de marca(foto-célula)
      </p>
      <div className="flex flex-wrap gap-1">
        <Badge className="text-xs" variant="secondary">
          Calibração
        </Badge>
        <Badge className="text-xs" variant="secondary">
          Detector de marca
        </Badge>
        <Badge className="text-xs" variant="secondary">
          Foto célula
        </Badge>
      </div>

      <div className="my-6 px-6">
        <MarkdownReader>{mark}</MarkdownReader>
      </div>

      <Separator className="mt-2 mb-6" />

      <div className="flex gap-3">
        <Button variant="ghost">
          <Edit /> Editar tutorial
        </Button>
        <Button variant="ghost">
          <Share2 /> Compartilhar
        </Button>
        <Button variant="destructive">
          <Trash /> Excluir
        </Button>
      </div>
    </>
  )
}
