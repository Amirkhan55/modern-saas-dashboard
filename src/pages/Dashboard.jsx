import { DollarSign, FolderKanban, UserPlus, Users } from "lucide-react";
import StatCard from "../components/dashboard/StatCard";
import RevenueChart from "../components/dashboard/RevenueChart";
import RecentActivity from "../components/dashboard/RecentActivity";
import Card from "../components/ui/Card";
import PageLoader from "../components/ui/PageLoader";
import usePageLoading from "../hooks/usePageLoading";

export default function Dashboard() {
  const loading = usePageLoading();

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div>
        <p className="text-sm font-medium text-brand-600">
          Saturday, August 29, 2026
        </p>

        <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
          Good afternoon, Sophie 👋
        </h1>

        <p className="mt-2 text-slate-500">
          Here’s what’s happening with your workspace today.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total revenue"
          value="$48,500"
          change="+12.5%"
          icon={DollarSign}
        />

        <StatCard
          title="Active users"
          value="2,846"
          change="+8.2%"
          icon={Users}
        />

        <StatCard
          title="New customers"
          value="384"
          change="+5.7%"
          icon={UserPlus}
        />

        <StatCard
          title="Active projects"
          value="24"
          change="-2.1%"
          positive={false}
          icon={FolderKanban}
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
        <RevenueChart />
        <RecentActivity />
      </div>

      <Card className="p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-semibold text-slate-900 dark:text-white">
              Workspace health
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Your workspace is performing above the monthly target.
            </p>
          </div>

          <div className="w-full max-w-sm">
            <div className="mb-2 flex justify-between text-xs font-medium text-slate-500">
              <span>Overall performance</span>
              <span>87%</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[87%] rounded-full bg-brand-600" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}