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

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* LEFT INFO */}
          <div className="space-y-6">
            <p className="text-neutral-400 leading-relaxed">
              {t.contact.subtitle}
            </p>

            <div className="space-y-3 text-sm">
              <div>
                <span className="text-neutral-500">
                  {t.contact.info.emailLabel}:
                </span>
                <br />
                <a
                  href="mailto:galihbagaskoro@gmail.com"
                  className="text-[var(--accent)] hover:underline"
                >
                  net.galih7@gmail.com
                </a>
              </div>

              <div>
                <span className="text-neutral-500">
                  {t.contact.info.whatsappLabel}:
                </span>
                <br />
                <a
                  href="https://wa.me/628xxxxxxxxxx"
                  target="_blank"
                  className="text-[var(--accent)] hover:underline"
                >
                  +62 81276438553
                </a>
              </div>

              <div>
                <span className="text-neutral-500">
                  {t.contact.info.linkedinLabel}:
                </span>
                <br />
                <a
                  href="https://linkedin.com/in/galihbagaskoro"
                  target="_blank"
                  className="text-[var(--accent)] hover:underline"
                >
                  {t.contact.info.linkedinText}
                </a>
              </div>
            </div>

            <div className="text-xs text-neutral-500 pt-4">
              {t.contact.info.availability}
            </div>
          </div>

          {/* RIGHT FORM */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
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
              className="bg-[#11161d] p-4 rounded-md outline-none focus:ring-2 focus:ring-[var(--accent)] transition h-36 resize-none w-full"
            />

            <button
              type="submit"
              className="bg-[var(--accent)] text-black py-3 rounded-md font-medium hover:opacity-90 transition"
            >
              {t.contact.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
