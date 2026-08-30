import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout() {
  const darkMode = useSelector((state) => state.ui.darkMode);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
        <Sidebar />

        <div className="lg:pl-64">
          <Header />

          <main className="min-h-[calc(100vh-5rem)] p-4 transition-colors duration-300 md:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}