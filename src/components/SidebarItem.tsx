import { cn } from "@/utils/classnames"
import Link, { LinkProps } from "next/link"
import { HTMLAttributes, forwardRef } from "react"
import { VariantProps, tv } from "tailwind-variants"
import { useAutoAnimate } from '@formkit/auto-animate/react'

const sidebarItem = tv({
  base: [
    'relative inline-flex p-4 items-start rounded-lg bg-background-secondary'
  ],
  variants: {
    active: {
      true: [
        'bg-custom-orange-primary text-white hover:bg-custom-orange-primary',
      ],
      false: 'hover:bg-background-primary'
    }
  }
})

export interface SidebarItemProps extends LinkProps, HTMLAttributes<HTMLAnchorElement>, VariantProps<typeof sidebarItem> {
  isLogo?: boolean
}

export const SidebarItem = forwardRef<LinkProps, SidebarItemProps>(
  ({ className, active, children, isLogo, ...props }, ref) => {
    const [parent] = useAutoAnimate<HTMLDivElement>()

    if (isLogo) return <div className="p-2 flex items-center justify-center bg-custom-orange-secondary/[.26] rounded-2xl">{children}</div>

    return (
      <div ref={parent}>
        {active ?
          <div className="relative flex items-center justify-center">
            <div className="absolute -top-3 -left-3 w-[92px] h-20 bg-background-primary rounded-tl-2xl rounded-bl-2xl" />
            <div className="absolute -top-7 -right-6 w-4 h-4 bg-background-primary" />
            <div className="absolute -top-7 -right-6 w-4 h-4 bg-background-secondary rounded-br-2xl" />
            <div className="absolute -bottom-7 -right-6 w-4 h-4 bg-background-primary" />
            <div className="absolute -bottom-7 -right-6 w-4 h-4 bg-background-secondary rounded-tr-2xl" />
            <Link className={cn(sidebarItem({ className, active }))} {...props}>
              {children}
            </Link>
          </div>
          :
          <Link className={cn(sidebarItem({ className, active }))} {...props}>
            {children}
          </Link>
        }
      </div>
    )
  },
)

SidebarItem.displayName = 'SidebarItem'
