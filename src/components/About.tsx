"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0b0f14]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT - IMAGE */}
        <div className="relative flex justify-center">
          <div className="absolute w-[380px] h-[380px] rounded-full bg-[#0f141b]" />
          <Image
            src="/me-no-bg.png"
            alt="Galih Bagaskoro"
            width={320}
            height={460}
            className="relative z-10"
          />
        </div>

        {/* RIGHT - CONTENT */}
        <div>
          <h2 className="text-3xl font-bold mb-6">{t.about.title}</h2>

          <div className="space-y-4 text-neutral-400 leading-relaxed text-sm">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
            <p>{t.about.p4}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
