import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import profile from "../assets/Profile.png";

const Hero = () => {
  const { isDark } = useTheme();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/ronakp08",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ronakp08/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:ronakp.codes@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section
      id="home"
      className={`relative overflow-hidden min-h-screen flex items-center justify-center pt-20 px-4 ${
        isDark ? "bg-[#020617]" : "bg-[#f8fafc]"
      }`}
    >
      {/* Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl" />

        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-pink-300/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`text-sm font-semibold mb-4 tracking-wide ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Hi there, Welcome 👋
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`text-5xl md:text-6xl font-bold leading-tight mb-5 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            I'm{" "}
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Ronak Patel
            </span>
            <br />
            Full Stack Developer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={`text-lg leading-relaxed max-w-lg mb-8 ${
              isDark ? "text-slate-400" : "text-slate-700"
            }`}
          >
            Building modern and scalable web applications using React,
            Node.js, MongoDB, and Python. Focused on creating clean UI,
            smooth performance, and real-world solutions.
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
              className="px-8 py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white shadow-lg hover:shadow-purple-500/30 transition-all"
            >
              View My Work
              <ArrowRight size={18} />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-2xl font-semibold border backdrop-blur-xl transition-all ${
                isDark
                  ? "bg-white/5 border-white/10 text-white hover:bg-white/10"
                  : "bg-white/50 border-white/40 text-slate-900 hover:bg-white/80"
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
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 rounded-2xl border backdrop-blur-xl transition-all ${
                  isDark
                    ? "bg-white/5 border-white/10 hover:bg-white/10 text-white"
                    : "bg-white/60 border-white/40 hover:bg-white text-slate-900"
                }`}
                title={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          {/* Main Aurora Gradient */}
          <div
            className={`
              absolute w-[380px] h-[380px]
              rounded-full blur-3xl opacity-50
              ${
                isDark
                  ? "bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400"
                  : "bg-gradient-to-br from-purple-300 via-blue-300 to-pink-300"
              }
            `}
          />

          {/* Secondary Glow */}
          <div className="absolute w-[260px] h-[260px] rounded-full bg-blue-400/20 blur-[100px]" />

          {/* Third Soft Glow */}
          <div className="absolute w-[220px] h-[220px] rounded-full bg-pink-400/20 blur-[90px]" />

          {/* Profile Image */}
          <motion.img
            src={profile}
            alt="Ronak Patel"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 w-72 md:w-80 object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
