import Image from "next/image";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import { VariantProps, tv } from "tailwind-variants";
import { Button } from "./Button";
import { AddIcon } from "@/assets/icons/Add";
import { customOrangeSecondaryColor } from "@/utils/colors";

const card = tv({
  slots: {
    base: [
      'relative max-w-48 max-h-[260px] w-48 h-[226px] bg-background-secondary rounded-2xl',
      'flex justify-center',
      'group transition-all hover:bg-[#232131]'
    ],
    content: [
      'flex flex-col items-center gap-2 max-w-[178px]',
      '-translate-y-9',
    ],
    image: [
      'transition-transform',
      'group-hover:rotate-45 group-hover:scale-110'
    ],
    title: 'text-white text-sm font-medium text-center h-9 min-h-9 max-h-9',
    price: 'text-white text-sm font-normal'
  }
})

const { base, content, image, title, price } = card()

export interface CardProps extends ComponentPropsWithoutRef<'div'>, VariantProps<typeof card> { }

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={base()} {...props}>
        <div className={content()}>
          <Image alt="prato" src='/images/dishes/1.png' width={132} height={132} priority className={image()} />
          <span className={title()}>Spicy seasoned</span>
          <span className={price()}>$ 6.76</span>
          <Button variant="link" className="gap-2 py-[6px] px-[19.3px] text-sm font-semibold">
            <AddIcon color={customOrangeSecondaryColor} />
            Add to order
          </Button>
        </div>
      </div>
    )
  },
)

Card.displayName = 'Card'
