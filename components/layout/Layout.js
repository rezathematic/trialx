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
            <h1 className="text-4xl font-bold">Please sign in</h1>
            <button
              className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white"
              onClick={() => signIn()}
            >
              Sign In
            </button>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar user={session.user} />
      <main className="-mx-3 md:mr-0 md:ml-20">{children}</main>
    </>
  );
}
