import { create } from 'zustand'
import { Product } from './products'

export type PaymentFormProps = {
  name: string
  icon: JSX.Element
  form: JSX.Element
}

export type Item = {
  id: string
  product: Product
  quantity: number
  orderNote: string
}

type State = {
  items: Item[]
  discount: number
  payment: boolean
  paymentForm?: PaymentFormProps;
  total: number
}

type Actions = {
  addItem: (item: Item) => void
  removeItem: (itemId: string) => void
  editItem: (item: Item) => void
  togglePayment: () => void
  handleMethod: (paymentForm: PaymentFormProps) => void
}

const calculateTotal = (items: Item[]) => {
  return items.reduce((acc, curr) => {
    return acc + curr.product.price * (curr.quantity || 0)
  }, 0)
}

export const useCartStore = create<State & Actions>((set) => ({
  items: [],
  discount: 0,
  payment: false,
  total: 0,
  paymentForm: undefined,
  addItem: (item) => {
    return set((state) => {
      const items = [...state.items]
      const theItem = items.find(_item => _item.id === item.id)
      if (theItem) {
        if (!theItem.quantity)
          theItem.quantity = 1
        else if(theItem.quantity >= 99)
          theItem.quantity = 99
        else 
          theItem.quantity += 1
      } else {
        items.push(item)
      }
      return { ...state, items, total: calculateTotal(items) }
    })
  },
  removeItem: (itemId) => set((state) => {
    const items = state.items.filter(item => item.id !== itemId)
    return { ...state, items, total: calculateTotal(items) }
  }),
  editItem: (_item) => set((state) => {
    const items = state.items.map(item => item.id === _item.id ? { ...item, ..._item } : item)
    return { ...state, items, total: calculateTotal(items) }
  }),
  togglePayment: () => set((state) => ({ ...state, payment: !state.payment })),
  handleMethod: (paymentForm) => set((state) => ({ ...state, paymentForm: paymentForm }))
}))
