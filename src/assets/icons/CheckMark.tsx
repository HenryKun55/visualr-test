import { SVGProps } from "react"

export const CheckMarkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <title>CheckMark</title>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m9.864 5.404-3.046 4a.666.666 0 0 1-.526.263h-.005a.668.668 0 0 1-.524-.256L4.14 7.34a.666.666 0 1 1 1.05-.822l1.09 1.391 2.522-3.313a.667.667 0 0 1 1.06.808M7 .334a6.667 6.667 0 1 0 0 13.333A6.667 6.667 0 0 0 7 .334"
      clipRule="evenodd"
    />
  </svg>
)
