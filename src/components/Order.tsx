'use client'

import { OrderItem } from "./OrderItem"

export const Order = () => {
  return (
    <section className="w-full max-w-[409px] text-white h-full flex flex-col p-6 bg-background-secondary">
      <h2 className="text-xl pb-12">Order #2955</h2>
      <div className="flex justify-center items-center">
        <span className="text-base flex-1">Item</span>
        <span className="text-base mr-10">Qty</span>
        <span className="text-base">Price</span>
      </div>
      <ul className="w-full h-full overflow-auto my-6  py-6 border-t border-[#393C49]">
        <li>
          <OrderItem />
        </li>
      </ul>
    </section>
  )
}
