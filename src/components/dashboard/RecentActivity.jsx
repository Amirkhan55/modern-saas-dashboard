import Card from "../ui/Card";

const activities = [
  ["Sophie van Dijk", "created a new project", "10 min ago"],
  ["Jackson Lee", "updated Website Redesign", "35 min ago"],
  ["Sofia Davis", "completed a task", "1 hour ago"],
  ["William Kim", "joined the workspace", "3 hours ago"]
];

export default function RecentActivity() {
  return (
    <Card className="p-5">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="font-semibold text-slate-900 dark:text-white">Recent activity</h2>
        <button className="text-sm font-medium text-brand-600">View all</button>
      </div>
      <div className="space-y-5">
        {activities.map(([name, action, time]) => (
          <div key={name} className="flex gap-3">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">
              {name.split(" ").map(x => x[0]).join("")}
            </div>
            <div className="min-w-0">
              <p className="text-sm text-slate-700"><strong>{name}</strong> {action}</p>
              <p className="mt-1 text-xs text-slate-400">{time}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}