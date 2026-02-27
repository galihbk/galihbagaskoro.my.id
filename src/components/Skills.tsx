"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  const skills = [
    { name: "Backend Engineering (Laravel / Node.js)", level: 95 },
    { name: "Frontend Architecture (Next.js / React)", level: 90 },
    { name: "Database Systems (PostgreSQL / MySQL)", level: 90 },
    { name: "Real-Time Systems & WebSocket", level: 85 },
    { name: "Deployment & DevOps (Docker / Nginx)", level: 85 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.4 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0b0f14]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          {t.skills.title}
        </h2>

        <div className="flex flex-wrap justify-center gap-16">
          {skills.map((skill) => (
            <AnimatedSkill
              key={skill.name}
              name={skill.name}
              level={skill.level}
              animate={animate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedSkill({
  name,
  level,
  animate,
}: {
  name: string;
  level: number;
  animate: boolean;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!animate) return;

    let start = 0;
    const duration = 1200;
    const increment = level / (duration / 16);

    const animateProgress = () => {
      start += increment;
      if (start >= level) {
        setProgress(level);
        return;
      }
      setProgress(Math.floor(start));
      requestAnimationFrame(animateProgress);
    };

    requestAnimationFrame(animateProgress);
  }, [animate, level]);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full border-4 border-neutral-800" />

        <div
          className="absolute inset-0 rounded-full border-4 border-[var(--accent)] transition-all duration-300"
          style={{
            clipPath: `inset(${100 - progress}% 0 0 0)`,
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
          {progress}%
        </div>
      </div>

      <div className="mt-4 text-sm text-neutral-400 max-w-[160px]">{name}</div>
    </div>
  );
}
