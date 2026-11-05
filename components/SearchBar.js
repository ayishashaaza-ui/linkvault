"use client";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search your saved resources..."
}) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="mt-10 w-full rounded-xl border border-slate-700 bg-slate-900 p-4 text-white outline-none focus:border-violet-500"
    />
  );
}