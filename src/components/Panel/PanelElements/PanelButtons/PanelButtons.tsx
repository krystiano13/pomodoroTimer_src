import React from "react";
import './PanelButtons.css';
import skip2 from '../../../../assets/images/skip2.png';

const PanelButtons = () => {
    return (
      <section className="PanelButtons">
        <button className="PanelButtons__start">Start</button>
        <button className="PanelButtons__skip">
          <img className="PanelButtons__skip__img" src={skip2} alt="skip" />
        </button>
      </section>
    );
}

export { PanelButtons };