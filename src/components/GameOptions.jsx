import { DropdownButton, Dropdown } from "react-bootstrap";

export function GameOptions({ setGameSize }) {
  return (
    <div className="game-options">
      <DropdownButton id="game-size-dropdown" title="Game size">
        <Dropdown.Item onClick={() => setGameSize(9, 9, 10)}>Small (9x9, 10)</Dropdown.Item>
        <Dropdown.Item onClick={() => setGameSize(16, 16, 40)}>Medium (16x16, 40)</Dropdown.Item>
        <Dropdown.Item onClick={() => setGameSize(18, 30, 99)}>Large (30x18, 99)</Dropdown.Item>
        <Dropdown.Item onClick={() => setGameSize(24, 40, 135)}>Extra large (40x24, 135)</Dropdown.Item>
        <Dropdown.Item onClick={() => setGameSize(40, 60, 200)}>Extra extra large (60x40, 200)</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}
