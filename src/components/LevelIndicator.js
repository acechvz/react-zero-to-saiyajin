import React from "react";
import { TRAINING_LEVELS } from "../constants";

function LevelIndicator({ level, goBack }) {
  return (
    <div className="level-indicator">
      <div>
        <button onClick={goBack}>
          👈 <span>Back to menu</span>
        </button>
      </div>
      <div className="level-indicator-content">
        <img src={TRAINING_LEVELS[level]} height="100" />
        <h4>
          Level: <span style={{ textTransform: "uppercase" }}>{level}</span>
        </h4>
      </div>
    </div>
  );
}

export default LevelIndicator;
