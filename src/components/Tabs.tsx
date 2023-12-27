'use client'

import { cn } from "@/utils/classnames"
import { createQueryString } from "@/utils/params"
import Link, { LinkProps } from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import {HTMLAttributes } from "react"
import { VariantProps, tv } from "tailwind-variants"

type Tab = {
  id: number
  name: string
  type: string
}

const tab = tv({
  slots: {
    base: "group-hover:text-custom-gray-light transition-all",
    bottom: "absolute -bottom-[14px] w-6/12 h-[3px] group-hover:bg-custom-gray-light rounded-md transition-all"
  },
  variants: {
    active: {
      true: "text-custom-orange-primary group-hover:text-custom-orange-primary"
    }
  },
  compoundSlots: [
    {
      slots: ['base', 'bottom'],
      active: true,
      className: "group-hover:opacity-85"
    }
  ],
  compoundVariants: [
    {
      active: true,
      className: {
        bottom: "bg-custom-orange-primary group-hover:bg-custom-orange-primary"
      }
    }
  ]
})


interface TabProps extends LinkProps, HTMLAttributes<HTMLAnchorElement>, VariantProps<typeof tab> {
  item: Tab
}

const Tab = ({ item, active, className, ...props }: TabProps) => {
  const { base, bottom } = tab({ active, className })
  return (
    <>
      <Link className={cn(base())} {...props}>
        {item.name}
      </Link>
      <div className={cn(bottom())} />
    </>
  )
}
// ------------------------------------------------------------------------

export const Tabs = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const tabs = [
    {
      id: 1,
      name: 'Hot Dishes',
      type: 'hot-dishes',
    },
    {
      id: 2,
      name: 'Cold Dishes',
      type: 'cold-dishes',
    },
    {
      id: 3,
      name: 'Soup',
      type: 'soup',
    },
    {
      id: 4,
      name: 'Grill',
      type: 'grill',
    },
    {
      id: 5,
      name: 'Appetizer',
      type: 'appetizer',
    },
    {
      id: 6,
      name: 'Dessert',
      type: 'dessert',
    },
  ]

  const isActive = (tabType: string) => 
    searchParams.get('tab') === tabType || pathname === ''

  return (
    <div className="text-sm font-semibold text-white border-b border-[#393C49] pb-[13px]">
      <ul className="flex flex-wrap gap-8 -mb-px">
        {tabs.map((tab, index) => (
          <li key={tab.type} className="group relative">
            <Tab
              href={`${pathname}?${createQueryString(searchParams, 'tab', tab.type)}`}
              item={tab}
              active={isActive(tab.type)}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

