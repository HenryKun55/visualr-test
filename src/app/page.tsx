'use client'

import { Header } from "@/components/Header";
import { List } from "@/components/List";
import { Order } from "@/components/Order";
import { Payment } from "@/components/Payment";
import { Tabs } from "@/components/Tabs";
import { useCartStore } from "@/store/cart";

export default function Home() {
  const {payment} = useCartStore(state => state)

  return (
    <section className="w-full flex">
    {payment && <div className="absolute top-0 left-0 w-dvw h-dvh bg-black/70 z-20"/>}
      <section className="w-full h-full overflow-auto p-6 flex flex-col gap-4 max-w-[681px]">
        <Header />
        <Tabs />
        <List />
      </section>
      <section className="w-full flex z-30">
        <Order />
        {payment && <Payment />}
      </section>
    </section>
  )
}
