import React from 'react';
import MarvelGameImage from '../images/software/marvel.png';
import MoviesAppImage from '../images/software/movies.png';
import style from './Software.scss';

const Software = () => {
  return (
    <div className={style.content}>
      <h3>Software Development</h3>
      <hr />
      <p><strong>Web Applications: </strong>From simple web applications to expose your data with charts or tables, or to provide access to your services, or even simple games and learning solutions, the implementation of a REST API and other solutions, feel free to contact us.</p>
      <p><strong>Mobile Applications: </strong>Solutions for mobile phones and mobile accessibility built on React Native.</p>
      <p><strong>Assistance - Maintenance - Support: </strong>Services on a freelance basis to provide support on projects (frontend and backend)</p>
      <div className={style.projects}>
        <a href="https://marvel-game.netlify.com/" target="_blank" rel="noopener noreferrer">
          <img className={style.thumb} src={MarvelGameImage} alt="Marvel Memory Game" />
        </a>
        <a href="https://marvel-game.netlify.com/" target="_blank" rel="noopener noreferrer">
          <img className={style.thumb} src={MoviesAppImage} alt="Movies Spy" />
        </a>
      </div>
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
      <p><strong>Contact us for further details and pricing.</strong></p>
    </div>
  );
};

export default Software;