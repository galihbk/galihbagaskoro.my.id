export default function Experience() {
  return (
    <section id="experience" className="relative py-32">
      {/* background */}
      <div className="absolute inset-0 -z-10 bg-[#0b0f14]" />

      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-20">
          Experience & Education
        </h2>

        <div className="grid md:grid-cols-2 gap-20">
          {/* ================= EDUCATION ================= */}
          <div>
            <h3 className="text-xl font-semibold mb-10">Education</h3>

            <div className="space-y-8 border-l border-white/10 pl-6">
              <div>
                <h4 className="font-medium text-white">
                  Master of Computer Science
                </h4>
                <p className="text-sm text-neutral-400">
                  Universitas AMIKOM Purwokerto
                </p>
                <p className="text-xs text-neutral-500">2023 – 2025</p>
              </div>

              <div>
                <h4 className="font-medium text-white">
                  Bachelor of Informatics
                </h4>
                <p className="text-sm text-neutral-400">
                  Universitas AMIKOM Purwokerto
                </p>
                <p className="text-xs text-neutral-500">2017 – 2022</p>
              </div>
            </div>
          </div>

          {/* ================= EXPERIENCE ================= */}
          <div>
            <h3 className="text-xl font-semibold mb-10">Experience</h3>

            <div className="space-y-12 border-l border-white/10 pl-6">
              <div>
                <h4 className="font-medium text-white">
                  Freelance Web Developer
                </h4>
                <p className="text-sm text-neutral-400 mb-2">
                  July 2021 – Present
                </p>
                <ul className="list-disc ml-5 text-sm text-neutral-400 space-y-1">
                  <li>
                    Building end-to-end web solutions using Laravel,
                    CodeIgniter, and Node.js.
                  </li>
                  <li>
                    Developing REST APIs, real-time systems, and basic payment
                    integrations.
                  </li>
                  <li>
                    Deploying applications using Docker and Nginx with SSL and
                    server hardening.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-white">
                  Web Developer – Universitas AMIKOM Purwokerto
                </h4>
                <p className="text-sm text-neutral-400 mb-2">
                  July 2022 – December 2025
                </p>
                <ul className="list-disc ml-5 text-sm text-neutral-400 space-y-1">
                  <li>
                    Developing new features and maintaining institutional
                    websites.
                  </li>
                  <li>
                    Improving performance, security, and system reliability.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-white">
                  Owner – Gin Invitation
                </h4>
                <p className="text-sm text-neutral-400 mb-2">
                  December 2021 – December 2023
                </p>
                <ul className="list-disc ml-5 text-sm text-neutral-400 space-y-1">
                  <li>
                    Building and maintaining a digital invitation platform.
                  </li>
                  <li>
                    Implementing SEO optimization and performance improvements.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
