import React from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '../images/add_circle_outline.png';
import style from './Home.scss';

const Home = () => {
  return (
    <div className={style.content}>
      <h2>We. Create.</h2>
      <hr />
      <h4>Bringing Digital products to life.</h4>
      <h4>Tailored to your needs.</h4>
      <h4>With Quality in Mind.</h4>
      <br />
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
          <Link to="/">
            <i className="material-icons">computer</i>
          </Link>
          Software
        </h5>
        <h5>
          <Link to="/">
            <i className="material-icons">camera</i>
          </Link>
          Photos<br/>Videos
        </h5>
      </div>
      <img className={style.icon} src={AddIcon} alt="+" />
      <p style={{ textAlign: 'center' }}>Network of Professionals for different needs</p>
    </div>
  );
};

export default Home;