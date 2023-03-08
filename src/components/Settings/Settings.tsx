import React from "react";
import "./Settings.css";

const Settings = () => {
  return (
    <section className="settings">
      <h1 className="settings__title">Settings</h1>
      <form className="settings__form">
        <div className="settings__form__element">
          <label className="settings__form__element__label">
            Learning block time
          </label>
          <input
            className="settings__form__element__input"
            required
            type="number"
            defaultValue={25}
            min={1}
          />
        </div>
        <div className="settings__form__element">
          <label className="settings__form__element__label">
            Short break time
          </label>
          <input
            className="settings__form__element__input"
            required
            type="number"
            defaultValue={5}
            min={1}
          />
        </div>
        <div className="settings__form__element">
          <label className="settings__form__element__label">
            Long break time
          </label>
          <input
            className="settings__form__element__input"
            required
            type="number"
            defaultValue={15}
            min={1}
          />
        </div>
        <button>Save & Quit</button>
      </form>
    </section>
  );
};

export { Settings };
