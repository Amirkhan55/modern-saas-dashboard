import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Card from "../ui/Card";

export default function StatCard({ title, value, change, positive = true, icon: Icon }) {
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
          <Icon size={21}/>
        </div>
        <span className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${positive ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}>
          {positive ? <ArrowUpRight size={13}/> : <ArrowDownRight size={13}/>}
          {change}
        </span>
      </div>
      <p className="mt-5 text-sm text-slate-500">{title}</p>
      <p className="mt-1 text-2xl font-bold tracking-tight text-slate-900">{value}</p>
    </Card>
  );
}