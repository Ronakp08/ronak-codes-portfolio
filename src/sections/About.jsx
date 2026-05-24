import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import StatCard from "../components/StatCard";
import { statsData } from "../data/skills";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { isDark } = useTheme();

  return (
    <section id="about" className={`py-20 px-4 ${isDark ? "bg-slate-900" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className={`text-lg mb-4 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
              Hi! I'm Ronak Patel, a Full Stack Developer with 1.5+ years of professional experience. I specialize in building dynamic, scalable web applications using modern technologies like React, Node.js, MongoDB, and Python.
            </p>
            <p className={`text-lg mb-4 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
              I have hands-on experience with MERN stack, ERP solutions (ERPNext/Frappe), and Data Science projects. Recently, I've been working on a custom industry-specific ERP platform where everything is dynamic and configurable - from UI labels to business workflows.
            </p>
            <p className={`text-lg mb-6 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
              I'm passionate about writing clean, maintainable code and solving complex problems. I also have experience with LLM integration, Docker containerization, and building real-time applications with Socket.IO.
            </p>

            <motion.a
              href="/Ronak_Patel.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Ronak_Patel_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                isDark
                  ? "bg-slate-800 hover:bg-slate-700"
                  : "bg-slate-100 hover:bg-slate-200"
              }`}
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {statsData.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
