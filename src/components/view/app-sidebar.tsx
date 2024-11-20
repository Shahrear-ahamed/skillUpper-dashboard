"use client";

import { ChevronRight } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import DashboardSidebarHeader from "./dashboard-sidebar-header";
import { useAppSelector } from "@/hooks/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  filterSidebarItems,
  ISidebarSubMenuItems,
  studentSideBarItems,
} from "@/constants/sidebar-items";

export function AppSidebar() {
  const pathname = usePathname();
  const role = useAppSelector((state) => state.role.role);
  const updateRole = role.toLowerCase();
  const sidebarItems = filterSidebarItems(updateRole);

  return (
    <Sidebar collapsible="icon" className="">
      <SidebarHeader className="h-16 flex justify-center items-center border-b">
        <DashboardSidebarHeader />
      </SidebarHeader>

      <SidebarContent className="gap-1">
        <SidebarGroup>
          <SidebarMenu className="px-2">
            {studentSideBarItems.map((studentItems: ISidebarSubMenuItems) => (
              <SidebarMenuItem key={studentItems.title} className="list-none">
                <Link
                  href={`/dashboard${studentItems.url}`}
                  className="flex space-x-2 items-center w-full h-10">
                  <SidebarMenuButton
                    tooltip={studentItems.title}
                    className="[&>svg]:size-5 !h-10"
                    isActive={pathname.includes(
                      studentItems.title.toLowerCase().split(" ").join("-")
                    )}>
                    {studentItems.icon && <studentItems.icon />}
                    <span>{studentItems.title}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        {updateRole === "student" || updateRole === "your role" ? (
          ""
        ) : (
          <SidebarSeparator className="bg-border" />
        )}

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="px-2 gap-2">
              {sidebarItems.map((item) => (
                <Collapsible
                  key={item.title}
                  asChild
                  defaultOpen={item.isActive}
                  className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        tooltip={item.title}
                        className="[&>svg]:size-5 h-10"
                        isActive={pathname.includes(
                          item.title.toLowerCase().split(" ").join("-")
                        )}>
                        {item.icon && <item.icon />}
                        <span className="font-semibold">{item.title}</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={
                                pathname === `/dashboard${subItem.url}`
                              }>
                              <Link href={`/dashboard${subItem.url}`}>
                                <span>{subItem.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
