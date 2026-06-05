import { motion } from "framer-motion";
import { useState } from "react";

export default function About() {
  const [showSkills, setShowSkills] = useState(false);

  const skills = [
    { name: "Java Programming", level: 70 },
    { name: "Database Management", level: 85 },
    { name: "Problem Solving", level: 75 },
    { name: "Front-end Development", level: 80 },
    { name: "Analytics", level: 75 },
    { name: "Team Leadership & Coordination", level: 90 },
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full bg-[#f1f5f9] flex flex-col items-center justify-center px-6 md:px-16 py-20"
    >
      {/* TOP SECTION */}
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1f2937] mb-8">
            About Me
          </h2>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Naturally curious and driven by challenges, I love transforming ideas into practical and efficient solutions. I enjoy building interactive web experiences, exploring data-driven insights, and applying AI to solve meaningful problems.
            </p>

            <p>
              I take pride in writing clean, thoughtful code and continuously sharpening my problem-solving skills through hands-on projects and collaboration.
            </p>

            <p className="font-medium text-[#111827]">
              Every challenge is an opportunity to learn, grow, and create technology that makes a real impact.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-8">

            {/* SHOW SKILLS */}
            <button
              onClick={() => setShowSkills(true)}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Show My Skills
            </button>

            {/* VIEW RESUME */}
            <a
              href="https://drive.google.com/file/d/14PJKrugg64ZOMHUgQGrK_PlfSEppfVhy/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
            >
              View Resume
            </a>

          </div>
        </motion.div>

        {/* RIGHT SIDE - IMAGE SECTION */}
        <div className="flex justify-center">
          <div className="relative">

            <motion.img
              src="/small-photo.png"
              alt="Small"
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -left-10 w-[150px] h-[190px] object-cover rounded-xl shadow-xl border-4 border-white z-30"
            />

            <motion.img
              src="/about-photo.png"
              alt="About Akalya"
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-[320px] md:w-[400px] rounded-2xl shadow-xl object-cover relative z-20"
            />

          </div>
        </div>

      </div>

      {/* SKILLS SECTION */}
      {showSkills && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl w-full mt-20 grid md:grid-cols-3 gap-10"
        >
          {skills.map((skill, index) => (
            <div key={index}>
              <p className="mb-3 text-gray-800 font-medium">
                {skill.name}
              </p>

              <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="h-3 bg-indigo-600 rounded-full"
                />
              </div>
            </div>
          ))}
        </motion.div>
      )}

    </section>
  );
}