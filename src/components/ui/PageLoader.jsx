
import { LoaderCircle } from "lucide-react";

export default function PageLoader() {
  return (
    <div
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-white/80 backdrop-blur-sm
        dark:bg-slate-950/80
      "
    >
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div
          className="
            mb-5 grid h-14 w-14 place-items-center
            rounded-2xl bg-brand-600
            text-xl font-bold text-white
            shadow-lg shadow-brand-600/20
          "
        >
          N
        </div>

        {/* Spinner */}
        <LoaderCircle
          size={28}
          className="animate-spin text-brand-600"
        />

        {/* Loading text */}
        <p className="mt-4 text-sm font-medium text-slate-600 dark:text-slate-300">
          Loading...
        </p>

        <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
          Please wait a moment
        </p>
      </div>
    </div>
  );
}
