'use client'

import { Category, categories, useProductsStore } from "@/store/products";
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { ProductCard } from "./Card";

export const ListProducts = () => {
  const [parent] = useAutoAnimate();
  const searchParams = useSearchParams()
  const products = useProductsStore(state => state.products)
  const search = useProductsStore(state => state.search)

  const theProducts = useMemo(() => {
    const tab = searchParams.get('tab')
    if (!categories.includes(tab as Category)) return []
    return products
      .filter(product => {
        if (product.category !== tab) return false
        if (!search || !search.trim()) return true
        return product.name.toLowerCase().includes(search.toLowerCase())
      })
  }, [products, searchParams, search])

  return (
    <div className="w-full pt-10">
      <ul ref={parent} className="flex flex-wrap gap-x-6 gap-y-[58px]">
        {theProducts.map(product => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
        {theProducts.length === 0 && (
          <div className="w-full text-center text-white text-sm font-medium">No results.</div>
        )}
    </div>
  )
}
