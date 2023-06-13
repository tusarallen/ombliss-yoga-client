import { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    isDarkMode
      ? body.classList.add("dark-mode")
      : body.classList.remove("dark-mode");
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <button className="bg-green-500 font-extrabold p-[10px] rounded-3xl">
          Light Mode
        </button>
      ) : (
        <button className="bg-green-500 font-extrabold p-[10px] rounded-3xl">
          Dark Mode
        </button>
      )}
    </button>
  );
};

export default DarkModeToggle;
