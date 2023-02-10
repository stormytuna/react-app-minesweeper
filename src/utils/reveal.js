/**
 * Reveals cells in the given board. This will reveal all adjacent cells of the clicked cell at (row, column), and any additional cells that need revealing due to clicking an empty cell
 * @param {Array} board array of arrays of Cell objects
 * @param {Number} row clicked row
 * @param {Number} column clicked column
 * @return {Array} the board with relevant cells revealed
 */
export function revealCells(board, row, numRows, column, numColumns) {
  let cell = board[row][column];

  // Early return if our clicked cell is already revealed
  if (cell.revealed) {
    return board;
  }

  const cellsToReveal = [];
  cellsToReveal.push(cell);
  while (cellsToReveal.length !== 0) {
    cell = cellsToReveal.pop();

    // Reveal our current cell
    cell.revealed = true;

    // Loop through all adjacent cells...
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        // Check our adjacent cell actually exists
        const rowToCheck = x + cell.x;
        const columnToCheck = y + cell.y;
        if (rowToCheck < 0 || columnToCheck < 0 || rowToCheck >= numRows || columnToCheck >= numColumns) {
          continue;
        }

        const adjacentCell = board[rowToCheck][columnToCheck];

        // Two cases:
        //   1: Our adjacent cell isn't empty or a bomb - We should reveal it
        //   2: Our adjacent cell is empty and hasn't been revealed - We should add it to our list of cells to reveal around
        // (Basically doing poor man's recursion)
        if (adjacentCell.value !== "0" && adjacentCell.value !== "X") {
          adjacentCell.revealed = true;
        } else if (adjacentCell.value === "0" && !adjacentCell.revealed) {
          cellsToReveal.push(adjacentCell);
        }
      }
    }
  }

  return board;
}
