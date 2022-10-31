import React, { useEffect, useState } from "react";

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
  const [settingToggles, setSettingToggles] = useState(0);

  useEffect(() => {
    if (!setSlider) {
      document.getElementById("totalCharacterSlider").value =
        localStorage.getItem("maxCharacters");

      document
        .getElementById(localStorage.getItem("cursorType"))
        .classList.add("buttonSelected");
      document
        .getElementById(localStorage.getItem("showKeyboard"))
        .classList.add("buttonSelected");
      document
        .getElementById(localStorage.getItem("showResults"))
        .classList.add("buttonSelected");
      document
        .getElementById(localStorage.getItem("keyboardAnimation"))
        .classList.add("buttonSelected");
      setSetSlider(true);
    }
    var slider = document.getElementById("totalCharacterSlider");
    var output = document.getElementById("sliderOutput");
    output.innerHTML = slider.value;
    slider.oninput = function () {
      setMaxCharactersLocal(this.value);
    };
  });

  const updateButton = (group, selected) => {
    let selectedSetting = document.getElementsByClassName(group);
    for (let i = 0; i < selectedSetting.length; i++) {
      selectedSetting[i].classList.remove("buttonSelected");
    }
    document.getElementById(selected).classList.add("buttonSelected");
  };

  const resetHighScore = () => {
    localStorage.setItem("hScore", 0);
    document.getElementById("scoreNotification").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("scoreNotification").classList.add("hidden");
    }, 3000);
  };

  const closeSettings = () => {
    document.getElementById("settings").classList.remove("slide-in-bottom");
    document.getElementById("settings").classList.add("slide-out-bottom");
    document.getElementById("typingScreen").classList.remove("slide-out-top");
    document.getElementById("typingScreen").classList.add("slide-in-top");
  };

  const setToDefault = () => {
    localStorage.setItem("cursorType", "verticalSelector");
    localStorage.setItem("showKeyboard", "showKeyboardTrue");
    localStorage.setItem("showResults", "showResultsTrue");
    localStorage.setItem("keyboardAnimation", "keyboardAnimationTrue");

    setMaxCharactersLocal(100);

    let settingButtons = document.getElementsByClassName("settingButton");

    for (let i = 1; i < settingButtons.length; i++) {
      settingButtons[i].classList.remove("buttonSelected");
    }
    document
      .getElementById(localStorage.getItem("cursorType"))
      .classList.add("buttonSelected");
    document
      .getElementById(localStorage.getItem("showKeyboard"))
      .classList.add("buttonSelected");
    document
      .getElementById(localStorage.getItem("showResults"))
      .classList.add("buttonSelected");
    document
      .getElementById(localStorage.getItem("keyboardAnimation"))
      .classList.add("buttonSelected");

    localStorage.setItem("maxCharacters", 100);
    setSetSlider(false);
    restartTyping();
    CreateNewWordSet();
    setShowKeyboard(true);
  };

  return (
    <div
      id="settings"
      className="absolute left-1/2 hidden -translate-x-1/2 min-h-screen w-[50%]  overflow-hidden bg-c2  z-[80] mx-auto slide-in-bottom  "
    >
      <div
        id="scoreNotification"
        className=" hidden absolute z-[80] bg-c7 shadow-xl top-[98%] left-1/2  -translate-x-1/2 -translate-y-full h-fit p-3 w-[30%] text-white rounded-xl text-center text-2xl slide-in-bottom "
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
        {/* <IoReturnUpBackOutline className="w-16 h-16 text-white left-10 fill-white" /> */}
      </button>

      <div className="relative ">
        {/* <img src={bgImage} className="absolute z-0 w-full h-full" alt="" /> */}

        <div className="z-40 flex flex-col h-full px-10 mx-auto ">
          <div className="z-40 flex flex-col w-full gap-10 mt-10">
            <div className="grid items-center justify-between w-full grid-cols-2 z-60 ">
              <div className="flex flex-col">
                <h1 className="z-40 text-2xl text-white w-fit font-f1">
                  Cursor
                </h1>
                <h1 className="z-40 mb-2 text-lg text-white opacity-50 w-fit font-f1">
                  Select the cursor you want
                </h1>
              </div>
              <div className="flex flex-row gap-10 w-fit ">
                <button
                  onClick={() => {
                    localStorage.setItem("cursorType", "horizontalSelector");
                    updateButton("cursorType", "horizontalSelector");
                    restartTyping();
                  }}
                  id="horizontalSelector"
                  className="w-40 p-3 text-xl font-bold text-white rounded-lg font-f1 p-w bg-c3 hover:bg-c1 cursorType settingButton"
                >
                  Horizontal
                </button>
                <button
                  onClick={() => {
                    localStorage.setItem("cursorType", "verticalSelector");
                    updateButton("cursorType", "verticalSelector");
                    restartTyping();
                  }}
                  id="verticalSelector"
                  className="w-40 p-3 text-xl font-bold text-white rounded-lg p-w bg-c3 font-f1 hover:bg-c1 cursorType settingButton"
                >
                  Vertical
                </button>
              </div>
            </div>

            <div className="grid items-center justify-between w-full grid-cols-2 z-60 ">
              <div className="flex flex-col">
                <h1 className="z-40 text-2xl text-white w-fit font-f1">
                  Keyboard
                </h1>
                <h1 className="z-40 mb-2 text-lg text-white opacity-50 w-fit font-f1">
                  Show Helper Keyboard
                </h1>
              </div>
              <div className="flex flex-row gap-10 w-fit ">
                <button
                  onClick={() => {
                    localStorage.setItem("showKeyboard", "showKeyboardTrue");
                    updateButton("showKeyboard", "showKeyboardTrue");

                    restartTyping();
                    setShowKeyboard(true);
                  }}
                  id="showKeyboardTrue"
                  className="w-40 p-3 text-xl font-bold text-white rounded-lg font-f1 p-w bg-c3 hover:bg-c1 showKeyboard settingButton"
                >
                  Show
                </button>
                <button
                  onClick={() => {
                    localStorage.setItem("showKeyboard", "showKeyboardFalse");
                    updateButton("showKeyboard", "showKeyboardFalse");

                    restartTyping();
                    setShowKeyboard(false);
                  }}
                  id="showKeyboardFalse"
                  className="w-40 p-3 text-xl font-bold text-white rounded-lg p-w bg-c3 font-f1 hover:bg-c1 showKeyboard settingButton"
                >
                  Hide
                </button>
              </div>
            </div>

            <div className="grid items-center justify-between w-full grid-cols-2 z-60 ">
              <div className="flex flex-col">
                <h1 className="z-40 text-2xl text-white w-fit font-f1">
                  Show Results
                </h1>
                <h1 className="z-40 mb-2 text-lg text-white opacity-50 w-fit font-f1">
                  Show Helper Keyboard
                </h1>
              </div>
              <div className="flex flex-row gap-10 w-fit ">
                <button
                  onClick={() => {
                    localStorage.setItem("showResults", "showResultsTrue");
                    updateButton("showResults", "showResultsTrue");
                  }}
                  id="showResultsTrue"
                  className="w-40 p-3 text-xl font-bold text-white rounded-lg font-f1 p-w bg-c3 hover:bg-c1 showResults settingButton"
                >
                  On
                </button>
                <button
                  onClick={() => {
                    localStorage.setItem("showResults", "showResultsFalse");
                    updateButton("showResults", "showResultsFalse");
                  }}
                  id="showResultsFalse"
                  className="w-40 p-3 text-xl font-bold text-white rounded-lg p-w bg-c3 font-f1 hover:bg-c1 showResults settingButton"
                >
                  Off
                </button>
              </div>
            </div>

            <div className="grid items-center justify-between w-full grid-cols-2 z-60 ">
              <div className="flex flex-col">
                <h1 className="z-40 text-2xl text-white w-fit font-f1">
                  Keyboard Animation
                </h1>
                <h1 className="z-40 mb-2 text-lg text-white opacity-50 w-fit font-f1">
                  Show Helper Keyboard
                </h1>
              </div>
              <div className="flex flex-row gap-10 w-fit ">
                <button
                  onClick={() => {
                    localStorage.setItem(
                      "keyboardAnimation",
                      "keyboardAnimationTrue"
                    );
                    updateButton("keyboardAnimation", "keyboardAnimationTrue");
                  }}
                  id="keyboardAnimationTrue"
                  className="w-40 p-3 text-xl font-bold text-white rounded-lg font-f1 p-w bg-c3 hover:bg-c1 keyboardAnimation settingButton"
                >
                  On
                </button>
                <button
                  id="keyboardAnimationFalse"
                  onClick={() => {
                    localStorage.setItem(
                      "keyboardAnimation",
                      "keyboardAnimationFalse"
                    );
                    updateButton("keyboardAnimation", "keyboardAnimationFalse");
                  }}
                  className="w-40 p-3 text-xl font-bold text-white rounded-lg p-w bg-c3 font-f1 hover:bg-c1 keyboardAnimation settingButton"
                >
                  Off
                </button>
              </div>
            </div>
          </div>

          <div className="sliderContainer z-[90] relative mt-8 float-left  grid grid-cols-2 items-center">
            <h2 className="text-2xl text-white ">
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
    </div>
  );
};

export default Settings;
