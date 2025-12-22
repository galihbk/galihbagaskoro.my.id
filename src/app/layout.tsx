import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Galih Bagaskoro | Full-Stack Web Developer",
  description:
    "Personal portfolio of Galih Bagaskoro, a Full-Stack Web Developer specializing in Laravel, Node.js, Next.js, real-time systems, and scalable web applications.",
  keywords: [
    "Galih Bagaskoro",
    "Full-Stack Web Developer",
    "Laravel Developer",
    "Node.js Developer",
    "Next.js Developer",
    "Web Developer Indonesia",
    "Real-time Web Application",
  ],
  authors: [{ name: "Galih Bagaskoro" }],
  creator: "Galih Bagaskoro",
  openGraph: {
    title: "Galih Bagaskoro | Full-Stack Web Developer",
    description:
      "Building scalable and real-time web applications using Laravel, Node.js, and Next.js.",
    url: "https://galihbagaskoro.my.id",
    siteName: "Galih Bagaskoro Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="transition-colors duration-300">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
