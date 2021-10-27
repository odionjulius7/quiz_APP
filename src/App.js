import "./App.css";
import React, { useState, useContext } from "react";
import MainMenu from "./Components/MainMenu";
import Quiz1 from "./Components/Quiz1";
import Quiz2 from "./Components/Quiz2";
import EndScreen from "./Components/EndScreen";
import EndScreen2 from "./Components/EndScreeen2";

import { QuizContext } from "./Helpers/Contexts";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <QuizContext.Provider
        value={{ gameState, setGameState, score, setScore }}
      >
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz1" && <Quiz1 />}
        {gameState === "quiz2" && <Quiz2 />}
        {gameState === "endScreen" && <EndScreen />}
        {gameState === "endScreen2" && <EndScreen2 />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
