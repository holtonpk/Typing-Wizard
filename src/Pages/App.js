import { useState, useEffect, useRef } from "react";
import Results from "../Components/Results.js";
import QuickStats from "../Components/QuickStats";
import TypingView from "../Components/TypingView.js";
import wordList from "../assets/data.json";
import Timer from "../Components/Timer.js";
import Keyboard from "../Components/Keyboard.js";
import bottomRight from "../assets/bottomRight2.svg";
import Menu from "../Components/Menu.js";
import bottomLeft from "../assets/bottomLeft.svg";
import Score from "../Components/Score";
import Pacer from "../Components/Pacer.js";
import PacerMenu from "../Components/PacerMenu.js";
import Settings from "../Components/Settings.js";
function App() {
  const [wordSet, setWordSet] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [currentLetter, setCurrentLetter] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  const [readyToType, setReadyToType] = useState(false);
  const [score, setScore] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [characters, setCharacters] = useState(0);
  const [correctCharacters, setCorrectCharacters] = useState(0);
  const [incorrectCharacters, setIncorrectCharacters] = useState(0);
  const [incPerLine, setIncPerLine] = useState(0);
  // const [incPerLine, setIncPerLine] = useState({ 0: 0 });
  const [start, setStart] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [speed, setSpeed] = useState("--");
  const [rawSpeed, setRawSpeed] = useState("--");
  const [accuracy, setAccuracy] = useState("--");
  const [hScore, setHScore] = useState("--");
  const [ShowHighScorePopup, setShowHighScorePopup] = useState(false);
  const [speedResult, setSpeedResult] = useState("--");
  const [rawSpeedResult, setRawSpeedResult] = useState("--");
  const [accuracyResult, setAccuracyResult] = useState(undefined);
  const [showKeyboard, setShowKeyboard] = useState(true);
  const [showResults, setShowResults] = useState(true);

  const [typingWords, setTypingWords] = useState(undefined);
  const [maxCharacters, setMaxCharacters] = useState(100);
  const [maxWordLen, setMaxWordLen] = useState(6);
  const [lineLength, setLineLength] = useState(38);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [pacerSpeed, setPacerSpeed] = useState(undefined);
  const [startPacer, setStartPacer] = useState(false);
  const [pacerLine, setPacerLine] = useState(0);

  const createdWordList = useRef(false);
  const typeListener = useRef(false);
  const lines = {};

  const createWordList = (newSet) => {
    console.log("mm", localStorage.getItem("maxCharacters"));
    if (newSet) {
      let line = 0;
      lines[line] = [];

      let currentLineLength = 0;
      let totalCharacters = 0;

      for (let i = 0; i < wordList.length; i++) {
        let randomValue = Math.floor(Math.random() * wordList.length);
        if (wordList[randomValue].length <= maxWordLen) {
          if (currentLineLength + wordList[randomValue].length >= lineLength) {
            line += 1;
            lines[line] = [];

            currentLineLength = 0;
          }

          lines[line].push(wordList[randomValue]);
          totalCharacters += wordList[randomValue].length;
          currentLineLength += wordList[randomValue].length;
        }

        if (totalCharacters >= localStorage.getItem("maxCharacters")) {
          i = wordList.length;
        }
      }
    }
  };

  const typingListener = (event) => {
    let nextLine = currentLine;
    let nextWord = currentWord;
    let nextLetter = currentLetter;
    if (event.key == "Backspace") {
      // go back one letter
      if (currentLetter - 1 < 0) {
        // go back one line
        if (currentWord - 1 < 0) {
          // if backspace takes you back a line
          if (currentLine - 1 < 0) {
            return;
          } else {
            setCurrentLine(currentLine - 1);
            nextLine = currentLine - 1;
            setCurrentWord(typingWords[currentLine - 1].length - 1);
            nextWord = typingWords[currentLine - 1].length - 1;
            setCurrentLetter(
              typingWords[currentLine - 1][
                typingWords[currentLine - 1].length - 1
              ].length
            );
            nextLetter =
              typingWords[currentLine - 1][
                typingWords[currentLine - 1].length - 1
              ].length;

            if (currentLine - 1 != 0) {
              scrollWords(-40);
            }
          }
        } else {
          // if backspace takes you back a word
          setCurrentWord(currentWord - 1);
          nextWord = currentWord - 1;
          setCurrentLetter(typingWords[currentLine][currentWord - 1].length);
          nextLetter = typingWords[currentLine][currentWord - 1].length;
        }
      } else {
        setCurrentLetter(currentLetter - 1);
        nextLetter = currentLetter - 1;
      }
      setCharacters(characters - 1);
      setLetterStatusBackwards(nextLine, nextWord, nextLetter);
    } else {
      if (
        currentLetter + 1 ==
        typingWords[currentLine][currentWord].length + 1
      ) {
        // go to next line
        if (currentWord + 1 == typingWords[currentLine].length) {
          setCurrentLine(currentLine + 1);
          nextLine = currentLine + 1;
          setCurrentWord(0);
          nextWord = 0;
          setCurrentLetter(0);
          nextLetter = 0;
          document
            .getElementById("Selector" + currentLine)
            .classList.add("hidden");
          document
            .getElementById("Selector" + (currentLine + 1))
            .classList.remove("hidden");

          if (
            currentLine + 1 >= 2 &&
            currentLine + 1 < Object.keys(typingWords).length
          ) {
            scrollWords(40);
          }
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

      setLetterStatusForward(
        typingWords[currentLine][currentWord][currentLetter],
        event.key
      );
    }
    typeListener.current = false;
    setCharacters(characters + 1);

    moveSelector(nextLine, nextWord, nextLetter);
  };

  const setLetterStatusForward = (expectedValue, typedValue) => {
    let currentLetterElement = document.getElementById(
      "line" + currentLine + "word" + currentWord + "letter" + currentLetter
    );

    if (expectedValue == undefined && typedValue == " ") {
      typedValue = undefined;
    } else {
      if (expectedValue == typedValue) {
        // If typedValue == expectedValue -- add correct class -- add to streak -- next letter
        currentLetterElement.classList.add("correct");
        setScore(score + 10);
        setCorrectCharacters(correctCharacters + 1);
      } else {
        // If typedValue != expectedValue -- add incorrect class -- add to incorrect -- next letter
        currentLetterElement.classList.add("incorrect");
        setIncorrectCharacters(incorrectCharacters + 1);

        setIncPerLine(incPerLine + 1);
      }
    }
  };

  const setLetterStatusBackwards = (line, word, letter) => {
    let currentLetterElement = document.getElementById(
      "line" + line + "word" + word + "letter" + letter
    );

    // If typedValue == expectedValue -- add correct class -- add to streak -- next letter
    currentLetterElement.classList.remove("correct");
    currentLetterElement.classList.remove("incorrect");
  };

  const moveSelector = (nextLine, nextWord, nextLetter) => {
    // remove selector from previous Letter element
    let currentLetterPosition = document.getElementById(
      "line" + nextLine + "word" + nextWord + "letter" + nextLetter
    ).offsetLeft;

    document.getElementById("Selector" + currentLine).style.left =
      currentLetterPosition + "px";
  };

  // ***************** useEffect
  useEffect(() => {
    // set Pacer settings
    if (pacerSpeed == undefined) {
      configPacer();
    }

    // add selector to first letter
    // console.log("mx", maxCharacters);
    if (
      currentLine == 0 &&
      currentLetter == 0 &&
      currentWord == 0 &&
      typingWords != undefined
    ) {
      document
        .getElementById("Selector" + currentLine)
        .classList.remove("hidden");
    }

    if (!createdWordList.current) {
      createdWordList.current = true;
      createWordList(true);
      setTypingWords(lines);
    }

    // start timer
    if (currentWord == 0 && currentLetter == 1 && currentLine == 0 && !start) {
      console.log("hh");
      setStart(true);
      if (pacerSpeed != "--") {
        setStartPacer(true);
      }
    }

    // if finished
    if (typingWords != undefined) {
      if (
        currentLine == Object.keys(typingWords).length - 1 &&
        currentWord == typingWords[currentLine].length - 1 &&
        currentLetter == typingWords[currentLine][currentWord].length
      ) {
        console.log("&&&&&");
        setAccuracyResult(accuracy);
        setSpeedResult(speed);
        setRawSpeedResult(rawSpeed);

        if (score > localStorage.getItem("hScore")) {
          localStorage.setItem("hScore", score);
          setShowHighScorePopup("score");
        }

        if (speed > localStorage.getItem("hSpeed")) {
          localStorage.setItem("hSpeed", speed);
          setShowHighScorePopup("speed");
        }

        if (localStorage.getItem("showResults") == "showResultsTrue") {
          document.getElementById("resultsWindow").classList.remove("hidden");
        } else {
          setTypingWords([]);
          CreateNewWordSet();
          restartTyping();
        }
      } else {
        // Typing listener
        if (!typeListener.current && typingWords != undefined) {
          typeListener.current = true;
          document.addEventListener("keydown", typingListener);
          return () => document.removeEventListener("keydown", typingListener);
        }
      }
    }
  }, [
    currentLetter,
    typingWords,
    createdWordList,
    currentLine,
    currentWord,
    maxCharacters,
    localStorage.getItem("showKeyboard"),
  ]);

  const configPacer = () => {
    const pacerType = localStorage.getItem("pacerType");

    if (pacerType == "pacerOff") {
      setPacerSpeed("--");
    }
    if (pacerType == "pacerCustom") {
      setPacerSpeed(localStorage.getItem("customPacerSpeed"));
    }
    if (pacerType == "pacerPrev") {
      setPacerSpeed(speedResult);
    }

    if (pacerType == "pacerHigh") {
      setPacerSpeed(speedResult);
    }
  };

  const scrollWords = (dir) => {
    let textContainer = document.getElementById("textContainer");
    textContainer.scrollTop = textContainer.scrollTop + dir;
  };

  const CreateNewWordSet = () => {
    createWordList(true);
    setTypingWords(lines);
  };

  const restartTyping = () => {
    configPacer();
    setStartPacer(false);
    setPacerLine(0);
    moveSelector(0, 0, 0);
    setScore(0);
    setShowHighScorePopup(false);
    setCharacters(0);
    setCorrectCharacters(0);
    setIncorrectCharacters(0);
    setIncPerLine(0);
    setSeconds(0);
    setStart(false);
    setCurrentLine(0);
    setCurrentWord(0);
    setCurrentLetter(0);
    typeListener.current = false;
    document.getElementById("textContainer").scrollTop = 0;
    let letters = document.getElementsByClassName("word");
    for (let i = 0; i < letters.length; i++) {
      letters[i].classList.remove("correct");
      letters[i].classList.remove("incorrect");
    }
    let Selectors = document.getElementsByClassName("selector");
    for (let i = 0; i < Selectors.length; i++) {
      Selectors[i].classList.add("hidden");
    }

    const pacers = document.getElementsByClassName("pacerLine");
    for (let i = 0; i < pacers.length; i++) {
      pacers[i].classList.add("hidden");
    }

    const pacerTracks = document.getElementsByClassName("pacerTrack");
    for (let i = 0; i < pacerTracks.length; i++) {
      pacerTracks[i].style.width = "100%";
    }
    document.getElementById("Selector0").classList.remove("hidden");
    typeListener.current = false;
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-c2">
      <PacerMenu
        speedResult={speedResult}
        setPacerSpeed={setPacerSpeed}
        restartTyping={restartTyping}
        pacerSpeed={pacerSpeed}
      />
      <Settings
        setShowKeyboard={setShowKeyboard}
        setMaxCharacters={setMaxCharacters}
        CreateNewWordSet={CreateNewWordSet}
        restartTyping={restartTyping}
        maxCharacters={maxCharacters}
      />
      <Results
        createWordList={createWordList}
        CreateNewWordSet={CreateNewWordSet}
        ShowHighScorePopup={ShowHighScorePopup}
        restartTyping={restartTyping}
        speed={speedResult}
        accuracy={accuracyResult}
        setTypingWords={setTypingWords}
        score={score}
        rawSpeed={rawSpeedResult}
      />

      <Pacer
        pacerLine={pacerLine}
        setPacerLine={setPacerLine}
        setStartPacer={setStartPacer}
        typingWords={typingWords}
        pacerSpeed={pacerSpeed}
        startPacer={startPacer}
        incPerLine={incPerLine}
        setIncPerLine={setIncPerLine}
        incorrectCharactersm={incorrectCharacters}
        time={seconds / 10000}
      />

      <Timer
        seconds={seconds}
        setSeconds={setSeconds}
        start={start}
        setSpeed={setSpeed}
        characters={characters}
        correctCharacters={correctCharacters}
        setRawSpeed={setRawSpeed}
      />
      <Score score={score} />
      <div
        id="hamMenu"
        className="absolute flex flex-col  w-20  left-[87%] top-10"
      >
        <button
          onClick={() => (
            document.getElementById("menu").classList.toggle("hidden"),
            document
              .getElementsByClassName("ham4")[0]
              .classList.toggle("active")
          )}
          className="w-16 h-16 bg-c3 rounded-xl hover:opacity-20"
        >
          <svg
            className="mx-auto ham hamRotate ham4 "
            viewBox="0 0 100 100"
            width="60"
          >
            <path
              className="line top"
              d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
            />
            <path className="line middle" d="m 70,50 h -40" />
            <path
              className="line bottom"
              d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
            />
          </svg>
        </button>
        <Menu restartTyping={restartTyping} />
      </div>

      <div className="relative -translate-x-1/2   left-1/2 w-[70%]  ">
        <TypingView typingWords={typingWords} />
        {(() => {
          if (showKeyboard) {
            if (localStorage.getItem("showKeyboard") == "showKeyboardTrue") {
              return <Keyboard />;
            }
          }
        })()}

        <QuickStats
          speedResult={speedResult}
          speed={speed}
          incorrectCharacters={incorrectCharacters}
          hScore={hScore}
          characters={characters}
          setAccuracyMain={setAccuracy}
          pacerSpeed={pacerSpeed}
          setPacerSpeed={setPacerSpeed}
          restartTyping={restartTyping}
          seconds={seconds}
        />
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
}

export default App;
