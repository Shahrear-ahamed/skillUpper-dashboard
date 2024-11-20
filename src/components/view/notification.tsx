"use client";

import { Bell, CheckCheck } from "lucide-react";
import LiveIcon from "../../../public/live.png";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

export function Notification() {
  return (
    <DropdownMenu modal>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          className="w-14 h-8 rounded-[32px] p-0 flex justify-center items-center">
          <div className="flex justify-center items-center gap-1 relative">
            <Bell size={20} />
            <span className="rounded-full bg-red-400 px-1 text-gray-800 text-xs">
              19
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-80 md:min-w-96 rounded-lg"
        align="end"
        sideOffset={4}>
        <DropdownMenuLabel className="px-3 py-2 flex justify-between items-center">
          <h3 className="text-lg">নোটিফিকেশন</h3>
          <Button variant="ghost" className="font-bold">
            <CheckCheck size={20} />
            <span>সবগুলো মার্ক করুন</span>
          </Button>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="space-y-2">
          {notifications.map((notification) => (
            <DropdownMenuItem
              key={notification.id}
              className="flex gap-2 items-start w-full">
              <Image src={LiveIcon} width={40} height={40} alt="Live Icon" />
              <div className="ml-2 cursor-pointer">
                <div className="text-base text-foreground">
                  {notification.title}
                </div>
                <div className="text-xs text-foreground/80 flex gap-1 w-full">
                  <p>{notification.time}</p>
                  <p className="space-x-1 font-medium">•</p>
                  <p>{notification.course}</p>
                </div>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem className="p-0">
          <Link
            href="/dashboard/notifications"
            className="w-full border-none shadow-none p-0">
            <Button variant="ghost" className="w-full font-bold">
              সবগুলো দেখুন
            </Button>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const notifications = [
  {
    id: 1,
    title: "তোমার সার্টিফিকেট আপলোড হয়েছে",
    time: "৪ দিন আগে",
    course: "Video Editing and Story Telling",
  },
  {
    id: 2,
    title: "লাইভ ক্লাস শুরু হয়েছে",
    time: "৪ দিন আগে",
    course: "Video Editing and Story Telling",
  },
  {
    id: 3,
    title: "লাইভ ক্লাসের রেকর্ডিং আপলোড হয়েছে",
    time: "৪ দিন আগে",
    course: "Video Editing and Story Telling",
  },
  {
    id: 4,
    title: "তোমার এসাইন্মেন্ট মার্ক দেওয়া হয়েছে",
    time: "৪ দিন আগে",
    course: "Video Editing and Story Telling",
  },
  {
    id: 5,
    title: "নতুন একটি এসাইন্মেন্ট পাবলিশ হয়েছে",
    time: "৪ দিন আগে",
    course: "Video Editing and Story Telling",
  },
];
