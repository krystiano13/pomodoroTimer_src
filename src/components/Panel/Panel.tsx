import React from "react";
import './Panel.css';
import { Timer } from "./PanelElements/Timer/Timer";
import { PanelButtons } from "./PanelElements/PanelButtons/PanelButtons";
import { ProgressBar } from "./PanelElements/ProgressBar/ProgressBar";

const Panel = () => {
    return (
        <main className="Panel">
            <Timer minutes="25" seconds="00" />
            <PanelButtons />
            <ProgressBar />
        </main>
    )
}

export { Panel };