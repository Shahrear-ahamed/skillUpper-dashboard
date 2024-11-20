import {
  BookA,
  BookMinus,
  Briefcase,
  ChartNoAxesCombined,
  ContactRound,
  Folders,
  Landmark,
  Megaphone,
  MessageCircleQuestion,
  MonitorPlay,
  NotebookPen,
  Users,
} from "lucide-react";

export interface ISidebarMenuItems {
  title: string;
  url: string;
  icon: React.ElementType;
  roles: string[];
  isActive?: boolean;
  items: ISidebarSubMenuItems[];
}

export interface ISidebarSubMenuItems {
  title: string;
  url: string;
  icon?: React.ElementType;
  roles: string[];
}

const data = {
  studentSideBarItems: [
    {
      title: "My Courses",
      url: "/my-courses",
      icon: BookMinus,
      roles: ["student"],
    },
    {
      title: "Resources",
      url: "/resources",
      icon: Folders,
      roles: ["student"],
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: ChartNoAxesCombined,
      roles: ["student"],
    },
    {
      title: "Leaderboard",
      url: "/leaderboard",
      icon: ContactRound,
      roles: ["student"],
    },
    {
      title: "Help Desk",
      url: "/help-desk",
      icon: MessageCircleQuestion,
      roles: ["student"],
    },
  ],
  sidebarMenuItems: [
    {
      title: "User Management",
      url: "#",
      icon: Users, // Replace with your actual icon component
      roles: ["admin", "marketer", "call support"],
      isActive: true,
      items: [
        {
          title: "View Student",
          url: "/user-management/view-student",
          roles: ["admin", "marketer", "call support"],
        },
        {
          title: "Create Instructor",
          url: "/user-management/create-instructor",
          roles: ["admin", "course manager"],
        },
        {
          title: "View Instructor",
          url: "/user-management/view-instructor",
          roles: ["admin", "course manager"],
        },
      ],
    },
    {
      title: "Finance Management",
      url: "#",
      icon: Landmark,
      roles: ["admin"],
      items: [
        {
          title: "Instructor Withdraw",
          url: "/finance-management/instructor-withdraw",
          roles: ["admin"],
        },
        {
          title: "Affiliate Withdraw",
          url: "/finance-management/affiliate-withdraw",
          roles: ["admin"],
        },
      ],
    },
    {
      title: "Course Management",
      url: "#",
      icon: BookA,
      roles: ["admin", "course manager", "instructor", "call support"],
      items: [
        {
          title: "Create Course",
          url: "/course-management/create-course",
          roles: ["admin", "course manager", "instructor"],
        },
        {
          title: "View Courses",
          url: "/course-management/view-courses",
          roles: ["admin", "course manager", "call support"],
        },
        {
          title: "Quizzes",
          url: "/course-management/quizzes",
          roles: ["admin", "course manager", "instructor"],
        },
        {
          title: "Categories",
          url: "/course-management/categories",
          roles: ["admin", "course manager"],
        },
        {
          title: "Tags",
          url: "/course-management/tags",
          roles: ["admin", "course manager"],
        },
        {
          title: "Create Assignments",
          url: "/course-management/create-assignments",
          roles: ["admin", "course manager", "instructor"],
        },
        {
          title: "View Assignments",
          url: "/course-management/view-assignments",
          roles: ["admin", "course manager", "instructor", "call support"],
        },
        {
          title: "Course Announcement",
          url: "/course-management/course-announcement",
          roles: ["admin", "course manager", "instructor"],
        },
        {
          title: "Course Reviews",
          url: "/course-management/course-reviews",
          roles: ["admin", "course manager", "instructor"],
        },
        {
          title: "Add Resources",
          url: "/course-management/add-resources",
          roles: ["admin", "course manager", "instructor"],
        },
      ],
    },
    {
      title: "Webinar",
      url: "#",
      icon: MonitorPlay,
      roles: ["admin", "course manager", "instructor", "marketer"],
      items: [
        {
          title: "Create Webinars",
          url: "/webinar/create-webinars",
          roles: ["admin", "course manager", "instructor", "marketer"],
        },
        {
          title: "View Webinars",
          url: "/webinar/view-webinars",
          roles: ["admin", "course manager", "instructor", "marketer"],
        },
      ],
    },
    {
      title: "Blog Management",
      url: "#",
      icon: NotebookPen,
      roles: ["admin", "course manager", "instructor", "author"],
      items: [
        {
          title: "Create Blog",
          url: "/blog-management/create-blog",
          roles: ["admin", "course manager", "instructor", "author"],
        },
        {
          title: "View Blog",
          url: "/blog-management/view-blog",
          roles: ["admin", "course manager", "instructor", "author"],
        },
      ],
    },
    {
      title: "Analytics",
      url: "#",
      icon: ChartNoAxesCombined,
      roles: ["admin", "marketer", "call support"],
      items: [
        {
          title: "Orders",
          url: "/analytics/orders",
          roles: ["admin", "marketer", "call support"],
        },
        {
          title: "Course Revenue",
          url: "/analytics/course-revenue",
          roles: ["admin", "marketer"],
        },
      ],
    },
    {
      title: "Marketing",
      url: "#",
      icon: Megaphone,
      roles: ["admin", "marketer"],
      items: [
        {
          title: "Coupons",
          url: "/marketing/coupons",
          roles: ["admin", "marketer"],
        },
        {
          title: "Funnel",
          url: "/marketing/funnel",
          roles: ["admin", "marketer"],
        },
      ],
    },
    {
      title: "Campaign Management",
      url: "#",
      icon: Briefcase,
      roles: ["admin", "marketer"],
      items: [
        {
          title: "Send SMS",
          url: "/campaign-management/send-sms",
          roles: ["admin", "marketer"],
        },
        {
          title: "SMS List",
          url: "/campaign-management/sms-list",
          roles: ["admin", "marketer"],
        },
        {
          title: "Send Mail",
          url: "/campaign-management/send-mail",
          roles: ["admin", "marketer"],
        },
        {
          title: "Mail List",
          url: "/campaign-management/mail-list",
          roles: ["admin", "marketer"],
        },
        {
          title: "Templates (Email & SMS)",
          url: "/campaign-management/templates",
          roles: ["admin", "marketer"],
        },
      ],
    },
  ],
};

const filterSidebarItems = (role: string): ISidebarMenuItems[] => {
  const menuItems = data.sidebarMenuItems
    .filter((item) => item.roles.includes(role) || item.roles.includes("all"))
    .map((firstMenuItem) => ({
      ...firstMenuItem,
      isActive: firstMenuItem.isActive || false,
      items: firstMenuItem.items.filter(
        (subMenuItem) =>
          subMenuItem.roles.includes(role) || subMenuItem.roles.includes("all")
      ),
    }));

  return menuItems;
};

const studentSideBarItems: ISidebarSubMenuItems[] = data.studentSideBarItems;

export { studentSideBarItems, filterSidebarItems };
