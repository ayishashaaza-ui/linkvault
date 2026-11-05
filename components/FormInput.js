export default function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}) {
  return (
    <div className="mb-4">

      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-slate-300"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3 text-white outline-none focus:border-violet-500"
      />

    </div>
  );
}