import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

export const NavPortal = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => (
  <div
    className={cn(
      'fixed inset-0 bg-background/60 backdrop-blur-sm z-50 overflow-hidden',
      className
    )}
    {...props}
  />
)

export const NavContainer = ({
  className,
  ...props
}: React.ComponentProps<'nav'>) => (
  <nav
    className={cn(
      'h-full w-full max-w-3/4 bg-background border-r border-border dashed flex flex-col overflow-x-hidden transition-all',
      className
    )}
    {...props}
  />
)

export const NavList = ({
  className,
  ...props
}: React.ComponentProps<'ul'>) => (
  <ul className={cn('flex-1 flex flex-col gap-1', className)} {...props} />
)

export const NavItem = ({
  className,
  ...props
}: React.ComponentProps<'li'>) => (
  <li className={cn('group p-2 px-3 transition-all', className)} {...props} />
)

export const NavItemLink = ({
  className,
  asChild,
  active,
  ...props
}: React.ComponentProps<'a'> & { asChild?: boolean; active?: boolean }) => {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      className={cn(
        'flex gap-3 items-center text-muted-foreground transition-all [&_svg]:text-muted-foreground',
        { 'text-text [&_svg]:text-primary': active },
        className
      )}
      {...props}
    />
  )
}
