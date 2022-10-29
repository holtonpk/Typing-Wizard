import React, { useEffect } from "react";
import { VscDebugRestart } from "react-icons/vsc";
import { RiSettings4Line } from "react-icons/ri";
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
  };

  return (
    <div
      id="menu"
      className="relative flex flex-col hidden gap-4 mx-auto mt-4 w-fit fade-in-fwd"
    >
      <button
        onClick={() => restartTyping()}
        className="flex flex-row items-center gap-2 p-3 text-3xl font-bold text-white rounded-lg shadow-xl font-f1 h-fit w-fit bg-c5 hover:opacity-50"
      >
        Restart
        <VscDebugRestart className="w-8 h-8 fill-white" />
      </button>
      <button
        onClick={() => {
          openSettings();
          restartTyping();
        }}
        className="flex flex-row items-center gap-2 p-3 text-3xl font-bold text-white rounded-lg shadow-xl font-f1 h-fit w-fit bg-c6 hover:opacity-50"
      >
        Settings
        <RiSettings4Line className="w-8 h-8 fill-white" />
      </button>
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
