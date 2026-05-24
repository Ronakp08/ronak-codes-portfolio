import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/ronakp08", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ronakp08/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:ronakp.codes@gmail.com", label: "Email" },
  ];

  const quickLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <footer className={`${isDark ? "bg-slate-900 border-slate-800" : "bg-slate-50 border-slate-200"} border-t`}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#"
              className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
            >
              Ronak Codes
            </a>
            <p className={`mt-2 text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              Building dynamic web applications and smart solutions
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className={`text-sm transition-all hover:translate-x-1 inline-block ${
                      isDark ? "text-slate-400 hover:text-slate-200" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold mb-4">Follow</h3>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className={`p-2 rounded-lg transition-all ${
                    isDark
                      ? "bg-slate-800 hover:bg-slate-700"
                      : "bg-slate-200 hover:bg-slate-300"
                  }`}
                  title={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className={`border-t ${isDark ? "border-slate-800" : "border-slate-200"} py-8`}>
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`text-center text-sm flex items-center justify-center gap-1 ${
              isDark ? "text-slate-500" : "text-slate-600"
            }`}
          >
            @ {currentYear} Ronak Patel. Made with <Heart size={16} className="text-red-500" /> All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
