import React, { useState, useEffect } from "react";
import "./Panel.css";
import { Timer } from "./PanelElements/Timer/Timer";
import { PanelButtons } from "./PanelElements/PanelButtons/PanelButtons";
import { ProgressBar } from "./PanelElements/ProgressBar/ProgressBar";

interface PanelInterface {
  minutes: number;
  start: boolean;
  startTimer: () => void;
  stopTimer: () => void;
}

const Panel: React.FC<PanelInterface> = ({ minutes, start, startTimer, stopTimer }) => {
  return (
    <main className="Panel">
      <Timer minutes={'00'} seconds={'00'} />
      <PanelButtons timerStatus={start} stop={stopTimer} start={startTimer} />
      <ProgressBar />
    </main>
  );
};

export { Panel };
