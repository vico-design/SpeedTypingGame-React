import { useState, useRef, useEffect } from "react";

function useWordGame() {
  const STARTING_TIME = 10;

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

  return {
    handleChange,
    text,
    isTimeRunning,
    makeFocus,
    timeRemaining,
    startGame,
    wordCount,
  };
}

export default useWordGame;
