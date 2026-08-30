import { CheckCheck } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { markAllRead, markRead } from "../features/notifications/notificationsSlice";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function Notifications() {
  const notifications = useSelector(state => state.notifications.items);
  const dispatch = useDispatch();
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="flex items-end justify-between"><div><h1 className="text-2xl font-bold text-slate-900">Notifications</h1><p className="mt-1 text-slate-500">Stay up to date with your workspace.</p></div><Button variant="secondary" onClick={() => dispatch(markAllRead())}><CheckCheck size={17} className="mr-2"/> Mark all read</Button></div>
      <Card className="divide-y divide-slate-100 overflow-hidden">
        {notifications.map(n => <button key={n.id} onClick={() => dispatch(markRead(n.id))} className={`flex w-full gap-4 p-5 text-left hover:bg-slate-50 ${!n.read ? "bg-brand-50/30" : ""}`}><span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${n.read ? "bg-slate-200" : "bg-brand-600"}`}/><span className="flex-1"><strong className="text-sm text-slate-800">{n.title}</strong><span className="mt-1 block text-sm text-slate-500">{n.text}</span><span className="mt-2 block text-xs text-slate-400">{n.time}</span></span></button>)}
      </Card>
    </div>
  );
}