import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Board } from "./components/Board";
import { GameOptions } from "./components/GameOptions";

function App() {
  const [numRows, setNumRows] = useState(10);
  const [numColumns, setNumColumns] = useState(14);
  const [numMines, setNumMines] = useState(8);

  return (
    <div className="App">
      <h1>Minesweeper :D</h1>
      <GameOptions setNumRows={setNumRows} setNumColumns={setNumColumns} setNumMines={setNumMines} />
      <Board numRows={numRows} numColumns={numColumns} numMines={numMines} />
    </div>
  );
}

export default App;
