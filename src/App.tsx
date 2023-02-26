import React, { useState } from "react";
import "./styles/App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Panel } from "./components/Panel/Panel";

const App = () => {
  const [mode, setMode] = useState<string>("pomodoro");
  const [minutes, setMinutes] = useState<number>(25);
  const handleChangeMode = (mode: string, minutes: number) => {
    setMode(mode);
    setMinutes(minutes);
  };
  return (
    <div className={`App ${mode}`}>
      <h1 className="App__title">Pomodoro Timer App</h1>
      <Navbar handleChangeMode={handleChangeMode} />
      <Panel minutes={minutes} />
    </div>
  );
};

export default App;
