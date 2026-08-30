
import { useRef, useState } from "react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function Profile() {
  const fileInputRef = useRef(null);

  const [profileImage, setProfileImage] = useState("");

  const handlePhotoChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setProfileImage(imageUrl);
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Profile
        </h1>

        <p className="mt-1 text-slate-500 dark:text-slate-400">
          Manage your personal account information.
        </p>
      </div>

      <Card className="p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="relative">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Sophie van Dijk"
                className="h-20 w-20 rounded-full object-cover ring-4 ring-white dark:ring-slate-900"
              />
            ) : (
              <div className="grid h-20 w-20 place-items-center rounded-full bg-brand-100 text-xl font-bold text-brand-700 ring-4 ring-white dark:bg-brand-500/20 dark:text-brand-400 dark:ring-slate-900">
                SVD
              </div>
            )}
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              Sophie van Dijk
            </h2>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Administrator · sophie@gmail.com
            </p>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={handlePhotoChange}
              className="hidden"
            />

            <Button
              variant="secondary"
              className="mt-3"
              onClick={() => fileInputRef.current?.click()}
            >
              Change photo
            </Button>
          </div>
        </div>

        <div className="mt-8 grid gap-5 border-t border-slate-200 pt-6 dark:border-slate-800 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Full name
            </p>

            <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-200">
              Sophie van Dijk
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Email
            </p>

            <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-200">
              sophie@gmail.com
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Role
            </p>

            <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-200">
              Administrator
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Member since
            </p>

            <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-200">
              January 2026
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
