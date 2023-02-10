import { useEffect, useState } from "react";
import { formatTime } from "../utils/helpers";

export function GameStats({ minutes, seconds, revealedCells, totalCells, flagsPlaced, totalMines }) {
  return (
    <div className="game-stats">
      <span className="timer">
        Time: <span className="timer-value">{`${formatTime(minutes)}:${formatTime(seconds)}`}</span>
      </span>
      <span className="cells">
        Cells revealed: <span className="cells-value">{`${revealedCells} / ${totalCells}`}</span>
      </span>
      <span className="flags">
        Flags placed: <span className="flags-value">{`${flagsPlaced} / ${totalMines}`}</span>
      </span>
    </div>
  );
}
