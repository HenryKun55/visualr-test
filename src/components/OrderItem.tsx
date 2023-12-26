'use client'

import Image from 'next/image'
import { Input } from './Input'
import { Button } from './Button'
import { ChangeEvent, useState } from 'react'
import { TrashIcon } from '@/assets/icons/Trash'
import { customOrangeSecondaryColor } from '@/utils/colors'

export const OrderItem = () => {
  const [qty, setQty] = useState('1')

  const hasTwoNumbers = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if (value.length === 3) return false
    setQty(value)
  }

  return (
    <div className='flex flex-col gap-[10px]'>
      <div className='flex items-center'>
        <div className='w-10 h-10 flex relative mr-2'>
          <Image src='/images/dishes/1.png' alt='dishe' width={40} height={40} />
        </div>
        <div className='flex flex-col gap-1 mr-auto'>
          <span className='text-white text-sm font-medium'>Spicy seasoned sea...</span>
          <span className='text-custom-gray-light text-xs font-medium'>$ 2.29</span>
        </div>
        <Input
          className='mr-6'
          size='sm'
          defaultValue={qty}
          type='number'
          maxLength={2}
          pattern="/^-?\d+\.?\d*$/"
          value={qty}
          onChange={hasTwoNumbers}
        />
        <span className='text-white text-base font-medium'>$4.58</span>
      </div>
      <div className='flex gap-4'>
        <Input className='flex-1' size='full' placeholder='Order Note...' />
        <Button variant='outlined' size='sm' ><TrashIcon color={customOrangeSecondaryColor} /></Button>
      </div>
    </div>
  )
}
