import React, { useState, useEffect, useRef } from "react";
import "./style.css";

function App() {
  const STARTING_TIME = 5;

  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimeRunning, setTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const makeFocus = useRef(null);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function calculation(text) {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  }

  function startGame() {
    setTimeRunning(true);
    setTimeRemaining(STARTING_TIME);
    setText("");
    setWordCount(0);
    makeFocus.current.disabled = false;
    makeFocus.current.focus();
  }

  function endGame() {
    setTimeRunning(false);
    setWordCount(calculation(text));
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  return (
    <div>
      <h1>Speed Typing Game</h1>
      <textarea
        placeholder="Start typing here..."
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
        ref={makeFocus}
      />
      <h4>Time reminaing: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        Start
      </button>
      <h1>Word count: {wordCount} </h1>
    </div>
  );
}

export default App;
//   <button onClick={() => console.log(calculation(text))}>Start</button>
