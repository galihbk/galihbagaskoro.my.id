"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();

  const featuredProject = t.projects.items.find((item: any) => item.featured);

  const otherProjects = t.projects.items.filter((item: any) => !item.featured);

  return (
    <section id="portfolio" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[#0b0f14]" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-20">
          {t.projects.title}
        </h2>

        {/* ================= FEATURED ================= */}
        {featuredProject && (
          <div className="mb-24">
            <h3 className="text-xl font-semibold mb-6">
              {t.projects.featured}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#11161d] rounded-xl p-5 sm:p-8 w-full overflow-hidden">
              <div>
                <h4 className="text-2xl font-bold mb-4 text-[var(--accent)]">
                  {featuredProject.title}
                </h4>

                <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                  {featuredProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.tech.map((tech: string) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-black/40 text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {featuredProject.link && (
                  <a
                    href={featuredProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full sm:w-auto text-center px-6 py-2.5 bg-[var(--accent)] text-black rounded-md text-sm font-medium hover:opacity-90 transition"
                  >
                    {t.projects.view}
                  </a>
                )}
              </div>

              <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black/40">
                <Image
                  src="/bibsport.png"
                  alt="Featured Project"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* ================= OTHER PROJECTS ================= */}
        <div>
          <h3 className="text-xl font-semibold mb-10">{t.projects.others}</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherProjects.map((project: any, index: number) => (
              <div
                key={index}
                className="bg-[#11161d] rounded-xl p-5 sm:p-6 w-full overflow-hidden hover:-translate-y-1 transition"
              >
                <h4 className="text-lg font-semibold mb-3">{project.title}</h4>

                <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech: string) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-black/40 text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.internal ? (
                  <span className="inline-block w-full sm:w-auto text-center px-6 py-2.5 rounded-md text-sm font-medium bg-black/40 text-neutral-400">
                    {t.projects.internal}
                  </span>
                ) : (
                  project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full sm:w-auto text-center px-6 py-2.5 bg-[var(--accent)] text-black rounded-md text-sm font-medium hover:opacity-90 transition"
                    >
                      {t.projects.view}
                    </a>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
