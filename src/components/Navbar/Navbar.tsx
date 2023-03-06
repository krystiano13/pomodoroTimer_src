import React, { useEffect } from "react";
import { useState } from "react";
import "./Navbar.css";
import { buttons } from "./buttons";
import { handleChoosePanel } from "./handleChoosePanel";

interface NavbarInterface {
  handleChangeMode: (mode: string, minutes: number) => void;
  click: () => void;
  time: number;
  mode: string;
}

const Navbar: React.FC<NavbarInterface> = ({
  handleChangeMode,
  time,
  mode,
  click
}) => {
  const [navButtons, setNavButtons] = useState(buttons);
 
  return (
    <nav className={`Navbar`}>
      {navButtons.map((item) => (
        <button
          onClick={(e) => {
            click();
            handleChoosePanel(e,time,navButtons,handleChangeMode)
            setNavButtons(handleChoosePanel(e,time,navButtons,handleChangeMode))
          }}
          key={item.id}
          className={
            mode === item.mode ? "Navbar__btn--choosen" : "Navbar__btn"
          }
          id={item.id.toString()}
        >
          {item.text}
        </button>
      ))}
    </nav>
  );
};

export { Navbar };
