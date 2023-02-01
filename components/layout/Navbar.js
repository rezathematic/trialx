import { useState } from "react";
import Link from "next/link";

// MUI imports
import Tooltip from "@mui/material/Tooltip";
import Drawer from "@mui/material/Drawer";

// Component Imports
import UserSettings from "@/components/UserSettings";

// Icon imports
import { Logo } from "@/components/icons/Logo";
import { Patients } from "@/components/icons/Patients";

const MobileNavbar = ({ user }) => {
  const [state, setState] = useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div className="block bg-slate-800 md:hidden">
      <button
        className="p-4 transition hover:bg-slate-600"
        onClick={toggleDrawer("left", true)}
      >
        <svg
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H20"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </button>
      <Drawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        <nav
          className="flex h-full flex-col flex-wrap justify-between bg-gray-800 py-6 px-4 antialiased"
          role="presentation"
          onClick={toggleDrawer("left", false)}
          onKeyDown={toggleDrawer("left", false)}
        >
          <div className="flex flex-col justify-center gap-6 text-white">
            <Tooltip title="Home" placement="right">
              <Link href="/" className="flex items-center">
                <Logo />
                <span className="ml-4 text-lg font-medium">Home</span>
              </Link>
            </Tooltip>
            <Tooltip title="Patients" placement="right">
              <Link href="/patients" className="flex items-center">
                <Patients />
                <span className="ml-4 text-lg font-medium">Patients</span>
              </Link>
            </Tooltip>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <a
              href={`/api/auth/signout`}
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
              className="text-lg font-medium text-white"
            >
              Logout
            </a>
          </div>
        </nav>
      </Drawer>
    </div>
  );
};

export default function Navbar({ user }) {
  return (
    <>
      <MobileNavbar user={user} />
      <nav className="fixed top-0 left-0 bottom-0 hidden w-20 flex-col flex-wrap items-center justify-between bg-gray-800 py-6 px-4 antialiased md:flex">
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
    </>
  );
}
