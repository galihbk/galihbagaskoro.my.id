"use client";

import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--bg)]/80 backdrop-blur border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <a href="#home" className="flex items-center gap-2">
          <Image
            src="/logo-navbar-fix.png"
            alt="Galih Bagaskoro Logo"
            width={140}
            height={32}
            priority
          />
        </a>

        <div className="hidden md:flex gap-6 text-sm text-[var(--muted)]">
          <a href="#home" className="hover:text-[var(--accent)] transition">
            Home
          </a>
          <a href="#about" className="hover:text-[var(--accent)] transition">
            About
          </a>
          <a
            href="#portfolio"
            className="hover:text-[var(--accent)] transition"
          >
            Portfolio
          </a>
          <a href="#contact" className="hover:text-[var(--accent)] transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
