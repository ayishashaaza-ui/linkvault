"use client";

import { useState } from "react";
import Link from "next/link";

import { useLinks } from "../../context/LinkContext";

import LinkCard from "../../components/LinkCard";
import SearchBar from "../../components/SearchBar";
import StatsCard from "../../components/StatsCard";
import Navigation from "../../components/Navigation";

export default function Dashboard() {
  const { links } = useLinks();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Links");

  // Get categories
  const categories = [
    "All Links",
    ...new Set(links.map((link) => link.category)),
  ];

  // Filter links
  const filteredLinks = links.filter((link) => {
    const matchesSearch =
      link.title.toLowerCase().includes(search.toLowerCase()) ||
      link.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All Links" ||
      link.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Calculate statistics
  const totalCategories = new Set(
    links.map((link) => link.category)
  ).size;

  const totalWebsites = links.filter(
    (link) => link.type === "Website"
  ).length;

  return (
    <div className="min-h-screen bg-slate-950 text-white md:flex">

      {/* Reusable Navigation */}
      <Navigation />

      {/* Main Dashboard */}
      <section className="flex-1 p-6 md:p-10">

        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4">

          <div>
            <p className="text-sm text-slate-400">
              Your Library
            </p>

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

        {/* Search Bar */}
        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Statistics Cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">

          <StatsCard
            title="Total Links"
            value={links.length}
          />

          <StatsCard
            title="Categories"
            value={totalCategories}
          />

          <StatsCard
            title="Websites"
            value={totalWebsites}
          />

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
                <LinkCard
                  key={link.id}
                  link={link}
                />
              ))}

            </div>

          )}

        </div>

      </section>
    </div>
  );
}