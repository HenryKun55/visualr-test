import { SearchIcon } from "@/assets/icons/Search";
import { Input } from "./Input";

export const Header = () => {
  const options = { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' } as Intl.DateTimeFormatOptions
  const theDate = new Date().toLocaleString(undefined, options).replace(',', '');

  return (
    <section className="w-full flex items-center justify-between">
      <div className="flex flex-col">
        <h1 className="text-[28px] font-semibold text-white">Jaegar Resto</h1>
        <h3 className="text-base font-normal text-custom-gray-lighter">{theDate}</h3>
      </div>
      <Input
        size="md"
        placeholder="Search for food, coffe, etc.."
        iconPosition="left"
        icon={<SearchIcon color="white"/>}
      />
    </section>
  )
}
