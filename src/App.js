import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Board } from "./components/Board";
import { GameOptions } from "./components/GameOptions";
import { deepClone } from "./utils/helpers";

function App() {
  const [gameOptions, setGameOptions] = useState({
    rows: 16,
    columns: 16,
    mines: 40,
  });

  const setGameSize = (numRows, numColumns, numMines) => {
    const newGameOptions = deepClone(gameOptions);
    newGameOptions.rows = numRows;
    newGameOptions.columns = numColumns;
    newGameOptions.mines = numMines;
    setGameOptions(newGameOptions);
  };

  return (
    <div className="App">
      <h1>Minesweeper :D</h1>
      <GameOptions setGameSize={setGameSize} />
      <Board {...gameOptions} />
    </div>
  );
}

export default App;
