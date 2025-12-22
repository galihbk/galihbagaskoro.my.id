"use client";

export default function ThemeToggle() {
  function toggle() {
    document.documentElement.classList.toggle("light");
  }

  return (
    <button
      onClick={toggle}
      className="text-sm border border-white/10 px-3 py-1 rounded"
    >
      Theme
    </button>
  );
}
