import { ComponentPropsWithoutRef, forwardRef } from "react";
import { VariantProps, tv } from "tailwind-variants";

const card = tv({
  slots: {
    base: 'max-w-48 max-h-[260px] w-48 h-[260px] bg-background-secondary'
  }
})

const { base } = card()

export interface CardProps extends ComponentPropsWithoutRef<'div'>, VariantProps<typeof card> { }

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={base()}>
      </div>
    )
  },
)

Card.displayName = 'Card'
