import React from 'react'
import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'
import { Home, Inbox, Search, Sparkles } from 'lucide-react'
import Link from 'next/link'
const items =  [
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Ask AI",
      url: "#",
      icon: Sparkles,
    },
    {
      title: "Home",
      url: "#",
      icon: Home,
      isActive: true,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
    },
]
export default function Cu_Sidebar_secondary() {
  return (
    <div className="absolute w-full flex flex-col gap-2 text-(--my-style-third)">
        {/* <SidebarGroup {...props}> */}
            <h3 className="subjects text-xl px-4 py-1">Subjects</h3>
            <hr />
          {items.map((item) => (
            <Link className=" w-full px-2 py-1" href={item.url} key={item.title}>
                <div className={` 
                    px-2 py-1 ${item.isActive&& 'text-purple-500 ml-2'}
                    transition-all duration-300
                    `} >{item.title}</div>
            </Link>
          ))}
        
    </div>
  )
}
