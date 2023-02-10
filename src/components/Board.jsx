import { useEffect, useState } from "react";
import { createBoard } from "../utils/create-board";
import { deepClone } from "../utils/helpers";
import { revealCells } from "../utils/reveal-cells";
import { Cell } from "./Cell";

export function Board({ rows: numRows, columns: numColumns, mines: numMines, increaseNumRevealed, startTimer }) {
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

    const { board: revealedBoard, numRevealed } = revealCells(newBoard, row, numRows, column, numColumns);
    increaseNumRevealed(numRevealed);

    if (!timerStarted) {
      startTimer();
      setTimerStarted(true);
    }

    setBoard(revealedBoard);
  };

  return (
    <div className="board">
      {board.map((row) => {
        return (
          <div className="board-row">
            {row.map((cell) => {
              return <Cell {...cell} toggleFlag={toggleFlag} revealCell={revealCell} />;
            })}
          </div>
        );
      })}
    </div>
  );
}
