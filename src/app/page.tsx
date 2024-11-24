import { Button } from "@/components/ui/button";
import { SecondNavbar } from "@/components/view/second-navbar";
import { ModeToggle } from "@/components/view/theme-toggle";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      {/* <MainNav isLoggedIn={true} /> */}
      <SecondNavbar isLoggedIn={true} />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col">
          <div className="flex space-x-5 items-center">
            <Link
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-primary text-primary-foreground gap-2 hover:bg-primary/90  text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="/dashboard"
              rel="noopener noreferrer">
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Dashboard
            </Link>
            <ModeToggle />
          </div>
          <div className="flex justify-center items-center flex-wrap gap-3">
            <Button className="rounded-full border border-solid border-transparent">
              <Link href="/terms">Terms</Link>
            </Button>
            <Button className="rounded-full border border-solid border-transparent">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </Button>
            <Button className="rounded-full border border-solid border-transparent">
              <Link href="/refund-policy">Refund Policy</Link>
            </Button>
            <Button className="rounded-full border border-solid border-transparent">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
        <div className="flex gap-4 items-center flex-col">
          <div className="flex space-x-5 items-center">
            <Link
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-primary text-primary-foreground gap-2 hover:bg-primary/90  text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="/dashboard"
              rel="noopener noreferrer">
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Dashboard
            </Link>
            <ModeToggle />
          </div>
          <div className="flex justify-center items-center flex-wrap gap-3">
            <Button className="rounded-full border border-solid border-transparent">
              <Link href="/terms">Terms</Link>
            </Button>
            <Button className="rounded-full border border-solid border-transparent">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </Button>
            <Button className="rounded-full border border-solid border-transparent">
              <Link href="/refund-policy">Refund Policy</Link>
            </Button>
            <Button className="rounded-full border border-solid border-transparent">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
