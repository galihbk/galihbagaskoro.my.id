"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[#0b0f14]" />

      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-20">
          {t.experience.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-20">
          {/* EDUCATION */}
          <div>
            <h3 className="text-xl font-semibold mb-10">
              {t.experience.education}
            </h3>

            <div className="space-y-8 border-l border-white/10 pl-6">
              {t.experience.degrees.map((degree: any, index: number) => (
                <div key={index}>
                  <h4 className="font-medium text-white">{degree.title}</h4>
                  <p className="text-sm text-neutral-400">
                    {degree.institution}
                  </p>
                  <p className="text-xs text-neutral-500">{degree.duration}</p>
                </div>
              ))}
            </div>
          </div>

          {/* EXPERIENCE */}
          <div>
            <h3 className="text-xl font-semibold mb-10">{t.experience.work}</h3>

            <div className="space-y-12 border-l border-white/10 pl-6">
              {t.experience.roles.map((role: any, index: number) => (
                <div key={index}>
                  <h4 className="font-medium text-white">{role.title}</h4>
                  <p className="text-sm text-neutral-400 mb-2">
                    {role.duration}
                  </p>
                  <ul className="list-disc ml-5 text-sm text-neutral-400 space-y-1">
                    {role.points.map((point: string, i: number) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
