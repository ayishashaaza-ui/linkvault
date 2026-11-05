"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLinks } from "../../../context/LinkContext";

import FormInput from "../../../components/FormInput";
import Button from "../../../components/Button";

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

        {/* Back to Dashboard */}
        <a
          href="/dashboard"
          className="text-violet-400 hover:underline"
        >
          ← Back to Dashboard
        </a>

        {/* Heading */}
        <h1 className="mb-2 mt-8 text-3xl font-bold">
          Add New Link
        </h1>

        <p className="mb-8 text-slate-400">
          Save a useful resource to your library.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-xl border border-slate-800 bg-slate-900 p-6"
        >

          {/* Title - Reusable FormInput */}
          <FormInput
            label="Title"
            name="title"
            placeholder="Enter resource title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          {/* URL - Reusable FormInput */}
          <FormInput
            label="URL"
            name="url"
            type="url"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Description
            </label>

            <textarea
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write a short description"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3 text-white outline-none focus:border-violet-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3 text-white"
            >
              <option>Development</option>
              <option>Programming</option>
              <option>Learning</option>
              <option>Research</option>
              <option>Other</option>
            </select>
          </div>

          {/* Resource Type */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Resource Type
            </label>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3 text-white"
            >
              <option>Website</option>
              <option>Article</option>
              <option>Video</option>
              <option>Document</option>
            </select>
          </div>

          {/* Reusable Button */}
          <Button
            type="submit"
            variant="primary"
            className="w-full p-3"
          >
            Save Link
          </Button>

        </form>
      </div>
    </main>
  );
}