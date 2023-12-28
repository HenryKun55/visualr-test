'use client'

import { Header } from "@/components/Header";
import { ListProducts } from "@/components/ListProducts";
import { Order } from "@/components/Order";
import { Payment } from "@/components/Payment";
import { Tabs } from "@/components/Tabs";
import { useCartStore } from "@/store/cart";

export default function Home() {
  const payment = useCartStore(state => state.payment)

  return (
    <section className="relative w-full flex">
      <section className="w-full h-full overflow-auto p-6 flex flex-col gap-4">
        <Header />
        <Tabs />
        <ListProducts />
      </section>
      <Order />
      {payment && <Payment />}
    </section>
  )
}
