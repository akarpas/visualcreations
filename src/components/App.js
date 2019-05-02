import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import BurgerMenu from './BurgerMenu';
import Home from './Home';

import style from './App.scss';

const App = () => {
  const [isBurgerOn, setIsBurgerOn] = useState(false);

  const toggleMenu = () => {
    setIsBurgerOn(!isBurgerOn);
  }

  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <h1 className={style.headerTitle}>Digitations</h1>
        <div className={style.menu}>
          <button onClick={toggleMenu}>
            {isBurgerOn
              ? <i id="menu" className="material-icons">close</i>
              : <i id="menu" className="material-icons">menu</i>}
          </button>
        </div>
      </header>
      <div className={style.content}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
      {isBurgerOn && <BurgerMenu />}
    </div>
  )
};

export default App;
