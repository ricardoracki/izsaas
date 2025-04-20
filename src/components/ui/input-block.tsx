'use client'

import {
  HTMLAttributes,
  InputHTMLAttributes,
  Ref,
  forwardRef,
  useState,
} from 'react'

import { cn } from '@/lib/utils'

const Input = forwardRef(
  (
    { className, ...props }: HTMLAttributes<HTMLDivElement>,
    ref: Ref<HTMLDivElement>
  ) => <div className={cn('relative', className)} ref={ref} {...props} />
)

const InputFiled = forwardRef(
  (
    {
      className,
      type = 'text',
      ...props
    }: InputHTMLAttributes<HTMLInputElement>,
    ref: Ref<HTMLInputElement>
  ) => {
    const [inputType, setInputType] = useState(type)

    return (
      <input
        className={cn('', className)}
        ref={ref}
        type={inputType}
        {...props}
      />
    )
  }
)

export { Input }
