import { Header } from "@/components/Header";
import { List } from "@/components/List";
import { Order } from "@/components/Order";
import { Tabs } from "@/components/Tabs";

export default function Home() {
  return (
    <section className="w-full flex">
      <section className="w-full h-full min-w-max max-w-[681px] overflow-auto p-6 flex flex-col gap-4 lg:max-w-3xl xl:max-w-4xl">
        <Header />
        <Tabs />
        <List />
      </section>
      <section className="w-full">
        <Order />
      </section>
    </section>
  )
}
