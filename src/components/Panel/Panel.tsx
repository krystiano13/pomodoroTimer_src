import React, { useState, useEffect } from "react";
import "./Panel.css";
import { Timer } from "./PanelElements/Timer/Timer";
import { PanelButtons } from "./PanelElements/PanelButtons/PanelButtons";
import { ProgressBar } from "./PanelElements/ProgressBar/ProgressBar";

interface PanelInterface {
  minutes: number;
}

const Panel: React.FC<PanelInterface> = ({ minutes }) => {

  const [seed,setSeed] = useState<number>(0);
  const [min,setMin] = useState<string>('0');
  const [sec, setSec] = useState<string>("0");

  let time = 0;

  const handleStart = () => {
    time = minutes * 60;
  }

  useEffect(() => {
    setInterval(() => {
      if(time > 0) time--;
      setSec(Math.floor(time % 60).toString());
      setMin(Math.floor(time / 60).toString())
    },1000)
  },[]);

  return (
    <main id={seed.toString()} className="Panel">
      <Timer minutes={min} seconds={sec}/>
      <PanelButtons start={handleStart} />
      <ProgressBar />
    </main>
  );
};

export { Panel };
