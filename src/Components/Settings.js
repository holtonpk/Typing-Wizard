import React, { useEffect, useState } from "react";
import bottomRight from "../assets/bottomRight2.svg";
import bottomLeft from "../assets/bottomLeft.svg";
import { Link } from "react-router-dom";
import { IoReturnUpBackOutline } from "react-icons/io5";
import bgImage from "../assets/bgImage.svg";

const Settings = ({
  setShowKeyboard,
  setMaxCharacters,
  CreateNewWordSet,
  restartTyping,
}) => {
  const [maxCharactersLocal, setMaxCharactersLocal] = useState(
    localStorage.getItem("maxCharacters")
  );
  const [setSlider, setSetSlider] = useState(false);

  useEffect(() => {
    if (!setSlider) {
      document.getElementById("totalCharacterSlider").value =
        localStorage.getItem("maxCharacters");
      document.getElementById(
        localStorage.getItem("cursorType")
      ).checked = true;
      document.getElementById(
        localStorage.getItem("showKeyboard")
      ).checked = true;
      document.getElementById(
        localStorage.getItem("showResults")
      ).checked = true;
      document.getElementById(
        localStorage.getItem("keyboardAnimation")
      ).checked = true;
      setSetSlider(true);
    }
    var slider = document.getElementById("totalCharacterSlider");
    var output = document.getElementById("sliderOutput");
    output.innerHTML = slider.value;
    slider.oninput = function () {
      setMaxCharactersLocal(this.value);
    };
  });

  const resetHighScore = () => {
    localStorage.setItem("hScore", 0);
    document.getElementById("scoreNotification").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("scoreNotification").classList.add("hidden");
    }, 3000);
  };

  const closeSettings = () => {
    document.getElementById("settings").classList.add("hidden");
  };

  const setToDefault = () => {
    localStorage.setItem("cursorType", "verticalSelector");
    localStorage.setItem("showKeyboard", "showKeyboardTrue");
    localStorage.setItem("showResults", "showResultsTrue");
    localStorage.setItem("keyboardAnimation", "keyboardAnimationTrue");

    setMaxCharactersLocal(100);

    localStorage.setItem("maxCharacters", 100);
    setSetSlider(false);
    restartTyping();
    CreateNewWordSet();
    setShowKeyboard(true);
  };

  return (
    <div
      id="settings"
      className="absolute min-h-screen w-screen overflow-hidden bg-c2  z-[80] hidden fade-in"
    >
      <div
        id="scoreNotification"
        className=" hidden absolute z-[80] bg-c7 shadow-xl top-[98%] left-1/2 -translate-x-1/2 -translate-y-full h-fit p-3 w-[30%] text-white rounded-xl text-center text-2xl slide-in-bottom "
      >
        high score has been reset
      </div>

      <button
        onClick={() => {
          localStorage.setItem("maxCharacters", maxCharactersLocal);
          restartTyping();
          CreateNewWordSet();
          closeSettings();
        }}
        to={"/"}
        className="absolute z-50 top-10 left-20"
      >
        <IoReturnUpBackOutline className="w-16 h-16 text-white left-10 fill-white" />
      </button>

      <div className="relative top-10   h-[700px] w-[90%] mx-auto  ">
        <img src={bgImage} className="absolute z-0 w-full h-full" alt="" />

        <div className="z-40 flex flex-col h-full p-10 mx-auto w-fit ">
          <h1 className="z-40 mx-auto text-6xl text-white w-fit font-f1 ">
            Settings
          </h1>
          <div className="z-40 grid grid-cols-2 gap-20 mt-10 w-fit">
            <div className="flex flex-col items-start w-fit z-60 ">
              <h1 className="z-40 mb-2 text-2xl text-white w-fit font-f1">
                Cursor
              </h1>
              <div className="flex flex-row gap-10 w-fit">
                <label className="container z-40 flex flex-row items-center gap-2 text-xl text-white cursor-pointer">
                  <input
                    onClick={() => {
                      localStorage.setItem("cursorType", "horizontalSelector");
                      restartTyping();
                    }}
                    id="horizontalSelector"
                    type="radio"
                    name="cursor"
                  />
                  <span className="checkmark"></span>
                  <h1>Horizontal</h1>
                </label>
                <label className="container z-40 flex flex-row gap-1 text-xl text-white cursor-pointer">
                  <input
                    onClick={() => {
                      localStorage.setItem("cursorType", "verticalSelector");
                      restartTyping();
                    }}
                    id="verticalSelector"
                    type="radio"
                    name="cursor"
                    selected
                  />
                  <span className="checkmark"></span>
                  <h1>Vertical</h1>
                </label>
              </div>
            </div>
            <div className="flex flex-col items-start w-fit z-60 ">
              <h1 className="z-40 mb-2 text-2xl text-white w-fit font-f1">
                Keyboard
              </h1>
              <div className="flex flex-row gap-10 w-fit">
                <label className="container z-40 flex flex-row gap-2 text-xl text-white cursor-pointer">
                  <input
                    id="showKeyboardTrue"
                    type="radio"
                    name="keyboard"
                    onClick={() => {
                      localStorage.setItem("showKeyboard", "showKeyboardTrue");
                      restartTyping();
                      setShowKeyboard(true);
                    }}
                  />
                  <span className="checkmark"></span>
                  <h1> Show</h1>
                </label>
                <label className="container z-40 flex flex-row gap-2 text-xl text-white cursor-pointer">
                  <input
                    id="showKeyboardFalse"
                    type="radio"
                    name="keyboard"
                    onClick={() => {
                      localStorage.setItem("showKeyboard", "showKeyboardFalse");
                      restartTyping();
                      setShowKeyboard(false);
                    }}
                  />
                  <span className="checkmark"></span>
                  <h1>Hide</h1>
                </label>
              </div>
            </div>
            <div className="flex flex-col items-start w-fit z-60">
              <h1 className="z-40 mb-2 text-2xl text-white w-fit font-f1">
                Show Results
              </h1>
              <div className="flex flex-row gap-10 w-fit">
                <label className="container z-40 flex flex-row gap-2 text-xl text-white cursor-pointer">
                  <input
                    id="showResultsTrue"
                    onClick={() => {
                      localStorage.setItem("showResults", "showResultsTrue");
                    }}
                    type="radio"
                    name="wordSet"
                  />
                  <span className="checkmark"></span>
                  <h1>On</h1>
                </label>
                <label className="container z-40 flex flex-row gap-2 text-xl text-white cursor-pointer">
                  <input
                    id="showResultsFalse"
                    onClick={() => {
                      localStorage.setItem("showResults", "showResultsFalse");
                    }}
                    type="radio"
                    name="wordSet"
                  />
                  <span className="checkmark"></span>
                  <h1>Off</h1>
                </label>
              </div>
            </div>
            <div className="flex flex-col items-start w-fit z-60">
              <h1 className="z-40 mb-2 text-2xl text-white w-fit font-f1">
                Keyboard Animation
              </h1>
              <div className="flex flex-row gap-10 w-fit">
                <label className="container z-40 flex flex-row gap-2 text-xl text-white cursor-pointer">
                  <input
                    id="keyboardAnimationTrue"
                    onClick={() => {
                      localStorage.setItem(
                        "keyboardAnimation",
                        "keyboardAnimationTrue"
                      );
                    }}
                    type="radio"
                    name="keyAnimation"
                  />
                  <span className="checkmark"></span>
                  <h1>On</h1>
                </label>
                <label className="container z-40 flex flex-row gap-2 text-xl text-white cursor-pointer">
                  <input
                    id="keyboardAnimationFalse"
                    onClick={() => {
                      localStorage.setItem(
                        "keyboardAnimation",
                        "keyboardAnimationFalse"
                      );
                    }}
                    type="radio"
                    name="keyAnimation"
                  />
                  <span className="checkmark"></span>
                  <h1>Off</h1>
                </label>
              </div>
            </div>
          </div>

          <div className="sliderContainer z-[90] relative mt-8 float-left ">
            <h2 className="mb-4 text-2xl text-white">
              Total Characters:
              <span className="ml-2 font-bold text-c1" id="sliderOutput"></span>
            </h2>
            <input
              type="range"
              min="5"
              max="500"
              className="slider"
              id="totalCharacterSlider"
              step="5"
            />
          </div>

          <div className="z-40 flex flex-row gap-4 mt-16">
            <button
              onClick={setToDefault}
              className="p-3 text-xl font-bold text-white bg-c5 font-f1 rounded-xl hover:opacity-50"
            >
              Reset to Default
            </button>
            <button
              onClick={resetHighScore}
              className="p-3 text-xl font-bold text-white bg-c6 font-f1 rounded-xl hover:opacity-50"
            >
              Reset High Score
            </button>
          </div>
        </div>
      </div>
      <img
        src={bottomRight}
        className="absolute -translate-x-full -translate-y-full left-full top-full w-[20%]"
        alt=""
      />
      <img
        src={bottomLeft}
        className="absolute left-0 -translate-y-full top-full w-[30%]"
        alt=""
      />
    </div>
  );
};

export default Settings;
