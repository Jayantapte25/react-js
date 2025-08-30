import React, { useEffect } from 'react';
import Logo from "../assets/logo.png";

export const Header = () => {

  const [theme, setTheme] = React.useState(localStorage.getItem("theme") || "medium");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const standard = document.getElementById("root");
    standard.className = theme;
  }, [theme]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    const themeselector = document.querySelector(".activeTheme");
    themeselector.classList.remove("activeTheme");
    document.querySelector(`.${newTheme}`).classList.add("activeTheme");
  };

  return (
    <header>
        <div className="logo">
            <img src={Logo} alt="logo" />
            <span>Taskmate</span>
        </div>
        <div className="themeSelector">
            <span className="light" onClick={() => handleThemeChange("light")}></span>
            <span className="medium activeTheme" onClick={() => handleThemeChange("medium")}></span>
            <span className="dark" onClick={() => handleThemeChange("dark")}></span>
            <span className="gOne" onClick={() => handleThemeChange("gOne")}></span>
            <span className="gTwo" onClick={() => handleThemeChange("gTwo")}></span>
            <span className="gThree" onClick={() => handleThemeChange("gThree")}></span>
        </div>
    </header>
  )
}
