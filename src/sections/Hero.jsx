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
        isDark
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-black"
          : "bg-gradient-to-br from-white via-slate-50 to-blue-50"
      }`}
    >
      {/* Background Blur Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
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
            className={`text-sm font-semibold mb-4 ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Hi there, Welcome!
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-3 leading-tight"
          >
            I'm{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Ronak Patel
            </span>
            <br />
            Full Stack Developer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={`text-lg mb-8 max-w-md ${
              isDark ? "text-slate-400" : "text-slate-700"
            }`}
          >
            Building dynamic web applications with React, Node.js, and Python.
            I create scalable solutions that solve real problems.
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
              className="px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg hover:shadow-purple-500/30"
            >
              View My Work <ArrowRight size={18} />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-lg font-semibold transition-all border backdrop-blur-md ${
                isDark
                  ? "border-white/10 bg-white/5 text-white hover:bg-white/10"
                  : "border-slate-300 bg-white/50 text-slate-900 hover:bg-white/70"
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
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-xl transition-all backdrop-blur-lg border ${
                  isDark
                    ? "bg-white/5 border-white/10 hover:bg-white/10"
                    : "bg-white/60 border-slate-200 hover:bg-white"
                }`}
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
          {/* Animated Gradient Glow */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className={`absolute w-80 h-80 rounded-[40px] blur-3xl opacity-40 bg-gradient-to-br ${
              isDark
                ? "from-purple-600 via-blue-500 to-cyan-400"
                : "from-purple-300 via-blue-300 to-pink-300"
            }`}
          />

          {/* Decorative Ring */}
          <div
            className={`absolute w-[310px] h-[310px] rounded-[35px] border ${
              isDark ? "border-white/10" : "border-slate-300/70"
            }`}
          />

          {/* Profile Card */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className={`relative z-10 w-72 h-72 rounded-[32px] overflow-hidden backdrop-blur-xl shadow-2xl border ${
              isDark
                ? "bg-white/5 border-white/10"
                : "bg-white/40 border-white/50"
            }`}
          >
            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 z-10 bg-gradient-to-t ${
                isDark
                  ? "from-slate-900/70 via-slate-900/10 to-transparent"
                  : "from-white/50 via-transparent to-transparent"
              }`}
            />

            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent z-20" />

            <img
              src={profile}
              alt="Ronak Patel"
              className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
