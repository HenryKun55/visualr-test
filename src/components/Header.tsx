'use client'

import { SearchIcon } from "@/assets/icons/Search";
import { Input } from "./Input";
import { FormProvider, useForm } from "react-hook-form";
import { useProductsStore } from "@/store/products";
import { useEffect } from "react";

export const Header = () => {
  const formMethods = useForm()
  const setSearch = useProductsStore(state => state.setSearch)
  const search =  formMethods.watch('search')

  const options = { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' } as Intl.DateTimeFormatOptions
  const theDate = new Date().toLocaleString('en-US', options).replace(',', '');

  useEffect(() => {
    setSearch(search)
  },[search, setSearch])

  return (
    <section className="w-full flex flex-col items-start gap-4 justify-between sm:items-center sm:flex-row">
      <div className="flex flex-col">
        <h1 className="text-[28px] font-semibold text-white">Jaegar Resto</h1>
        <h3 className="text-base font-normal text-custom-gray-lighter">{theDate}</h3>
      </div>
      <FormProvider {...formMethods}>
        <Input
          size="md"
          name="search"
          iconPosition="left"
          icon={<SearchIcon color="white" />}
          placeholder="Search for food, coffe, etc.."
        />
      </FormProvider>
    </section>
  )
}
