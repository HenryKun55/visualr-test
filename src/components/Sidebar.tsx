'use client'

import { HomeIcon } from "@/assets/icons/Home"
import React, { useCallback } from "react"
import { SidebarItem } from "./SidebarItem"
import { usePathname } from "next/navigation"
import { LogoIcon } from "@/assets/icons/Logo"
import { DashboardIcon } from "@/assets/icons/Dashboard"
import { SettingsIcon } from "@/assets/icons/Settings"

export const Sidebar = () => {
  const location = usePathname();
  const isActive = useCallback((pathname: string) => pathname === location, [location])

  const menu = [
    {
      name: 'Logo',
      icon: (active: boolean) => <LogoIcon color={active ? 'white' : ''} />,
      path: 'logo',
      active: isActive('logo'),
      isLogo: true,
    },
    {
      name: 'Home',
      icon: (active: boolean) => <HomeIcon color={active ? 'white' : ''} />,
      path: '/',
      active: isActive('/'),
    },
    {
      name: 'Dashboard',
      icon: (active: boolean) => <DashboardIcon color={active ? 'white' : ''} />,
      path: '/dashboard',
      active: isActive('/dashboard'),
    },
    {
      name: 'Settings',
      icon: (active: boolean) => <SettingsIcon color={active ? 'white' : ''} />,
      path: '/settings',
      active: isActive('/settings'),
    },
  ]

  return (
    <>
      <aside className="absolute top-0 left-0 w-[104px] h-full flex flex-col items-center gap-6 p-6 rounded-2xl bg-background-secondary">
        {menu.map(({ name, path, active, icon, isLogo }) => (
          <SidebarItem key={name} href={path} active={active} isLogo={isLogo}>{icon(active)}</SidebarItem>
        ))}
      </aside>
    </>
  )
}
