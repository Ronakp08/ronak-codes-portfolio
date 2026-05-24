import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projectsData, categories } from '../data/projects';
import { useTheme } from '../context/ThemeContext';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { isDark, colorTheme } = useTheme();

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className={`py-20 px-4 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h2>
          <div
            className={`h-1 w-20 mx-auto rounded-full bg-gradient-to-r ${
              colorTheme === 'purple'
                ? 'from-purple-500 to-blue-500'
                : colorTheme === 'blue'
                ? 'from-blue-500 to-cyan-500'
                : colorTheme === 'cyan'
                ? 'from-cyan-500 to-blue-500'
                : 'from-pink-500 to-purple-500'
            }`}
          />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? `bg-gradient-to-r ${
                      colorTheme === 'purple'
                        ? 'from-purple-500 to-blue-500'
                        : colorTheme === 'blue'
                        ? 'from-blue-500 to-cyan-500'
                        : colorTheme === 'cyan'
                        ? 'from-cyan-500 to-blue-500'
                        : 'from-pink-500 to-purple-500'
                    } text-white`
                  : isDark
                  ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
