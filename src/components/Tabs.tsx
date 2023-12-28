'use client';

import { categories } from '@/store/products';
import { cn } from '@/utils/classnames';
import { createQueryString } from '@/utils/params';
import Link, { LinkProps } from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { HTMLAttributes, useEffect } from 'react';

type Tab = {
  id: number;
  name: string;
  type: string;
};

interface TabProps extends LinkProps, HTMLAttributes<HTMLAnchorElement> {
  item: Tab;
  active: boolean;
}

const Tab = ({ item, active, className, ...props }: TabProps) => {
  return (
    <>
      <Link
        className={cn(
          'group-hover:text-custom-gray-light transition-all',
          active &&
            'text-custom-orange-primary group-hover:text-custom-orange-primary group-hover:opacity-85'
        )}
        {...props}
      >
        {item.name}
      </Link>
      <div
        className={cn(
          'absolute -bottom-3.5 w-6/12 h-[3px]',
          'group-hover:bg-custom-gray-light rounded-md transition-all',
          active &&
            'bg-custom-orange-primary group-hover:bg-custom-orange-primary group-hover:opacity-85'
        )}
      />
    </>
  );
};

// ------------------------------------------------------------------------

export const Tabs = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

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
  ];

  const isActive = (tabType: string) =>
    searchParams.get('tab') === tabType || pathname === '';

  useEffect(() => {
    if (!categories.includes(searchParams.get('tab') as string))
      push(
        `${pathname}?${createQueryString(searchParams, 'tab', categories[0])}`
      );
  }, [searchParams, pathname, push]);

  return (
    <div className="text-sm font-semibold text-white border-b border-[#393C49] pb-[13px]">
      <ul className="flex flex-wrap gap-8 -mb-px">
        {tabs.map((tab) => (
          <li key={tab.type} className="group relative">
            <Tab
              href={`${pathname}?${createQueryString(
                searchParams,
                'tab',
                tab.type
              )}`}
              item={tab}
              active={isActive(tab.type)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
