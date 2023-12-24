import { create } from 'zustand'
import { Product } from './products'

type Item = {
  id: string
  product: Product
  quantity: number
  orderNote: string
}

type State = {
  items: Item[]
  discount: number
}

type Actions = {
  addItem: (item: Item) => void
  removeItem: (itemId: string) => void
  editItem: (item: Item) => void
}

export const useCartStore = create<State & Actions>((set) => ({
  items: [],
  discount: 0,
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (itemId) => set((state) => ({ items: state.items.filter(item => item.id !== itemId) })),
  editItem: (_item) => set((state) => ({
    items: state.items.map(item => item.id === _item.id ? { ...item, ..._item } : item)
  }))
}))

