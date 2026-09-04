import { useMemo, useState } from "react";
import { Search, UserPlus, Trash2, Pencil } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  updateUser,
  removeUser,
} from "../features/users/usersSlice";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";
import toast from "react-hot-toast";
import PageLoader from "../components/ui/PageLoader";
import usePageLoading from "../hooks/usePageLoading";

const initialForm = {
  name: "",
  email: "",
  role: "Member",
  status: "Active",
  joined: "Today",
};

export default function Users() {
  const users = useSelector((state) => state.users.items);
  const dispatch = useDispatch();


  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const [editingUser, setEditingUser] = useState(null);

  const [form, setForm] = useState(initialForm);

  const filtered = useMemo(
    () =>
      users.filter((u) =>
        `${u.name} ${u.email} ${u.role}`
          .toLowerCase()
          .includes(query.toLowerCase())
      ),
    [users, query]
  );

  const handleAdd = () => {
    setEditingUser(null);
    setForm(initialForm);
    setOpen(true);
  };

  const handleEdit = (user) => {
    setEditingUser(user);

    setForm({
      name: user.name || "",
      email: user.email || "",
      role: user.role || "Member",
      status: user.status || "Active",
      joined: user.joined || "Today",
    });

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingUser(null);
    setForm(initialForm);
  };

const submit = (e) => {
  e.preventDefault();

  if (!form.name.trim() || !form.email.trim()) {
    toast.error("Please fill in all required fields.");
    return;
  }

  if (editingUser) {
    dispatch(
      updateUser({
        id: editingUser.id,
        ...form,
      })
    );

    toast.success("User updated successfully!");
  } else {
    dispatch(addUser(form));

    toast.success("User created successfully!");
  }

  handleClose();
};

  const loading = usePageLoading();

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Users
          </h1>

          <p className="mt-1 text-slate-500">
            Manage workspace members and permissions.
          </p>
        </div>

        <Button onClick={handleAdd}>
          <UserPlus size={17} className="mr-2" />
          Add user
        </Button>
      </div>

      {/* Users Card */}
      <Card className="overflow-hidden">
        {/* Search */}
        <div className="flex flex-col gap-3 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-semibold text-slate-900 dark:text-white">
            {users.length} members
          </h2>

          <div className="relative w-full sm:max-w-xs">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={17}
            />

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-lg bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-brand-500"
              placeholder="Search users..."
              aria-label="Search users"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
         <table className="w-full min-w-[750px] text-left text-sm">

    {/* Table Header */}
    <thead
      className="
        bg-slate-50
        text-xs
        uppercase
        tracking-wider
        text-slate-400
        border-b
        border-slate-200

        dark:bg-slate-800
        dark:text-slate-300
        dark:border-slate-700
      "
    >
      <tr>
        <th className="px-5 py-3">User</th>
        <th>Role</th>
        <th>Status</th>
        <th>Joined</th>
        <th className="px-5">Action</th>
      </tr>
    </thead>

    {/* Table Body */}
    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
      {filtered.map((user) => (
        <tr
          key={user.id}
          className="
            hover:bg-slate-50/70
            dark:hover:bg-slate-800/50
          "
        >
          {/* User */}
          <td className="px-5 py-4">
            <div className="flex items-center gap-3">

              <div
                className="
                  grid
                  h-9
                  w-9
                  place-items-center
                  rounded-full
                  bg-brand-50
                  text-xs
                  font-bold
                  text-brand-700

                  dark:bg-brand-500/10
                  dark:text-brand-400
                "
              >
                {user.name
                  .split(" ")
                  .map((x) => x[0])
                  .join("")}
              </div>

              <div>
                <p className="font-medium text-slate-800 dark:text-slate-100">
                  {user.name}
                </p>

                <p className="text-xs text-slate-400 dark:text-slate-500">
                  {user.email}
                </p>
              </div>
            </div>
          </td>

          {/* Role */}
          <td className="text-slate-600 dark:text-slate-300">
            {user.role}
          </td>

          {/* Status */}
          <td>
            <Badge status={user.status}>
              {user.status}
            </Badge>
          </td>

          {/* Joined */}
          <td className="text-slate-500 dark:text-slate-400">
            {user.joined}
          </td>

          {/* Actions */}
          <td className="px-5">
            <div className="flex items-center gap-1">

              <button
                onClick={() => handleEdit(user)}
                className="
                  rounded-lg
                  p-2
                  text-slate-400
                  hover:bg-brand-50
                  hover:text-brand-600

                  dark:hover:bg-brand-500/10
                  dark:hover:text-brand-400
                "
                aria-label={`Edit ${user.name}`}
              >
                <Pencil size={17} />
              </button>

              <button
                onClick={() => {
                  dispatch(removeUser(user.id));
                  toast.success(
                    `${user.name} removed successfully!`
                  );
                }}
                className="
                  rounded-lg
                  p-2
                  text-slate-400
                  hover:bg-red-50
                  hover:text-red-600

                  dark:hover:bg-red-500/10
                  dark:hover:text-red-400
                "
                aria-label={`Remove ${user.name}`}
              >
                <Trash2 size={17} />
              </button>

            </div>
          </td>
        </tr>
      ))}

      {filtered.length === 0 && (
        <tr>
          <td
            colSpan="5"
            className="
              px-5
              py-10
              text-center
              text-slate-400
              dark:text-slate-500
            "
          >
            No users found.
          </td>
        </tr>
      )}
    </tbody>

  </table>
        </div>
      </Card>

      {/* Add / Edit Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        title={
          editingUser
            ? "Edit workspace user"
            : "Add workspace user"
        }
      >
        <form onSubmit={submit} className="space-y-4">
          {/* Name */}
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-slate-700">
              Full name
            </span>

            <input
              required
              type="text"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              className="w-full rounded-lg bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 px-3 py-2.5 outline-none focus:border-brand-500"
            />
          </label>

          {/* Email */}
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-slate-700">
              Email address
            </span>

            <input
              required
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              className="w-full rounded-lg bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 px-3 py-2.5 outline-none focus:border-brand-500"
            />
          </label>

          {/* Role */}
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-slate-700">
              Role
            </span>

            <select
              value={form.role}
              onChange={(e) =>
                setForm({
                  ...form,
                  role: e.target.value,
                })
              }
              className="w-full rounded-lg bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 px-3 py-2.5"
            >
              <option>Member</option>
              <option>Manager</option>
              <option>Designer</option>
              <option>Developer</option>
            </select>
          </label>

          {/* Status */}
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-slate-700">
              Status
            </span>

            <select
              value={form.status}
              onChange={(e) =>
                setForm({
                  ...form,
                  status: e.target.value,
                })
              }
              className="w-full rounded-lg border border-slate-200 dark:bg-slate-900 dark:border-slate-800 px-3 py-2.5"
            >
              <option>Active</option>
              <option>Inactive</option>
              <option>Pending</option>
            </select>
          </label>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-2">
            <Button
              type="button"
              variant="secondary"
              onClick={handleClose}
            >
              Cancel
            </Button>

            <Button type="submit">
              {editingUser ? "Save changes" : "Create user"}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}