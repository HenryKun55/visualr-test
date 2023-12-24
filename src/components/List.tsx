'use client'

import { useAutoAnimate } from "@formkit/auto-animate/react"
import { Card } from "./Card";

export const List = () => {
  const [parent] = useAutoAnimate();
  return (
    <ul ref={parent}>
      <li className="grid grid-cols-3">
        <Card />
      </li>
    </ul>
  )
}
