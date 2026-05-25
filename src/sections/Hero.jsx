import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import profile from "../assets/ronak_profile.jpeg";

const Hero = () => {
  const { isDark } = useTheme();

  const socialLinks = [
    { icon: Github, href: "https://github.com/ronakp08", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ronakp08/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:ronakp.codes@gmail.com", label: "Email" },
  ];

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center pt-20 px-4 ${isDark ? "bg-slate-900" : "bg-gradient-to-br from-slate-50 to-slate-100"}`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`text-sm font-semibold mb-4 ${isDark ? "text-slate-400" : "text-slate-600"}`}
          >
            Hi there, Welcome!
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-3 leading-tight"
          >
            I'm <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Ronak Patel</span>
            <br />
            Full Stack Developer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={`text-lg mb-8 ${isDark ? "text-slate-400" : "text-slate-700"} max-w-md`}
          >
            Building dynamic web applications with React, Node.js, and Python. I create scalable solutions that solve real problems.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all bg-gradient-to-r from-purple-500 to-blue-500 text-white"
            >
              View My Work <ArrowRight size={18} />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-lg font-semibold transition-all border-2 ${
                isDark
                  ? "border-slate-700 text-white hover:bg-slate-800"
                  : "border-slate-300 text-slate-900 hover:bg-slate-100"
              }`}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-lg transition-all ${isDark ? "bg-slate-800 hover:bg-slate-700" : "bg-slate-200 hover:bg-slate-300"}`}
                title={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          {/* Decorative Blobs */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute inset-0 rounded-3xl blur-3xl opacity-30 bg-gradient-to-br from-purple-500 to-blue-500"
          />

          {/* Profile Image Container */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="relative z-10 w-72 h-72 rounded-3xl overflow-hidden border-4 border-slate-700/50"
          >
            <img
              src={profile}
              alt="Ronak Patel"
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? "from-slate-900/60" : "from-slate-100/40"}`} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
