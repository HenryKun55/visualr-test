'use client'

import { useAutoAnimate } from "@formkit/auto-animate/react"
import { Card } from "./Card";

export const List = () => {
  const [parent] = useAutoAnimate();
  return (
    <div className="max-w-[632px] pt-10">
      <ul ref={parent} className="grid grid-cols-3 gap-x-6 gap-y-[58px]">
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