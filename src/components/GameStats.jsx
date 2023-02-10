import { useEffect, useState } from "react";
import { formatTime } from "../utils/helpers";

export function GameStats({ minutes, seconds, revealedCells, totalCells }) {
  return (
    <div className="game-stats">
      <span className="timer">
        Time: <span className="timer-value">{`${formatTime(minutes)}:${formatTime(seconds)}`}</span>
      </span>
      <span className="cells">
        Cells: <span className="cells-value">{`${revealedCells} / ${totalCells}`}</span>
      </span>
    </div>
  );
}
