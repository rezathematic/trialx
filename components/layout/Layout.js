// Component imports
import Navbar from "@/components/layout/Navbar";
import Spinner from "@/components/utils/Spinner";

// Auth imports
import { useSession, signIn } from "next-auth/react";

export default function Layout({ children }) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-white bg-opacity-80">
        <Spinner />
      </div>
    );
  }

  if (!session) {
    return (
      <>
        <main>
          <div className="flex h-screen flex-col items-center justify-center">
            <div className="border border-slate-100 p-12 text-center shadow-lg">
              <h1 className="mb-4 text-3xl font-semibold text-slate-700">
                Welcome to TRIAL X
              </h1>
              <h2 className="mb-4 text-slate-700">
                Please sign in to continue
              </h2>
              <button
                className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white"
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Sign In
              </button>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar user={session.user} />
      <main className="w-full md:mr-0 md:ml-20 md:w-auto">{children}</main>
    </>
  );
}
