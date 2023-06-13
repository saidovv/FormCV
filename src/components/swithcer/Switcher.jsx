import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../../hooks/useDarkSide";

function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  return (
    <>
      <div className="mt-[20px] ml-[20px]">
        <DarkModeSwitch
          checked={darkSide}
          onChange={toggleDarkMode}
          size={32}
        />
        <h3 className="text-gray-800 dark:text-gray-300 pt-4">
          {colorTheme === "light"}
        </h3>
      </div>
    </>
  );
}
export default Switcher;
