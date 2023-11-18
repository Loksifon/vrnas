import React from "react";
import { Button } from "../Button/Button"

export const Header = (Props) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__column">
          <a href="#" className="header__logo">
            <img src="#" alt="Logotype" />
          </a>
        </div>
        <div className="header__column">
          <nav className="header__nav nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#" className="nav__link"></a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link"></a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link"></a>
              </li>
              <li className="nav__item">
                <div className="nav__spoller">
									<a href="#" className="nav__link"></a>
									<button className="nav__arrow"></button>
								</div>
              </li>
              <li className="nav__item"></li>
            </ul>
          </nav>
        </div>
        <div className="header__column"></div>
				<Button />
      </div>
    </header>
  );
};
