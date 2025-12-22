import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-3 overflow-hidden">
      {/* background subtle (sama vibe hero) */}
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
            className="relative z-10 grayscale"
          />
        </div>

        {/* RIGHT - CONTENT */}
        <div>
          <h2 className="text-3xl font-bold mb-6">About Me</h2>

          <div className="space-y-4 text-neutral-400 leading-relaxed text-sm">
            <p>
              I am a{" "}
              <span className="text-white">Full-Stack Web Developer</span> with
              experience building end-to-end web applications, from system
              architecture and backend development to frontend implementation
              and production deployment.
            </p>

            <p>
              My main experience lies in developing{" "}
              <span className="text-white">sports event platforms</span>,
              including real-time ticketing systems, automated payments, invoice
              generation, WhatsApp/email notifications, and live GPS tracking
              using Mapbox. I have also worked on Monitoring and Evaluation
              (M&amp;E) systems for institutional and government use cases.
            </p>

            <p>
              I work with Laravel, CodeIgniter, and Node.js (Express) on the
              backend, and Next.js/React on the frontend. I am comfortable
              designing and optimizing PostgreSQL and MySQL databases,
              implementing real-time systems with Socket.IO and Redis, and
              deploying applications using Docker and Nginx.
            </p>

            <p>
              I focus on building solutions that are measurable, secure, and
              cost-efficient. Currently, I work as a freelance web developer
              while also developing my own product as the Founder and Lead
              Developer of BIBSPORT.
            </p>
          </div>

          {/* <button className="mt-8 px-6 py-2.5 bg-[var(--accent)] text-black rounded-md text-sm font-medium">
            Download CV
          </button> */}
        </div>
      </div>
    </section>
  );
}
