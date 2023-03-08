import React, { useState, useEffect, useRef } from "react";
import "./styles/App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Panel } from "./components/Panel/Panel";
import alarm from "./assets/sounds/alarm.mp3";
import click from "./assets/sounds/click.mp3";
import gear from "./assets/images/gear.png";
import { Settings } from "./components/Settings/Settings";
import { handleSetTimer } from "./components/AppFunctions/handleSetTimer";
import { playSound } from "./components/AppFunctions/playSound";
import { checkTimer } from "./components/AppFunctions/checkTimer";

const App = () => {
  const [mode, setMode] = useState("pomodoro");
  const [minutes, setMinutes] = useState(25);
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [sessionCount, setSessionCount] = useState(0);
  const [settingsModal, setSettingsModal] = useState(false);

  const intervalRef = useRef<NodeJS.Timer>();
  const timeRef = useRef(0);
  const minRef = useRef(minutes);
  const secRef = useRef(0);

  useEffect(() => {
    timeRef.current = time;
    minRef.current = Math.floor(timeRef.current / 60);
    secRef.current = timeRef.current - minRef.current * 60;

    checkTimer(
      time,
      start,
      mode,
      setTime,
      setStart,
      setSessionCount,
      sessionCount,
      handleChangeMode,
      handleStopTimer
    );
  }, [time]);

  const handleChangeMode = (mode: string, minutes: number) => {
    setMode(mode);
    setMinutes(minutes);
    secRef.current = 0;
    minRef.current = minutes;
  };

  const handleResetTimer = () => {
    setTime(0);
    setTotalTime(0);
    minRef.current = 0;
    secRef.current = 0;
  };

  const decreaseTimerValue = () => {
    let t = timeRef.current;
    t--;
    setTime(t);
  };

  const handleStopTimer = () => {
    clearInterval(intervalRef.current);
    setStart(false);
  };

  return (
    <div className={`App ${mode}`}>
      <h1 className="App__title">Pomodoro Timer App</h1>
      {settingsModal === true && <Settings />}

      <Navbar
        click={() => playSound(new Audio(click))}
        mode={mode}
        time={time}
        handleChangeMode={handleChangeMode}
      />

      <Panel
        click={() => playSound(new Audio(click))}
        startTimer={() => {
          handleSetTimer(
            time,
            minutes,
            intervalRef.current,
            setTotalTime,
            setTime,
            setStart,
            decreaseTimerValue
          );
          setStart(true);
        }}
        stopTimer={() => {
          handleStopTimer();
          setStart(false);
        }}
        start={start}
        minutes={
          minRef.current === 0 && start === false ? minutes : minRef.current
        }
        seconds={secRef.current}
        totalTime={totalTime}
        time={timeRef.current}
        reset={handleResetTimer}
      />

      <div className="App__ball" />
      <div className="App__ball2" />
      <div className="App__ball3" />
      <div className="App__ball4" />
      <div className="App__ball5" />

      <button
        onClick={() => {
          setSettingsModal(!settingsModal);
        }}
        className="App__settingsButton"
      >
        <img
          className="App__settingsButton__image"
          src={gear}
          alt="settings image"
        />
      </button>
    </div>
  );
};

export default App;
