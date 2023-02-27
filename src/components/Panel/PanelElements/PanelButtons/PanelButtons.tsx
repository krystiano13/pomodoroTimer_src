import React from "react";
import "./PanelButtons.css";
import skip2 from "../../../../assets/images/skip2.png";

interface ButtonsInterface {
  start: () => void;
  stop: () => void;
  timerStatus: boolean;
}

const PanelButtons: React.FC<ButtonsInterface> = ({
  start,
  stop,
  timerStatus,
}) => {
  return (
    <section className="PanelButtons">
      <button
        onClick={!timerStatus ? start : stop}
        className={`PanelButtons__${timerStatus ? "stop" : "start"}`}
      >
        {timerStatus ? "Stop" : "Start"}
      </button>
      <button className="PanelButtons__skip">
        <img className="PanelButtons__skip__img" src={skip2} alt="skip" />
      </button>
    </section>
  );
};

export { PanelButtons };
