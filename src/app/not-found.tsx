import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <h2 className="text-[30px] sm:text-[50px] md:text-[90px] font-bold text-center">
        Not Found
      </h2>
      <p className="text-lg text-center font-mono mb-5">
        Could not find requested resource
      </p>
      <Button>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
