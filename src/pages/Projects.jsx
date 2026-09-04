import { Plus, ArrowUpRight } from "lucide-react";
import { useSelector } from "react-redux";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import PageLoader from "../components/ui/PageLoader";
import usePageLoading from "../hooks/usePageLoading";

export default function Projects() {
  const projects = useSelector(state => state.projects.items);
    const loading = usePageLoading();

  if (loading) {
    return <PageLoader />;
  }
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div><h1 className="text-2xl font-bold text-slate-900 dark:text-white">Projects</h1><p className="mt-1 text-slate-500">Track delivery, progress and deadlines.</p></div>
        <Button><Plus size={17} className="mr-2"/> New project</Button>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map(project => (
          <Card key={project.id} className="p-5">
            <div className="flex items-start justify-between"><Badge status={project.status}>{project.status}</Badge><button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"><ArrowUpRight size={17}/></button></div>
            <h2 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">{project.name}</h2>
            <p className="mt-1 text-sm text-slate-500">{project.client}</p>
            <div className="mt-6"><div className="mb-2 flex justify-between text-xs font-medium text-slate-500"><span>Progress</span><span>{project.progress}%</span></div><div className="h-2 rounded-full bg-slate-100"><div className="h-full rounded-full bg-brand-600" style={{width: `${project.progress}%`}}/></div></div>
            <div className="mt-5 flex justify-between border-t border-slate-100 pt-4 text-xs text-slate-400"><span>Due date</span><span className="font-medium text-slate-600">{project.due}</span></div>
          </Card>
        ))}
      </div>
    </div>
  );
}