import { cn } from '@/utils/classnames'
import { Slot } from '@radix-ui/react-slot'
import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

const button = tv({
  base: [
    'flex flex-row items-center justify-center rounded-lg w-full cursor-pointer transition-all'
  ],
  variants: {
    variant: {
      primary: [
        'bg-custom-orange-secondary',
        'focus:bg-brand-primary-800 disabled:bg-brand-primary-500',
      ],
      link: [
        'text-custom-orange-primary hover:bg-custom-orange-primary hover:bg-opacity-[.16]',
      ],
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentPropsWithoutRef<'button'>, VariantProps<typeof button> {
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, className, variant, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp ref={ref} className={cn(button({ variant, className }))} {...props}>
        {children}
      </Comp>
    )
  },
)

Button.displayName = 'Button'
