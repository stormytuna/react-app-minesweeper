import { useEffect, useState } from "react";
import images from "../images/images";

export function Cell({ value, revealed, flagged, x, y, toggleFlag, revealCell, gameState }) {
  const [isHovering, setIsHovering] = useState(false);
  const [image, setImage] = useState("");

  useEffect(() => {
    // 3 cases: unrevealed, unrevealed and flagged, revealed,
    if (!revealed && flagged) {
      setImage(isHovering ? images.flaggedHover : images.flagged);
    } else if (!revealed) {
      setImage(isHovering ? images.unrevealedHover : images.unrevealed);
    } else {
      switch (value) {
        case "X":
          setImage(images.mine);
          break;
        case "0":
          setImage(images.zero);
          break;
        case "1":
          setImage(images.one);
          break;
        case "2":
          setImage(images.two);
          break;
        case "3":
          setImage(images.three);
          break;
        case "4":
          setImage(images.four);
          break;
        case "5":
          setImage(images.five);
          break;
        case "6":
          setImage(images.six);
          break;
        case "7":
          setImage(images.seven);
          break;
        case "8":
          setImage(images.eight);
          break;
      }
    }
  }, [revealed, flagged, isHovering]);

  return (
    <div
      className="board-cell"
      onClick={() => gameState === "play" && revealCell(x, y)}
      onContextMenu={(e) => gameState === "play" && toggleFlag(e, x, y)}
      onMouseEnter={() => gameState === "play" && setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img src={image} onDragStart={(e) => e.preventDefault()} />
    </div>
  );
}
