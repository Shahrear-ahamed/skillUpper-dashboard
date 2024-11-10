/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";
import { NavUser } from "./dashboard-nav-user";
import { SidebarTrigger } from "../ui/sidebar";
import UserSelect from "../user-select";
import { useAppDispatch } from "@/hooks/hooks";
import { changeRole } from "@/lib/features/change-role/changeRoleSlice";
import { Notification } from "./notification";

export default function Header() {
  // set role
  const dispatch = useAppDispatch();

  useEffect(() => {
    const localRole = window.localStorage.getItem("role");
    const initialRole = localRole || "Your role";

    dispatch(changeRole(initialRole));
  }, [dispatch]);

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
        <div>
          <UserSelect />
        </div>
        <Notification />
        <div>
          <NavUser user={user} />
        </div>
      </div>
    </header>
  );
}
