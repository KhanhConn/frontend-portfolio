import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_86ech65",
        "YOUR_TEMPLATE_ID",
        form.current,
        "fSkYw54B8oeRxWZmu"
      )
      .then(
        () => setStatus("sent"),
        () => setStatus("error")
      );
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold dark:text-white mb-6">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700"
            rows="5"
            required
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
          >
            {status === "sending"
              ? "Sending..."
              : status === "sent"
              ? "Sent ✅"
              : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
