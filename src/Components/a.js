import React, { useEffect, useState } from "react";

const Pacer = ({
  pacerSpeed,
  startPacer,
  typingWords,
  setStartPacer,
  pacerLine,
  setPacerLine,
  incPerLine,
  setIncPerLine,
  incorrectCharactersm,
}) => {
  const [currentWord, setCurrentWord] = useState(0);
  const [currentLetter, setCurrentLetter] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);

  const calculateWordsPerLine = () => {
    let letterPerSecond = (pacerSpeed * 5) / 60;
    let totalCharacters = 0;
    for (let i = 0; i < Object.keys(typingWords).length; i++) {
      for (let j = 0; j < typingWords[i].length; j++) {
        totalCharacters = totalCharacters + typingWords[i][j].length;
      }
    }
    console.log(totalCharacters);

    let secondsPerWord = 1 / letterPerSecond;

    return secondsPerWord;
  };

  const movePacer = (nextLine, nextWord, nextLetter) => {
    // remove selector from previous Letter element
    let currentLetterPosition = document.getElementById(
      "line" + nextLine + "word" + nextWord + "letter" + nextLetter
    ).offsetLeft;

    document.getElementById("Pacer" + pacerLine).style.left =
      currentLetterPosition + "px";
  };

  const findNextLetter = () => {
    let nextLine = currentLine;
    let nextWord = currentWord;
    let nextLetter = currentLetter;
    if (currentLetter + 1 == typingWords[currentLine][currentWord].length + 1) {
      // go to next line
      if (currentWord + 1 == typingWords[currentLine].length) {
        setCurrentLine(currentLine + 1);
        nextLine = currentLine + 1;
        setCurrentWord(0);
        nextWord = 0;
        setCurrentLetter(0);
        nextLetter = 0;
        document.getElementById("Pacer" + currentLine).classList.add("hidden");
        document
          .getElementById("Pacer" + (currentLine + 1))
          .classList.remove("hidden");
      } else {
        setCurrentWord(currentWord + 1);
        nextWord = currentWord + 1;
        setCurrentLetter(0);
        nextLetter = 0;
      }
    } else {
      setCurrentLetter(currentLetter + 1);
      nextLetter = currentLetter + 1;
    }

    movePacer(nextLine, nextWord, nextLetter);
  };

  useEffect(() => {
    if (startPacer) {
      let pacerElement = document.getElementById("Pacer" + currentLine);
      pacerElement.classList.remove("hidden");
      console.log(calculateWordsPerLine());
      setTimeout(findNextLetter, calculateWordsPerLine() * 1000);
    } else {
      // setPacerLine(0);
    }
  }, [currentLine, startPacer, incPerLine, currentLetter]);

  return <></>;
};

export default Pacer;
