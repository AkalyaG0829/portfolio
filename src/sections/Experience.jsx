import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaRobot,
  FaDatabase,
  FaCode,
  FaChartLine,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

export default function Experience() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [index, setIndex] = useState(0);

  const internships = [
    {
      role: "Artificial Intelligence Intern",
      company: "Codec Technologies India",
      duration: "Jan 2026 - Feb 2026",
      icon: <FaRobot />,
    },
    {
      role: "Data Science Intern",
      company: "CODTECH IT SOLUTIONS",
      duration: "Jan 2026",
      icon: <FaDatabase />,
    },
    {
      role: "Full Stack Developer Intern",
      company: "Edu-versity",
      duration: "Jul 2025 - Aug 2025",
      icon: <FaCode />,
    },
    {
      role: "Data Analyst Intern",
      company: "Navodita Infotech",
      duration: "Jun 2025 - Jul 2025",
      icon: <FaChartLine />,
    },
  ];

  const achievements = [
    {
      title: "72-Hour Hackathon – Petrichor’26",
      image: "/hackathon.jpg",
      description:
        "Participated in the 72-hour Hackathon at IIT Palakkad’s Petrichor’26 and ranked Top 40 among 500+ participants.",
    },
    {
      title: "Research Paper – LearnGram",
      image: "/conference.jpg",
      description:
        "Presented 'LearnGram: An Offline-First AI-Powered Digital Learning Application for Rural Education' at an AICTE-sponsored National Conference.",
    },
    {
      title: "INFIQ 2K26 – Event Coordinator",
      image: "/infiq.jpg",
      description:
        "Served as a Coordinator for INFIQ 2K26 organized by the Computer Science and Engineering department.",
    },
    {
      title: "NeuroHack Challenge 2026 – IIT Guwahati",
      image: "/neurohack.jpg",
      description:
        "Participated in the NeuroHack Challenge 2026 at the Machine Learning Conclave organized by IITG.ai in collaboration with Smallest.ai.",
    },
  ];

  const next = () => {
    if (index + 3 < achievements.length) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const visibleAchievements = achievements.slice(index, index + 3);

  return (
    <section
      id="experience"
      className="min-h-screen w-full bg-[#f1f5f9] px-6 py-20"
    >

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#1f2937]">
        Experience
      </h2>

      {/* Internship Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">

        {internships.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >

            <div className="text-3xl text-indigo-600 mb-4">
              {item.icon}
            </div>

            <h3 className="text-lg font-semibold text-indigo-600">
              {item.role}
            </h3>

            <p className="text-gray-800 font-medium">
              {item.company}
            </p>

            <p className="text-sm text-gray-500">
              {item.duration}
            </p>

          </motion.div>
        ))}

      </div>

      {/* Achievements Section */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-[#1f2937]">
        Achievements & Activities
      </h2>

      <div className="max-w-7xl mx-auto flex items-center gap-6">

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="text-2xl bg-white p-3 rounded-full shadow hover:bg-indigo-500 hover:text-white transition"
        >
          <FaChevronLeft />
        </button>

        {/* Achievement Cards */}
        <AnimatePresence mode="wait">

          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid md:grid-cols-3 gap-8 w-full"
          >

            {visibleAchievements.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center"
              >

                <div className="mb-5 cursor-pointer">

                  <img
                    src={item.image}
                    alt={item.title}
                    onClick={() => setSelectedImage(item.image)}
                    className="h-40 mx-auto object-contain hover:scale-105 transition duration-300"
                  />

                </div>

                <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>

              </motion.div>
            ))}

          </motion.div>

        </AnimatePresence>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="text-2xl bg-white p-3 rounded-full shadow hover:bg-indigo-500 hover:text-white transition"
        >
          <FaChevronRight />
        </button>

      </div>

      {/* Image Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >

          <motion.img
            src={selectedImage}
            alt="preview"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="max-h-[85vh] max-w-[90vw] rounded-xl shadow-2xl"
          />

        </div>
      )}

    </section>
  );
}