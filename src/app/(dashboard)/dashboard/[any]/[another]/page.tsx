"use client";

import {
  filterSidebarItems,
  ISidebarSubMenuItems,
} from "@/constants/sidebar-items";
import { useAppSelector } from "@/hooks/hooks";
import { notFound, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const pathname = usePathname();
  const splitPathname: string[] = pathname.split("/").slice(1);
  const removeDashboard = splitPathname.slice(1);
  const modifiedPathName = removeDashboard.join("/");

  const role = useAppSelector((state) => state.role.role);
  const updateRole = role?.toLowerCase();
  const sidebarItems = filterSidebarItems(updateRole);

  const [isValidPath, setIsValidPath] = useState(false);

  useEffect(() => {
    if (!role || !sidebarItems.length) return; // Wait for data to be ready

    const myLink: ISidebarSubMenuItems[] = [];
    sidebarItems.map((item) => myLink.push(...item.items));

    const normalizedPathName = `/${modifiedPathName}`.toLowerCase();
    const checkLink = myLink.find(
      (items) => items.url.toLowerCase() === normalizedPathName
    );

    // if user logged in but user try to visit another route that they don't have any access
    // const findThisUrlData = myLink.find(
    //   (data) => data.url === normalizedPathName
    // );

    // if (!findThisUrlData?.roles.includes(updateRole))
    //   redirect("/dashboard");

    if (!checkLink) notFound(); // Trigger error only if path is invalid
    else setIsValidPath(true); // Mark as valid
  }, [role, sidebarItems, modifiedPathName, pathname, updateRole]);

  if (!isValidPath) return null; // Prevent rendering until validation is complete

  return (
    <div>
      <h2>
        Hello you are searching this
        <span className="rounded-md px-2 py-1 font-mono text-sm shadow-sm italic">
          {`'${pathname}'`}
        </span>
        , right?
      </h2>
      <h3>No Problem! We are working on it</h3>
    </div>
  );
}
