import React, { useEffect, useState } from "react";
import SettingsSelector from "./SettingsSelector.js";
const Settings = ({ CreateNewWordSet, restartTyping }) => {
  const [maxCharactersLocal, setMaxCharactersLocal] = useState(
    localStorage.getItem("maxCharacters")
  );
  const [setSlider, setSetSlider] = useState(false);

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
          document
            .getElementById("settings")
            .classList.remove("slide-in-bottom");
          document.getElementById("settings").classList.add("slide-out-bottom");
          document
            .getElementById("typingScreen")
            .classList.remove("slide-out-top");
          document.getElementById("typingScreen").classList.add("slide-in-top");
        }}
        to={"/"}
        className="absolute z-50 top-10 left-20"
      ></button>

      <div className="relative ">
        <div className="z-40 flex flex-col h-full px-10 mx-auto ">
          <div className="z-40 flex flex-col w-full gap-10 mt-10">
            <SettingsSelector
              restartTyping={restartTyping}
              title="Cursor"
              description="Select the cursor you want"
              group="cursorType"
              options={[
                { id: "horizontalSelector", text: "Horizontal" },
                { id: "verticalSelector", text: "Vertical" },
              ]}
            />

            <SettingsSelector
              restartTyping={restartTyping}
              title="Keyboard"
              description="Show Helper Keyboard"
              group="showKeyboard"
              options={[
                { id: "showKeyboardTrue", text: "Show" },
                { id: "showKeyboardFalse", text: "Hide" },
              ]}
            />
            <SettingsSelector
              restartTyping={restartTyping}
              title="Show Results"
              description="Show Helper Keyboard"
              group="showResults"
              options={[
                { id: "showResultsTrue", text: "On" },
                { id: "showResultsFalse", text: "Off" },
              ]}
            />

            <SettingsSelector
              restartTyping={restartTyping}
              title="Keyboard Animation"
              description="Show Helper Keyboard"
              group="keyboardAnimation"
              options={[
                { id: "keyboardAnimationTrue", text: "On" },
                { id: "keyboardAnimationFalse", text: "Off" },
              ]}
            />
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
              onClick={() => {
                localStorage.setItem("cursorType", "verticalSelector");
                localStorage.setItem("showKeyboard", "showKeyboardTrue");
                localStorage.setItem("showResults", "showResultsTrue");
                localStorage.setItem(
                  "keyboardAnimation",
                  "keyboardAnimationTrue"
                );

                setMaxCharactersLocal(100);

                let settingButtons =
                  document.getElementsByClassName("settingButton");

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
              }}
              className="p-3 text-xl font-bold text-white bg-c5 font-f1 rounded-xl hover:opacity-50"
            >
              Reset to Default
            </button>
            <button
              onClick={() => {
                localStorage.setItem("hScore", 0);
                document
                  .getElementById("scoreNotification")
                  .classList.remove("hidden");
                setTimeout(() => {
                  document
                    .getElementById("scoreNotification")
                    .classList.add("hidden");
                }, 3000);
              }}
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
