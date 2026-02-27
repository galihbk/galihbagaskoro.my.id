"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:galihbagaskoro@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[#0b0f14]" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-16 text-center">
          {t.contact.title}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          <input
            type="text"
            placeholder={t.contact.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-[#11161d] p-4 rounded-md outline-none focus:ring-2 focus:ring-[var(--accent)] transition w-full"
          />

          <input
            type="email"
            placeholder={t.contact.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-[#11161d] p-4 rounded-md outline-none focus:ring-2 focus:ring-[var(--accent)] transition w-full"
          />

          <textarea
            placeholder={t.contact.message}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="bg-[#11161d] p-4 rounded-md outline-none focus:ring-2 focus:ring-[var(--accent)] transition md:col-span-2 h-36 resize-none w-full"
          />

          <button
            type="submit"
            className="md:col-span-2 w-full sm:w-auto mx-auto bg-[var(--accent)] text-black py-3 px-8 rounded-md font-medium hover:opacity-90 transition"
          >
            {t.contact.send}
          </button>
        </form>
      </div>
    </section>
  );
}
