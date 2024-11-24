"use client";

import * as React from "react";
import Link from "next/link";
import { Search, Bell, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const categories = [
  "Web Development",
  "Mobile Development",
  "Data Science",
  "Machine Learning",
  "DevOps",
  "Cloud Computing",
  "Cybersecurity",
  "Blockchain",
  "Game Development",
  "UI/UX Design",
];

const courses = {
  live: [
    {
      title: "Advanced React Patterns",
      href: "/live/react-patterns",
      description: "Live sessions on advanced React concepts",
    },
    {
      title: "System Design",
      href: "/live/system-design",
      description: "Real-time system design workshops",
    },
    {
      title: "Advanced React Patterns 2",
      href: "/live/react-patterns",
      description: "Live sessions on advanced React concepts",
    },
    {
      title: "System Design 2",
      href: "/live/system-design",
      description: "Real-time system design workshops",
    },
    {
      title: "Advanced React Patterns 3",
      href: "/live/react-patterns",
      description: "Live sessions on advanced React concepts",
    },
    {
      title: "System Design 3",
      href: "/live/system-design",
      description: "Real-time system design workshops",
    },
  ],
  recorded: [
    {
      title: "Web Development Bootcamp",
      href: "/courses/web-development",
      description: "Learn full-stack web development from scratch",
    },
    {
      title: "Mobile App Development",
      href: "/courses/mobile-development",
      description: "Build iOS and Android apps with React Native",
    },
    {
      title: "Web Development Bootcamp 2",
      href: "/courses/web-development",
      description: "Learn full-stack web development from scratch",
    },
    {
      title: "Mobile App Development 2",
      href: "/courses/mobile-development",
      description: "Build iOS and Android apps with React Native",
    },
    {
      title: "Web Development Bootcamp 3",
      href: "/courses/web-development",
      description: "Learn full-stack web development from scratch",
    },
    {
      title: "Mobile App Development 3",
      href: "/courses/mobile-development",
      description: "Build iOS and Android apps with React Native",
    },
  ],
};

export function MainNav({
  isLoggedIn = true,
  userAvatar = "https://avatar.iran.liara.run/public/10",
  userName = "shahrear ahamed",
  userEmail = "its.shahrear@gmail.com",
}: {
  isLoggedIn?: boolean;
  userAvatar?: string;
  userName?: string;
  userEmail?: string;
}) {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isAllCoursesOpen, setIsAllCoursesOpen] = React.useState(false);
  // const pathname = usePathname();

  const handleOverlayClose = () => {
    setIsSearchOpen(false);
    setIsAllCoursesOpen(false);
  };

  return (
    <header className="sticky top-0 w-full border-b bg-background/95 supports-[backdrop-filter]:bg-background/60 flex justify-center">
      <div className="container z-50 flex h-14 items-center">
        {/* Logo */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">Skilled</span>
        </Link>

        {/* Dynamic Offer Button - Mobile */}
        <Button variant="default" className="mr-2 lg:hidden">
          Black Friday Sale! 🎉
        </Button>

        {/* Search Bar */}
        <div className="flex-1 flex items-center space-x-2">
          <Button
            variant="outline"
            className="w-[40px] min-w-[40px] max-w-[180px] lg:w-[180px] h-10 px-3 justify-start"
            onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search className="h-4 w-4 mr-2" />
            <p className="truncate">কোর্স খুঁজুন</p>
          </Button>

          {/* Black Friday Offer Button */}
          <Button variant="default" className="hidden lg:flex">
            Black Friday Sale! 🎉
          </Button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => setIsAllCoursesOpen(!isAllCoursesOpen)}>
              All Courses
              <ChevronDown
                className={`duration-300 ${
                  isAllCoursesOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </Button>
            <Link href="/blogs" className="text-sm font-medium">
              Blogs
            </Link>
            <Link href="/free-courses" className="text-sm font-medium">
              Free Courses
            </Link>
            <Link href="/webinars" className="text-sm font-medium">
              Webinars
            </Link>
          </nav>
        </div>

        {/* Right Side Items */}
        <div className="flex items-center gap-2">
          {/* Notification Button - Desktop */}
          {isLoggedIn && (
            <Button variant="ghost" size="icon" className="hidden lg:flex">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Notifications</span>
            </Button>
          )}

          {/* Login/Dashboard - Desktop */}
          {isLoggedIn ? (
            <Button variant="ghost" asChild className="hidden lg:flex">
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          ) : (
            <Button asChild className="hidden lg:flex">
              <Link href="/login">Login/Sign Up</Link>
            </Button>
          )}

          {/* All Courses Button - Mobile/Tablet */}
          <Button
            variant="ghost"
            className="lg:hidden"
            onClick={() => setIsAllCoursesOpen(true)}>
            <ChevronDown
              className={`duration-300 ${
                isAllCoursesOpen ? "rotate-180" : "rotate-0"
              }`}
            />
            All Courses
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4">
                {isLoggedIn && (
                  <>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={userAvatar} alt={userName} />
                        <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{userName}</span>
                      <span className="font-medium">{userEmail}</span>
                    </div>
                    <Separator />
                  </>
                )}
                <Button asChild variant="ghost" className="justify-start">
                  <Link href="/blogs">Blogs</Link>
                </Button>
                <Button asChild variant="ghost" className="justify-start">
                  <Link href="/free-courses">Free Courses</Link>
                </Button>
                <Button asChild variant="ghost" className="justify-start">
                  <Link href="/webinars">Webinars</Link>
                </Button>
                {isLoggedIn && (
                  <Button
                    asChild
                    variant="ghost"
                    className="justify-start lg:hidden">
                    <Link href="/notifications">Notifications</Link>
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Overlay for Search and All Courses */}
      {(isSearchOpen || isAllCoursesOpen) && (
        <div className="inset-0">
          <div className="absolute inset-x-0 z-10 top-14 bg-background flex justify-center items-center">
            <div className="w-full flex justify-center border-b-[1px] border-b-primary rounded-b-lg">
              <div className="container flex justify-center py-6 h-96 overflow-hidden">
                {isSearchOpen && (
                  <div className="mb-6">
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="লাইভ , ফ্রি বা রেকর্ডেড কোর্স সার্চ করুন"
                        className="pl-8 pr-12"
                        autoFocus
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 hover:bg-transparent"
                        onClick={() => setIsSearchOpen(false)}>
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="mt-4">
                      {/* Add search results here */}
                      <p>Search results will appear here...</p>
                    </div>
                  </div>
                )}
                {isAllCoursesOpen && (
                  <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 p-4 backdrop-blur-md rounded-lg max-h-[calc(100vh-100px)]">
                    {/* Categories Section */}
                    <div className="space-y-2 overflow-auto max-h-full">
                      <h4 className="font-bold text-lg leading-none">
                        কোর্স ক্যাটাগরি
                      </h4>
                      <ul className="space-y-1">
                        {categories.map((category) => (
                          <li
                            key={`/category/${category
                              .toLowerCase()
                              .replace(" ", "-")}`}>
                            <Link
                              href={`/category/${category
                                .toLowerCase()
                                .replace(" ", "-")}`}
                              className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              {category}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Live Courses Section */}
                    <div className="space-y-2 overflow-auto max-h-full">
                      <h4 className="font-bold text-lg leading-none">
                        লাইভ কোর্স সমূহ
                      </h4>
                      <ul className="space-y-2">
                        {courses.live.map((course) => (
                          <li key={course.title}>
                            <Link
                              href={course.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <div className="text-sm font-medium leading-none">
                                {course.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {course.description}
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Recorded Courses Section */}
                    <div className="space-y-2 overflow-auto max-h-full">
                      <h4 className="font-bold text-lg leading-none">
                        রেকর্ড কোর্স সমূহ
                      </h4>
                      <ul className="space-y-2">
                        {courses.recorded.map((course) => (
                          <li key={course.title}>
                            <Link
                              href={course.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <div className="text-sm font-medium leading-none">
                                {course.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {course.description}
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            className="absolute h-screen inset-0 bg-black/20 backdrop-blur-lg"
            onClick={handleOverlayClose}></div>
        </div>
      )}
    </header>
  );
}
