import React, { useState } from "react";
import Counter from "./excercises/01-simple-counter";
// import Counter from "./excercises-final/01-simple-counter";
import Quotes from "./excercises/02-mid-quotes";
// import Quotes from "./excercises-final/02-mid-quotes.js";
import Tabs from "./excercises/03-adv-tabs.js";
// import Tabs from "./excercises-final/03-adv-tabs.js";

import LevelSelector from "./components/LevelSelector";
import "./App.css";
import LevelIndicator from "./components/LevelIndicator";

function App() {
  const [trainingLevel, setTrainingLevel] = useState(null);
  const renderLevel = () => {
    switch (trainingLevel) {
      case "beginner":
        return <Counter />;
      case "intermediate":
        return <Quotes />;
      case "advanced":
        return <Tabs />;
      default:
        throw new Error("Level not found");
    }
  };

  const handleGoBack = () => {
    setTrainingLevel(null);
  };

  return (
    <div className="main-container">
      {trainingLevel ? (
        <>
          <LevelIndicator level={trainingLevel} goBack={handleGoBack} />{" "}
          {renderLevel()}
        </>
      ) : (
        <LevelSelector chooseLevel={setTrainingLevel} />
      )}
    </div>
  );
}

export default App;
