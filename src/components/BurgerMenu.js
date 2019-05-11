import React from 'react';
import { Link } from 'react-router-dom';
import Flip from 'react-reveal/Flip';
// import InstagramLogo from '../images/instagram.png';
import Logo from '../images/logo.png'

import style from './BurgerMenu.scss';

// <a className={style.instagram} href="https://www.instagram.com/karpasitis.photography" target="_blank" rel="noopener noreferrer">
// <img className={style.instagram} src={InstagramLogo} alt="Instagram" />
// </a>

const BurgerMenu = props => {
  const { showMenu, toggleMenu } = props; // eslint-disable-line

  return (
    <Flip left duration={750} when={showMenu}>
      <div className={style.overlay} style={{ display: showMenu ? 'block' : 'none' }}>
        <div className={style.menu}>
          <img className={style.logo} src={Logo} alt="D." />
          <div className={style.close}>
            <button onClick={toggleMenu} type="button">
              <i id="menu" className="material-icons">close</i>
            </button>
          </div>
          <div className={style.sectionOne}>
            <Link onClick={toggleMenu} to="/">Home</Link>
            <Link onClick={toggleMenu} to="/web">Websites</Link>
            <Link onClick={toggleMenu} to="/software">Software</Link>
          </div>
          <div className={style.sectionTwo}>
            <Link onClick={toggleMenu} to="/photography">Photo & Video</Link>
            <Link onClick={toggleMenu} to="/about">About</Link>
            <Link onClick={toggleMenu} to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </Flip>
  );
};

export default BurgerMenu;