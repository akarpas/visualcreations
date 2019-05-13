import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import AddIcon from '../images/add_circle_outline.png';
import style from './Home.scss';

const Home = () => {
  return (
    <div className={style.content}>
      <Fade>
        <h2>Digital Creations</h2>
        <hr />
        <h4>Bringing Digital products to life.</h4>
        <h4>Tailored to your needs.</h4>
        <h4>With Quality in Mind.</h4>
      </Fade>
      <br />
      <Fade delay={250}>
        <h2>Areas of Expertise</h2>
        <hr />
        <div className={style.services}>
          <h5>
            <Link to="/web">
              <i className="material-icons">web</i>
            </Link>
            Websites
          </h5>
          <h5>
            <Link to="/software">
              <i className="material-icons">computer</i>
            </Link>
            Software
          </h5>
          <h5>
            <Link to="/photography">
              <i className="material-icons">camera</i>
            </Link>
            Photos<br/>Videos
          </h5>
        </div>
      </Fade>
      <Fade delay={500}>
        <img className={style.icon} src={AddIcon} alt="+" />
        <p style={{ textAlign: 'center' }}>Network of Professionals for different needs</p>
      </Fade>
    </div>
  );
};

export default Home;