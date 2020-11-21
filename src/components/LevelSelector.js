import React from "react";

function LevelSelector({ chooseLevel }) {
  return (
    <>
      <center>
        <img src="../../sphere.png" alt="" height="50" />
        <h3 className="font-2p">Choose your level</h3>
      </center>
      <div className="level-selector">
        <button onClick={() => chooseLevel("beginner")} className="font-2p">
          beginner
        </button>
        <button onClick={() => chooseLevel("intermediate")} className="font-2p">
          Intermediate
        </button>
        <button onClick={() => chooseLevel("advanced")} className="font-2p">
          Advanced
        </button>
      </div>
    </>
  );
}

export default LevelSelector;
