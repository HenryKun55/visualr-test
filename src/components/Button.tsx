import { cn } from '@/utils/classnames'
import { Slot } from '@radix-ui/react-slot'
import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

const button = tv({
  base: [
    'flex flex-row items-center justify-center rounded-lg cursor-pointer transition-all p-3.5',
    'text-sm font-semibold'
  ],
  variants: {
    variant: {
      primary: [
        'bg-custom-orange-primary',
        'hover:bg-[#FE907D]'
      ],
      link: [
        'text-custom-orange-primary',
        'hover:bg-opacity-[.16] hover:bg-[#FE907D]'
      ],
      outlined: [
        'text-custom-orange-primary border border-custom-orange-secondary',
        'hover:bg-custom-orange-secondary hover:bg-opacity-[.16]',
      ],
    },
    size: {
      sm: 'w-12 h-12',
      md: 'w-14 h-14',
      lg: 'w-16 h-16,',
      full: 'w-full',
    },
    disabled: {
      true: 'disabled:opacity-70 cursor-not-allowed'
    },
    shadow: {
      true: 'shadow-btn'
    }
  },
  compoundVariants: [
    {
      size: ['sm', 'md', 'lg'],
      className: 'p-0'
    }
  ],
  defaultVariants: {
    size: 'full',
    variant: 'primary',
  },
})

export interface ButtonProps extends ComponentPropsWithoutRef<'button'>, VariantProps<typeof button> {
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, type = 'button', className, size, variant, children, disabled, shadow, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        type={type}
        className={cn(button({ variant, size, className, disabled, shadow }))}
        disabled={disabled} {...props}
      >
        {children}
      </Comp>
    )
  },
)

Button.displayName = 'Button'
