import React from "react";
import { NavUser } from "./dashboard-nav-user";
import { Button } from "../ui/button";
import { Bell } from "lucide-react";
import { SidebarTrigger } from "../ui/sidebar";

export default function Header() {
  const user = {
    name: "Shahrear Ahamed",
    email: "its.shahrear@gmail.com",
    avatar: "",
  };
  return (
    <header className="flex justify-between items-center border-b px-4 bg-white">
      <div>
        <SidebarTrigger className="md:hidden" />
      </div>
      <div className="flex h-16 shrink-0 items-center justify-end gap-2 border-b px-4 bg-white">
        <Button variant="secondary" className="relative">
          <Bell size={40} color="black" />
          <span className="absolute right-[1px] top-[1px] font-bold text-red-500">
            19
          </span>
        </Button>
        <div>
          <NavUser user={user} />
        </div>
      </div>
    </header>
  );
}
