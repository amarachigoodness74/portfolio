"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeChanger = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return currentTheme === "dark" ? (
    <FaSun
      className="h-5 w-5 cursor-pointer text-yellow-500"
      onClick={() => setTheme("light")}
    />
  ) : (
    <FaMoon
      className="h-5 w-5 cursor-pointer text-gray-500"
      onClick={() => setTheme("dark")}
    />
  );
};

export default ThemeChanger;
