'use client'

import { DashboardIcon } from "@/assets/icons/Dashboard"
import { HomeIcon } from "@/assets/icons/Home"
import { LogoIcon } from "@/assets/icons/Logo"
import { LogoutIcon } from "@/assets/icons/Logout"
import { SettingsIcon } from "@/assets/icons/Settings"
import { customOrangeSecondaryColor } from "@/utils/colors"
import { usePathname } from "next/navigation"
import React, { useCallback } from "react"
import { SidebarItem } from "./SidebarItem"

export const Sidebar = () => {
  const location = usePathname();
  const isActive = useCallback((pathname: string) => pathname === location, [location])

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
      icon: (active: boolean) => <HomeIcon color={active ? '#fff' : customOrangeSecondaryColor} />,
      path: '/',
      active: isActive('/'),
    },
    {
      name: 'Dashboard',
      icon: (active: boolean) => <DashboardIcon color={active ? '#fff' : customOrangeSecondaryColor} />,
      path: '/dashboard',
      active: isActive('/dashboard'),
    },
    {
      name: 'Settings',
      icon: (active: boolean) => <SettingsIcon color={active ? '#fff' : customOrangeSecondaryColor} />,
      path: '/settings',
      active: isActive('/settings'),
    },
  ]

  return (
    <>
      <aside className="min-w-[104px] h-full flex flex-col gap-6 p-6 rounded-2xl bg-background-secondary">
        <ul className="flex flex-col gap-6 h-full">
          {menu.map(({ name, path, active, icon, isLogo }) => (
            <SidebarItem key={name} href={path} active={active} isLogo={isLogo}>{icon(active)}</SidebarItem>
          ))}
        </ul>
        <SidebarItem href='/' active={false} className="" onClick={() => console.log('logout')}>
          <LogoutIcon color={customOrangeSecondaryColor} />
        </SidebarItem>
      </aside>
    </>
  )
}
