import { cn } from '@/utils/classnames'
import type { ComponentPropsWithoutRef, ElementRef, ReactNode } from 'react'
import { forwardRef } from 'react'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

const input = tv({
  base: [
    'p-[14px] rounded-lg transition-all', 
    'text-sm font-normal text-custom-gray-lighter  placeholder:text-[#898989] caret-white',
    'focus:outline-none'
  ],
  variants: {
    variant: {
      default: [
        'bg-[#2D303E] border border-[#393C49]',
        'hover:bg-[#373A48] hover:border-[#393C49]', 
        'focus:bg-[#1F1D2B] focus:border-custom-gray-light',
      ]
    },
    size: {
      sm: 'w-12',
      md: 'w-[220px]',
      lg: 'w-[297px]',
      full: 'w-full',
    },
    iconPosition: {
      left: 'pl-10',
      right: 'pr-10',
    },
    disabled: {
      true: ['opacity-50 cursor-not-allowed'],
    },
  },
  compoundVariants: [
    {
      size: 'sm',
      className: 'text-center'
    }
  ],
  defaultVariants: {
    variant: 'default',
  },
})

const iconVariants = tv({
  base: 'absolute top-1/2 -translate-y-1/2',
  variants: {
    iconPosition: {
      left: 'left-4',
      right: 'right-4',
    },
    errorOrWarning: {
      true: '',
    },
  },
  defaultVariants: {
    iconPosition: 'left',
  },
})

export interface InputProps extends Omit<ComponentPropsWithoutRef<'input'>, 'size'>, VariantProps<typeof input> {
  inputClassName?: string
  icon?: ReactNode
}

export const Input = forwardRef<ElementRef<'input'>, InputProps>(
  ({ icon, iconPosition, inputClassName, className, variant, disabled, size, ...props }, ref) => {
    return (
      <div className={cn('relative', className)}>
        {icon && (
          <div className={iconVariants({ iconPosition })}>
            {icon}
          </div>
        )}
        <input
          className={cn(input({ iconPosition, variant, disabled, size }), inputClassName)}
          ref={ref}
          type="text"
          disabled={disabled}
          {...props}
        />
      </div>
    )
  },
)

Input.displayName = 'Input'
