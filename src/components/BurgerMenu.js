import React from 'react';
import { Link } from 'react-router-dom';

import style from './BurgerMenu.scss';

const BurgerMenu = props => {
  const { toggleMenu } = props; // eslint-disable-line

  return (
    <div className={style.overlay}>
      <div className={style.menu}>
        <div className={style.close}>
          <button onClick={toggleMenu} type="button">
            <i id="menu" className="material-icons">close</i>
          </button>
        </div>
        <Link onClick={toggleMenu} to="/">Home</Link>
        <Link onClick={toggleMenu} to="/web">Websites</Link>
        <Link onClick={toggleMenu} to="/software">Software</Link>
        <Link onClick={toggleMenu} to="/">Photo/Video</Link>
        <Link onClick={toggleMenu} to="/">About</Link>
        <Link onClick={toggleMenu} to="/">Contact</Link>
      </div>
    </div>
  );
};

export default BurgerMenu;