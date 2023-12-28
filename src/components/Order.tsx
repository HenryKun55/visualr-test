'use client'

import { useCartStore } from "@/store/cart"
import { Button } from "./Button"
import { OrderList } from "./OrderList"

export const Order = () => {
  const togglePayment = useCartStore(state => state.togglePayment)
  const order = 'Order #2955'

  return (
    <section className="text-white w-full h-full flex flex-col p-6 bg-background-secondary rounded-l-2xl md:min-w-[409px] md:max-w-max">
      <h2 className="text-xl pb-12">{order}</h2>
      <OrderList />
      <Button size="full" onClick={() => togglePayment()}>Continue to Payment</Button>
    </section>
  )
}
