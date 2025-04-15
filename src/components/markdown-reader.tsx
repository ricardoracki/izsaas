import { AspectRatio } from './ui/aspect-ratio'
import { HTMLAttributes } from 'react'
import Image from 'next/image'
import Markdown from 'react-markdown'

type Props = HTMLAttributes<HTMLDivElement> & {
  children: string | null
}

export const MarkdownReader = ({ children, className }: Props) => {
  return (
    <div className="[&_ol]:list-decimal [&_ul]:list-disc [&_h1]:text-xl [&_h2]:text-lg [&_h3]:text-base [&_h4]:text-base [&_h5]:text-sm [&_h6]:text-sm [&_h1]:font-bold">
      <Markdown
        components={{
          img: ({ src, alt }) =>
            src && (
              <AspectRatio ratio={16 / 9} className="bg-muted my-3">
                <Image
                  src={src}
                  alt={alt || 'Tutorial picture'}
                  fill
                  className="h-full w-full rounded-md object-cover"
                />
              </AspectRatio>
            ),
        }}
      >
        {children}
      </Markdown>
    </div>
  )
}
