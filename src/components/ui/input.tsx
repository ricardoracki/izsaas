'use client'

import * as React from 'react'

import { Button } from './button'
import { DynamicIcon } from 'lucide-react/dynamic'
import { cn } from '@/lib/utils'

type InputProps = {
  hideRevalPassword?: boolean
} & React.ComponentProps<'input'>

function Input({
  className,
  hideRevalPassword,
  type = 'text',
  ...props
}: InputProps) {
  const [inputType, setInputType] = React.useState(type)

  return (
    <div className="relative">
      <input
        type={inputType}
        data-slot="input"
        className={cn(
          'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          className
        )}
        {...props}
      />
      {type == 'password' && !hideRevalPassword && (
        <Button
          size="icon"
          variant="ghost"
          type="button"
          className="absolute top-0 right-0 z-10 "
          onClick={() =>
            setInputType(inputType === 'password' ? 'text' : 'password')
          }
          aria-label="Toggle password visibility"
        >
          <DynamicIcon name={inputType === 'password' ? 'eye' : 'eye-off'} />
        </Button>
      )}
    </div>
  )
}

export { Input }
