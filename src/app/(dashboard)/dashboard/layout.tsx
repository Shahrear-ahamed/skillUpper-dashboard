import { Button } from "../../../components/ui/button";
import { SidebarProvider } from "../../../components/ui/sidebar";
import { AppSidebar } from "../../../components/view/app-sidebar";
import Header from "../../../components/view/header";
import { CircleAlert } from "lucide-react";

import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="bg-gray-100">
      <AppSidebar />
      <div className="w-full bg-gray-100">
        <Header />
        <div className="m-3 p-3 md:m-4 md:p-4 lg:m-5 lg:p-5 rounded-lg bg-white">
          {children}
        </div>
      </div>

      <Button
        variant="secondary"
        className="shadow-lg hover:bg-gray-300 duration-300 px-0 p-3 h-12 absolute bottom-10 right-10"
        size="lg">
        <div className="bg-gray-200 flex items-center w-full space-x-2 px-2 py-1 rounded">
          <CircleAlert className="right-2 inline-block" /> <p>সমস্যায় পড়েছি?</p>
        </div>
      </Button>
    </SidebarProvider>
  );
}
