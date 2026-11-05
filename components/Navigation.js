import Link from "next/link";

export default function Navigation() {
  return (
    <aside className="w-full border-b border-slate-800 bg-slate-900 p-6 md:min-h-screen md:w-64 md:border-b-0 md:border-r">

      <Link
        href="/"
        className="text-2xl font-bold text-violet-400"
      >
        LinkVault
      </Link>

      <nav className="mt-10 space-y-3">

        <Link
          href="/dashboard"
          className="block rounded-lg bg-violet-600 px-4 py-3"
        >
          Dashboard
        </Link>

        <Link
          href="/dashboard/add"
          className="block rounded-lg px-4 py-3 text-slate-300 hover:bg-slate-800"
        >
          + Add New Link
        </Link>

        <Link
          href="/settings"
          className="block rounded-lg px-4 py-3 text-slate-300 hover:bg-slate-800"
        >
          Settings
        </Link>

        <Link
          href="/login"
          className="block rounded-lg px-4 py-3 text-red-400 hover:bg-slate-800"
        >
          Logout
        </Link>

      </nav>

    </aside>
  );
}