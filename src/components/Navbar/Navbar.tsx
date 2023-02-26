import React from "react";
import { useState } from "react";
import "./Navbar.css";

interface NavbarInterface {
  handleChangeMode: (mode: string, minutes: number) => void;
}

const Navbar: React.FC<NavbarInterface> = ({ handleChangeMode }) => {
  const [navButtons, setNavButtons] = useState(buttons);
  const handleChoosePanel = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target instanceof Element) {
      const id = Number(e.target?.id);
      const btns = [...navButtons];

      handleChangeMode(btns[id].mode,btns[id].minutes);

      btns.forEach((item) => {
        if (item.id !== id) item.choosed = false;
        else item.choosed = true;
      });

      setNavButtons(btns);
    }
  };
  return (
    <nav className={`Navbar`}>
      {navButtons.map((item) => (
        <button
          onClick={(e) => handleChoosePanel(e)}
          className={
            item.choosed === true ? "Navbar__btn--choosen" : "Navbar__btn"
          }
          id={item.id.toString()}
        >
          {item.text}
        </button>
      ))}
    </nav>
  );
};

const buttons = [
  {
    id: 0,
    text: "Pomodoro",
    choosed: true,
    mode: "pomodoro",
    minutes: 25
  },
  {
    id: 1,
    text: "Short Break",
    choosed: false,
    mode: "short",
    minutes: 5
  },
  {
    id: 2,
    text: "Long Break",
    choosed: false,
    mode: "long",
    minutes: 15
  },
];

export { Navbar };
