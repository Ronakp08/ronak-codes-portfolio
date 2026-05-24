import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { isDark, colorTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef();

  React.useEffect(() => {
    // Initialize EmailJS with your public key from https://www.emailjs.com/
    // Get it from: Dashboard → Integration → Your Public Key
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY_HERE";
    if (publicKey !== "YOUR_PUBLIC_KEY_HERE") {
      emailjs.init(publicKey);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Get credentials from environment variables or placeholders
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY_HERE";

      // Check if credentials are configured
      if (serviceId === "YOUR_SERVICE_ID" || templateId === "YOUR_TEMPLATE_ID" || publicKey === "YOUR_PUBLIC_KEY_HERE") {
        alert(
          "⚠️ EmailJS not configured.\n\nTo enable email functionality:\n\n" +
          "1. Sign up at https://www.emailjs.com/\n" +
          "2. Create a .env.local file in project root with:\n" +
          "   VITE_EMAILJS_PUBLIC_KEY=your_public_key\n" +
          "   VITE_EMAILJS_SERVICE_ID=your_service_id\n" +
          "   VITE_EMAILJS_TEMPLATE_ID=your_template_id\n\n" +
          "3. Restart dev server (npm run dev)\n\n" +
          "For help: Open Contact.jsx to see setup instructions."
        );
        setIsLoading(false);
        return;
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert(
        "Failed to send message.\n\n" +
        "Possible reasons:\n" +
        "- EmailJS credentials are incorrect\n" +
        "- Template ID doesn't match\n" +
        "- Email service not configured\n\n" +
        "Check browser console for details."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/ronakp08", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ronakp08/", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:ronakp.codes@gmail.com", label: "Email" },
  ];

  const inputClasses = `w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none ${
    isDark
      ? "bg-slate-800 border-slate-700 focus:border-purple-500 text-white"
      : "bg-white border-slate-200 focus:border-purple-500"
  }`;

  const gradientClasses = {
    purple: "from-purple-500 to-blue-500",
    blue: "from-blue-500 to-cyan-500",
    cyan: "from-cyan-500 to-blue-500",
    pink: "from-pink-500 to-purple-500",
  };

  return (
    <section id="contact" className={`py-20 px-4 ${isDark ? "bg-slate-900" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
          <div
            className={`h-1 w-20 mx-auto rounded-full bg-gradient-to-r ${gradientClasses[colorTheme]}`}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`p-6 rounded-lg backdrop-blur-sm border ${
              isDark
                ? "bg-slate-800/50 border-slate-700"
                : "bg-slate-50 border-slate-200"
            }`}
          >
            <div className="flex items-center gap-4 mb-3">
              <Mail size={24} className="text-purple-500" />
              <h3 className="font-semibold">Email</h3>
            </div>
            <p className={isDark ? "text-slate-400" : "text-slate-600"}>
              ronakp.codes@gmail.com
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`p-6 rounded-lg backdrop-blur-sm border ${
              isDark
                ? "bg-slate-800/50 border-slate-700"
                : "bg-slate-50 border-slate-200"
            }`}
          >
            <div className="flex items-center gap-4 mb-3">
              <Phone size={24} className="text-purple-500" />
              <h3 className="font-semibold">Phone</h3>
            </div>
            <p className={isDark ? "text-slate-400" : "text-slate-600"}>
              +91 7623886989
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`p-6 rounded-lg backdrop-blur-sm border ${
              isDark
                ? "bg-slate-800/50 border-slate-700"
                : "bg-slate-50 border-slate-200"
            }`}
          >
            <div className="flex items-center gap-4 mb-3">
              <MapPin size={24} className="text-purple-500" />
              <h3 className="font-semibold">Location</h3>
            </div>
            <p className={isDark ? "text-slate-400" : "text-slate-600"}>
              Surat, Gujarat, India
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={inputClasses}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={inputClasses}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className={inputClasses}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className={`${inputClasses} resize-none`}
              required
            />

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                isSubmitted
                  ? "bg-green-500 text-white"
                  : `bg-gradient-to-r ${gradientClasses[colorTheme]} text-white hover:opacity-90`
              } ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {isLoading ? "Sending..." : isSubmitted ? "Message Sent!" : "Send Message"}
              {!isLoading && <Send size={18} />}
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-8">Connect With Me</h3>
            <div className="grid grid-cols-2 gap-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`flex flex-col items-center justify-center w-20 h-20 rounded-lg transition-all ${
                    isDark
                      ? "bg-slate-800 hover:bg-slate-700"
                      : "bg-slate-100 hover:bg-slate-200"
                  }`}
                  title={label}
                >
                  <Icon size={32} />
                  <span className="text-xs mt-2 font-medium">{label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
