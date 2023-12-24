import { create } from 'zustand'

export type Product = {
  id: string
}

type State = {
  products: Product[],
}

export const useProductsStore = create<State>(() => ({
  products: [],
}))
