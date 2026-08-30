import { useMemo, useState } from "react";
import { Search, UserPlus, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../features/users/usersSlice";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";

export default function Users() {
  const users = useSelector(state => state.users.items);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", role: "Member", status: "Active", joined: "Today" });

  const filtered = useMemo(() => users.filter(u =>
    `${u.name} ${u.email} ${u.role}`.toLowerCase().includes(query.toLowerCase())
  ), [users, query]);

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    dispatch(addUser(form));
    setForm({ name: "", email: "", role: "Member", status: "Active", joined: "Today" });
    setOpen(false);
  };

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div><h1 className="text-2xl font-bold text-slate-900">Users</h1><p className="mt-1 text-slate-500">Manage workspace members and permissions.</p></div>
        <Button onClick={() => setOpen(true)}><UserPlus size={17} className="mr-2"/> Add user</Button>
      </div>

      <Card className="overflow-hidden">
        <div className="flex flex-col gap-3 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-semibold text-slate-900">{users.length} members</h2>
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={17}/>
            <input value={query} onChange={e => setQuery(e.target.value)} className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-brand-500" placeholder="Search users..." aria-label="Search users"/>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-400">
              <tr><th className="px-5 py-3">User</th><th>Role</th><th>Status</th><th>Joined</th><th className="px-5">Action</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map(user => (
                <tr key={user.id} className="hover:bg-slate-50/70">
                  <td className="px-5 py-4"><div className="flex items-center gap-3"><div className="grid h-9 w-9 place-items-center rounded-full bg-brand-50 text-xs font-bold text-brand-700">{user.name.split(" ").map(x => x[0]).join("")}</div><div><p className="font-medium text-slate-800">{user.name}</p><p className="text-xs text-slate-400">{user.email}</p></div></div></td>
                  <td className="text-slate-600">{user.role}</td><td><Badge status={user.status}>{user.status}</Badge></td><td className="text-slate-500">{user.joined}</td>
                  <td className="px-5"><button onClick={() => dispatch(removeUser(user.id))} className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-600" aria-label={`Remove ${user.name}`}><Trash2 size={17}/></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Modal open={open} onClose={() => setOpen(false)} title="Add workspace user">
        <form onSubmit={submit} className="space-y-4">
          {["name", "email"].map(field => <label key={field} className="block"><span className="mb-1.5 block text-sm font-medium text-slate-700">{field === "name" ? "Full name" : "Email address"}</span><input required type={field === "email" ? "email" : "text"} value={form[field]} onChange={e => setForm({...form, [field]: e.target.value})} className="w-full rounded-lg border border-slate-200 px-3 py-2.5 outline-none focus:border-brand-500" /></label>)}
          <label className="block"><span className="mb-1.5 block text-sm font-medium text-slate-700">Role</span><select value={form.role} onChange={e => setForm({...form, role: e.target.value})} className="w-full rounded-lg border border-slate-200 px-3 py-2.5"><option>Member</option><option>Manager</option><option>Designer</option><option>Developer</option></select></label>
          <div className="flex justify-end gap-3 pt-2"><Button type="button" variant="secondary" onClick={() => setOpen(false)}>Cancel</Button><Button type="submit">Create user</Button></div>
        </form>
      </Modal>
    </div>
  );
}