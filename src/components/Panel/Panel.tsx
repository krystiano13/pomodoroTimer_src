import React from "react";
import "./Panel.css";
import { Timer } from "./PanelElements/Timer/Timer";
import { PanelButtons } from "./PanelElements/PanelButtons/PanelButtons";
import { ProgressBar } from "./PanelElements/ProgressBar/ProgressBar";

interface PanelInterface {
  minutes: number;
}

const Panel: React.FC<PanelInterface> = ({ minutes }) => {
  return (
    <main className="Panel">
      <Timer minutes={minutes.toString()} seconds="00" />
      <PanelButtons />
      <ProgressBar />
    </main>
  );
};

export { Panel };
