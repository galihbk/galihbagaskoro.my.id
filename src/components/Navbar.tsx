"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X } from "lucide-react";

const sections = ["home", "about", "portfolio", "contact"];

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  // ===== Smooth Scroll =====
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActive("home");
      setIsOpen(false);
      return;
    }

    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });

    setIsOpen(false);
  };

  // ===== Active Section Highlight =====
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // ===== Auto Close On Scroll =====
  useEffect(() => {
    if (!isOpen) return;

    const closeMenu = () => setIsOpen(false);
    window.addEventListener("scroll", closeMenu);

    return () => window.removeEventListener("scroll", closeMenu);
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[var(--bg)]/70 backdrop-blur-md border-b border-white/5 transition">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* LOGO */}
          <button onClick={() => scrollToSection("home")}>
            <Image
              src="/logo-navbar-fix.png"
              alt="Logo"
              width={140}
              height={32}
              priority
            />
          </button>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6 text-sm text-[var(--muted)]">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`transition ${
                  active === section
                    ? "text-[var(--accent)]"
                    : "hover:text-white"
                }`}
              >
                {t.navbar[section as keyof typeof t.navbar]}
              </button>
            ))}

            {/* LANGUAGE */}
            <div className="flex items-center gap-2 ml-6 border-l border-white/10 pl-6">
              <button
                onClick={() => setLang("en")}
                className={lang === "en" ? "text-[var(--accent)]" : ""}
              >
                EN
              </button>
              <span>|</span>
              <button
                onClick={() => setLang("id")}
                className={lang === "id" ? "text-[var(--accent)]" : ""}
              >
                ID
              </button>
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* ===== OVERLAY ===== */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
        onClick={() => setIsOpen(false)}
      />

      {/* ===== MOBILE MENU (Slide Down Animation) ===== */}
      <div
        className={`fixed top-16 left-0 w-full bg-[#11161d] border-t border-white/5 px-6 py-8 space-y-6 transition-all duration-300 md:hidden z-40 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`block w-full text-left transition ${
              active === section ? "text-[var(--accent)]" : "hover:text-white"
            }`}
          >
            {t.navbar[section as keyof typeof t.navbar]}
          </button>
        ))}

        <div className="flex gap-4 pt-4 border-t border-white/10">
          <button
            onClick={() => setLang("en")}
            className={lang === "en" ? "text-[var(--accent)]" : ""}
          >
            EN
          </button>
          <button
            onClick={() => setLang("id")}
            className={lang === "id" ? "text-[var(--accent)]" : ""}
          >
            ID
          </button>
        </div>
      </div>
    </>
  );
}
