import React, { useEffect, useState } from "react";

const SpeedBar = ({ start, setStart, words, restart, setRestart }) => {
  let percentComplete = 10;

  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [wpm, setWpm] = useState(0);

  const setSpeedBar = (wpm) => {
    let height = (wpm / 150) * 100;
    document.getElementById("speedBar").style.height = height + "%";
  };

  useEffect(() => {
    if (restart) {
      setSeconds(0);
      setIsActive(false);
      document.getElementById("speedBar").style.height = "0px";
      setWpm(0);
      setRestart(false);
    }
    setWpm(Math.ceil((60 / seconds) * (words / 5)));
    setSpeedBar(wpm);

    if (start) {
      setIsActive(true);
      setStart(false);
    }

    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, start, wpm]);

  return (
    <div className="absolute w-fit left-[90%] top-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
      <div className="relative w-10 rounded-full h-[60vh]  bg-c3 overflow-hidden">
        <div
          id="speedBar"
          className={
            "w-10 rounded-b-full bg-c1 relative top-full -translate-y-full speedBar h-1/2	"
          }
        ></div>
      </div>
      {(() => {
        if (!wpm || wpm == Infinity) {
          return <h1 className="text-xl font-bold text-white">-- WPM</h1>;
        } else {
          return (
            <h1 className="text-xl font-bold text-white">{wpm + " WPM"}</h1>
          );
        }
      })()}
    </div>
  );
};

export default SpeedBar;
