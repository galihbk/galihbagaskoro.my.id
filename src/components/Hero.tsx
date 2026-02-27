"use client";

import React from "react";
import Image from "next/image";
import { profile } from "@/data/profile";
import { Instagram, Linkedin, Github, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const SOCIAL_ICONS: Record<string, React.ReactNode> = {
    instagram: <Instagram size={16} />,
    linkedin: <Linkedin size={16} />,
    github: <Github size={16} />,
    mail: <Mail size={16} />,
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0b0f14]" />
        <div
          className="absolute -left-40 top-0 w-[700px] h-[700px] rounded-full
          bg-gradient-to-br from-[#1b2430]/60 via-[#0b0f14]/40 to-transparent"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[520px_1fr] gap-12 items-center">
        <div>
          {/* Greeting */}
          <p className="text-sm text-neutral-400 mb-2">
            {t.hero.greeting}
          </p>

          <h2 className="text-lg text-neutral-300 mb-4">
            {profile.name}
          </h2>

          {/* Title */}
          <h1 className="text-[44px] leading-tight font-bold text-[var(--accent)]">
            {t.hero.titleLine1} <br />
            {t.hero.titleLine2}
          </h1>

          {/* Description */}
          <p className="mt-4 text-neutral-400 max-w-md text-sm leading-relaxed">
            {t.hero.description}
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            {profile.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="
                  w-10 h-10
                  rounded-full
                  border border-white/10
                  flex items-center justify-center
                  text-neutral-400
                  hover:border-[var(--accent)]
                  hover:text-[var(--accent)]
                  transition
                "
              >
                {SOCIAL_ICONS[social.key]}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex gap-4 mt-8">
            <button className="px-6 py-2.5 bg-[var(--accent)] text-black rounded-md text-sm font-medium">
              {t.hero.cta}
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-10 max-w-md">
            {[
              { value: "3+", label: t.hero.stats.experience },
              { value: "50+", label: t.hero.stats.projects },
              { value: "100+", label: t.hero.stats.students },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[#11161d] rounded-lg px-4 py-3"
              >
                <div className="text-[var(--accent)] font-bold text-lg">
                  {item.value}
                </div>
                <div className="text-xs text-neutral-400">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative flex justify-center items-center">
          <div className="absolute w-[420px] h-[420px] rounded-full bg-[#0f141b]" />

          <Image
            src="/me-no-bg.png"
            alt={profile.name}
            width={360}
            height={520}
            className="relative z-10"
            priority
          />
        </div>
      </div>
    </section>
  );
}