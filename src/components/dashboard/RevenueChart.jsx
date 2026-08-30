import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Card from "../ui/Card";
import { revenueData } from "../../data/chartData";

export default function RevenueChart() {
  return (
    <Card className="p-5">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h2 className="font-semibold text-slate-900">Revenue overview</h2>
          <p className="mt-1 text-sm text-slate-500">Monthly recurring revenue performance</p>
        </div>
        <select className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 outline-none">
          <option>Last 8 months</option>
          <option>Last 12 months</option>
        </select>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueData}>
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity={0.25}/>
                <stop offset="100%" stopColor="#6366f1" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0"/>
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }}/>
            <YAxis axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} tickFormatter={(v) => `$${v/1000}k`}/>
            <Tooltip formatter={(value) => [`$${Number(value).toLocaleString()}`, "Revenue"]}/>
            <Area type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={3} fill="url(#revenueGradient)"/>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}