import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import BurgerMenu from './BurgerMenu';
import Home from './Home';
import Software from './Software';
import Web from './Web';

import style from './App.scss';

const App = () => {
  const [isBurgerOn, setIsBurgerOn] = useState(false);

  const toggleMenu = () => {
    if (isBurgerOn) {
      window.scrollTo(0,0)
    }
    setIsBurgerOn(!isBurgerOn);
  }

  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <h1 className={style.headerTitle}>Digitations</h1>
        <div className={style.menu}>
          <button onClick={toggleMenu}>
            <i id="menu" className="material-icons">menu</i>
          </button>
        </div>
      </header>
      <div className={style.content}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/web" component={Web} />
          <Route exact path="/software" component={Software} />
        </Switch>
      </div>
      {isBurgerOn && <BurgerMenu toggleMenu={toggleMenu} />}
    </div>
  )
};

export default App;
