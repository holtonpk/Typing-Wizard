import React, { useState, useEffect } from "react";
import { RiDashboard3Line } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { TiArrowSortedUp } from "react-icons/ti";
const QuickStats = ({
  speed,
  incorrectCharacters,
  characters,
  setAccuracyMain,
  pacerSpeed,
  seconds,
}) => {
  const [accuracy, setAccuracy] = useState("--");
  const [customPacerSpeed, setCustomPacerSpeed] = useState(100);

  useEffect(() => {
    setAccuracyMain(accuracy);
    if (characters != 0) {
      setAccuracy(
        Math.round(((characters - incorrectCharacters) / characters) * 100)
      );
    }
  });

  return (
    <>
      <div className="flex flex-col justify-between ">
        <div className="flex flex-row justify-between gap-10 p-4 mx-auto mt-6 rounded-lg bg-c3 h-fit w-fit">
          <div className="flex flex-col items-center">
            <h1 className="text-lg text-white opacity-60 font-f1">Speed</h1>
            {/* <h1 className="text-lg font-bold text-white font-f1">
              {seconds / 10000}
            </h1> */}
            <h1 className="text-lg font-bold text-white font-f1">{speed}</h1>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-lg text-white opacity-60 font-f1">Accuracy</h1>
            <h1 className="text-lg font-bold text-white font-f1">
              {accuracy + "%"}
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-lg text-white opacity-60 font-f1">
              High Score
            </h1>
            <h1 className="text-lg font-bold text-white font-fq">
              {localStorage.getItem("hScore")}
            </h1>
          </div>
        </div>
        <div
          onClick={() => {
            document.getElementById("pacerMenu").classList.remove("hidden");
          }}
          className="relative flex flex-row items-center gap-2 mx-auto mt-3 cursor-pointer w-fit text-c8 fill-c8 hover:text-white "
        >
          <RiDashboard3Line className="w-8 h-8" />
          <h1 className="text-xl font-f1">
            {"Pacer : " + pacerSpeed + " wpm"}
          </h1>
        </div>
      </div>
    </>
  );
};

export default QuickStats;