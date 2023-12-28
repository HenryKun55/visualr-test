'use client'

import { TrashIcon } from '@/assets/icons/Trash'
import { Item, useCartStore } from '@/store/cart'
import { maskLimitDigits } from '@/utils/mask'
import Image from 'next/image'
import { ChangeEventHandler, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from './Button'
import { Input } from './Input'

type OrderItemProps = {
  item: Item
}

export const OrderItem = ({ item }: OrderItemProps) => {
  const formMethods = useForm({
    defaultValues: {
      quantity: item.quantity,
      orderNote: item.orderNote
    }
  })
  const editItem = useCartStore(state => state.editItem)
  const removeItem = useCartStore(state => state.removeItem)

  const onChangeQuantity: ChangeEventHandler<HTMLInputElement> = (event) => {
    editItem({ ...item, quantity: parseInt(event.target.value) })
  }

  const onChangeOrderNote: ChangeEventHandler<HTMLInputElement> = (event) => {
    editItem({ ...item, orderNote: event.target.value })
  }

  useEffect(() => {
    formMethods.setValue('orderNote', item.orderNote)
  }, [formMethods.setValue, item.orderNote])

  useEffect(() => {
    formMethods.setValue('quantity', item.quantity)
  }, [formMethods.setValue, item.quantity])

  return (
    <FormProvider {...formMethods}>
      <li className='flex flex-col gap-2.5'>
        <div className='flex items-center'>
          <div className='w-10 h-10 flex relative mr-2'>
            <Image src={`/images/dishes/${item.product.image}.png`} alt='dishe' width={40} height={40} />
          </div>
          <div className='flex flex-col gap-1 mr-auto'>
            <span className='text-white text-sm font-medium'>{item.product.name}</span>
            <span className='text-custom-gray-light text-xs font-medium'>
              {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.product.price / 100)}
            </span>
          </div>
          <Input
            textCenter
            size='sm'
            name='quantity'
            type='number'
            className='mr-6'
            mask={maskLimitDigits(2)}
            onChange={onChangeQuantity}
          />
          <span className='text-white text-base font-medium'>
            {
              new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                .format(item.product.price * (item.quantity || 1) / 100)
            }
          </span>
        </div>
        <div className='flex gap-4'>
          <Input name='orderNote' className='flex-1' size='full' placeholder='Order Note...' onChange={onChangeOrderNote} />
          <Button variant='outlined' size='sm' onClick={() => removeItem(item.id)} >
            <TrashIcon className="text-custom-orange-primary" />
          </Button>
        </div>
      </li>

    </FormProvider>
  )
}
