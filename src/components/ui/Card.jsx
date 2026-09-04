export default function Card({ children, className = "" }) {
  return (
    <section className={`rounded-2xl bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-soft ${className}`}>
      {children}
    </section>
  );
}