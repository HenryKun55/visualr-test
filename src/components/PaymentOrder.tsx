'use client'

import { useCartStore } from "@/store/cart"
import { Button } from "./Button"
import { AddIcon } from "@/assets/icons/Add"
import { ArrowBackIcon } from "@/assets/icons/ArrowBack"
import { OrderList } from "./OrderList"

export const PaymentOrder = () => {
  const { togglePayment } = useCartStore(state => state)
  const order = 'Order #2955'

  return (
    <section className="text-white w-full h-full flex flex-col p-6 rounded-l-2xl bg-background-secondary md:min-w-[409px] md:max-w-max">
      <div className="flex flex-col">
        <ArrowBackIcon className="mb-4 cursor-pointer text-white" onClick={() => togglePayment()} />
        <div className="flex justify-between items-center pb-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-[28px] font-semibold text-white">Your order</h1>
            <h3 className="text-base font-normal text-custom-gray-light">{order}</h3>
          </div>
          <Button size='sm' onClick={() => togglePayment()}>
            <AddIcon color="#fff" />
          </Button>
        </div>
      </div>
      <OrderList showHeader={false} />
    </section>
  )
}

