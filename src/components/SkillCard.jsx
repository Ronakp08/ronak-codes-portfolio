import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const SkillCard = ({ skill, index }) => {
  const { isDark, colorTheme } = useTheme();

  const borderClasses = {
    purple: 'border-purple-500/30 hover:border-purple-500/60',
    blue: 'border-blue-500/30 hover:border-blue-500/60',
    cyan: 'border-cyan-500/30 hover:border-cyan-500/60',
    pink: 'border-pink-500/30 hover:border-pink-500/60',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
      whileHover={{ scale: 1.08 }}
      className={`p-4 rounded-lg border-2 transition-all ${
        isDark
          ? 'bg-slate-800/40 hover:bg-slate-800/60'
          : 'bg-slate-50 hover:bg-white'
      } ${borderClasses[colorTheme]}`}
    >
      <div className="text-3xl mb-2">
        {skill.icon ? <skill.icon size={32} /> : null}
      </div>
      <p className="font-medium text-sm">{skill.name}</p>
    </motion.div>
  );
};

export default SkillCard;
