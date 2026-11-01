
"use client";

import { useState } from "react";
import Link from "next/link";
import { useLinks } from "../../context/LinkContext";
import LinkCard from "../../components/LinkCard";

export default function Dashboard() {
  const { links } = useLinks();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Links");

  const categories = [
    "All Links",
    ...new Set(links.map((link) => link.category)),
  ];

  const filteredLinks = links.filter((link) => {
    const matchesSearch =
      link.title.toLowerCase().includes(search.toLowerCase()) ||
      link.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All Links" ||
      link.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const totalCategories = new Set(
    links.map((link) => link.category)
  ).size;

  const totalWebsites = links.filter(
    (link) => link.type === "Website"
  ).length;

  return (
    <div className="min-h-screen bg-slate-950 text-white md:flex">

      {/* Sidebar */}
      <aside className="w-full border-b border-slate-800 bg-slate-900 p-6 md:min-h-screen md:w-64 md:border-b-0 md:border-r">

        <Link href="/" className="text-2xl font-bold text-violet-400">
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

        <h3 className="mt-10 mb-4 text-sm font-semibold text-slate-400">
          CATEGORIES
        </h3>

        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`block w-full rounded-lg px-4 py-2 text-left ${
                selectedCategory === category
                  ? "bg-violet-600 text-white"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </aside>

      {/* Main Dashboard */}
      <section className="flex-1 p-6 md:p-10">

        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-400">Your Library</p>
            <h1 className="mt-2 text-3xl font-bold">
              Dashboard
            </h1>
          </div>

          <Link
            href="/dashboard/add"
            className="rounded-lg bg-violet-600 px-5 py-3 font-semibold hover:bg-violet-700"
          >
            + Add New Link
          </Link>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search your saved resources..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mt-10 w-full rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-violet-500"
        />

        {/* Statistics */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Total Links</p>
            <h2 className="mt-2 text-3xl font-bold">
              {links.length}
            </h2>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Categories</p>
            <h2 className="mt-2 text-3xl font-bold">
              {totalCategories}
            </h2>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Websites</p>
            <h2 className="mt-2 text-3xl font-bold">
              {totalWebsites}
            </h2>
          </div>

        </div>

        {/* Saved Resources */}
        <div className="mt-10">
          <h2 className="mb-6 text-xl font-bold">
            Saved Resources
          </h2>

          {filteredLinks.length === 0 ? (
            <p className="text-slate-400">
              No resources found.
            </p>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredLinks.map((link) => (
                <LinkCard key={link.id} link={link} />
              ))}
            </div>
          )}
        </div>

      </section>
    </div>
  );
}
