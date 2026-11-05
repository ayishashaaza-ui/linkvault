export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) {
  const styles = {
    primary: "bg-violet-600 hover:bg-violet-700 text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
    secondary: "bg-slate-700 hover:bg-slate-600 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-lg px-4 py-2 font-semibold transition ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}