import { Header } from "@/components/Header";
import { List } from "@/components/List";
import { Tabs } from "@/components/Tabs";

export default function Home() {
  return (
    <section className="w-full max-w-[681px] h-full overflow-auto p-6 flex flex-col gap-4">
      <Header />
      <Tabs />
      <List />
    </section>
  )
}
