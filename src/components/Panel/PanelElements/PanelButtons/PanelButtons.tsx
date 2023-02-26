import React from "react";
import './PanelButtons.css';
import skip2 from '../../../../assets/images/skip2.png';

interface ButtonsInterface {
  start : () => void
}

const PanelButtons:React.FC<ButtonsInterface> = ({ start }) => {
    return (
      <section className="PanelButtons">
        <button onClick={start} className="PanelButtons__start">Start</button>
        <button className="PanelButtons__skip">
          <img className="PanelButtons__skip__img" src={skip2} alt="skip" />
        </button>
      </section>
    );
}

export { PanelButtons };