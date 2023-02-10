import { DropdownButton, Dropdown } from "react-bootstrap";

export function GameOptions({ setNumRows, setNumColumns, setNumMines }) {
  const setGameSize = (rows, columns, numMines) => {
    setNumRows(rows);
    setNumColumns(columns);
    setNumMines(numMines);
  };

  return (
    <div className="game-options">
      <DropdownButton id="game-size-dropdown" title="Game size">
        <Dropdown.Item onClick={() => setGameSize(10, 14, 8)}>Small (14x10, 8)</Dropdown.Item>
        <Dropdown.Item onClick={() => setGameSize(14, 22, 10)}>Medium (22x14, 10)</Dropdown.Item>
        <Dropdown.Item onClick={() => setGameSize(18, 30, 14)}>Large (30x18, 14)</Dropdown.Item>
        <Dropdown.Item onClick={() => setGameSize(24, 42, 20)}>Extra large (42x24, 20)</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}
