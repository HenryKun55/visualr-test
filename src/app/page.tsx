import { Header } from "@/components/Header";
import { List } from "@/components/List";
import { Order } from "@/components/Order";
import { Tabs } from "@/components/Tabs";

export default function Home() {
  return (
    <section className="w-full flex">
      <section className="w-full h-full overflow-auto p-6 flex flex-col gap-4 max-w-[681px]">
        <Header />
        <Tabs />
        <List />
      </section>
      <section className="w-full max-w-[409px]">
        <Order />
      </section>
    </section>
  )
}
