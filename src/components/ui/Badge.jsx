export default function Badge({ children, status = "default" }) {
  const styles = {
    Active: "bg-emerald-50 text-emerald-700",
    Completed: "bg-blue-50 text-blue-700",
    "In Progress": "bg-amber-50 text-amber-700",
    Planning: "bg-violet-50 text-violet-700",
    Inactive: "bg-slate-100 text-slate-600",
    default: "bg-slate-100 text-slate-700"
  };

  return <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${styles[status] || styles.default}`}>{children}</span>;
}