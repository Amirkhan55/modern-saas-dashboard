import { useState } from "react";
import { Save } from "lucide-react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export default function Settings() {
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({ workspace: "Modern Inc.", email: "admin@modern.example", timezone: "Asia/Dubai" });

  const submit = (e) => { e.preventDefault(); setSaved(true); setTimeout(() => setSaved(false), 2000); };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div><h1 className="text-2xl font-bold text-slate-900">Settings</h1><p className="mt-1 text-slate-500">Manage workspace preferences and configuration.</p></div>
      <Card className="p-6">
        <form onSubmit={submit} className="space-y-6">
          <div><h2 className="font-semibold text-slate-900">Workspace settings</h2><p className="mt-1 text-sm text-slate-500">These settings apply to the entire workspace.</p></div>
          <div className="grid gap-5 md:grid-cols-2">
            <label><span className="mb-1.5 block text-sm font-medium text-slate-700">Workspace name</span><input value={form.workspace} onChange={e => setForm({...form, workspace: e.target.value})} className="w-full rounded-lg border border-slate-200 px-3 py-2.5 outline-none focus:border-brand-500"/></label>
            <label><span className="mb-1.5 block text-sm font-medium text-slate-700">Admin email</span><input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full rounded-lg border border-slate-200 px-3 py-2.5 outline-none focus:border-brand-500"/></label>
            <label><span className="mb-1.5 block text-sm font-medium text-slate-700">Timezone</span><select value={form.timezone} onChange={e => setForm({...form, timezone: e.target.value})} className="w-full rounded-lg border border-slate-200 px-3 py-2.5"><option>Asia/Dubai</option><option>Europe/London</option><option>America/New_York</option></select></label>
          </div>
          <div className="flex items-center gap-3 border-t border-slate-100 pt-5"><Button type="submit"><Save size={17} className="mr-2"/> Save changes</Button>{saved && <span className="text-sm font-medium text-emerald-600">Changes saved.</span>}</div>
        </form>
      </Card>
    </div>
  );
}