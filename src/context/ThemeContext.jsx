import React, { createContext, useEffect, useState } from 'react';

// Create a new context instance
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    // Define state for the theme and a function to update it
    const [theme, setTheme] = useState(() => {
      // Fetch the theme value from localStorage, or use 'light' as the default theme
      const storedTheme = localStorage.getItem('theme');
      return storedTheme ? storedTheme : 'light';
    });
  
    useEffect(() => {
      // Save the theme to localStorage whenever it changes
      localStorage.setItem('theme', theme);
    }, [theme]);
  
    // Function to update the theme state
    const changeTheme = (newTheme) => {
      setTheme(newTheme);
    };

    // Create the value object to be provided to the nested components
    const value = {
      theme,
      changeTheme,
    };
  
    return (
      <ThemeContext.Provider value={value}>
        {children}
      </ThemeContext.Provider>
    );
}

export default ThemeContext;