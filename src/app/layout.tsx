import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Galih Bagaskoro | Lecturer & Full-Stack Developer",
  description:
    "Official portfolio of Galih Bagaskoro, Lecturer and Full-Stack Developer specializing in digital learning systems, Laravel, Node.js, Next.js, and real-time web applications.",
  keywords: [
    "Galih Bagaskoro",
    "Dosen Teknologi",
    "Lecturer",
    "Full-Stack Developer",
    "Digital Learning",
    "Laravel Developer",
    "Node.js Developer",
    "Next.js Developer",
    "Web Developer Indonesia",
    "Educational Technology",
  ],
  authors: [{ name: "Galih Bagaskoro" }],
  creator: "Galih Bagaskoro",
  metadataBase: new URL("https://galihbagaskoro.my.id"),
  openGraph: {
    title: "Galih Bagaskoro | Lecturer & Full-Stack Developer",
    description:
      "Building digital systems and interactive learning experiences for modern education.",
    url: "https://galihbagaskoro.my.id",
    siteName: "Galih Bagaskoro Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Galih Bagaskoro | Lecturer & Full-Stack Developer",
    description:
      "Digital learning enthusiast and full-stack developer building scalable web systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="transition-colors duration-300 bg-[#0b0f14] text-white">
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}