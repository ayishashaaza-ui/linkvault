
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLinks } from "../../../context/LinkContext";

export default function AddLink() {
  const { addLink } = useLinks();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Development");
  const [type, setType] = useState("Website");

  function handleSubmit(e) {
    e.preventDefault();

    addLink({
      title,
      url,
      description,
      category,
      type,
    });

    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-2xl">
        <a href="/dashboard" className="text-violet-400">
          ← Back to Dashboard
        </a>

        <h1 className="mb-2 mt-8 text-3xl font-bold">
          Add New Link
        </h1>

        <p className="mb-8 text-slate-400">
          Save a useful resource to your library.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-xl border border-slate-800 bg-slate-900 p-6"
        >
          <div>
            <label className="mb-2 block">Title</label>
            <input
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter resource title"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
            />
          </div>

          <div>
            <label className="mb-2 block">URL</label>
            <input
              required
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
            />
          </div>

          <div>
            <label className="mb-2 block">Description</label>
            <textarea
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write a short description"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
            />
          </div>

          <div>
            <label className="mb-2 block">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
            >
              <option>Development</option>
              <option>Programming</option>
              <option>Learning</option>
              <option>Research</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block">Resource Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
            >
              <option>Website</option>
              <option>Article</option>
              <option>Video</option>
              <option>Document</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-violet-600 p-3 font-semibold hover:bg-violet-700"
          >
            Save Link
          </button>
        </form>
      </div>
    </main>
  );
}
