'use client'

import { AddIcon } from "@/assets/icons/Add";
import { useCartStore } from "@/store/cart";
import { Product } from "@/store/products";
import { cn } from "@/utils/classnames";
import Image from "next/image";
import { Button } from "./Button";

type ProductCardProps = {
  className?: string
  product: Product
}

export const ProductCard = ({ product, className }: ProductCardProps) => {
  const addItem = useCartStore(state => state.addItem)

  const handleItem = () => {
    addItem({
      id: product.id,
      product: product,
      quantity: 1,
      orderNote: '',
    })  
  }

  return (
    <div className={cn(
      'relative max-w-48 max-h-[260px] w-48 h-[226px] bg-background-secondary rounded-2xl',
      'flex justify-center',
      'group transition-all hover:bg-[#232131]',
      className
    )}>
      <div className='flex flex-col items-center gap-2 max-w-[178px] -translate-y-9'>
        <Image
          alt="prato"
          src={`/images/dishes/${product.image}.png`}
          width={132}
          height={132}
          priority
          className='transition-transform group-hover:rotate-45 group-hover:scale-110'
        />
        <span className='text-white text-sm font-medium text-center h-9 min-h-9 max-h-9 max-w-36'>{product.name}</span>
        <span className='text-white text-sm font-normal'>
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price / 100)}
        </span>
        <Button className="gap-2 py-1.5 px-5 text-sm font-semibold" size="full" variant="link" onClick={handleItem} >
          <AddIcon className="text-custom-orange-primary" />
          Add to order
        </Button>
      </div>
    </div>
  )
}

ProductCard.displayName = 'Card'
