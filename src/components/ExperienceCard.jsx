import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ExperienceCard = ({ experience, index }) => {
  const { isDark, colorTheme } = useTheme();

  const borderClasses = {
    purple: 'border-purple-500/30',
    blue: 'border-blue-500/30',
    cyan: 'border-cyan-500/30',
    pink: 'border-pink-500/30',
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`p-6 rounded-lg border-l-4 ${
        isDark
          ? 'bg-slate-800/50 hover:bg-slate-800/80'
          : 'bg-white/50 hover:bg-white/80'
      } ${borderClasses[colorTheme]} transition-all`}
    >
      <h3 className="text-lg font-semibold mb-1">{experience.title}</h3>
      <p
        className={`text-sm font-medium mb-1 ${
          isDark ? 'text-slate-400' : 'text-slate-600'
        }`}
      >
        {experience.company}
      </p>
      <p
        className={`text-xs mb-3 ${
          isDark ? 'text-slate-500' : 'text-slate-500'
        }`}
      >
        {experience.duration}
      </p>
      <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>
        {experience.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {experience.skills.map((skill, i) => (
          <span
            key={i}
            className={`text-xs px-2 py-1 rounded-full ${
              isDark
                ? 'bg-slate-700 text-slate-300'
                : 'bg-slate-200 text-slate-700'
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
