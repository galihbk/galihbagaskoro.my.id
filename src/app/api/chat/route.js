import { GoogleGenAI } from "@google/genai";
import { knowledge } from "@/app/lib/knowledge";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(req) {
  try {
    const { message } = await req.json();

    const prompt = `
Kamu adalah asisten pribadi Galih Bagaskoro.

Gaya:
- Santai tapi profesional
- Jawab seperti manusia (pakai "saya")
- Tidak kaku
- Tidak berlebihan

Aturan:
- Hanya jawab tentang Galih (profil, pengalaman, project)
- Jika di luar konteks → tolak dengan sopan
- Jawaban singkat tapi jelas

Data:
${knowledge}

Pertanyaan:
${message}
`;

    let reply = "";

    try {
      // 🔥 PRIMARY MODEL (TERBARU)
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      reply = response.text;
    } catch (err) {
      console.error("PRIMARY MODEL ERROR:", err);

      // 🔥 FALLBACK (kalau model error / quota)
      reply =
        "Maaf ya 😊 saat ini saya belum bisa merespon dengan AI, tapi kamu bisa lihat informasi tentang saya di website ini.";
    }

    return Response.json({ reply });
  } catch (error) {
    console.error("FATAL ERROR:", error);

    return Response.json({
      reply: "Maaf ya 😅 lagi ada kendala, coba lagi nanti.",
    });
  }
}
