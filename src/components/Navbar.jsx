import React, { useState } from "react";
import { Menu, X, Moon, Sun, Download, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navLinks = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const bgClass = isDark
    ? "bg-slate-900/80 border-slate-800"
    : "bg-white/80 border-slate-200";

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${bgClass}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Ronak Codes
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className={`px-3 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                  isDark
                    ? "text-slate-300 hover:bg-slate-800"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {link}
              </button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-1 sm:space-x-3">
            {/* Download Resume Button */}
            <motion.a
              href="/Ronak_Patel.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Ronak_Patel_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                isDark
                  ? "bg-slate-800 hover:bg-slate-700 text-white"
                  : "bg-slate-200 hover:bg-slate-300 text-slate-900"
              }`}
            >
              <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span className="hidden sm:inline">Resume</span>
            </motion.a>

            {/* Hire Me Button */}
            <motion.button
              onClick={() => scrollToSection("contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all bg-gradient-to-r from-purple-500 to-blue-500 text-white"
            >
              <MessageSquare size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span className="hidden sm:inline">Hire Me</span>
            </motion.button>

            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-lg transition-all ${
                isDark ? "hover:bg-slate-800" : "hover:bg-slate-100"
              }`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className={`md:hidden overflow-hidden pb-4 ${
              isDark ? "bg-slate-800/50" : "bg-slate-50/50"
            }`}
          >
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className={`block w-full text-left px-4 py-2 rounded-lg mb-2 transition-all ${
                  isDark
                    ? "text-slate-300 hover:bg-slate-700"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {link}
              </button>
            ))}
            <motion.a
              href="/Ronak_Patel.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Ronak_Patel_Resume.pdf"
              className={`hidden items-center gap-2 mx-4 px-4 py-2 rounded-lg text-sm font-semibold mb-2 transition-all ${
                isDark
                  ? "bg-slate-800 hover:bg-slate-700 text-white"
                  : "bg-slate-200 hover:bg-slate-300 text-slate-900"
              }`}
            >
              <Download size={18} />
              Resume
            </motion.a>
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="hidden items-center gap-2 mx-4 px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-purple-500 to-blue-500 text-white w-fit"
            >
              <MessageSquare size={18} />
              Hire Me
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
