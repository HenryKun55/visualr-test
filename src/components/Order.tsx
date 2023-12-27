'use client'

import { useCartStore } from "@/store/cart"
import { Button } from "./Button"
import { OrderItem } from "./OrderItem"
import { AddIcon } from "@/assets/icons/Add"
import { ArrowBackIcon } from "@/assets/icons/ArrowBack"

export const Order = () => {
  const { payment, togglePayment } = useCartStore(state => state)
  const order = 'Order #2955'

  return (
    <section className="text-white w-full h-full flex flex-col p-6 bg-background-secondary md:min-w-[409px] md:max-w-max">
      {payment ?
        <div className="flex flex-col">
          <ArrowBackIcon color="#fff" className="mb-4" onClick={() => togglePayment()} />
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
        :
        <h2 className="text-xl pb-12">{order}</h2>
      }
      <div className="flex justify-center items-center">
        <span className="text-base flex-1">Item</span>
        <span className="text-base mr-10">Qty</span>
        <span className="text-base">Price</span>
      </div>
      <ul className="w-full h-full flex flex-col gap-6 overflow-auto my-6 py-6 border-y border-border">
        <li>
          <OrderItem />
        </li>
        <li>
          <OrderItem />
        </li>
        <li>
          <OrderItem />
        </li>
        <li>
          <OrderItem />
        </li>
        <li>
          <OrderItem />
        </li>
        <li>
          <OrderItem />
        </li>
      </ul>
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-normal text-custom-gray-light">Discount</span>
        <span className="text-sm font-medium text-white">$ 0</span>
      </div>
      <div className="flex justify-between items-center mb-[42px]">
        <span className="text-sm font-normal text-custom-gray-light">Sub total</span>
        <span className="text-sm font-medium text-white">$ 10.45</span>
      </div>
      {!payment && <Button size="full" onClick={() => togglePayment()}>Continue to Payment</Button>}
    </section>
  )
}
