import React, { useState, useEffect, useRef } from "react";
import "./styles/App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Panel } from "./components/Panel/Panel";

const App = () => {
  const [mode, setMode] = useState<string>("pomodoro");
  const [minutes, setMinutes] = useState<number>(25);
  const [start, setStart] = useState<boolean>(false);
  const [time,setTime] = useState<number>(0);

  const intervalRef = useRef<NodeJS.Timer>();

  let t:number | undefined = 0;

  const handleChangeMode = (mode: string, minutes: number) => {
    setMode(mode);
    setMinutes(minutes);
  };

  const decreaseTimerValue = () => {
    t = time;
    t = t - 1;
    setTime(t);
    console.log(time);
  };

  const handleSetTimer = () => {
    if (time <= 0) {
      t = minutes * 60;
      setTime(t);
    }

    intervalRef.current = setInterval(() => {
      decreaseTimerValue();
    }, 1000);
  };

  const handleStopTimer = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div id={t.toString()} className={`App ${mode}`}>
      <h1 className="App__title">Pomodoro Timer App</h1>
      <Navbar handleChangeMode={handleChangeMode} />
      <Panel
        startTimer={() => {
          handleSetTimer();
          setStart(true);
        }}
        stopTimer={() => {
          handleStopTimer();
          setStart(false);
        }}
        start={start}
        minutes={minutes}
      />
    </div>
  );
};

export default App;
