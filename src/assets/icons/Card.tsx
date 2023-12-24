import { SVGProps } from "react"

export const CardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
  <title>Card</title>
    <path
      fill="#3B5162"
      fillRule="evenodd"
      d="M1.25 9A4.75 4.75 0 0 1 6 4.25h12A4.75 4.75 0 0 1 22.75 9v6A4.75 4.75 0 0 1 18 19.75H6A4.75 4.75 0 0 1 1.25 15V9Zm1.587-.75h18.326A3.251 3.251 0 0 0 18 5.75H6a3.251 3.251 0 0 0-3.163 2.5Zm18.413 1.5H2.75V15A3.25 3.25 0 0 0 6 18.25h12A3.25 3.25 0 0 0 21.25 15V9.75Zm-8 5.25a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z"
      clipRule="evenodd"
    />
  </svg>
)
