export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 text-center text-sm text-[var(--muted)]">
      © {new Date().getFullYear()} Galih Bagaskoro. All rights reserved.
    </footer>
  );
}
