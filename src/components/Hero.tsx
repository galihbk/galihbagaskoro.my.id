import React from "react";
import Image from "next/image";
import { profile } from "@/data/profile";
import { Instagram, Linkedin, Github, Mail } from "lucide-react";

export default function Hero() {
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
          <p className="text-sm text-neutral-400 mb-2">Hi I am</p>

          <h2 className="text-lg text-neutral-300 mb-4">{profile.name}</h2>

          <h1 className="text-[44px] leading-tight font-bold text-[var(--accent)]">
            Full-Stack <br />
            Web Developer
          </h1>
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
          <div className="flex gap-4 mt-8">
            <button className="px-6 py-2.5 bg-[var(--accent)] text-black rounded-md text-sm font-medium">
              Hire Me
            </button>

            {/* <button className="px-6 py-2.5 border border-white/20 rounded-md text-sm text-neutral-300">
              Download CV
            </button> */}
          </div>

          <div className="grid grid-cols-3 gap-4 mt-10 max-w-md">
            {[
              { value: "3+", label: "Experiences" },
              { value: "50+", label: "Project done" },
              { value: "80+", label: "Happy Clients" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[#11161d] rounded-lg px-4 py-3"
              >
                <div className="text-[var(--accent)] font-bold text-lg">
                  {item.value}
                </div>
                <div className="text-xs text-neutral-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="absolute w-[420px] h-[420px] rounded-full bg-[#0f141b]" />

          <Image
            src="/me-no-bg.png"
            alt={profile.name}
            width={360}
            height={520}
            className="relative z-10 grayscale"
            priority
          />
        </div>
      </div>
    </section>
  );
}
