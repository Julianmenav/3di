import React from "react";
import wasd from "../images/wasd.png";
import plus from "../images/plus.svg";
import mouse from "../images/mouse.svg";
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
        <div className="controls">
          {/* Images of wasd.png , plus.svg, mouse.svg */}
          <img src={wasd} alt="WASD Controls" className="controls-image" />
          <img src={plus} alt="Plus Icon" className="controls-image-plus" />
          <img src={mouse} alt="Mouse Controls" className="controls-image" />
        </div>
        <div>
          <button onClick={handleStart} className="button-49">
            START
          </button>
        </div>
      </div>
    </>
  );
}

export default Start;
