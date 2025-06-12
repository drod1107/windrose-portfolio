import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen min-w-screen relative overflow-hidden bg-neutral-900">
    <div className="absolute inset-0 z-0 animate-lava bg-lava-morph opacity-100 blur-3xl" />
    <div className="relative z-10 flex flex-col min-h-screen">

      <Header />
      <main className="flex-1 flex flex-col items-center justify-center w-full px-4">
        {/* Centers everything inside main both horizontally and vertically */}
        <div className="w-full max-w-3xl flex flex-col items-center justify-center">
          <Outlet />
        </div>
      </main>
      <Footer />
      </div>
    </div>
  );
}
