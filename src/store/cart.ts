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
  payment: boolean
  methodSelected: string;
}

type Actions = {
  addItem: (item: Item) => void
  removeItem: (itemId: string) => void
  editItem: (item: Item) => void
  togglePayment: () => void
  handleMethod: (methodName: string) => void
}

export const useCartStore = create<State & Actions>((set) => ({
  items: [],
  discount: 0,
  payment: false,
  methodSelected: '',
  addItem: (item) => set((state) => ({ ...state, items: [...state.items, item] })),
  removeItem: (itemId) => set((state) => ({ ...state, items: state.items.filter(item => item.id !== itemId) })),
  editItem: (_item) => set((state) => ({
    ...state,
    items: state.items.map(item => item.id === _item.id ? { ...item, ..._item } : item)
  })),
  togglePayment: () => set((state) => ({ ...state, payment: !state.payment })),
  handleMethod: (methodSelected) => set((state) => ({ ...state, methodSelected }))
}))
