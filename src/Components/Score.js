import React, { useEffect, useState } from "react";

const Score = ({ score }) => {
  const [prevScore, setPrevScore] = useState(0);

  function incNbrRec(i, endNbr, elt) {
    if (i <= endNbr) {
      elt.innerHTML = i;
      setTimeout(function () {
        incNbrRec(i + 1, endNbr, elt);
      }, 20);
    }
  }

  function decNbrRec(i, endNbr, elt) {
    elt.innerHTML = score;
  }

  useEffect(() => {
    if (score != prevScore) {
      if (score > prevScore) {
        incNbrRec(prevScore, score, document.getElementById("scoreElement"));
      } else {
        decNbrRec(prevScore, score, document.getElementById("scoreElement"));
      }
    }

    setPrevScore(score);
  });

  return (
    <div className="relative z-50 flex flex-row w-[300px] p-10 -translate-x-1/2 rounded-b-full h-[150px] bg-c3 left-1/2 ">
      <div className="relative flex flex-row w-fit items-center top-[10%] left-1/2 -translate-x-1/2 h-fit">
        <div className="w-10 h-10 mr-6 rotate-45 bg-yellow-400 rounded-lg shadow-md"></div>
        <h1
          id="scoreElement"
          className="text-5xl font-bold text-white font-f1 "
        >
          {"--"}
        </h1>
      </div>
    </div>
  );
};

export default Score;
