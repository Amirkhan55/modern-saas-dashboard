import { useEffect } from "react";
import { Bell, Menu, Search, Sun, Moon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleSidebar,
  toggleDarkMode,
} from "../../features/ui/uiSlice";
import { Link } from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch();

  const darkMode = useSelector(
    (state) => state.ui.darkMode
  );

  const unread = useSelector(
    (state) =>
      state.notifications.items.filter(
        (notification) => !notification.read
      ).length
  );

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="sticky top-0 z-20 flex h-20 items-center gap-4 border-b border-slate-200 bg-white/95 px-4 backdrop-blur transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/95 md:px-8">

      <div className="relative hidden max-w-md flex-1 md:block">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"
          size={18}
        />

        <input
          type="search"
          placeholder="Search anything..."
          aria-label="Search"
          className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-brand-500 dark:focus:ring-brand-500/20"
        />
      </div>

      <div className="ml-auto flex items-center gap-2">

        {/* Dark Mode */}
        <button
          type="button"
          onClick={() => dispatch(toggleDarkMode())}
          className="rounded-xl p-2.5 text-slate-500 transition-all duration-200 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
          aria-label={
            darkMode
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
          title={
            darkMode
              ? "Light mode"
              : "Dark mode"
          }
        >
          {darkMode ? (
            <Sun size={19} />
          ) : (
            <Moon size={19} />
          )}
        </button>

        {/* Notifications */}
        <Link
          to="/notifications"
          className="relative rounded-xl p-2.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
          aria-label="Notifications"
        >
          <Bell size={20} />

          {unread > 0 && (
            <span className="absolute right-1 top-1 grid h-4 min-w-4 place-items-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">
              {unread}
            </span>
          )}
        </Link>

        {/* Profile */}
        <Link
          to="/profile"
          className="ml-1 flex items-center gap-3 rounded-xl p-1.5 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800"
        >
          <div className="grid h-9 w-9 place-items-center rounded-full bg-brand-100 text-sm font-bold text-brand-700 dark:bg-brand-500/20 dark:text-brand-400">
            SVD
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
              Sophie van Dijk
            </p>

            <p className="text-xs text-slate-400 dark:text-slate-500">
              Administrator
            </p>
          </div>
        </Link>

      </div>
    </header>
  );
}