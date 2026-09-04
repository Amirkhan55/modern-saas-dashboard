import { NavLink } from "react-router-dom";
import {
  BarChart3,
  Bell,
  BriefcaseBusiness,
  ChevronRight,
  LayoutDashboard,
  Settings,
  Users,
  X,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../../features/ui/uiSlice";

const links = [
  {
    to: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    to: "/users",
    label: "Users",
    icon: Users,
  },
  {
    to: "/projects",
    label: "Projects",
    icon: BriefcaseBusiness,
  },
  {
    to: "/analytics",
    label: "Analytics",
    icon: BarChart3,
  },
  {
    to: "/notifications",
    label: "Notifications",
    icon: Bell,
  },
  {
    to: "/settings",
    label: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const dispatch = useDispatch();

  const open = useSelector(
    (state) => state.ui.sidebarOpen
  );

  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-slate-950/40 lg:hidden"
          onClick={() => dispatch(closeSidebar())}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-40
          flex w-64 flex-col
          border-r
          border-slate-200
          bg-white

          transition-all
          duration-300

          dark:border-slate-800
          dark:bg-slate-950

          lg:translate-x-0

          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* Logo Section */}
        <div
          className="
            flex h-20
            items-center
            justify-between
            border-b
            border-slate-100
            px-5

            dark:border-slate-800
          "
        >
          <div className="flex items-center gap-3">

            {/* Logo */}
            <div
              className="
                grid h-10 w-10
                place-items-center
                rounded-xl
                bg-brand-600
                font-bold
                text-white
              "
            >
              M
            </div>

            {/* Brand Name */}
            <div>
              <p className="font-bold text-slate-900 dark:text-white">
                Modern
              </p>

              <p className="text-xs text-slate-400 dark:text-slate-500">
                SaaS Platform
              </p>
            </div>
          </div>

          {/* Mobile Close Button */}
          <button
            type="button"
            className="
              rounded-lg
              p-2
              text-slate-600
              transition-colors
              hover:bg-slate-100

              dark:text-slate-300
              dark:hover:bg-slate-800

              lg:hidden
            "
            onClick={() => dispatch(closeSidebar())}
            aria-label="Close navigation"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav
          className="flex-1 space-y-1 px-3 py-5"
          aria-label="Main navigation"
        >
          <p
            className="
              px-3
              pb-2
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-slate-400

              dark:text-slate-500
            "
          >
            Workspace
          </p>

          {links.map(
            ({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() =>
                  dispatch(closeSidebar())
                }
                className={({ isActive }) =>
                  `
                    group
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    px-3
                    py-3
                    text-sm
                    font-medium
                    transition-colors

                    ${
                      isActive
                        ? `
                          bg-brand-50
                          text-brand-700

                          dark:bg-brand-500/10
                          dark:text-brand-400
                        `
                        : `
                          text-slate-600
                          hover:bg-slate-50
                          hover:text-slate-900

                          dark:text-slate-400
                          dark:hover:bg-slate-800
                          dark:hover:text-white
                        `
                    }
                  `
                }
              >
                <Icon size={19} />

                <span className="flex-1">
                  {label}
                </span>

                <ChevronRight
                  size={15}
                  className="
                    opacity-0
                    transition-opacity
                    group-hover:opacity-100
                  "
                />
              </NavLink>
            )
          )}
        </nav>

        {/* Upgrade Workspace */}
        <div
          className="
            m-4
            rounded-2xl
            bg-slate-900
            p-4
            text-white

            dark:bg-slate-800
          "
        >
          <p className="text-sm font-semibold">
            Upgrade workspace
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-300">
            Unlock advanced analytics and unlimited
            projects.
          </p>

          <button
            type="button"
            className="
              mt-3
              w-full
              rounded-lg
              bg-white
              px-3
              py-2
              text-xs
              font-semibold
              text-slate-900
              
              transition-colors
              hover:bg-slate-100

              dark:bg-slate-100
              dark:text-slate-900
              dark:hover:bg-white
            "
          >
            View plans
          </button>
        </div>
      </aside>
    </>
  );
}