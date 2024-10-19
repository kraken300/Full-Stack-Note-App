import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const bodyColor = localStorage.getItem('color'); 
    if (savedTheme && bodyColor) { 
      document.documentElement.classList.add(savedTheme);
      document.body.style.backgroundColor = bodyColor;
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains('dark')) {
      document.body.style.backgroundColor = "white"; 
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      localStorage.setItem('color', 'white'); 
      setIsDarkMode(false);
    }

    else {
      document.body.style.backgroundColor = "#111827";
      htmlElement.classList.add('dark'); 
      localStorage.setItem('theme', 'dark');
      localStorage.setItem('color', 'black'); 
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-xl"
    >
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;
