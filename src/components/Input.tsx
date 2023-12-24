import { cn } from '@/utils/classnames'
import type { ComponentPropsWithoutRef, ElementRef, ReactNode } from 'react'
import { forwardRef } from 'react'
import { MdError } from 'react-icons/md'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

const input = tv({
  base: [
    'w-full flex justify-between gap-2 items-center px-4 rounded-lg cursor-pointer',
    'bg-functional-soft-50 text-functional-soft-500 hover:bg-functional-heavy-100',
    'focus:ring-4 focus:ring-blue-300 focus-visible:outline-none',
  ],
  variants: {
    variant: {
      default: '',
      error: 'pr-7 ring-4 ring-feedback-error-300 focus:ring-feedback-error-300',
      warning: 'pr-7 ring-4 ring-feedback-warning-300 focus:ring-feedback-warning-300',
    },
    size: {
      sm: 'py-1.5',
      md: 'py-2.5',
      lg: 'py-3.5',
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
      variant: 'error',
      iconPosition: 'right',
      className: 'pr-12',
    },
    {
      variant: 'warning',
      iconPosition: 'right',
      className: 'pr-12',
    },
  ],
  defaultVariants: {
    size: 'md',
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
  compoundVariants: [
    {
      iconPosition: 'right',
      errorOrWarning: true,
      className: 'right-7',
    },
  ],
  defaultVariants: {
    iconPosition: 'left',
  },
})

export interface InputProps extends Omit<ComponentPropsWithoutRef<'input'>, 'size'>, VariantProps<typeof input> {
  inputClassName?: string
  icon?: ReactNode
}

export const Input = forwardRef<ElementRef<'input'>, InputProps>(
  ({ icon, iconPosition, inputClassName, className, variant, size, disabled, ...props }, ref) => {
    return (
      <div className={cn('relative w-full', className)}>
        {icon && (
          <div className={iconVariants({ iconPosition, errorOrWarning: variant === 'error' || variant === 'warning' })}>
            {icon}
          </div>
        )}
        <input
          className={cn(input({ iconPosition, variant, size, disabled }), inputClassName)}
          ref={ref}
          type="text"
          disabled={disabled}
          {...props}
        />
        {variant === 'error' && (
          <MdError className="absolute right-2 top-1/2 -translate-y-1/2 text-feedback-error-700" />
        )}
        {variant === 'warning' && (
          <MdError className="absolute right-2 top-1/2 -translate-y-1/2 text-feedback-warning-600" />
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
