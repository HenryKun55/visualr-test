'use client'

import { useAutoAnimate } from "@formkit/auto-animate/react"
import { Card } from "./Card";

export const List = () => {
  const [parent] = useAutoAnimate();
  return (
    <div className="w-full pt-10">
      <ul ref={parent} className="grid grid-cols-1 gap-x-6 gap-y-[58px] lg:grid-cols-3 md:grid-cols-2">
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
      </ul>
    </div>
  )
}
