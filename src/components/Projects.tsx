import Image from "next/image";

export default function Projects() {
  return (
    <section id="portfolio" className="relative py-3">
      <div className="absolute inset-0 -z-10 bg-[#0b0f14]" />

      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-20">Portfolio</h2>

        <div className="mb-24">
          <h3 className="text-xl font-semibold mb-6">Featured Project</h3>

          <div className="grid md:grid-cols-2 gap-12 items-center bg-[#11161d] rounded-xl p-8 hover:translate-y-[-4px] transition">
            <div>
              <h4 className="text-2xl font-bold mb-4 text-[var(--accent)]">
                BIBSPORT
              </h4>

              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                A sports event platform featuring real-time ticketing, automated
                payments, invoice generation, WhatsApp/email notifications, and
                live GPS tracking with replay functionality.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "Next.js",
                  "Node.js",
                  "Socket.IO",
                  "Mapbox",
                  "PostgreSQL",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-black/40 text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="https://bibsport.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2.5 bg-[var(--accent)] text-black rounded-md text-sm font-medium hover:opacity-90 transition"
              >
                View Project
              </a>
            </div>

            {/* right placeholder */}
            <div className="relative h-64 rounded-lg overflow-hidden bg-black/40">
              <Image
                src="/bibsport.png"
                alt="BIBSPORT Project Preview"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                priority
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-10">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#11161d] rounded-xl p-6 hover:translate-y-[-4px] transition">
              <h4 className="text-lg font-semibold mb-3">
                Monev Garuda Unsoed
              </h4>
              <p className="text-sm text-neutral-400 mb-4">
                Monitoring and Evaluation system for KPI and budget tracking,
                featuring hierarchical data structures and Excel import
                functionality.
              </p>
              <div className="flex gap-2 mb-4">
                {["Laravel", "PostgreSQL", "Dashboard"].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-black/40 text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="inline-block px-6 py-2.5 rounded-md text-sm font-medium bg-black/40 text-neutral-400 cursor-default">
                Internal System
              </span>
            </div>
            <div className="bg-[#11161d] rounded-xl p-6 hover:translate-y-[-4px] transition">
              <h4 className="text-lg font-semibold mb-3">
                Desktop Information System – KORSIS SPN Purwokerto
              </h4>

              <p className="text-sm text-neutral-400 mb-4">
                Desktop-based information system developed to support internal
                data management, administration, and reporting processes for
                KORSIS at SPN Purwokerto.
              </p>

              <div className="flex gap-2 mb-4 flex-wrap">
                {["Desktop App", "Information System", "Internal Use"].map(
                  (t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-black/40 text-neutral-300"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>

              <span className="inline-block px-6 py-2.5 rounded-md text-sm font-medium bg-black/40 text-neutral-400 cursor-default">
                Internal System
              </span>
            </div>

            {/* SIMTARU */}
            <div className="bg-[#11161d] rounded-xl p-6 hover:translate-y-[-4px] transition">
              <h4 className="text-lg font-semibold mb-3">Monev PPI – BKPM</h4>

              <p className="text-sm text-neutral-400 mb-4">
                Monitoring and Evaluation (Monev) system for Public–Private
                Investment (PPI), supporting data tracking, reporting, and
                performance monitoring for government stakeholders.
              </p>

              <div className="flex gap-2 mb-4 flex-wrap">
                {["Monitoring System", "Government", "Dashboard"].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-black/40 text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* kalau tidak public, jangan kasih link */}
              <span className="inline-block px-6 py-2.5 rounded-md text-sm font-medium bg-black/40 text-neutral-400 cursor-default">
                Internal System
              </span>
            </div>

            <div className="bg-[#11161d] rounded-xl p-6 hover:translate-y-[-4px] transition">
              <h4 className="text-lg font-semibold mb-3">SIMTARU Bengkalis</h4>
              <p className="text-sm text-neutral-400 mb-4">
                Backend development for a geospatial spatial planning system,
                handling spatial data and regional management.
              </p>
              <div className="flex gap-2 mb-4">
                {["Backend", "Geospatial", "PostgreSQL"].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-black/40 text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="https://simtaru.bengkaliskab.go.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2.5 bg-[var(--accent)] text-black rounded-md text-sm font-medium hover:opacity-90 transition"
              >
                View Project
              </a>
            </div>
            <div className="bg-[#11161d] rounded-xl p-6 hover:translate-y-[-4px] transition">
              <h4 className="text-lg font-semibold mb-3">
                SMP Pancasila Jatilawang
              </h4>

              <p className="text-sm text-neutral-400 mb-4">
                School landing page designed to present institutional
                information, academic programs, and announcements with a clean
                and responsive layout.
              </p>

              <div className="flex gap-2 mb-4">
                {[
                  "Landing Page",
                  "Codeigniter 4",
                  "Bootstrap",
                  "Html",
                  "Responsive",
                ].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-black/40 text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="https://smppancasilajatilawang.sch.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2.5 bg-[var(--accent)] text-black rounded-md text-sm font-medium hover:opacity-90 transition"
              >
                View Project
              </a>
            </div>
            <div className="bg-[#11161d] rounded-xl p-6 hover:translate-y-[-4px] transition">
              <h4 className="text-lg font-semibold mb-3">PAMKITA</h4>
              <p className="text-sm text-neutral-400 mb-4">
                SaaS platform for water billing (PDAM-style) management,
                featuring customer registration, tariff configuration, meter
                recording, automatic billing generation, payment integration via
                Xendit, and real-time dashboard analytics.
              </p>
              <div className="flex gap-2 mb-4 flex-wrap">
                {[
                  "CodeIgniter 4",
                  "Node.js API",
                  "Xendit",
                  "PostgreSQL",
                  "Dashboard",
                ].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-black/40 text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="https://pamkita.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2.5 bg-[var(--accent)] text-black rounded-md text-sm font-medium hover:opacity-90 transition"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
