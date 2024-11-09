"use client";

import React from "react";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "../ui/sidebar";
import Link from "next/link";

export default function DashboardSidebarHeader() {
  const { open } = useSidebar();
  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <div className="ml-2 flex space-x-2 items-center transition-all duration-[400ms] ease-linear">
            <SidebarTrigger variant="link" className="hidden md:flex justify-center items-center hover:!bg-none" />
            <Link href="/">
              <h1
                className={`font-bold transition-all duration-[400ms] ease-linear ${
                  open ? "w-full opacity-100" : "w-0 opacity-0"
                }`}>
                SkillUpper
              </h1>
            </Link>
          </div>
        </SidebarMenuItem>
      </SidebarMenu>
    </>
  );
}
