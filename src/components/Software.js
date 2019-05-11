import React from 'react';
import Fade from 'react-reveal/Fade';
import MarvelGameImage from '../images/software/marvel.jpg';
import MoviesAppImage from '../images/software/movies.jpg';
import style from './Software.scss';

const Software = () => {
  return (
    <div className={style.content}>
      <h3>Software Development</h3>
      <hr />
      <Fade>
        <h4 className={style.subtitle}>Web Applications: </h4>
        <p>From simple web applications to expose your data with charts or tables, or to provide access to your services, or even simple games and learning solutions, the implementation of a REST API and other solutions, feel free to contact us.</p>
      </Fade>
      <Fade>
        <h4 className={style.subtitle}>Mobile Applications: </h4>
        <p>Solutions for mobile phones and mobile accessibility built on React Native.</p>
      </Fade>
      <Fade>
        <h4 className={style.subtitle}>Assistance - Maintenance - Support: </h4>
        <p>Services on a freelance basis to implement, maintain, fix or provide support on ongoing projects (frontend and backend)</p>
      </Fade>
      <Fade delay={500}>
        <div className={style.projects}>
          <a href="https://marvel-game.netlify.com/" target="_blank" rel="noopener noreferrer">
            <img className={style.thumb} src={MarvelGameImage} alt="Marvel Memory Game" />
          </a>
          <a href="https://marvel-game.netlify.com/" target="_blank" rel="noopener noreferrer">
            <img className={style.thumb} src={MoviesAppImage} alt="Movies Spy" />
          </a>
        </div>
      </Fade>
      <Fade>
        <p>
          <strong>Technologies Used (Javascript Based): </strong>
        </p>
        <ul>
          <li>ReactJS / React Native / Redux</li>
          <li>Webpack / Babel</li>
          <li>HTML5 / CSS3 / SCSS</li>
          <li>NodeJS / ExpressJS / GraphQL</li>
          <li>MongoDB / MySQL</li>
          <li>Plus more.</li>
        </ul>
      </Fade>
      <p><strong>Contact us for further details and pricing.</strong></p>
    </div>
  );
};

export default Software;