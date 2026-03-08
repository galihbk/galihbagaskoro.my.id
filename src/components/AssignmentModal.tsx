"use client";

import { useState } from "react";

export default function AssignmentModal({ assignment, onClose }: any) {
  const [tab, setTab] = useState("desc");

  if (!assignment) return null;

  const renderText = (text: string) =>
    text.split("\n").map((l: string, i: number) => <p key={i}>{l}</p>);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-[#11161d] w-full max-w-2xl p-8 rounded-xl">
        <div className="flex justify-between mb-6">
          <h2 className="text-xl font-semibold">{assignment.title}</h2>
          <button onClick={onClose}>✕</button>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-white/10 mb-6 text-sm flex-wrap">
          <button onClick={() => setTab("desc")}>Deskripsi</button>
          <button onClick={() => setTab("objective")}>Tujuan</button>
          <button onClick={() => setTab("topics")}>Topik</button>
          <button onClick={() => setTab("progress")}>Progress</button>
          <button onClick={() => setTab("req")}>Syarat</button>
          <button onClick={() => setTab("rules")}>Ketentuan</button>
        </div>

        {/* Content */}
        <div className="text-neutral-300 text-sm space-y-3">
          {tab === "desc" && renderText(assignment.description)}

          {tab === "objective" && renderText(assignment.objective)}

          {tab === "topics" && renderText(assignment.topics)}

          {tab === "progress" && renderText(assignment.progress)}

          {tab === "req" && renderText(assignment.requirements)}

          {tab === "rules" && renderText(assignment.rules)}
        </div>
      </div>
    </div>
  );
}
