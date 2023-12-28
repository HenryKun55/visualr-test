import { generateProducts } from '@/utils/faker'
import { create } from 'zustand'

export type Category = 'hot-dishes' | 'cold-dishes' | 'soup' | 'grill' | 'appetizer' | 'dessert'
export const categories = ['hot-dishes', 'cold-dishes',  'soup' , 'grill' , 'appetizer' , 'dessert'] 

export type Product = {
  id: string
  name: string
  price: number
  image: number
  category: Category
}

type State = {
  products: Product[],
  search: string,
}

type Action = {
  setSearch: (search: string) => void 
}

export const useProductsStore = create<State & Action>((set) => ({
  products: generateProducts(),
  search: '',
  setSearch: (search) => set((state) => ({
    ...state,
    search,
  }))
}))
