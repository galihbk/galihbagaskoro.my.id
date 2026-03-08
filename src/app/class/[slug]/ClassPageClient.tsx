"use client";

import { useState } from "react";
import AssignmentModal from "@/components/AssignmentModal";

export default function ClassPageClient({ data }: any) {
  const [assignment, setAssignment] = useState<any>(null);

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="border-b border-white/10 pb-6">
          <h1 className="text-4xl font-bold tracking-tight">{data.title}</h1>
          <p className="text-neutral-400 mt-2">{data.semester}</p>
        </div>

        {/* KONTRAK */}
        <section className="bg-[#11161d] p-8 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-6 text-[var(--accent)]">
            Kontrak Kuliah
          </h2>

          <div className="space-y-3 text-sm text-neutral-300">
            {data.contract.split("\n").map((line: string, i: number) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </section>

        {/* MATERI */}
        <section>
          <h2 className="text-xl font-semibold mb-6 text-[var(--accent)]">
            Materi Perkuliahan
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {data.materials
              .filter((item: any) => item.showing)
              .map((item: any) => (
                <div
                  key={item.week}
                  className="bg-[#11161d] p-6 rounded-xl shadow-md"
                >
                  <p className="text-sm text-neutral-500">Minggu {item.week}</p>

                  <h3 className="mt-2 mb-4">{item.title}</h3>

                  {item.file && (
                    <a
                      href={item.file}
                      download
                      className="px-4 py-2 bg-[var(--accent)] text-black rounded-md text-sm mr-2"
                    >
                      Download Materi
                    </a>
                  )}

                  {item.assignment && (
                    <button
                      onClick={() => setAssignment(item.assignment)}
                      className="px-4 py-2 bg-yellow-500 text-black rounded-md text-sm"
                    >
                      Lihat Tugas
                    </button>
                  )}
                </div>
              ))}
          </div>
        </section>
      </div>

      {/* MODAL */}
      <AssignmentModal
        assignment={assignment}
        onClose={() => setAssignment(null)}
      />
    </div>
  );
}
