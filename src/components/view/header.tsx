import React from "react";
import { NavUser } from "./dashboard-nav-user";
import { Button } from "../ui/button";
import { Bell } from "lucide-react";
import { SidebarTrigger } from "../ui/sidebar";

export default function Header() {
  const user = {
    name: "Shahrear Ahamed",
    email: "its.shahrear@gmail.com",
    avatar: "https://github.com/shadcn.png",
  };
  return (
    <header className="flex justify-between items-center border-b px-4 bg-white h-16">
      <div>
        <SidebarTrigger className="md:hidden" />
      </div>
      <div className="flex shrink-0 items-center justify-end gap-2 bg-white">
        <Button
          variant="secondary"
          className="w-14 h-8 rounded-[32px] p-0 flex justify-center items-center">
          <div className="flex justify-center items-center gap-1 relative">
            <Bell size={20} color="black" />
            <span className="rounded-full bg-red-400 px-1 text-gray-800 text-xs">
              19
            </span>
          </div>
        </Button>
        <div>
          <NavUser user={user} />
        </div>
      </div>
    </header>
  );
}
