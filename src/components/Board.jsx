import { useEffect, useState } from "react";
import { createBoard } from "../utils/create-board";
import { deepClone } from "../utils/helpers";
import { revealCells } from "../utils/reveal-cells";
import { Cell } from "./Cell";

export function Board({ rows: numRows, columns: numColumns, mines: numMines, gameState, increaseNumRevealed, startTimer, loseGame }) {
  const [board, setBoard] = useState([]);
  const [timerStarted, setTimerStarted] = useState(false);

  useEffect(() => {
    const newBoard = createBoard(numRows, numColumns, numMines);
    setBoard(newBoard);
  }, [numRows, numColumns, numMines]);

  if (!board) {
    return <h2>Loading...</h2>;
  }

  const toggleFlag = (e, x, y) => {
    e.preventDefault();

    const newBoard = deepClone(board);
    newBoard[x][y].flagged = !newBoard[x][y].flagged;
    setBoard(newBoard);
  };

  const revealCell = (row, column) => {
    const newBoard = deepClone(board);

    // Reveal necessary cells
    const { board: revealedBoard, numRevealed, clickedBomb } = revealCells(newBoard, row, numRows, column, numColumns);
    increaseNumRevealed(numRevealed);

    // Start our timer if we haven't already
    if (!timerStarted) {
      startTimer();
      setTimerStarted(true);
    }

    // Set our state
    setBoard(revealedBoard);

    // Check if we clicked a bomb
    if (clickedBomb) {
      console.log("yomama");
      loseGame();
    }
  };

  return (
    <div className="board">
      {board.map((row) => {
        return (
          <div className="board-row">
            {row.map((cell) => {
              return <Cell {...cell} toggleFlag={toggleFlag} revealCell={revealCell} gameState={gameState} />;
            })}
          </div>
        );
      })}
    </div>
  );
}
