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
          <div className="flex justify-center items-center">
            <div>Light</div> <div>Mode</div>
          </div>
        </button>
      ) : (
        <button className="bg-green-500 font-extrabold p-[10px] rounded-3xl">
          <div className="flex justify-center items-center">
            <div>Dark</div> <div>Mode</div>
          </div>
        </button>
      )}
    </button>
  );
};

export default DarkModeToggle;
