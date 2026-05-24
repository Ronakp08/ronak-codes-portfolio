import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const StatCard = ({ stat, index }) => {
  const { isDark, colorTheme } = useTheme();

  const gradientClasses = {
    purple: 'from-purple-500/20 to-blue-500/20',
    blue: 'from-blue-500/20 to-cyan-500/20',
    cyan: 'from-cyan-500/20 to-blue-500/20',
    pink: 'from-pink-500/20 to-purple-500/20',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`p-6 rounded-lg backdrop-blur-sm border ${
        isDark
          ? 'bg-gradient-to-br ' +
            gradientClasses[colorTheme] +
            ' border-slate-700'
          : 'bg-gradient-to-br ' +
            gradientClasses[colorTheme] +
            ' border-slate-200'
      }`}
    >
      <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
        {stat.value}
      </div>
      <p className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
        {stat.label}
      </p>
    </motion.div>
  );
};

export default StatCard;
