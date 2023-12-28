'use client';

import { DashboardIcon } from '@/assets/icons/Dashboard';
import { HomeIcon } from '@/assets/icons/Home';
import { LogoIcon } from '@/assets/icons/Logo';
import { LogoutIcon } from '@/assets/icons/Logout';
import { SettingsIcon } from '@/assets/icons/Settings';
import { usePathname } from 'next/navigation';
import React, { useCallback } from 'react';
import { SidebarItem } from './SidebarItem';

export const Sidebar = () => {
  const location = usePathname();
  const isActive = useCallback(
    (pathname: string) => pathname === location,
    [location]
  );
  const classNameIcon = (active: boolean) =>
    active ? '#fff' : 'text-custom-orange-primary';

  const menu = [
    {
      name: 'Logo',
      icon: () => <LogoIcon />,
      path: 'logo',
      active: isActive('logo'),
      isLogo: true,
    },
    {
      name: 'Home',
      icon: (active: boolean) => <HomeIcon className={classNameIcon(active)} />,
      path: '/',
      active: isActive('/'),
    },
    {
      name: 'Dashboard',
      icon: (active: boolean) => (
        <DashboardIcon className={classNameIcon(active)} />
      ),
      path: '/dashboard',
      active: isActive('/dashboard'),
    },
    {
      name: 'Settings',
      icon: (active: boolean) => (
        <SettingsIcon className={classNameIcon(active)} />
      ),
      path: '/settings',
      active: isActive('/settings'),
    },
  ];

  return (
    <>
      <aside className="min-w-sidebar h-full flex flex-col gap-6 p-6 rounded-2xl bg-background-secondary">
        <ul className="flex flex-col gap-6 h-full">
          {menu.map(({ name, path, active, icon, isLogo }) => (
            <SidebarItem key={name} href={path} active={active} isLogo={isLogo}>
              {icon(active)}
            </SidebarItem>
          ))}
        </ul>
        <SidebarItem
          href="/"
          active={false}
          className=""
          onClick={() => console.log('logout')}
        >
          <LogoutIcon className="text-custom-orange-primary" />
        </SidebarItem>
      </aside>
    </>
  );
};
