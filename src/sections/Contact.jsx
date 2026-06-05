import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_klaz1fl",
      "template_sidj7p2",
      form.current,
      "3JPPWGGRX3BoN8-q8"
    )
    .then(() => {
      alert("Message sent successfully!");
    })
    .catch(() => {
      alert("Failed to send message.");
    });

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full bg-[#f1f5f9] flex flex-col items-center justify-center px-6 py-20"
    >

      <h2 className="text-4xl md:text-5xl font-bold text-[#1f2937] mb-6">
  Contact Me
</h2>

<p className="text-gray-600 text-center mb-10 leading-relaxed">
  <span className="block">
    I’m eager to apply my skills in real-world projects and collaborate with passionate teams.
  </span>
  <span className="block">
    If you have an opportunity, idea, or project in mind, feel free to reach out.
  </span>
</p>

      {/* Contact Form */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl bg-white p-8 rounded-3xl shadow-xl space-y-6"
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500"
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Send Message
        </button>

      </motion.form>

      {/* Social Icons */}
      <div className="flex gap-8 mt-10 text-2xl text-gray-700">

        <a
          href="mailto:akalya0829@gmail.com"
          className="hover:text-indigo-600 transition"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://www.linkedin.com/in/akalyag0829/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-600 transition"
        >
          <FaLinkedin />
        </a>

      </div>

    </section>
  );
}