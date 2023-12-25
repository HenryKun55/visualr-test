import { SVGProps } from "react"

export const AddIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <title>Add</title>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M10.5 2.5V10m0 7.5V10m0 0H18m-7.5 0H3"
    />
  </svg>
)
