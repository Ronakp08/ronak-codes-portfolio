import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from '../components/ExperienceCard';
import { experienceData } from '../data/skills';
import { useTheme } from '../context/ThemeContext';

const Experience = () => {
  const { isDark, colorTheme } = useTheme();

  return (
    <section id="experience" className={`py-20 px-4 ${isDark ? 'bg-slate-800/50' : 'bg-gradient-to-b from-slate-50 to-white'}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
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

        {/* Timeline */}
        <div className="space-y-6">
          {experienceData.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
