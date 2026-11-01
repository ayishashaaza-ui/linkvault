
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Settings() {
  const [name, setName] = useState("LinkVault User");
  const [email, setEmail] = useState("user@example.com");

  function handleSave(e) {
    e.preventDefault();
    alert("Settings saved successfully!");
  }

  return (
    <div className="min-h-screen bg-slate-950 p-6 text-white md:p-10">

      <Link
        href="/dashboard"
        className="text-violet-400 hover:underline"
      >
        ← Back to Dashboard
      </Link>

      <div className="mx-auto mt-10 max-w-2xl">
        <h1 className="text-3xl font-bold">Settings</h1>

        <p className="mt-2 text-slate-400">
          Manage your profile information.
        </p>

        <form
          onSubmit={handleSave}
          className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6"
        >
          <h2 className="text-xl font-semibold">
            Profile Information
          </h2>

          <label className="mt-6 block text-sm text-slate-300">
            Name
          </label>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 p-3 outline-none focus:border-violet-500"
          />

          <label className="mt-5 block text-sm text-slate-300">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 p-3 outline-none focus:border-violet-500"
          />

          <button
            type="submit"
            className="mt-6 rounded-lg bg-violet-600 px-5 py-3 font-semibold hover:bg-violet-700"
          >
            Save Changes
          </button>

          <p className="mt-4 text-sm text-slate-500">
            This is a demo. Changes are not permanently stored.
          </p>
        </form>
      </div>

    </div>
  );
}
