import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header className="relative w-full h-1 .h-[60px]">
        <Navbar />
      </header>
      <main className="px-10 py-6 mt-16">
        <Outlet />
      </main>
    </>
  );
}
