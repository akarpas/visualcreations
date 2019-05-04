import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import BurgerMenu from './BurgerMenu';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Photography from './Photography';
import Software from './Software';
import Web from './Web';
import InstagramLogo from '../images/instagram.png';

import style from './App.scss';

const App = () => {
  const [isBurgerOn, setIsBurgerOn] = useState(false);

  const toggleMenu = () => {
    if (isBurgerOn) {
      window.scrollTo(0,0);
    }
    setIsBurgerOn(!isBurgerOn);
  };

  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <h1 className={style.headerTitle}>Digitations</h1>
        <div className={style.burgerMenu}>
          <button onClick={toggleMenu} type="button">
            <i id="menu" className="material-icons">menu</i>
          </button>
        </div>
        <div className={style.menu}>
          <Link className={style.link} to='/'>Home</Link>
          <Link className={style.link} to='/web'>Websites</Link>
          <Link className={style.link} to='/software'>Software</Link>
          <Link className={style.link} to='/photography'>Photo/Video</Link>
          <Link className={style.link} to='/about'>About</Link>
          <Link className={style.link} to='/contact'>Contact</Link>
          <a className={style.instagram} href="https://www.instagram.com/karpasitis.photography" target="_blank" rel="noopener noreferrer">
            <img className={style.instagram} src={InstagramLogo} alt="Instagram" />
          </a>
        </div>
      </header>
      <div className={style.content}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/web" component={Web} />
          <Route path="/software" component={Software} />
          <Route path="/photography" component={Photography} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
      <BurgerMenu showMenu={isBurgerOn} toggleMenu={toggleMenu} />
    </div>
  );
};

export default App;
