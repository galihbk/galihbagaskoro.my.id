import { notFound } from "next/navigation";
import { classes } from "@/data/classes";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ClassPage({ params }: Props) {
  const { slug } = await params;
  const data = classes[slug];

  if (!data) return notFound();

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="border-b border-white/10 pb-6">
          <h1 className="text-4xl font-bold tracking-tight">{data.title}</h1>
          <p className="text-neutral-400 mt-2">{data.semester}</p>
        </div>

        <section className="bg-[#11161d] p-8 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-6 text-[var(--accent)]">
            Kontrak Kuliah
          </h2>

          <div className="space-y-3 text-sm text-neutral-300 leading-relaxed">
            {data.contract.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-6 text-[var(--accent)]">
            Materi Perkuliahan
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {data.materials.map((item) => (
              <div
                key={item.week}
                className="bg-[#11161d] p-6 rounded-xl hover:translate-y-[-4px] transition shadow-md"
              >
                <p className="text-sm text-neutral-500">Minggu {item.week}</p>

                <h3 className="font-medium mt-2 mb-4">{item.title}</h3>

                {item.file && (
                  <a
                    href={item.file}
                    target="_blank"
                    className="inline-block px-4 py-2 bg-[var(--accent)] text-black rounded-md text-sm font-medium hover:opacity-90 transition"
                  >
                    Download Materi
                  </a>
                )}
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    className="inline-block px-4 py-2 bg-[var(--accent)] text-black rounded-md text-sm font-medium hover:opacity-90 transition"
                  >
                    Lihat Materi
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
