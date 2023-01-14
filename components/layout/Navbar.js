// Nextjs imports
import Link from "next/link";

// Icon imports
import { Logo } from "@/components/icons/Logo";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 bottom-0 flex w-20 flex-col flex-wrap items-center bg-gray-800 py-6 px-4 antialiased">
      <div className="flex items-center justify-center text-white">
        <Link href="/">
          <Logo />
        </Link>
      </div>
    </nav>
  );
}
