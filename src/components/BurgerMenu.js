import React from 'react';
import { Link } from 'react-router-dom';
import Flip from 'react-reveal/Flip';


import style from './BurgerMenu.scss';

const BurgerMenu = props => {
  const { showMenu, toggleMenu } = props; // eslint-disable-line

  return (
    <Flip left duration={750} when={showMenu}>
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
          <Link onClick={toggleMenu} to="/photography">Photo/Video</Link>
          <Link onClick={toggleMenu} to="/">About</Link>
          <Link onClick={toggleMenu} to="/">Contact</Link>
        </div>
      </div>
    </Flip>
  );
};

export default BurgerMenu;