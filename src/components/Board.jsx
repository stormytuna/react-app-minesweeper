import { deepClone } from "../utils/helpers";
import { revealCells } from "../utils/reveal-cells";
import { Cell } from "./Cell";

export function Board({ board, setBoard, rows: numRows, columns: numColumns, gameState, increaseNumRevealed, increaseFlagsPlaced, startTimer, loseGame }) {
  if (!board) {
    return <h2>Loading...</h2>;
  }

  const toggleFlag = (e, x, y) => {
    e.preventDefault();

    const newBoard = deepClone(board);
    const cell = newBoard[x][y];
    if (!cell.revealed) {
      cell.flagged = !cell.flagged;
      increaseFlagsPlaced(cell.flagged ? 1 : -1);
      setBoard(newBoard);
    }
  };

  const revealCell = (row, column) => {
    const newBoard = deepClone(board);

    // Reveal necessary cells
    const { board: revealedBoard, numRevealed, clickedBomb } = revealCells(newBoard, row, numRows, column, numColumns);
    increaseNumRevealed(numRevealed);

    // Start our timer
    startTimer();

    // Set our state
    setBoard(revealedBoard);

    // Check if we clicked a bomb
    if (clickedBomb) {
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
