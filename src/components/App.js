import React, { useState } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import style from './App.scss';

const App = () => {
  const [isBurgerOn, setIsBurgerOn] = useState(false);

  const toggleMenu = () => {
    setIsBurgerOn(!isBurgerOn);
  }

  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <h1 className={style.headerTitle}>Visual Creations</h1>
        <div className={style.menu}>
          <button onClick={toggleMenu}>
            {isBurgerOn
              ? <i id="menu" className="material-icons">close</i>
              : <i id="menu" className="material-icons">menu</i>}
          </button>
        </div>
      </header>
      <div className={style.content}>
        <p>React / Redux Boilerplate with Webpack. ESLint setup and SCSS Support</p>
      </div>
    </div>
  )
};

export default App;
