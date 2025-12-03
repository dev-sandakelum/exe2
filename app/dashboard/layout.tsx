'use client'
import { SidebarProvider } from "@/components/ui/sidebar";
import "./../globals.css";
import { AppSidebar } from "@/components/app-sidebar_test";
import { Header } from "@/components/header";
import { useState } from "react";
import Cu_Sidebar from "@/components/customUI/sidebar_main";
import Cu_Sidebar_secondary from "@/components/customUI/Cu_Sidebar_secondary";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [x ,setX] = useState(true);
  return (
    <div className="[--header-height:calc(--spacing(12))]">
      <SidebarProvider className="flex flex-col">
        <button  onClick={()=>setX(!x)} className=" absolute z-101 l-0 t-0 w-10 h-10 bg-green-600">t</button>
        <Header />
        <div className="flex flex-1">
          <div className="absolute border bg-(--my-style-primary)  w-14 max-h-full h-full l-0 t-0 z-100" >
            <Cu_Sidebar />
          </div>

          <div className={`
          absolute bg-(--my-style-sec) border w-65 max-h-full pt-14 h-full l-0 t-0 z-99
          ${x? "left-14": "-left-100"}
          transition-all duration-300
          `}>
            <Cu_Sidebar_secondary />
          </div>

          {/* <AppSidebar /> */}
          {/* <AppSidebar className="ml-60" /> */}
          <div className={`${x ? "w-78" : "w-0"} transition-all duration-300`}>
            
          </div>
          {children}
        </div>
      </SidebarProvider>
    </div>
  );
}
