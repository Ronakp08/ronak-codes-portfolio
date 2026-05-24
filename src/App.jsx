import React, { useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function AppContent() {
  const { isDark, themes } = useTheme();

  useEffect(() => {
    // Set background color based on theme
    document.documentElement.style.backgroundColor = isDark ? themes.dark : themes.light;
    document.body.style.backgroundColor = isDark ? themes.dark : themes.light;
    document.body.style.color = isDark ? '#e2e8f0' : '#1f2937';
  }, [isDark, themes]);

  return (
    <div className={isDark ? 'dark' : ''}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
