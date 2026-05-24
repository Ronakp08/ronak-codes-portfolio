import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from '../components/SkillCard';
import { skillsData } from '../data/skills';
import { useTheme } from '../context/ThemeContext';

const Skills = () => {
  const { isDark, colorTheme } = useTheme();

  return (
    <section id="skills" className={`py-20 px-4 ${isDark ? 'bg-slate-800/50' : 'bg-gradient-to-b from-slate-50 to-white'}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h2>
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

        <div className="space-y-12">
          {skillsData.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <span
                  className={`h-2 w-8 rounded-full bg-gradient-to-r ${
                    colorTheme === 'purple'
                      ? 'from-purple-500 to-blue-500'
                      : colorTheme === 'blue'
                      ? 'from-blue-500 to-cyan-500'
                      : colorTheme === 'cyan'
                      ? 'from-cyan-500 to-blue-500'
                      : 'from-pink-500 to-purple-500'
                  }`}
                />
                {category.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
