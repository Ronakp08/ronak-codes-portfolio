import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ProjectCard = ({ project, index }) => {
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
      whileHover={{ y: -8 }}
      className={`rounded-xl overflow-hidden backdrop-blur-sm border transition-all duration-300 group ${
        isDark
          ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-800/80'
          : 'bg-white/50 border-slate-200 hover:bg-white/80'
      }`}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${gradientClasses[colorTheme]}`}
        />
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
        <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className={`text-xs px-3 py-1 rounded-full transition-all ${
                isDark
                  ? 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className={`flex-1 py-2 rounded-lg text-sm font-medium text-center transition-all ${
              isDark
                ? 'bg-slate-700 hover:bg-slate-600 text-white'
                : 'bg-slate-300 hover:bg-slate-400 text-slate-900'
            }`}
          >
            GitHub
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className={`flex-1 py-2 rounded-lg text-sm font-medium text-center transition-all bg-gradient-to-r ${
              colorTheme === 'purple'
                ? 'from-purple-500 to-blue-500'
                : colorTheme === 'blue'
                ? 'from-blue-500 to-cyan-500'
                : colorTheme === 'cyan'
                ? 'from-cyan-500 to-blue-500'
                : 'from-pink-500 to-purple-500'
            } text-white`}
          >
            Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
