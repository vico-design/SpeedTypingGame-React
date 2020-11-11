import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import useWordGame from "./useWordGame";

function App() {
  const {
    handleChange,
    text,
    isTimeRunning,
    makeFocus,
    timeRemaining,
    startGame,
    wordCount,
  } = useWordGame();
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
