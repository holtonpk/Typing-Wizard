import React from "react";
import logo from "../../assets/wizard.png";
import Menu from "./Menu.js";
const Header = () => {
  return (
    <div className="flex flex-row justify-between h-20 p-5 bg-c3">
      <button
        onClick={() => {
          document
            .getElementById("settings")
            .classList.remove("slide-in-bottom");
          document.getElementById("settings").classList.add("slide-out-bottom");
          document
            .getElementById("typingScreen")
            .classList.remove("slide-out-top");
          document.getElementById("typingScreen").classList.add("slide-in-top");
        }}
        className="flex flex-row items-center gap-3 w-fit"
      >
        <img src={logo} className="w-12 h-12" />
        <h1 className="text-2xl font-bold text-c1 font-f1">Typing Wizard</h1>
      </button>
      <Menu />
    </div>
  );
};

export default Header;
