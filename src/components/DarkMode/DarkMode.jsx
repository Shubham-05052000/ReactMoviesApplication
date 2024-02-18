import React from "react";

import "./DarkMode.css";

const DarkMode = () => {
  //toggle dark and light
  const setDarkThem = () => {
    document.querySelector("body").setAttribute("data-them", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };
  const setLightThem = () => {
    document.querySelector("body").setAttribute("data-them", "light");
    localStorage.setItem("selectedTheme", "light");
  };
  //main toggle
  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkThem();
    } else {
      setLightThem();
    }
    //default one change theme
    const selectedTheme = localStorage.get("selectedTheme");
    if (selectedTheme === "light") {
      setLightThem();
    } else {
      setDarkThem();
    }
  };
  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={true}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <i className="fa-regular fa-sun sun"></i>
        <i className="fa-regular fa-moon moon"></i>
      </label>
    </div>
  );
};

export default DarkMode;
