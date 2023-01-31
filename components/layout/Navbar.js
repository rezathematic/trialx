// Nextjs imports
import Link from "next/link";

// MUI imports
import Tooltip from "@mui/material/Tooltip";

// Component Imports
import UserSettings from "@/components/UserSettings";

// Icon imports
import { Logo } from "@/components/icons/Logo";
import { Patients } from "@/components/icons/Patients";

export default function Navbar({ user }) {
  return (
    <nav className="fixed top-0 left-0 bottom-0 flex w-20 flex-col flex-wrap items-center justify-between bg-gray-800 py-6 px-4 antialiased">
      <div className="flex flex-col items-center justify-center gap-4 text-white">
        <Tooltip title="Home" placement="right">
          <Link href="/">
            <Logo />
          </Link>
        </Tooltip>
        <Tooltip title="Patients" placement="right">
          <Link href="/patients" className="ml-2">
            <Patients />
          </Link>
        </Tooltip>
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <UserSettings user={user} />
      </div>
    </nav>
  );
}
