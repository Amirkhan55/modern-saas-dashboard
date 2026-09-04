
import { useEffect, useState } from "react";
import { Save } from "lucide-react";
import toast from "react-hot-toast";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import PageLoader from "../components/ui/PageLoader";
import usePageLoading from "../hooks/usePageLoading";

const defaultSettings = {
  workspace: "Modern Inc.",
  email: "admin@modern.example",
  timezone: "Asia/Dubai",
};

export default function Settings() {
  const [form, setForm] = useState(defaultSettings);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const savedSettings = localStorage.getItem("workspaceSettings");

    if (savedSettings) {
      try {
        setForm(JSON.parse(savedSettings));
      } catch (error) {
        console.error("Failed to load settings:", error);
      }
    }
  }, []);

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();

    if (!form.workspace.trim()) {
      toast.error("Workspace name is required.");
      return;
    }

    if (!form.email.trim()) {
      toast.error("Admin email is required.");
      return;
    }

    setSaving(true);

    try {
      localStorage.setItem("workspaceSettings", JSON.stringify(form));

      toast.success("Settings saved successfully!");
    } catch (error) {
      console.error("Failed to save settings:", error);
      toast.error("Failed to save settings.");
    } finally {
      setSaving(false);
    }
  };

  const loading = usePageLoading();

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Settings
        </h1>

        <p className="mt-1 text-slate-500 dark:text-slate-400">
          Manage workspace preferences and configuration.
        </p>
      </div>

      {/* Settings Card */}
      <Card className="p-6">
        <form onSubmit={submit} className="space-y-6">
          {/* Section Header */}
          <div>
            <h2 className="font-semibold text-slate-900 dark:text-white">
              Workspace settings
            </h2>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              These settings apply to the entire workspace.
            </p>
          </div>

          {/* Form Fields */}
          <div className="grid gap-5 md:grid-cols-2">
            {/* Workspace Name */}
            <label>
              <span className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Workspace name
              </span>

              <input
                type="text"
                value={form.workspace}
                onChange={(e) =>
                  handleChange("workspace", e.target.value)
                }
                placeholder="Enter workspace name"
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-900 outline-none transition focus:border-brand-500 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
              />
            </label>

            {/* Admin Email */}
            <label>
              <span className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Admin email
              </span>

              <input
                type="email"
                value={form.email}
                onChange={(e) =>
                  handleChange("email", e.target.value)
                }
                placeholder="admin@example.com"
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-900 outline-none transition focus:border-brand-500 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
              />
            </label>

            {/* Timezone */}
            <label>
              <span className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Timezone
              </span>

              <select
                value={form.timezone}
                onChange={(e) =>
                  handleChange("timezone", e.target.value)
                }
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-900 outline-none transition focus:border-brand-500 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
              >
                <option value="Asia/Dubai">Asia/Dubai</option>
                <option value="Europe/London">Europe/London</option>
                <option value="America/New_York">
                  America/New_York
                </option>
              </select>
            </label>
          </div>

          {/* Save Button */}
          <div className="flex items-center border-t border-slate-100 pt-5 dark:border-slate-800">
            <Button type="submit" disabled={saving}>
              <Save size={17} className="mr-2" />

              {saving ? "Saving..." : "Save changes"}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}