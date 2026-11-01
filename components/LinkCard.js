"use client";

import { useLinks } from "../context/LinkContext";

export default function LinkCard({ link }) {
  const { deleteLink } = useLinks();

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex justify-between">
        <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs text-violet-300">
          {link.category}
        </span>

        <span className="text-xs text-slate-500">
          {link.type}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-semibold">
        {link.title}
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        {link.description}
      </p>

      <div className="mt-5 flex items-center justify-between">
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-violet-400 hover:underline"
        >
          Open Resource →
        </a>

        <button
          onClick={() => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this link?"
  );

  if (confirmDelete) {
    deleteLink(link.id);
  }
}}
          className="text-sm text-red-400 hover:text-red-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
}