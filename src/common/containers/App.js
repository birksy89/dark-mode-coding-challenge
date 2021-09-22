import React, { createContext, useState } from "react";

export const ThemeContext = createContext("light");

export default function App({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  document.documentElement.classList.toggle("dark-mode", isDarkMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
