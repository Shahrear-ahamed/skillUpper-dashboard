"use client";

import React from "react";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "../ui/sidebar";

export default function DashboardSidebarHeader() {
  const { open } = useSidebar();
  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <div className="ml-2 flex space-x-2 items-center">
            <SidebarTrigger className="hidden md:flex justify-center items-center" />
            {open && <h1>SkillUpper</h1>}
          </div>
        </SidebarMenuItem>
      </SidebarMenu>
    </>
  );
}
