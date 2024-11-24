"use client";

import * as React from "react";
import Link from "next/link";
import { Search, Bell, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  ],
};

export function SecondNavbar({
  isLoggedIn = true,
  userAvatar = "https://avatar.iran.liara.run/public/10",
  userName = "Shahrear Ahamed",
  userEmail = "shahrear@example.com",
}: {
  isLoggedIn?: boolean;
  userAvatar?: string;
  userName?: string;
  userEmail?: string;
}) {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isAllCoursesOpen, setIsAllCoursesOpen] = React.useState(false);
  //   const pathname = usePathname();
  const searchOverlayRef = React.useRef<HTMLDivElement>(null);
  const coursesOverlayRef = React.useRef<HTMLDivElement>(null);
  const navbarRef = React.useRef<HTMLDivElement>(null);

  const closeAllOverlays = () => {
    setIsSearchOpen(false);
    setIsAllCoursesOpen(false);
  };

  const handleAllCoursesButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAllCoursesOpen(!isAllCoursesOpen);
    setIsSearchOpen(false);
  };

  const handleSearchButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSearchOpen(!isSearchOpen);
    setIsAllCoursesOpen(false);
  };

  const handleNavbarClick = (e: React.MouseEvent) => {
    if (
      searchOverlayRef.current?.contains(e.target as Node) ||
      coursesOverlayRef.current?.contains(e.target as Node)
    ) {
      return;
    }
    closeAllOverlays();
  };

  const handleOverlayClose = (e: React.MouseEvent) => {
    console.log("Hi");
    if (isSearchOpen) {
      if (
        searchOverlayRef.current &&
        !searchOverlayRef.current.contains(e.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    }
    if (isAllCoursesOpen) {
      if (
        coursesOverlayRef.current &&
        !coursesOverlayRef.current.contains(e.target as Node)
      ) {
        setIsAllCoursesOpen(false);
      }
    }
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;

      if (
        navbarRef.current?.contains(target) ||
        searchOverlayRef.current?.contains(target) ||
        coursesOverlayRef.current?.contains(target)
      ) {
        return;
      }

      setIsSearchOpen(false);
      setIsAllCoursesOpen(false);
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <header
      ref={navbarRef}
      onClick={handleNavbarClick}
      className="sticky flex justify-center top-0 z-50 w-full border-b bg-background">
      <div className="relative w-full h-14 flex justify-center items-center">
        {/* Logo */}
        <div className="container mx-3 md:mx-0 flex items-center">
          <Link href="/" className="mr-4 md:mr-6 flex items-center space-x-2">
            <span className="font-bold">Skilled</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 flex items-center space-x-2">
            <div className="relative" ref={searchOverlayRef}>
              <Button
                variant="outline"
                className="w-full sm:w-[180px] h-10 px-3 justify-start rounded-full border-none shadow-none bg-primary/10"
                onClick={handleSearchButtonClick}>
                <Search className="!h-5 !w-5" />
                <p className="truncate hidden sm:block">কোর্স খুঁজুন</p>
              </Button>
              <div
                className={`fixed !-top-[1px] inset-0 w-full h-full border bg-background overflow-hidden z-50 animate-in slide-in-from-top-2 duration-300
                ${isSearchOpen ? "block" : "hidden"}
                sm:absolute sm:inset-auto sm:top-full sm:left-0 sm:w-screen sm:max-w-md
                md:max-w-lg lg:max-w-2xl sm:h-auto sm:rounded-md sm:shadow-lg`}
                onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center p-4 sm:p-1">
                  <Input
                    placeholder="লাইভ, রেকর্ডেড বা ফ্রি কোর্স সার্চ করুন"
                    className="flex-grow border-none ring-0 focus:ring-0 focus-visible:ring-0"
                    autoFocus
                  />
                  <Button
                    variant="link"
                    size="icon"
                    className="ml-2"
                    onClick={() => setIsSearchOpen(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <Separator className="mt-1" />
                <div className="h-[calc(100vh-4rem)] sm:h-[200px] md:h-[250px] overflow-auto p-4 sm:p-2">
                  <p className="text-sm text-muted-foreground">
                    Search results will appear here...
                  </p>
                </div>
              </div>
            </div>

            {/* Black Friday Offer Button - Always visible */}
            <Button variant="default" className="whitespace-nowrap px-2 py-1">
              Black Friday! 🎉
            </Button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4">
              <Button variant="secondary" onClick={handleAllCoursesButtonClick}>
                All Courses
                <ChevronDown
                  className={`h-4 w-4 duration-300 ${
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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="hidden lg:flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={userAvatar} alt={userName} />
                      <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>
                    <div className="flex flex-col">
                      <span>{userName}</span>
                      <span className="text-sm text-muted-foreground">
                        {userEmail}
                      </span>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Dashboard</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild className="hidden lg:flex">
                <Link href="/login">Login/Sign Up</Link>
              </Button>
            )}

            {/* All Courses Button - Mobile/Tablet */}

            <Button
              variant="secondary"
              className="lg:hidden"
              onClick={handleAllCoursesButtonClick}>
              Courses
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
                        <div className="flex flex-col">
                          <span className="font-medium">{userName}</span>
                          <span className="text-sm text-muted-foreground">
                            {userEmail}
                          </span>
                        </div>
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
                    <>
                      <Button
                        asChild
                        variant="ghost"
                        className="justify-start lg:hidden">
                        <Link href="/notifications">Notifications</Link>
                      </Button>
                      <Button asChild variant="ghost" className="justify-start">
                        <Link href="/profile">Profile</Link>
                      </Button>
                      <Button asChild variant="ghost" className="justify-start">
                        <Link href="/dashboard">Dashboard</Link>
                      </Button>
                      <Button asChild variant="ghost" className="justify-start">
                        <Link href="/settings">Settings</Link>
                      </Button>
                      <Button asChild variant="ghost" className="justify-start">
                        <Link href="/logout">Log out</Link>
                      </Button>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Overlay for Search */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 top-14 bg-black/40 backdrop-blur-sm"
          style={{ zIndex: 40 }}
          onClick={handleOverlayClose}
        />
      )}

      {/* Overlay for All Courses */}
      {isAllCoursesOpen && (
        <div className="fixed inset-0 top-14 z-40" onClick={handleOverlayClose}>
          <div
            ref={coursesOverlayRef}
            className="absolute z-30 inset-x-0 py-6 flex justify-center bg-background border-b border-b-primary rounded-b-lg"
            onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-center w-full max-w-7xl px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {/* Course Categories */}
                <div className="space-y-2">
                  <h4 className="font-bold text-lg">কোর্স ক্যাটাগরি</h4>
                  <ul
                    className="space-y-1 overflow-y-auto md:overflow-y-auto max-h-52 md:max-h-72 bg-secondary rounded-md p-3 custom-scrollbar"
                    style={{
                      scrollbarWidth: "thin",
                      scrollbarColor: "rgb(203 213 225) transparent",
                    }}>
                    {categories.map((category) => (
                      <li
                        key={category}
                        className="bg-primary/60 rounded-md font-medium my-2 hover:bg-primary/70 transition-colors">
                        <Link
                          href={`/category/${category
                            .toLowerCase()
                            .replace(" ", "-")}`}
                          className="block select-none rounded-md p-2 no-underline outline-none text-accent-foreground">
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Live Courses */}
                <div className="space-y-2">
                  <h4 className="font-bold text-lg">লাইভ কোর্স সমূহ</h4>
                  <ul
                    className="flex md:block space-x-4 md:space-x-0 overflow-x-auto md:overflow-y-auto max-h-64 md:max-h-72 p-3 custom-scrollbar"
                    style={{
                      scrollbarWidth: "thin",
                      scrollbarColor: "rgb(203 213 225) transparent",
                    }}>
                    {courses.live.map((course) => (
                      <li
                        key={course.title}
                        className="min-w-[200px] md:min-w-0 hover:bg-accent rounded-md transition-colors">
                        <Link
                          href={course.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none text-accent-foreground">
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

                {/* Recorded Courses */}
                <div className="space-y-2">
                  <h4 className="font-bold text-lg">রেকর্ড কোর্স সমূহ</h4>
                  <ul
                    className="flex md:block space-x-4 md:space-x-0 overflow-x-auto md:overflow-y-auto max-h-64 md:max-h-72 p-3 custom-scrollbar"
                    style={{
                      scrollbarWidth: "thin",
                      scrollbarColor: "rgb(203 213 225) transparent",
                    }}>
                    {courses.recorded.map((course) => (
                      <li
                        key={course.title}
                        className="min-w-[200px] md:min-w-0 hover:bg-accent rounded-md transition-colors">
                        <Link
                          href={course.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none text-accent-foreground">
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
            </div>
          </div>
          <div
            className="absolute z-20 inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleOverlayClose}
          />
        </div>
      )}
    </header>
  );
}
