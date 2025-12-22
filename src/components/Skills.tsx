export default function Skills() {
  const skills = [
    { name: "Laravel / CodeIgniter", level: 95 },
    { name: "Node.js / Express", level: 90 },
    { name: "Next.js / React", level: 85 },
    { name: "PostgreSQL / MySQL", level: 90 },
    { name: "Docker / Nginx", level: 85 },
  ];

  return (
    <section className="relative py-3">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0b0f14]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Skills</h2>

        <div className="flex flex-wrap justify-center gap-16">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center text-center"
            >
              {/* circle */}
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 rounded-full border-4 border-neutral-800" />

                <div
                  className="absolute inset-0 rounded-full border-4 border-[var(--accent)]"
                  style={{
                    clipPath: `inset(${100 - skill.level}% 0 0 0)`,
                  }}
                />

                <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
                  {skill.level}%
                </div>
              </div>

              <div className="mt-4 text-sm text-neutral-400">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
