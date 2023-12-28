import { SVGProps } from 'react';

export const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <title>Search</title>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.167 7.167c0-2.758 2.242-5 5-5 2.757 0 5 2.242 5 5 0 2.757-2.243 5-5 5-2.758 0-5-2.243-5-5m13.089 6.91-2.83-2.83a6.626 6.626 0 0 0 1.407-4.08A6.674 6.674 0 0 0 7.167.5 6.674 6.674 0 0 0 .5 7.167a6.674 6.674 0 0 0 6.667 6.666c1.538 0 2.952-.529 4.08-1.406l2.83 2.829a.831.831 0 0 0 1.179 0 .832.832 0 0 0 0-1.178"
      clipRule="evenodd"
    />
  </svg>
);
