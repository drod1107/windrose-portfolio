import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col bg-neutral-900">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center w-full px-4">
        {/* Centers everything inside main both horizontally and vertically */}
        <div className="w-full max-w-3xl flex flex-col items-center justify-center">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
