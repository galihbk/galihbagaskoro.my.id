"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();

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

        {/* MENU */}
        <div className="hidden md:flex items-center gap-6 text-sm text-[var(--muted)]">
          <a href="#home" className="hover:text-[var(--accent)] transition">
            {t.navbar.home}
          </a>
          <a href="#about" className="hover:text-[var(--accent)] transition">
            {t.navbar.about}
          </a>
          <a
            href="#portfolio"
            className="hover:text-[var(--accent)] transition"
          >
            {t.navbar.portfolio}
          </a>
          <a href="#contact" className="hover:text-[var(--accent)] transition">
            {t.navbar.contact}
          </a>

          {/* LANGUAGE TOGGLE */}
          <div className="flex items-center gap-2 ml-6 border-l border-white/10 pl-6">
            <button
              onClick={() => setLang("en")}
              className={`transition ${
                lang === "en"
                  ? "text-[var(--accent)]"
                  : "text-[var(--muted)] hover:text-white"
              }`}
            >
              EN
            </button>
            <span className="text-[var(--muted)]">|</span>
            <button
              onClick={() => setLang("id")}
              className={`transition ${
                lang === "id"
                  ? "text-[var(--accent)]"
                  : "text-[var(--muted)] hover:text-white"
              }`}
            >
              ID
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
