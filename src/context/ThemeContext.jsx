import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [colorTheme, setColorTheme] = useState('purple');

  const themes = {
    light: '#f8fafc',
    dark: '#0f172a',
  };

  const colorVariants = {
    purple: { primary: 'rgb(139, 92, 246)', secondary: 'rgb(168, 85, 247)' },
    blue: { primary: 'rgb(59, 130, 246)', secondary: 'rgb(96, 165, 250)' },
    cyan: { primary: 'rgb(34, 211, 238)', secondary: 'rgb(165, 243, 252)' },
    pink: { primary: 'rgb(236, 72, 153)', secondary: 'rgb(244, 114, 182)' },
  };

  const toggleTheme = () => setIsDark(!isDark);
  const switchColorTheme = (theme) => setColorTheme(theme);

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleTheme,
        colorTheme,
        switchColorTheme,
        themes,
        colorVariants,
        currentColor: colorVariants[colorTheme],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
