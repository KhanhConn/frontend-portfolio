import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub } from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_86ech65", 
        "template_d2lldss",
        form.current,
        "fSkYw54B8oeRxWZmu" 
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("❌ Failed to send message, please try again!");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Tiêu đề */}
        <motion.h2
          className="text-3xl font-bold mb-6 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>


        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Email */}
          <a
            href="mailto:khanhconn04@gmail.com" 
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <FaEnvelope size={20} />
            khanhconn@gmail.com
          </a>


          <a
            href="https://github.com/KhanhConn" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <FaGithub size={20} />
            github.com/KhanhConn
          </a>
        </motion.div>


        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white"
          />
          <motion.button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
