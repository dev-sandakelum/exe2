"use client"

import Link from "next/link"
import { Search, ChevronRight, Menu } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { StatusBadge } from "./status-badge"
import { NavUser } from "./nav-user_icon"
import { useState } from "react"
import { SidebarTrigger, useSidebar } from "./ui/sidebar"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface HeaderProps {
  breadcrumbs?: BreadcrumbItem[]
  showSearch?: boolean
  currentPage?: {
    label: string
    type?: "note" | "quiz" | "document"
  }
}

export function Header({
  breadcrumbs = [],
  showSearch = true,
  currentPage,
}: HeaderProps) {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
  const { toggleSidebar } = useSidebar()

  // Map types to shadcn badge variants
  const pageTypeVariant =
    currentPage?.type === "note"
      ? "outline"
      : currentPage?.type === "quiz"
      ? "default"
      : "secondary"

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden lg:flex fixed  left-14 right-0 top-0 z-102 h-12 items-center justify-between pointer-events-none">
        {/* Left */}
        <div className="h-12 min-w-100 flex items-center bg-(--my-style-primary) rounded-br-[4rem] border-b border-r border-border backdrop-blur-sm pointer-events-auto pr-6">
          <div className="flex items-center gap-2 px-4">
            <Link
              href="/dashboard"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Nexera
            </Link>
            <div className="h-4 w-4 border " onClick={toggleSidebar}>gg</div>

            {/* Breadcrumbs */}
            {breadcrumbs.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-sm text-muted-foreground">
                    {item.label}
                  </span>
                )}
              </div>
            ))}

            {/* Current Page */}
            {currentPage && (
              <div className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">{currentPage.label}</span>

                {currentPage.type && (
                  <StatusBadge variant="info" className="text-xs px-2 py-0">
                    {currentPage.type.charAt(0).toUpperCase() +
                      currentPage.type.slice(1)}
                  </StatusBadge>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right */}
        <div className="h-12 flex items-center bg-(--my-style-primary) rounded-[0px_0px_0px_4rem] border-b border-l border-border backdrop-blur-sm pointer-events-auto pl-6">
          <div className="flex items-center gap-3 pr-4">
            {/* Search */}
            {showSearch && (
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  className="h-8 w-80 rounded-[10px_10px_10px_4rem] border pl-10 border-secondary text-sm placeholder:text-muted-foreground focus-visible:ring-0"
                />
              </div>
            )}

            <StatusBadge variant="warning" className="text-xs">
              NexPrime
            </StatusBadge>
            {/* Profile Bubble */}
            <div className="h-8 w-8 rounded-full overflow-hidden flex items-center justify-center cursor-pointer hover:ring-primary/50 transition-all">
              <NavUser user={{avatar:"/globe.svg", email:"user@example.com", name: "User Name"}}/>
            </div>
          </div>
        </div>
      </header>

      {/* Tablet Header (md to lg) */}
      <header className="hidden md:flex lg:hidden fixed left-0 right-0 top-0 z-40 h-14 items-center justify-between bg-background/80 backdrop-blur-sm border-b border-border px-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <Link
            href="/dashboard"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
          >
            Nexera
          </Link>
            <div className="h-4 w-4 border " onClick={toggleSidebar}>gg</div>
            <SidebarTrigger/>


          {/* Condensed Breadcrumbs */}
          {currentPage && (
            <>
              <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-sm font-medium truncate">{currentPage.label}</span>
                {currentPage.type && (
                  <StatusBadge variant="info" className="text-xs px-2 py-0 flex-shrink-0">
                    {currentPage.type.charAt(0).toUpperCase() + currentPage.type.slice(1)}
                  </StatusBadge>
                )}
              </div>
            </>
          )}
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          {showSearch && (
            <button 
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-accent transition-colors"
            >
              <Search className="h-4 w-4 text-muted-foreground" />
            </button>
          )}
          
          <StatusBadge variant="warning" className="text-xs hidden sm:flex">
            NexPrime
          </StatusBadge>
          
          <div className="h-8 w-8 rounded-full overflow-hidden flex items-center justify-center cursor-pointer">
            <NavUser user={{avatar:"/globe.svg", email:"user@example.com", name: "User Name"}}/>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="flex md:hidden fixed left-0 right-0 top-0 z-40 h-14 items-center justify-between bg-background/80 backdrop-blur-sm border-b border-border px-3">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <Link
            href="/dashboard"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Nexera
          </Link>
            <div className="h-4 w-4 border " onClick={toggleSidebar}>gg</div>

          {currentPage && (
            <>
              <ChevronRight className="h-3 w-3 text-muted-foreground flex-shrink-0" />
              <span className="text-sm font-medium truncate">{currentPage.label}</span>
            </>
          )}
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          {showSearch && (
            <button 
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-accent transition-colors"
            >
              <Search className="h-4 w-4 text-muted-foreground" />
            </button>
          )}

          <div className="h-8 w-8 rounded-full overflow-hidden flex items-center justify-center cursor-pointer">
            <NavUser user={{avatar:"/globe.svg", email:"user@example.com", name: "User Name"}}/>
          </div>
        </div>
      </header>

      {/* Mobile Search Overlay */}
      {mobileSearchOpen && (
        <div className="md:hidden fixed left-0 right-0 top-14 z-40 bg-background/95 backdrop-blur-sm border-b border-border p-3 animate-in slide-in-from-top-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="h-10 w-full rounded-lg border pl-10 text-sm placeholder:text-muted-foreground focus-visible:ring-2"
              autoFocus
            />
          </div>
        </div>
      )}
    </>
  )
}