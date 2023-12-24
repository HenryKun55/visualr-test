import { cn } from '@/utils/classnames'
import { Slot } from '@radix-ui/react-slot'
import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

const button = tv({
  base: [
    'flex items-center justify-center ease-in duration-300 disabled:opacity-50 disabled:cursor-not-allowed',
    'focus:border-0 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 fw-500',
  ],
  variants: {
    variant: {
      primary: [
        'bg-brand-primary-500 hover:bg-brand-primary-600 text-white',
        'focus:bg-brand-primary-800 disabled:bg-brand-primary-500',
      ],
      secondary: [
        'bg-functional-soft-200 hover:bg-functional-soft-100 text-black',
        'focus:bg-functional-soft-200 disabled:bg-functional-soft-100',
      ],
      outlined: [
        'bg-white border border-functional-soft-100 hover:border-functional-soft-200',
        'focus:bg-functional-soft-200 disabled:bg-white',
      ],
      ghost: 'bg-transparent hover:bg-functional-soft-100 focus:bg-functional-soft-100 disabled:bg-transparent',
      destructive: [
        'bg-feedback-error-700 hover:bg-feedback-error-800 text-white focus:bg-feedback-error-800',
        'disabled:bg-functional-soft-100 disabled:text-black',
      ],
    },
    size: {
      sm: 'py-1.5 px-3 text-sm gap-1 rounded-lg min-w-[48px]',
      md: 'py-2 px-4 text-base gap-2 rounded-xl min-w-[56px]',
      lg: 'py-3 px-4 text-base gap-2 rounded-xl min-w-[163px]',
      xl: 'py-4 px-5 text-base gap-2 rounded-xl min-w-[178px]',
    },
    loading: {
      true: 'cursor-not-allowed align-items-center justify-center',
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
  ({ asChild, className, variant, size, children, loading = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp ref={ref} className={cn(button({ variant, size, className, loading }))} {...props}>
        {children}
      </Comp>
    )
  },
)

Button.displayName = 'Button'
