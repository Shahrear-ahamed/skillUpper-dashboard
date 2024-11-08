import {
  BookA,
  Briefcase,
  ChartNoAxesCombined,
  ChevronRight,
  Landmark,
  Megaphone,
  MonitorPlay,
  NotebookPen,
  Accessibility,
  UserRoundCog,
  Users,
} from "lucide-react";
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
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import DashboardSidebarHeader from "./dashboard-sidebar-header";

// Menu items.
const items = [
  {
    title: "User Management",
    url: "#",
    icon: Users,
    isActive: true,
    items: [
      {
        title: "View Student",
        url: "/user-management/view-student",
      },
      {
        title: "Create Instructor",
        url: "/user-management/create-instructor",
      },
      {
        title: "View Instructor",
        url: "/user-management/view-instructor",
      },
    ],
  },
  {
    title: "Finance Management",
    url: "#",
    icon: Landmark,
    items: [
      {
        title: "Instructor Withdraw",
        url: "/finance-management/instructor-withdraw",
      },
      {
        title: "Affiliate Withdraw",
        url: "/finance-management/affiliate-withdraw",
      },
    ],
  },
  {
    title: "Course Management",
    url: "#",
    icon: BookA,
    items: [
      {
        title: "Create Course",
        url: "/course-management/create-course",
      },
      {
        title: "View Courses",
        url: "/course-management/view-courses",
      },
      {
        title: "Quizzes",
        url: "/course-management/quizzes",
      },
      {
        title: "Categories",
        url: "/course-management/categories",
      },
      {
        title: "Tags",
        url: "/course-management/tags",
      },
      {
        title: "Create Assignments",
        url: "/course-management/create-assignments",
      },
      {
        title: "View Assignments",
        url: "/course-management/view-assignments",
      },
      {
        title: "Course Announcement",
        url: "/course-management/course-announcement",
      },
      {
        title: "Course Reviews",
        url: "/course-management/course-reviews",
      },
      {
        title: "Add Resources",
        url: "/course-management/add-resources",
      },
    ],
  },
  {
    title: "Webinar",
    url: "#",
    icon: MonitorPlay,
    items: [
      {
        title: "Create Webinars",
        url: "/webinar/create-webinars",
      },
      {
        title: "View Webinars",
        url: "/webinar/view-webinars",
      },
    ],
  },
  {
    title: "Blog Management",
    url: "#",
    icon: NotebookPen,
    items: [
      {
        title: "Create Blog",
        url: "/blog-management/create-blog",
      },
      {
        title: "View Blog",
        url: "/blog-management/view-blog",
      },
    ],
  },
  {
    title: "Profile Management",
    url: "#",
    icon: UserRoundCog,
    items: [
      {
        title: "Profile",
        url: "/profile-management/profile",
      },
      {
        title: "Password",
        url: "/profile-management/password",
      },
      {
        title: "Transactions/Order History",
        url: "/profile-management/transactions-history",
      },
    ],
  },
  {
    title: "Analytics",
    url: "#",
    icon: ChartNoAxesCombined,
    items: [
      {
        title: "Orders",
        url: "/analytics/orders",
      },
      {
        title: "Course Revenue",
        url: "/analytics/course-revenue",
      },
    ],
  },
  {
    title: "Marketing",
    url: "#",
    icon: Megaphone,
    items: [
      {
        title: "Coupons",
        url: "/marketing/coupons",
      },
      {
        title: "Funnel",
        url: "/marketing/funnel",
      },
    ],
  },
  {
    title: "Campaign Management",
    url: "#",
    icon: Briefcase,
    items: [
      {
        title: "Send SMS",
        url: "/campaign-management/send-sms",
      },
      {
        title: "SMS List",
        url: "/campaign-management/sms-list",
      },
      {
        title: "Send Mail",
        url: "/campaign-management/send-mail",
      },
      {
        title: "Mail List",
        url: "/campaign-management/mail-list",
      },
      {
        title: "Templates (Email & SMS)",
        url: "/campaign-management/templates",
      },
    ],
  },
  {
    title: "Student Dashboard",
    url: "#",
    icon: Accessibility,
    items: [
      {
        title: "My Courses",
        url: "/student-dashboard/my-courses",
      },
      {
        title: "Resources",
        url: "/student-dashboard/resources",
      },
      {
        title: "Student Analytics",
        url: "/student-dashboard/student-analytics",
      },
      {
        title: "Leaderboard",
        url: "/student-dashboard/leaderboard",
      },
      {
        title: "Assignments",
        url: "/student-dashboard/assignments",
      },
      {
        title: "Help Center",
        url: "/student-dashboard/help-center",
      },
      {
        title: "Submit Tickets",
        url: "/student-dashboard/submit-tickets",
      },
      {
        title: "Tickets",
        url: "/student-dashboard/tickets",
      },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="">
      <SidebarHeader className="h-16 flex justify-center items-center border-b">
        <DashboardSidebarHeader />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="px-2 gap-2">
              {items.map((item) => (
                <Collapsible
                  key={item.title}
                  asChild
                  defaultOpen={item.isActive}
                  className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        tooltip={item.title}
                        className="[&>svg]:size-5 h-10">
                        {item.icon && <item.icon />}
                        <span className="font-semibold">{item.title}</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <a href={`/dashboard${subItem.url}`}>
                                <span>{subItem.title}</span>
                              </a>
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
