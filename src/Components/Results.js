import React, { useEffect } from "react";
import { MdRestartAlt, MdNavigateNext } from "react-icons/md";
import Confetti from "react-confetti";

const Results = ({
  createWordList,
  CreateNewWordSet,
  ShowHighScorePopup,
  restartTyping,
  speed,
  accuracy,
  setTypingWords,
  score,
  rawSpeed,
}) => {
  const closeWindow = () => {
    document.getElementById("resultsWindow").classList.add("hidden");
  };

  const keyListener = (event) => {
    if (event.key == "r") {
      restartTyping();
      closeWindow();
    }

    if (event.key == "n") {
      closeWindow();
      setTypingWords([]);
      CreateNewWordSet();
      restartTyping();
    }
  };

  useEffect(() => {
    if (
      !document.getElementById("resultsWindow").classList.contains("hidden")
    ) {
      document.addEventListener("keydown", keyListener);
      return () => document.removeEventListener("keydown", keyListener);
    }
  });

  return (
    <div id="resultsWindow" className="hidden">
      {(() => {
        if (ShowHighScorePopup) {
          return (
            <div id="highScoreWindow" className=" z-[80] absolute ">
              <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                colors={["#FF6920", "#DC4987", "#6236B2", "#F3BB0A", "#3F52FC"]}
              />
            </div>
          );
        }
      })()}

      <button className="w-screen h-screen bg-black z-[60] opacity-70 absolute"></button>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-fit w-[30%] z-[80] bg-c2 p-10 rounded-xl">
        <div className="flex flex-col w-full gap-4 relative-h-fit">
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-3xl font-bold text-white">Score</h1>
            <h1 className="text-3xl font-bold text-white">{score}</h1>
            {(() => {
              if (ShowHighScorePopup == "score") {
                return (
                  <h1 className="absolute p-1 text-sm font-bold text-white rounded-lg left-[30%] bg-c1">
                    High Score
                  </h1>
                );
              }
            })()}
          </div>
          <div className="flex flex-row justify-between">
            <h1 className="text-3xl font-bold text-white">Speed</h1>
            <h1 className="text-3xl font-bold text-white">{speed + " WPM"}</h1>
            {(() => {
              if (ShowHighScorePopup == "speed") {
                return (
                  <h1 className="absolute p-1 text-sm font-bold text-white rounded-lg left-[35%] bg-c1">
                    High Speed
                  </h1>
                );
              }
            })()}
          </div>
          <div className="flex flex-row justify-between">
            <h1 className="text-3xl font-bold text-white whitespace-nowrap">
              Raw Speed
            </h1>
            <h1 className="text-3xl font-bold text-white">
              {rawSpeed + " WPM"}
            </h1>
          </div>
          <div className="flex flex-row justify-between">
            <h1 className="text-3xl font-bold text-white">Accuracy</h1>
            <h1 className="text-3xl font-bold text-white">{accuracy + "%"}</h1>
          </div>
          <div className="flex flex-row justify-between mt-4">
            <button
              onClick={() => {
                restartTyping();
                closeWindow();
              }}
              className="flex flex-row items-center p-2 pr-3 text-2xl font-bold text-white bg-c5 rounded-xl"
            >
              <MdRestartAlt className="w-10 h-10 fill-white" />
              Repeat
            </button>
            <button
              onClick={() => {
                closeWindow();
                setTypingWords([]);
                CreateNewWordSet();
                restartTyping();
              }}
              className="flex flex-row items-center p-2 pl-4 text-2xl font-bold text-white bg-c6 rounded-xl"
            >
              Next
              <MdNavigateNext className="w-10 h-10 fill-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
