import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full bg-[#a9b7cf] flex items-center justify-center px-10 overflow-hidden"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 items-center gap-10 z-30 mt-20">

        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start relative">
          <img
            src="/profile.png"
            alt="profile"
            className="h-[520px] md:h-[640px] object-contain relative z-20"
          />
        </div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="z-30"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#1f2937] leading-tight">
            Hello, I'm <br />
            <span className="text-[#111827] font-extrabold">
              Akalya.G
            </span>
          </h1>

          <p className="mt-6 text-[#374151] text-lg max-w-xl">
            BE.CSE student | Passionate about Web Development, Data Analytics,
            Data Science & AI | Problem solver & continuous learner.
          </p>

          {/* ABOUT BUTTON */}
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-8 inline-block px-6 py-3 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition"
          >
            About Me
          </motion.a>

          {/* SOCIAL ICONS */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex items-center gap-6 mt-10 text-3xl text-gray-700"
          >
            <a
              href="https://github.com/AkalyaG0829"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://leetcode.com/u/Akalya_g/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition duration-300"
            >
              <SiLeetcode />
            </a>

            <a
              href="https://www.hackerrank.com/profile/akalya0829"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition duration-300"
            >
              <SiHackerrank />
            </a>

            <a
              href="https://www.linkedin.com/in/akalyag0829/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition duration-300"
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* CURVE */}
      <div className="absolute bottom-0 left-0 w-screen z-40 pointer-events-none">
        <svg
          viewBox="0 0 1440 200"
          className="w-full h-[100px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C300,200 1100,0 1440,140 L1440,200 L0,200 Z"
            fill="#f1f5f9"
          />
        </svg>
      </div>
    </section>
  );
}