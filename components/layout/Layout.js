// Component imports
import Navbar from "@/components/layout/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="ml-20">{children}</main>
    </>
  );
}
