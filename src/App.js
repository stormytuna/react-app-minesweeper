import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Board } from "./components/Board";
import { GameOptions } from "./components/GameOptions";
import { deepClone } from "./utils/helpers";
import { GameStats } from "./components/GameStats";
import { useStopwatch } from "react-timer-hook";

function App() {
  const [gameOptions, setGameOptions] = useState({
    rows: 16,
    columns: 16,
    mines: 40,
  });
  const [gameStats, setGameStats] = useState({
    revealedCells: 0,
    totalCells: 216,
  });
  const { seconds, minutes, reset, start } = useStopwatch({ autoStart: false });

  const setGameSize = (numRows, numColumns, numMines) => {
    // Set gameOptions stuff
    const newGameOptions = deepClone(gameOptions);
    newGameOptions.rows = numRows;
    newGameOptions.columns = numColumns;
    newGameOptions.mines = numMines;
    setGameOptions(newGameOptions);

    // Set some gameStats stuff
    const newGameStats = deepClone(gameStats);
    newGameStats.revealedCells = 0;
    newGameStats.totalCells = numRows * numColumns - numMines;
    setGameStats(newGameStats);

    // Reset our stopwatch
    reset();
  };

  const increaseNumRevealed = (numRevealed) => {
    const newGameStats = deepClone(gameStats);
    newGameStats.revealedCells += numRevealed;
    setGameStats(newGameStats);
  };

  return (
    <div className="App">
      <h1>Minesweeper :D</h1>
      <GameOptions setGameSize={setGameSize} />
      <GameStats {...gameStats} seconds={seconds} minutes={minutes} />
      <Board {...gameOptions} increaseNumRevealed={increaseNumRevealed} startTimer={start} />
    </div>
  );
}

export default App;
