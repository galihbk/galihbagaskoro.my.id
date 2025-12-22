export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 pb-32">
      <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>

      <form className="grid md:grid-cols-2 gap-6">
        <input placeholder="Name" className="bg-[var(--card)] p-4 rounded-md" />
        <input
          placeholder="Email"
          className="bg-[var(--card)] p-4 rounded-md"
        />
        <textarea
          placeholder="Message"
          className="bg-[var(--card)] p-4 rounded-md md:col-span-2 h-32"
        />
        <button className="md:col-span-2 bg-[var(--accent)] text-black py-3 rounded-md">
          Send Message
        </button>
      </form>
    </section>
  );
}
