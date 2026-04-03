"use client";
import { useState, useRef, useEffect } from "react";
import { Bot, X } from "lucide-react";

type Message = {
  role: "user" | "bot";
  text: string;
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input || loading) return;

    const userMessage = input;
    setInput("");
    setLoading(true);

    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();

      setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Maaf ya 😅 terjadi kesalahan." },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 w-14 h-14 rounded-full bg-[var(--accent)] text-black shadow-lg flex items-center justify-center z-[9999]"
      >
        <Bot size={24} />
      </button>

      {open && (
        <div
          style={{ isolation: "isolate" }}
          className="fixed bottom-20 right-5 w-80 bg-[#11161d]/90 backdrop-blur-xl text-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-white/10 z-[9999]"
        >
          <div className="p-3 border-b border-white/10 font-semibold flex justify-between items-center">
            <span>Asisten Galih</span>
            <button
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          <div className="h-64 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={
                  msg.role === "user"
                    ? "flex justify-end"
                    : "flex justify-start"
                }
              >
                <div
                  className={`px-3 py-2 rounded-xl text-sm max-w-[75%] ${
                    msg.role === "user"
                      ? "bg-[var(--accent)] text-black"
                      : "bg-black/40 text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="px-3 py-2 rounded-xl bg-black/40 text-sm animate-pulse">
                  sedang mengetik...
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          <div className="p-3 border-t border-white/10">
            <input
              className="w-full p-2 rounded bg-black/40 text-white outline-none"
              placeholder="Tanya tentang Galih..."
              value={input}
              disabled={loading}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />

            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-[var(--accent)] text-black w-full mt-2 p-2 rounded disabled:opacity-50"
            >
              {loading ? "Mengirim..." : "Kirim"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
