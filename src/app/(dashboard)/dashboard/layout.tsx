import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/view/app-sidebar";
import Header from "@/components/view/header";

import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="bg-gray-100">
      <AppSidebar />
      <div className="w-full bg-background">
        <Header />
        <div className="m-3 p-3 md:m-4 md:p-4 lg:m-5 lg:p-5 rounded-lg bg-primary/10">
          {children}
        </div>
      </div>

      {/* <Button
        variant="secondary"
        className="shadow-lg bg-primary/30 hover:bg-primary/50 duration-300 px-0 p-3 h-12 fixed bottom-10 right-10"
        size="lg">
        <div className="bg-gray-200 flex items-center w-full space-x-2 px-2 py-1 rounded text-black">
          <CircleAlert className="right-2 inline-block" /> <p>সমস্যায় পড়েছি?</p>
        </div>
      </Button> */}
    </SidebarProvider>
  );
}
