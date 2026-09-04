import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@modern.example");
  const [password, setPassword] = useState("password");

  const submit = (e) => { e.preventDefault(); navigate("/dashboard"); };

  return (
    <main className="grid min-h-screen lg:grid-cols-2">
      <section className="hidden bg-slate-950 p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 font-bold">N</div><span className="text-xl font-bold">Modern</span></div>
        <div className="max-w-lg"><p className="text-sm font-semibold text-indigo-300">MODERN SAAS PLATFORM</p><h1 className="mt-4 text-5xl font-bold leading-tight">Everything your team needs to move faster.</h1><p className="mt-5 text-slate-400">A scalable workspace for teams, projects, analytics and customers.</p></div>
        <p className="text-sm text-slate-500">© 2026 Modern Inc.</p>
      </section>
      <section className="flex items-center justify-center bg-slate-50 p-6">
        <div className="w-full max-w-md">
          <div className="mb-8 lg:hidden flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 font-bold text-white">N</div><span className="text-xl font-bold">Modern</span></div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Welcome back</h1><p className="mt-2 text-slate-500">Sign in to continue to your workspace.</p>
          <form onSubmit={submit} className="mt-8 space-y-5">
            <label className="block"><span className="mb-1.5 block text-sm font-medium text-slate-700">Email</span><input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full rounded-xl bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 px-4 py-3 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"/></label>
            <label className="block"><span className="mb-1.5 block text-sm font-medium text-slate-700">Password</span><input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"/></label>
            <div className="flex justify-end"><Link to="#" className="text-sm font-medium text-brand-600">Forgot password?</Link></div>
            <Button className="w-full py-3" type="submit">Sign in</Button>
          </form>
          <p className="mt-6 text-center text-sm text-slate-500">Demo account is pre-filled for this frontend prototype.</p>
        </div>
      </section>
    </main>
  );
}