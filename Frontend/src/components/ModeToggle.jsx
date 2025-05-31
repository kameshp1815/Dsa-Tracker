import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-md bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
      aria-label="Toggle Dark Mode"
      title="Toggle Dark Mode"
    >
      {darkMode ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};

export default ModeToggle;
