import { SVGProps } from "react"

export const ArrowBackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
  <title>Back</title>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M8.5 16.5 4 12m0 0 4.5-4.5M4 12h16"
    />
  </svg>
)
