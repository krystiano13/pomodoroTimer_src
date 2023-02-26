import React from "react";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [navButtons, setNavButtons] = useState(buttons);
  const handleChoosePanel = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target instanceof Element) {
      const id = Number(e.target?.id);
      const btns = [...navButtons];

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
    mode: 'Pomodoro'
  },
  {
    id: 1,
    text: "Short Break",
    choosed: false,
    mode: 'Short'
  },
  {
    id: 2,
    text: "Long Break",
    choosed: false,
    mode: 'Long'
  },
];

export { Navbar };
