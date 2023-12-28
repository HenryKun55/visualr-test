'use client'

import { useCartStore } from "@/store/cart";
import { OrderItem } from "./OrderItem";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type OrderListProps = {
  showHeader?: boolean
}

export const OrderList = ({ showHeader = true }: OrderListProps) => {
  const [parent] = useAutoAnimate()
  const items = useCartStore(state => state.items)
  const total = useCartStore(state => state.total)

  return (
    <>
      {showHeader &&
        <div className="flex justify-center items-center mb-6">
          <span className="text-base flex-1">Item</span>
          <span className="text-base mr-10">Qty</span>
          <span className="text-base">Price</span>
        </div>
      }
      <hr className="border-border" />
      <ul ref={parent} className="w-full h-full flex flex-col gap-6 overflow-auto py-6 border-border">
        {items.map(item => (
          <OrderItem key={item.id} item={item} />
        ))}
      </ul>
      <hr className="border-border" />
      <div className="flex flex-col gap-4 mt-6 mb-10">
        <div className="flex justify-between items-center">
          <span className="text-sm font-normal text-custom-gray-light">Discount</span>
          <span className="text-sm font-medium text-white">$ 0</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-normal text-custom-gray-light">Sub total</span>
          <span className="text-sm font-medium text-white">
            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total / 100)}
          </span>
        </div>
      </div>
    </>
  )
}
