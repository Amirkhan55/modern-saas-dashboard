import { BarChart3, TrendingUp, Users, DollarSign } from "lucide-react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { revenueData } from "../data/chartData";
import Card from "../components/ui/Card";
import StatCard from "../components/dashboard/StatCard";
import PageLoader from "../components/ui/PageLoader";
import usePageLoading from "../hooks/usePageLoading";

export default function Analytics() {
  const loading = usePageLoading();

  if (loading) {
    return <PageLoader />;
  }
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div><h1 className="text-2xl font-bold text-slate-900 dark:text-white">Analytics</h1><p className="mt-1 text-slate-500">Understand growth and workspace performance.</p></div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="MRR" value="$48.5K" change="+12.5%" icon={DollarSign}/>
        <StatCard title="Growth rate" value="18.7%" change="+3.2%" icon={TrendingUp}/>
        <StatCard title="Users" value="2,846" change="+8.2%" icon={Users}/>
        <StatCard title="Conversion" value="7.8%" change="+1.1%" icon={BarChart3}/>
      </div>
      <Card className="p-5">
        <h2 className="font-semibold text-slate-900 dark:text-white">Revenue & user growth</h2>
        <p className="mt-1 text-sm text-slate-500">Compare revenue and new user trends.</p>
        <div className="mt-6 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0"/>
              <XAxis dataKey="name" axisLine={false} tickLine={false}/>
              <YAxis axisLine={false} tickLine={false}/>
              <Tooltip/>
              <Bar dataKey="users" fill="#6366f1" radius={[6,6,0,0]} name="Users"/>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}