import { FaRocket } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaChartLine,
  FaComments,
  FaCloudSun,
  FaFileAlt,
  FaUsers,
  FaGamepad,
  FaExternalLinkAlt,
  FaBrain,
  FaShieldAlt
} from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Snake Game",
      description:
        "A classic Snake Game built with dynamic state management, real-time movement logic, keyboard controls, and score tracking.",
      github: "https://github.com/AkalyaG0829/Snake-Game",
      live:
        "https://snake-game-m8551w0kc-akalya0829-2017s-projects.vercel.app/",
      icon: <FaGamepad />,
    },
    {
      title: "Face Mask Detection",
      description:
        "A computer vision project that detects whether a person is wearing a face mask in real-time using deep learning and image classification techniques. Built to support public safety monitoring and smart surveillance systems.",
      github: "https://github.com/AkalyaG0829/Face-Mask-Detection",
      icon: <FaShieldAlt />,
    },
    {
      title: "Resume Analyzer",
      description:
        "AI-powered resume evaluation tool that extracts key skills and provides improvement suggestions using intelligent text analysis.",
      github: "https://github.com/AkalyaG0829/Resume-Analyzer",
      live:
        "https://resume-analyzer-4ro9s69rr-akalya0829-2017s-projects.vercel.app/",
      icon: <FaFileAlt />,
    },
    {
      title: "Sentiment Analysis",
      description:
        "AI-based sentiment analysis system that analyzes text and classifies it as positive, or negative using machine learning and NLP techniques.",
      github: "https://github.com/AkalyaG0829/Sentiment-Analysis",
      live: "https://sentiment-analysis-zhdt.onrender.com/",
      icon: <FaBrain />,
    },
    {
      title: "Placement Dashboard",
      description:
        "Track DSA, aptitude, company preparation and performance analytics in one centralized placement dashboard.",
      github: "https://github.com/AkalyaG0829/placement-dashboard",
      live: "https://placement-dashboard-virid.vercel.app/",
      icon: <FaChartLine />,
    },
    {
      title: "Chat Application",
      description:
        "Real-time chat application with smooth UI and instant messaging capabilities.",
      github: "https://github.com/AkalyaG0829/Chat-Application",
      icon: <FaComments />,
    },
    {
      title: "Weather App",
      description:
        "Live weather forecasting app using API integration to display temperature and conditions.",
      github: "https://github.com/AkalyaG0829/Weather-App",
      live: "https://weather-app-hsmf.vercel.app/",
      icon: <FaCloudSun />,
    },
    {
      title: "Customer Behavior Analysis",
      description:
        "Data analytics project analyzing customer purchasing behavior to identify patterns, trends, and insights for better business decision making.",
      github: "https://github.com/AkalyaG0829/Customer_Behavior_Analysis",
      live:
        "https://drive.google.com/file/d/1a9X3kL5QzFoNWSefnc8vQ68KPs2xm2VO/view?usp=sharing",
      icon: <FaUsers />,
    },
    {
      title: "Mars Odyssey Web",
      description:
        "An immersive interactive web experience that visualizes a complete Mars mission journey — from rocket launch to landing. Built for the IIT Patna Frontend Odyssey Challenge, featuring smooth animations, storytelling UI, and a space-themed responsive design.",
      github: "https://github.com/AkalyaG0829/Mars-Odyssey-Web",
      live: "https://mars-odyssey-web-1f43.vercel.app/",
      icon: <FaRocket />,
    },
  ];

  const [index, setIndex] = useState(0);

  const prevProject = () => {
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-[#f1f5f9] flex flex-col items-center justify-center px-6 py-20"
    >

      {/* Title Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-[#1f2937] mb-16"
      >
        Projects
      </motion.h2>

      {/* Project Card */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative w-full max-w-5xl flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.5 }}
            className="bg-white w-[350px] md:w-[450px] p-8 rounded-3xl shadow-2xl text-center"
          >

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 flex items-center justify-center bg-indigo-100 text-indigo-600 text-2xl rounded-full shadow">
                {projects[index].icon}
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-[#1f2937] mb-6">
              {projects[index].title}
            </h3>

            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              {projects[index].description}
            </p>

            <div className="flex justify-center gap-6 mt-6">

              {projects[index].live && (
                <a
                  href={projects[index].live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 border-2 border-indigo-500 text-indigo-600 rounded-full 
                             hover:bg-indigo-500 hover:text-white 
                             transition duration-300 text-sm flex items-center gap-2"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              )}

              <a
                href={projects[index].github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 border-2 border-indigo-500 text-indigo-600 rounded-full 
                           hover:bg-indigo-500 hover:text-white 
                           transition duration-300 text-sm flex items-center gap-2"
              >
                <FaGithub />
                GitHub
              </a>

            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Navigation */}
      <div className="flex gap-6 mt-12">
        <button
          onClick={prevProject}
          className="px-8 py-3 border-2 border-indigo-500 text-indigo-600 rounded-full 
                     hover:bg-indigo-500 hover:text-white transition duration-300"
        >
          ◀ Previous
        </button>

        <button
          onClick={nextProject}
          className="px-8 py-3 border-2 border-indigo-500 text-indigo-600 rounded-full 
                     hover:bg-indigo-500 hover:text-white transition duration-300"
        >
          Next ▶
        </button>
      </div>

    </section>
  );
}