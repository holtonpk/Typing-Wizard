import React, { useEffect } from "react";
import { VscDebugRestart } from "react-icons/vsc";
import { IoSettingsSharp } from "react-icons/io5";
import { BsFillPersonFill, BsFillKeyboardFill } from "react-icons/bs";
import { BiStats } from "react-icons/bi";
import { Link } from "react-router-dom";
const Menu = ({ restartTyping }) => {
  useEffect(() => {
    document
      .getElementById("hamMenu")
      .addEventListener("mouseover", hoverMenu, true);

    document
      .getElementById("hamMenu")
      .addEventListener("mouseout", hoverOutMenu, true);
  });
  const hoverOutMenu = () => {
    document.getElementsByClassName("ham4")[0].classList.remove("active");
    document.getElementById("menu").classList.add("hidden");
  };

  const hoverMenu = () => {
    document.getElementsByClassName("ham4")[0].classList.add("active");
    document.getElementById("menu").classList.remove("hidden");
  };

  const openSettings = () => {
    document.getElementById("settings").classList.remove("hidden");
    document.getElementById("settings").classList.add("slide-in-bottom");
    document.getElementById("typingScreen").classList.add("slide-out-top");
    document.getElementById("typingScreen").classList.remove("slide-in-top");
  };

  const closeSettings = () => {
    document.getElementById("settings").classList.remove("slide-in-bottom");
    document.getElementById("settings").classList.add("slide-out-bottom");
    document.getElementById("typingScreen").classList.remove("slide-out-top");
    document.getElementById("typingScreen").classList.add("slide-in-top");
  };

  return (
    <div
      id="menu"
      className="relative flex flex-row items-center gap-10 w-fit "
    >
      <button onClick={closeSettings}>
        <BsFillKeyboardFill className="w-8 h-8 fill-c8 hover:fill-white" />
      </button>
      {/* <button
        onClick={() => restartTyping()}
        className="flex flex-row items-center gap-2 p-3 text-3xl font-bold text-white rounded-lg font-f1 h-fit w-fit hover:opacity-50"
      >
        <VscDebugRestart className="w-8 h-8 fill-white" />
      </button> */}
      <button
        onClick={() => {
          openSettings();
          restartTyping();
        }}
      >
        <IoSettingsSharp className="w-8 h-8 fill-c8 hover:fill-white" />
      </button>
      <BsFillPersonFill className="w-8 h-8 fill-c8 hover:fill-white" />

      {/* <Link
        to={"./stats"}
        className="flex flex-row items-center gap-2 p-3 text-3xl font-bold text-white rounded-lg shadow-xl font-f1 h-fit w-fit bg-c7 hover:opacity-50"
      >
        Stats
        <BiStats className="w-8 h-8 fill-white" />
      </Link> */}
    </div>
  );
};

export default Menu;
