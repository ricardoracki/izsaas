import { cn } from '@/lib/utils'

export const Logo = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <span className={cn('font-bold text-xl ', className)} {...props}>
    {'<IZSaaS>'}
  </span>
)
