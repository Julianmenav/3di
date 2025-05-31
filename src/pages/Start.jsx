import React from "react";
import "./start.css";

function Start({ _gameStarted, startGameFn: startGame }) {
  const handleStart = () => {
    startGame();
  };
  return (
    <>
      {/* <button onClick={handleStart} className="start-button">
        Start
      </button> */}
      <div className="start-page">
        <button onClick={handleStart} className="button-49">
          START
        </button>
      </div>
    </>
  );
}

export default Start;
