import { useEffect, useState } from "react";

const themeFromLocalStorage = () => {
  return localStorage.getItem("theme") || "light";
};

export function useTheme() {
  const [theme, setTheme] = useState(themeFromLocalStorage);

  const toggleTheme = () => {
    const newTheme = theme == "light" ? "night" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme), [theme];
  });

  return { toggleTheme, theme };
}
